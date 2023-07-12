import { BigInt } from "@graphprotocol/graph-ts"
import {
  EndowmentCreated as EndowmentCreatedEvent,
  AllowanceSpent as AllowanceSpentEvent,
  AllowanceUpdated as AllowanceUpdatedEvent,
  EndowmentDeposit as EndowmentDepositEvent,
  EndowmentWithdraw as EndowmentWithdrawEvent,
  TokenSwapped as TokenSwappedEvent
 } from "../generated/Accounts/Accounts"
import {
  Endowment,
  EndowmentTokenLocked,
  EndowmentTokenLiquid,
  EndowmentTokenAllowanceSpender,
  EndowmentDepositTransaction,
  EndowmentWithdrawTransaction,
  EndowmentSwapTransaction,
} from "../generated/schema"

export function handleEndowmentCreated(event: EndowmentCreatedEvent): void {
  let endow = new Endowment(event.params.endowId.toString())
  endow.endowmentType = (event.params.endowType == 0) ? "Locked" : "Liquid"
  endow.save()
}

export function handleEndowmentDeposit(event: EndowmentDepositEvent): void {
  let endow = Endowment.load(event.params.endowId.toString())
  if (endow != null) {
    // save deposit tx record
    let deposit = new EndowmentDepositTransaction(event.transaction.hash.toHex())
    deposit.endowment = endow.id
    deposit.token = event.params.tokenAddress.toHex()
    deposit.amountLocked = event.params.amountLocked
    deposit.amountLiquid = event.params.amountLiquid
    deposit.blockTimestamp = event.block.timestamp
    deposit.save()

    // update the locked and liquid Endowment Token Balances
    if (event.params.amountLocked > BigInt.fromI32(0)) {
      let endowTokenId = event.params.endowId.toString() + event.params.tokenAddress.toHex();
      let token = EndowmentTokenLocked.load(endowTokenId)
      if (!token) {
        token = new EndowmentTokenLocked(endowTokenId);
        token.token = event.params.tokenAddress.toHex()
        token.amount = event.params.amountLocked
      } else {
        token.amount += event.params.amountLocked
      }
      token.save()
    }
    if (event.params.amountLiquid > BigInt.fromI32(0)) {
      let token = EndowmentTokenLiquid.load(endowTokenId)
      if (!token) {
        token = new EndowmentTokenLiquid(endowTokenId)
        token.token = event.params.tokenAddress.toHex()
        token.amount = event.params.amountLiquid
        token.allowanceOutstanding = BigInt.fromI32(0)
      } else {
        token.amount += event.params.amountLiquid
      }
      token.save()
    }
  }
}

export function handleEndowmentWithdraw(event: EndowmentWithdrawEvent): void {
  let endow = Endowment.load(event.params.endowId.toString())

  if (endow != null) {
    // save withdraw tx record
    let withdraw = new EndowmentWithdrawTransaction(event.transaction.hash.toHex())
    withdraw.endowment = endow.id
    withdraw.accountType = (event.params.accountType == 0) ? "Locked" : "Liquid"
    withdraw.token = event.params.tokenAddress.toHex()
    withdraw.amount = event.params.amount
    withdraw.beneficiaryEndowId = event.params.beneficiaryEndowId.toI32()
    withdraw.beneficiaryAddr = event.params.beneficiaryAddress.toHex()
    withdraw.blockTimestamp = event.block.timestamp
    withdraw.save()

    // update the Endowment Token Balance
    // check if AccountType is "Locked" first
    let endowTokenId = event.params.endowId.toString() + event.params.tokenAddress.toHex()
    if (event.params.accountType == 0) {
      let token = EndowmentTokenLocked.load(endowTokenId)
      if (token != null) token.save()
    // fall back to "Liquid" AccountType
    } else {
      let token = EndowmentTokenLiquid.load(endowTokenId)
      if (token != null) {
        token.amount -= event.params.amount
        token.save()
      }
    }
  }
}

