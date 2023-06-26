import {
  Deposit as DepositEvent,
  ErrorBytesLogged as ErrorBytesLoggedEvent,
  ErrorLogged as ErrorLoggedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Redeem as RedeemEvent,
  Refund as RefundEvent,
  RewardsHarvested as RewardsHarvestedEvent,
  Transfer as TransferEvent
} from "../generated/Router/Router"
import {
  Deposit,
  ErrorBytesLogged,
  ErrorLogged,
  Initialized,
  OwnershipTransferred,
  Redeem,
  Refund,
  RewardsHarvested,
  Transfer
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleErrorBytesLogged(event: ErrorBytesLoggedEvent): void {
  let entity = new ErrorBytesLogged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleErrorLogged(event: ErrorLoggedEvent): void {
  let entity = new ErrorLogged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new Redeem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefund(event: RefundEvent): void {
  let entity = new Refund(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsHarvested(event: RewardsHarvestedEvent): void {
  let entity = new RewardsHarvested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.action_destinationChain = event.params.action.destinationChain
  entity.action_strategyId = event.params.action.strategyId
  entity.action_selector = event.params.action.selector
  entity.action_accountIds = event.params.action.accountIds
  entity.action_token = event.params.action.token
  entity.action_lockAmt = event.params.action.lockAmt
  entity.action_liqAmt = event.params.action.liqAmt
  entity.action_status = event.params.action.status
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
