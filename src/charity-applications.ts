import {
  ApplicationConfirmationRevoked as ApplicationConfirmationRevokedEvent,
  ApplicationConfirmed as ApplicationConfirmedEvent,
  ApplicationExecuted as ApplicationExecutedEvent,
  ApplicationProposed as ApplicationProposedEvent,
  ApprovalsRequiredChanged as ApprovalsRequiredChangedEvent,
  ConfirmationRevoked as ConfirmationRevokedEvent,
  Deposit as DepositEvent,
  GasSent as GasSentEvent,
  Initialized as InitializedEvent,
  OwnerAdded as OwnerAddedEvent,
  OwnerRemoved as OwnerRemovedEvent,
  RequireExecutionChanged as RequireExecutionChangedEvent,
  SeedAssetSent as SeedAssetSentEvent,
  TransactionConfirmed as TransactionConfirmedEvent,
  TransactionExecuted as TransactionExecutedEvent,
  TransactionExpiryChanged as TransactionExpiryChangedEvent,
  TransactionSubmitted as TransactionSubmittedEvent
} from "../generated/CharityApplications/CharityApplications"
import {
  ApplicationConfirmationRevoked,
  ApplicationConfirmed,
  ApplicationExecuted,
  ApplicationProposed,
  ApprovalsRequiredChanged,
  CharityApplicationsDeposit,
  CharityApplicationsInitialized,
  ConfirmationRevoked,
  GasSent,
  OwnerAdded,
  OwnerRemoved,
  RequireExecutionChanged,
  SeedAssetSent,
  TransactionConfirmed,
  TransactionExecuted,
  TransactionExpiryChanged,
  TransactionSubmitted
} from "../generated/schema"

export function handleApplicationConfirmationRevoked(
  event: ApplicationConfirmationRevokedEvent
): void {
  let entity = new ApplicationConfirmationRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationConfirmed(
  event: ApplicationConfirmedEvent
): void {
  let entity = new ApplicationConfirmed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationExecuted(
  event: ApplicationExecutedEvent
): void {
  let entity = new ApplicationExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplicationProposed(
  event: ApplicationProposedEvent
): void {
  let entity = new ApplicationProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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
  let entity = new CharityApplicationsDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasSent(event: GasSentEvent): void {
  let entity = new GasSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowmentId = event.params.endowmentId
  entity.member = event.params.member
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new CharityApplicationsInitialized(
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

export function handleSeedAssetSent(event: SeedAssetSentEvent): void {
  let entity = new SeedAssetSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowmentId = event.params.endowmentId
  entity.asset = event.params.asset
  entity.amount = event.params.amount

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