export function handleAllowanceSpent(event: AllowanceSpentEvent): void {
  let endowTokenId = event.params.endowId.toString() + event.params.tokenAddress.toHex()
  let token = EndowmentTokenLiquid.load(endowTokenId)
  let spender = EndowmentTokenAllowanceSpender.load(endowTokenId + event.params.spender.toHex())

  if (token != null && spender != null) {
    token.allowanceOutstanding -= event.params.amount
    token.save()
    spender.amount -= event.params.amount
    spender.save()
  }
}

export function handleAllowanceUpdated(event: AllowanceUpdatedEvent): void {
  let endowTokenId = event.params.endowId.toString() + event.params.tokenAddress.toHex()
  let token = EndowmentTokenLiquid.load(endowTokenId)
  if (token != null) {
    // update the spender's allowance to the new balance
    let spenderId = endowTokenId + event.params.spender.toHex()
    let spender = EndowmentTokenAllowanceSpender.load(spenderId)
    if (spender == null) {
      // setup new EndowmentTokenAllowanceSpender
      spender = new EndowmentTokenAllowanceSpender(spenderId)
    } 
    spender.amount = event.params.newBalance
    spender.save()

    // adjust the token's outstanding allowance and balance amount depending on if add/reduce spender's balance
    if (event.params.added > BigInt.fromI32(0)) {
      token.allowanceOutstanding += event.params.added
      token.amount -= event.params.added
    } else if (event.params.deducted > BigInt.fromI32(0)) {
      token.allowanceOutstanding -= event.params.deducted
      token.amount += event.params.deducted
    }
    token.save()
  }
}

export function handleTokenSwapped(event: TokenSwappedEvent): void {
  let endow = Endowment.load(event.params.endowId.toString())

  if(endow != null && event.params.tokenIn && event.params.tokenOut) {
    let tokenInId = event.params.endowId.toString() + event.params.tokenIn.toHex();
    let tokenOutId = event.params.endowId.toString() + event.params.tokenOut.toHex();
    // save swap tx record
    let swap = new EndowmentSwapTransaction(event.transaction.hash.toHex())
    swap.endowment = endow.id
    swap.accountType = (event.params.accountType == 0) ? "Locked" : "Liquid" 
    swap.tokenIn = event.params.tokenIn.toHex()
    swap.amountIn = event.params.amountIn
    swap.tokenOut = event.params.tokenOut.toHex()
    swap.amountOut = event.params.amountOut
    swap.blockTimestamp = event.block.timestamp
    swap.save()

    // update the involved Endowment Token Balances
    // check if the accountType is "Locked" first
    if (event.params.accountType == 0) {
      let tokenIn = EndowmentTokenLocked.load(tokenInId)
      if (tokenIn) {
        let tokenOut = EndowmentTokenLocked.load(tokenOutId)
        if (tokenOut == null) {
          tokenOut = new EndowmentTokenLocked(tokenOutId)
          tokenOut.endowment = endow.id
          tokenOut.token = event.params.tokenOut.toHex()
        }
        // update token in amount (decrease)
        tokenIn.amount -= event.params.amountIn
        tokenIn.save()
        // update token out amount (increase)
        tokenOut.amount += event.params.amountOut
        tokenOut.save()
      }
    // AccountType as "Liquid" is fall back
    } else {
      let tokenIn = EndowmentTokenLiquid.load(tokenInId)
      if (tokenIn) {
        let tokenOut = EndowmentTokenLiquid.load(tokenOutId)
        if (tokenOut == null) {
          tokenOut = new EndowmentTokenLiquid(tokenOutId)
          if (tokenOut != null) {
            tokenOut.endowment = endow.id
            tokenOut.token = event.params.tokenOut.toHex()
          }
        }
        // update token in amount (decrease)
        tokenIn.amount -= event.params.amountIn
        tokenIn.save()
        // update token out amount (increase)
        tokenOut.amount += event.params.amountOut
        tokenOut.save()
      }
    }
  }
}
