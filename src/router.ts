import {
  Deposit as DepositEvent,
  FallbackRefund as FallbackRefundEvent,
  Harvest as HarvestEvent,
  Initialized as InitializedEvent,
  LogError as LogErrorEvent,
  LogErrorBytes as LogErrorBytesEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Redemption as RedemptionEvent,
  TokensSent as TokensSentEvent
} from "../generated/Router/Router"
import {
  Deposit,
  FallbackRefund,
  Harvest,
  Initialized,
  LogError,
  LogErrorBytes,
  OwnershipTransferred,
  Redemption,
  TokensSent
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

export function handleFallbackRefund(event: FallbackRefundEvent): void {
  let entity = new FallbackRefund(
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

export function handleHarvest(event: HarvestEvent): void {
  let entity = new Harvest(
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

export function handleLogError(event: LogErrorEvent): void {
  let entity = new LogError(
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

export function handleLogErrorBytes(event: LogErrorBytesEvent): void {
  let entity = new LogErrorBytes(
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

export function handleRedemption(event: RedemptionEvent): void {
  let entity = new Redemption(
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

export function handleTokensSent(event: TokensSentEvent): void {
  let entity = new TokensSent(
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
