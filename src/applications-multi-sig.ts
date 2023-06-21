import {
  Confirmation as ConfirmationEvent,
  Deposit as DepositEvent,
  Execution as ExecutionEvent,
  ExecutionFailure as ExecutionFailureEvent,
  ExecutionRequiredChange as ExecutionRequiredChangeEvent,
  Initialized as InitializedEvent,
  OwnerAddition as OwnerAdditionEvent,
  OwnerRemoval as OwnerRemovalEvent,
  RequirementChange as RequirementChangeEvent,
  Revocation as RevocationEvent,
  Submission as SubmissionEvent
} from "../generated/ApplicationsMultiSig/ApplicationsMultiSig"
import {
  Confirmation,
  Deposit,
  Execution,
  ExecutionFailure,
  ExecutionRequiredChange,
  Initialized,
  OwnerAddition,
  OwnerRemoval,
  RequirementChange,
  Revocation,
  Submission
} from "../generated/schema"

export function handleConfirmation(event: ConfirmationEvent): void {
  let entity = new Confirmation(
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
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecution(event: ExecutionEvent): void {
  let entity = new Execution(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFailure(event: ExecutionFailureEvent): void {
  let entity = new ExecutionFailure(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionRequiredChange(
  event: ExecutionRequiredChangeEvent
): void {
  let entity = new ExecutionRequiredChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requireExecution = event.params.requireExecution

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

export function handleOwnerAddition(event: OwnerAdditionEvent): void {
  let entity = new OwnerAddition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerRemoval(event: OwnerRemovalEvent): void {
  let entity = new OwnerRemoval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequirementChange(event: RequirementChangeEvent): void {
  let entity = new RequirementChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.required = event.params.required

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevocation(event: RevocationEvent): void {
  let entity = new Revocation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubmission(event: SubmissionEvent): void {
  let entity = new Submission(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionId = event.params.transactionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
