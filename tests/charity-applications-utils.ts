import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ApplicationConfirmationRevoked,
  ApplicationConfirmed,
  ApplicationExecuted,
  ApplicationProposed,
  ApprovalsRequiredChanged,
  ConfirmationRevoked,
  Deposit,
  GasSent,
  Initialized,
  OwnerAdded,
  OwnerRemoved,
  RequireExecutionChanged,
  SeedAssetSent,
  TransactionConfirmed,
  TransactionExecuted,
  TransactionExpiryChanged,
  TransactionSubmitted
} from "../generated/CharityApplications/CharityApplications"

export function createApplicationConfirmationRevokedEvent(
  proposalId: BigInt,
  owner: Address
): ApplicationConfirmationRevoked {
  let applicationConfirmationRevokedEvent = changetype<
    ApplicationConfirmationRevoked
  >(newMockEvent())

  applicationConfirmationRevokedEvent.parameters = new Array()

  applicationConfirmationRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  applicationConfirmationRevokedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return applicationConfirmationRevokedEvent
}

export function createApplicationConfirmedEvent(
  proposalId: BigInt,
  owner: Address
): ApplicationConfirmed {
  let applicationConfirmedEvent = changetype<ApplicationConfirmed>(
    newMockEvent()
  )

  applicationConfirmedEvent.parameters = new Array()

  applicationConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  applicationConfirmedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return applicationConfirmedEvent
}

export function createApplicationExecutedEvent(
  proposalId: BigInt
): ApplicationExecuted {
  let applicationExecutedEvent = changetype<ApplicationExecuted>(newMockEvent())

  applicationExecutedEvent.parameters = new Array()

  applicationExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return applicationExecutedEvent
}

export function createApplicationProposedEvent(
  proposalId: BigInt
): ApplicationProposed {
  let applicationProposedEvent = changetype<ApplicationProposed>(newMockEvent())

  applicationProposedEvent.parameters = new Array()

  applicationProposedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return applicationProposedEvent
}

export function createApprovalsRequiredChangedEvent(
  approvalsRequired: BigInt
): ApprovalsRequiredChanged {
  let approvalsRequiredChangedEvent = changetype<ApprovalsRequiredChanged>(
    newMockEvent()
  )

  approvalsRequiredChangedEvent.parameters = new Array()

  approvalsRequiredChangedEvent.parameters.push(
    new ethereum.EventParam(
      "approvalsRequired",
      ethereum.Value.fromUnsignedBigInt(approvalsRequired)
    )
  )

  return approvalsRequiredChangedEvent
}

export function createConfirmationRevokedEvent(
  sender: Address,
  transactionId: BigInt
): ConfirmationRevoked {
  let confirmationRevokedEvent = changetype<ConfirmationRevoked>(newMockEvent())

  confirmationRevokedEvent.parameters = new Array()

  confirmationRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  confirmationRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return confirmationRevokedEvent
}

export function createDepositEvent(sender: Address, amount: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createGasSentEvent(
  endowmentId: BigInt,
  member: Address,
  amount: BigInt
): GasSent {
  let gasSentEvent = changetype<GasSent>(newMockEvent())

  gasSentEvent.parameters = new Array()

  gasSentEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  gasSentEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  gasSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return gasSentEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnerAddedEvent(owner: Address): OwnerAdded {
  let ownerAddedEvent = changetype<OwnerAdded>(newMockEvent())

  ownerAddedEvent.parameters = new Array()

  ownerAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerAddedEvent
}

export function createOwnerRemovedEvent(owner: Address): OwnerRemoved {
  let ownerRemovedEvent = changetype<OwnerRemoved>(newMockEvent())

  ownerRemovedEvent.parameters = new Array()

  ownerRemovedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerRemovedEvent
}

export function createRequireExecutionChangedEvent(
  requireExecution: boolean
): RequireExecutionChanged {
  let requireExecutionChangedEvent = changetype<RequireExecutionChanged>(
    newMockEvent()
  )

  requireExecutionChangedEvent.parameters = new Array()

  requireExecutionChangedEvent.parameters.push(
    new ethereum.EventParam(
      "requireExecution",
      ethereum.Value.fromBoolean(requireExecution)
    )
  )

  return requireExecutionChangedEvent
}

export function createSeedAssetSentEvent(
  endowmentId: BigInt,
  asset: Address,
  amount: BigInt
): SeedAssetSent {
  let seedAssetSentEvent = changetype<SeedAssetSent>(newMockEvent())

  seedAssetSentEvent.parameters = new Array()

  seedAssetSentEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  seedAssetSentEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  seedAssetSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return seedAssetSentEvent
}

export function createTransactionConfirmedEvent(
  sender: Address,
  transactionId: BigInt
): TransactionConfirmed {
  let transactionConfirmedEvent = changetype<TransactionConfirmed>(
    newMockEvent()
  )

  transactionConfirmedEvent.parameters = new Array()

  transactionConfirmedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  transactionConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return transactionConfirmedEvent
}

export function createTransactionExecutedEvent(
  transactionId: BigInt
): TransactionExecuted {
  let transactionExecutedEvent = changetype<TransactionExecuted>(newMockEvent())

  transactionExecutedEvent.parameters = new Array()

  transactionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return transactionExecutedEvent
}

export function createTransactionExpiryChangedEvent(
  transactionExpiry: BigInt
): TransactionExpiryChanged {
  let transactionExpiryChangedEvent = changetype<TransactionExpiryChanged>(
    newMockEvent()
  )

  transactionExpiryChangedEvent.parameters = new Array()

  transactionExpiryChangedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionExpiry",
      ethereum.Value.fromUnsignedBigInt(transactionExpiry)
    )
  )

  return transactionExpiryChangedEvent
}

export function createTransactionSubmittedEvent(
  sender: Address,
  transactionId: BigInt
): TransactionSubmitted {
  let transactionSubmittedEvent = changetype<TransactionSubmitted>(
    newMockEvent()
  )

  transactionSubmittedEvent.parameters = new Array()

  transactionSubmittedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  transactionSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return transactionSubmittedEvent
}
