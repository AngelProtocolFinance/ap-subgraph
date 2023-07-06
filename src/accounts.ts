import {
  EndowmentCreated as EndowmentCreatedEvent,
  AllowanceSpent as AllowanceSpentEvent,
  AllowanceUpdated as AllowanceUpdatedEvent,
  EndowmentDeposit as EndowmentDepositEvent,
  EndowmentWithdraw as EndowmentWithdrawEvent,
  TokenSwapped as TokenSwappedEvent
 } from "../generated/Accounts/Accounts";
import {
  Endowment,
  EndowmentTokenLocked,
  EndowmentTokenLiquid,
  EndowmentTokenAllowanceSpender,
  EndowmentDepositTransaction,
  EndowmentWithdrawTransaction,
  EndowmentSwapTransaction,
} from "../generated/schema";

export function handleEndowmentCreated(event: EndowmentCreatedEvent): void {
  let endow = new Endowment(event.params.endowId);
  endow.endowType = event.params.endowType;
  endow.save();
}

export function handleEndowmentDeposit(event: EndowmentDepositEvent): void {
  let endow = Endowment.load(event.params.endowId);
  // save deposit tx record
  let deposit = new EndowmentDepositTransaction(event.transaction.hash);
  deposit.endowment = endow;
  deposit.token = event.params.tokenAddress;
  deposit.amountLocked = event.params.amountLocked;
  deposit.amountLiquid = event.params.amountLiquid;
  deposit.blockTimestamp = event.block.timestamp;
  deposit.save();

  // update the locked and liquid Endowment Token Balances
  if (event.params.amountLocked > 0) {
    let token = EndowmentTokenLocked.load(event.params.endowId.concat(event.params.tokenAddress));
    if (!token) {
      token = new EndowmentTokenLocked(event.params.endowId.concat(event.params.tokenAddress));
      token.token = event.params.tokenAddress;
      token.amount = event.params.amountLocked;
    } else {
      token.amount += event.params.amountLocked;
    }
    token.save();
  }
  if (event.params.amountLiquid > 0) {
    let token = EndowmentTokenLiquid.load(event.params.endowId.concat(event.params.tokenAddress));
    if (!token) {
      token = new EndowmentTokenLiquid(event.params.endowId.concat(event.params.tokenAddress));
      token.token = event.params.tokenAddress;
      token.amount = event.params.amountLiquid;
      token.allowanceOutstanding = 0;
    } else {
      token.amount += event.params.amountLiquid;
    }
    token.save();
  }
}

export function handleEndowmentWithdraw(event: EndowmentWithdrawEvent): void {
  let endow = Endowment.load(event.params.endowId);
  // save withdraw tx record
  let withdraw = new EndowmentWithdrawTransaction(event.transaction.hash);
  withdraw.endowment = endow;
  withdraw.accountType = event.params.accountType;
  withdraw.token = event.params.tokenAddress;
  withdraw.amount = event.params.amount;
  withdraw.beneficiaryEndowId = event.params.beneficiaryEndowId;
  withdraw.beneficiaryAddr = event.params.beneficiaryAddr;
  withdraw.blockTimestamp = event.block.timestamp;
  withdraw.save();
  // update the Endowment Token Balance
  let token;
  if (event.params.accountType == AccountType.Locked) {
    token = EndowmentTokenLocked.load(event.params.endowId.concat(event.params.tokenAddress));
  } else {
    token = EndowmentTokenLiquid.load(event.params.endowId.concat(event.params.tokenAddress));
    token.amount -= event.params.amount;
  }
  token.save();
}

export function handleAllowanceSpent(event: AllowanceSpentEvent): void {
  let token = EndowmentTokenLiquid.load(event.params.endowId.concat(event.params.tokenAddress));
  token.allowanceOutstanding -= amount;
  token.save();
  let spender = EndowmentTokenAllowanceSpender.load(event.params.endowId.concat(event.params.tokenAddress).concat(event.params.spender));
  spender.amount -= amount;
  spender.save();
}

export function handleAllowanceUpdated(event: AllowanceUpdatedEvent): void {
  // update the spender's allownance to the new balance
  let spender = EndowmentTokenAllowanceSpender.load(event.params.endowId.concat(event.params.tokenAddress).concat(event.params.spender));
  spender.amount = amount;
  spender.save();

  // adjust the token's outstanding allowance and balance amount depending on if add/reduce spender's balance
  let token = EndowmentTokenLiquid.load(event.params.endowId.concat(event.params.tokenAddress));
  if (added > 0) {
    token.allowanceOutstanding += added;
    token.amount -= added;
    spender.amount = amount;
  } else if (deducted > 0) {
    token.allowanceOutstanding -= deducted;
    token.amount += deducted;
  }
  token.save();
}

export function handleTokenSwapped(event: TokenSwappedEvent): void {
  let endow = Endowment.load(event.params.endowId);
  // save swap tx record
  let swap = new EndowmentSwapTransaction(event.transaction.hash);
  swap.endowment = endow;
  swap.accountType = event.params.accountType;
  swap.tokenIn = event.params.tokenIn;
  swap.amountIn: = event.params.amountIn;
  swap.tokenOut = event.params.tokenOut;
  swap.amountOut: = event.params.amountOut;
  swap.blockTimestamp = event.block.timestamp;
  swap.save();
  // update the involved Endowment Token Balances
  let tokenIn, tokenOut;
  if (event.params.accountType == AccountType.Locked) {
    tokenIn = EndowmentTokenLocked.load(event.params.endowId.concat(event.params.tokenIn));
    tokenOut = EndowmentTokenLocked.load(event.params.endowId.concat(event.params.tokenOut));
    if (!tokenOut) {
      tokenOut = new EndowmentTokenLocked(event.params.endowId.concat(event.params.tokenOut));
      tokenOut.endowment = endow;
      tokenOut.token = event.params.tokenOut;
    }
  } else {
    tokenIn = EndowmentTokenLiquid.load(event.params.endowId.concat(event.params.tokenIn));
    tokenOut = EndowmentTokenLiquid.load(event.params.endowId.concat(event.params.tokenOut));
    if (!tokenOut) {
      tokenOut = new EndowmentTokenLocked(event.params.endowId.concat(event.params.tokenOut));
      tokenOut.endowment = endow;
      tokenOut.token = event.params.tokenOut;
    }
  }
  // update token in amount (decrease)
  tokenIn.amount -= event.params.amountIn;
  tokenIn.save();
  // update token out amount (increase)
  tokenOut.amount += event.params.amountOut;
  tokenOut.save();
}
