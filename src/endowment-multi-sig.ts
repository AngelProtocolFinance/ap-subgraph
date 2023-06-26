import {
  ApprovalsRequiredChanged as ApprovalsRequiredChangedEvent,
  ConfirmationRevoked as ConfirmationRevokedEvent,
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  OwnerAdded as OwnerAddedEvent,
  OwnerRemoved as OwnerRemovedEvent,
  RequireExecutionChanged as RequireExecutionChangedEvent,
  TransactionConfirmed as TransactionConfirmedEvent,
  TransactionExecuted as TransactionExecutedEvent,
  TransactionExpiryChanged as TransactionExpiryChangedEvent,
  TransactionSubmitted as TransactionSubmittedEvent
} from "../generated/EndowmentMultiSig/EndowmentMultiSig"
import {
  ApprovalsRequiredChanged,
  ConfirmationRevoked,
  EndowmentMultiSigDeposit,
  Initialized,
  OwnerAdded,
  OwnerRemoved,
  RequireExecutionChanged,
  TransactionConfirmed,
  TransactionExecuted,
  TransactionExpiryChanged,
  TransactionSubmitted
} from "../generated/schema"

export function handleApprovalsRequiredChanged(
  event: ApprovalsRequiredChangedEvent
): void {
  let entity = new ApprovalsRequiredChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.approvalsRequired = event.params.approvalsRequired

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConfirmationRevoked(
  event: ConfirmationRevokedEvent
): void {
  let entity = new ConfirmationRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new EndowmentMultiSigDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

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

export function handleOwnerAdded(event: OwnerAddedEvent): void {
  let entity = new OwnerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerRemoved(event: OwnerRemovedEvent): void {
  let entity = new OwnerRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequireExecutionChanged(
  event: RequireExecutionChangedEvent
): void {
  let entity = new RequireExecutionChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requireExecution = event.params.requireExecution

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionConfirmed(
  event: TransactionConfirmedEvent
): void {
  let entity = new TransactionConfirmed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionExecuted(
  event: TransactionExecutedEvent
): void {
  let entity = new TransactionExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionExpiryChanged(
  event: TransactionExpiryChangedEvent
): void {
  let entity = new TransactionExpiryChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionExpiry = event.params.transactionExpiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionSubmitted(
  event: TransactionSubmittedEvent
): void {
  let entity = new TransactionSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
