import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  AllowanceSpent as AllowanceSpentEvent,
  AllowanceUpdated as AllowanceUpdatedEvent,
  EndowmentClosed as EndowmentClosedEvent,
  EndowmentCreated as EndowmentCreatedEvent,
  EndowmentDeposit as EndowmentDepositEvent,
  EndowmentWithdraw as EndowmentWithdrawEvent,
  TokenSwapped as TokenSwappedEvent
} from "../generated/Accounts/Accounts"
import {
  Endowment,
  EndowmentDepositTransaction,
  EndowmentSwapTransaction,
  EndowmentTokenAllowanceSpender,
  EndowmentTokenLiquid,
  EndowmentTokenLocked,
  EndowmentWithdrawTransaction,
} from "../generated/schema"
import { 
  EndowmentType,
  VaultType,
  loadUser
} from "./helpers"

export function handleEndowmentCreated(event: EndowmentCreatedEvent): void {
  let endow = new Endowment(event.params.endowId.toString())
  endow.endowmentType = (event.params.endowType == EndowmentType.Charity) ? "Charity" : "Normal"
  endow.save()
}

export function handleEndowmentClosed(event: EndowmentClosedEvent): void {
  const endowId = event.params.endowId.toString()
  let endow = Endowment.load(endowId)
  if (endow == null) {
    log.error("Endowment with ID: '{}' does not exist", [endowId])
    return
  }

  // set beneficiary on the endowment record
  const beneEndowId = event.params.beneficiary.data.endowId
  if (beneEndowId.gt(BigInt.zero())) {
    let beneEndow = Endowment.load(beneEndowId.toString())
    if (beneEndow == null) {
      log.error("Endowment with ID: '{}' does not exist", [beneEndowId.toString()])
    }
    endow.beneficiaryEndowment = beneEndowId.toString()
  } else {
    const beneWallet = loadUser(event.params.beneficiary.data.addr)
    endow.beneficiaryWallet = beneWallet.id
  }
  endow.save()

  // re-link all endowments that had this closing one as the beneficiary
  for (let i = 0; i < event.params.relinked.length; i++) {
    const relinkedEndowId = event.params.relinked[i].toString()
    let oldEndow = Endowment.load(relinkedEndowId)
    if (oldEndow == null) {
      log.error("Relinked Endowment with ID: '{}' does not exist", [relinkedEndowId])
      continue
    }

    // update it w/ new beneficiary id
    if (beneEndowId.gt(BigInt.zero())) {
      oldEndow.beneficiaryEndowment = endow.beneficiaryEndowment
      oldEndow.beneficiaryWallet = null
    } else {
      oldEndow.beneficiaryWallet = endow.beneficiaryWallet
      oldEndow.beneficiaryEndowment = null
    }
    oldEndow.save()
  }
}

export function handleEndowmentDeposit(event: EndowmentDepositEvent): void {
  let endow = Endowment.load(event.params.endowId.toString())
  if (endow != null) {
    // save deposit tx record
    let deposit = new EndowmentDepositTransaction(event.transaction.hash)
    deposit.endowment = endow.id
    deposit.token = event.params.tokenAddress
    deposit.amountLocked = event.params.amountLocked
    deposit.amountLiquid = event.params.amountLiquid
    deposit.blockTimestamp = event.block.timestamp
    deposit.save()

    // update the locked and liquid Endowment Token Balances
    let endowTokenId = endow.id + event.params.tokenAddress.toHex()
    if (event.params.amountLocked > BigInt.fromI32(0)) {
      let token = EndowmentTokenLocked.load(endowTokenId)
      if (!token) {
        token = new EndowmentTokenLocked(endowTokenId)
        token.endowment = endow.id
        token.token = event.params.tokenAddress
        token.amount = event.params.amountLocked
      } else {
        token.amount = token.amount.plus(event.params.amountLocked)
      }
      token.save()
    }
    if (event.params.amountLiquid > BigInt.fromI32(0)) {
      let token = EndowmentTokenLiquid.load(endowTokenId)
      if (!token) {
        token = new EndowmentTokenLiquid(endowTokenId)
        token.endowment = endow.id
        token.token = event.params.tokenAddress
        token.amount = event.params.amountLiquid
        token.allowanceOutstanding = BigInt.fromI32(0)
      } else {
        token.amount = token.amount.plus(event.params.amountLiquid)
      }
      token.save()
    }
  }
}

