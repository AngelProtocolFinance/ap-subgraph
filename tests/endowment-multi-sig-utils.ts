import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ApprovalsRequiredChanged,
  ConfirmationRevoked,
  Deposit,
  Initialized,
  OwnerAdded,
  OwnerRemoved,
  RequireExecutionChanged,
  TransactionConfirmed,
  TransactionExecuted,
  TransactionExpiryChanged,
  TransactionSubmitted
} from "../generated/EndowmentMultiSig/EndowmentMultiSig"

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