export function handleEndowmentWithdraw(event: EndowmentWithdrawEvent): void {
  let endow = Endowment.load(event.params.endowId.toString())

  if (endow != null) {
    // save withdraw tx record
    let withdraw = new EndowmentWithdrawTransaction(event.transaction.hash)
    withdraw.endowment = endow.id
    withdraw.accountType = (event.params.accountType == VaultType.Locked) ? "Locked" : "Liquid"
    withdraw.token = event.params.tokenAddress
    withdraw.amount = event.params.amount
    withdraw.beneficiaryEndowId = event.params.beneficiaryEndowId.toI32()
    withdraw.beneficiaryAddr = event.params.beneficiaryAddress
    withdraw.blockTimestamp = event.block.timestamp
    withdraw.save()

    // update the Endowment Token Balance
    let endowTokenId = endow.id + event.params.tokenAddress.toHex()
    if (event.params.accountType == VaultType.Locked) {
      let tokenLocked = EndowmentTokenLocked.load(endowTokenId)
      if (tokenLocked != null) {
        tokenLocked.amount = tokenLocked.amount.minus(event.params.amount)
        tokenLocked.save()
      }
    } else {
      let tokenLiquid = EndowmentTokenLiquid.load(endowTokenId)
      if (tokenLiquid != null) {
        tokenLiquid.amount = tokenLiquid.amount.minus(event.params.amount)
        tokenLiquid.save()
      }
    }
  }
}

export function handleAllowanceSpent(event: AllowanceSpentEvent): void {
  let token = EndowmentTokenLiquid.load(event.params.endowId.toString() + event.params.tokenAddress.toHex())
  if (token == null) {
    return;
  }

  let spender = EndowmentTokenAllowanceSpender.load(token.id + event.params.spender.toHex())
  if (spender != null) {
    token.allowanceOutstanding = token.allowanceOutstanding.minus(event.params.amount)
    token.save()
    spender.amount = spender.amount.minus(event.params.amount)
    spender.save()
  }
}

export function handleAllowanceUpdated(event: AllowanceUpdatedEvent): void {
  let token = EndowmentTokenLiquid.load(event.params.endowId.toString() + event.params.tokenAddress.toHex())
  if (token != null) {
    const user = loadUser(event.params.spender)
    // update the spender's allowance to the new balance
    let spenderId = token.id + user.id.toHex()
    let spender = EndowmentTokenAllowanceSpender.load(spenderId)
    if (spender == null) {
      // setup new EndowmentTokenAllowanceSpender
      spender = new EndowmentTokenAllowanceSpender(spenderId)
      spender.token = token.id
      spender.spender = user.id
    } 
    spender.amount = event.params.newBalance
    spender.save()
    
    // adjust the token's outstanding allowance and balance amount depending on if add/reduce spender's balance
    if (event.params.added > BigInt.fromI32(0)) {
      token.allowanceOutstanding = token.allowanceOutstanding.plus(event.params.added)
      token.amount = token.amount.minus(event.params.added)
    } else if (event.params.deducted > BigInt.fromI32(0)) {
      token.allowanceOutstanding = token.allowanceOutstanding.minus(event.params.deducted)
      token.amount = token.amount.plus(event.params.deducted)
    }
    token.save()
  }
}

export function handleTokenSwapped(event: TokenSwappedEvent): void {
  let endow = Endowment.load(event.params.endowId.toString())

  if(endow != null && event.params.tokenIn && event.params.tokenOut) {
    let tokenInId = endow.id + event.params.tokenIn.toHex()
    let tokenOutId = endow.id + event.params.tokenOut.toHex()
    // save swap tx record
    let swap = new EndowmentSwapTransaction(event.transaction.hash)
    swap.endowment = endow.id
    swap.accountType = (event.params.accountType == VaultType.Locked) ? "Locked" : "Liquid" 
    swap.tokenIn = event.params.tokenIn
    swap.amountIn = event.params.amountIn
    swap.tokenOut = event.params.tokenOut
    swap.amountOut = event.params.amountOut
    swap.blockTimestamp = event.block.timestamp
    swap.save()

    // update the involved Endowment Token Balances
    // check if the accountType is "Locked" first
    if (event.params.accountType == VaultType.Locked) {
      let tokenIn = EndowmentTokenLocked.load(tokenInId)
      if (tokenIn) {
        let tokenOut = EndowmentTokenLocked.load(tokenOutId)
        if (tokenOut == null) {
          tokenOut = new EndowmentTokenLocked(tokenOutId)
          tokenOut.endowment = endow.id
          tokenOut.token = event.params.tokenOut
        }
        // update token in amount (decrease)
        tokenIn.amount = tokenIn.amount.minus(event.params.amountIn)
        tokenIn.save()
        // update token out amount (increase)
        tokenOut.amount = tokenOut.amount.plus(event.params.amountOut)
        tokenOut.save()
      }
    // AccountType as "Liquid" is fall back
    } else {
      let tokenIn = EndowmentTokenLiquid.load(tokenInId)
      if (tokenIn) {
        let tokenOut = EndowmentTokenLiquid.load(tokenOutId)
        if (tokenOut == null) {
          tokenOut = new EndowmentTokenLiquid(tokenOutId)
          tokenOut.endowment = endow.id
          tokenOut.token = event.params.tokenOut
          tokenOut.allowanceOutstanding = BigInt.fromI32(0)
        }
        // update token in amount (decrease)
        tokenIn.amount = tokenIn.amount.minus(event.params.amountIn)
        tokenIn.save()
        // update token out amount (increase)
        tokenOut.amount = tokenOut.amount.plus(event.params.amountOut)
        tokenOut.save()
      }
    }
  }
}
