import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  APTeamMultisigConfirmation,
  APTeamMultisigDeposit,
  APTeamMultisigExecution,
  APTeamMultisigExecutionFailure,
  APTeamMultisigInitialized,
  APTeamMultisigOwnerAddition,
  APTeamMultisigOwnerRemoval,
  APTeamMultisigRequirementChange,
  APTeamMultisigRevocation,
  APTeamMultisigSubmission
} from "../generated/APTeamMultisig/APTeamMultisig"

export function createAPTeamMultisigConfirmationEvent(
  sender: Address,
  transactionId: BigInt
): APTeamMultisigConfirmation {
  let apTeamMultisigConfirmationEvent = changetype<APTeamMultisigConfirmation>(
    newMockEvent()
  )

  apTeamMultisigConfirmationEvent.parameters = new Array()

  apTeamMultisigConfirmationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  apTeamMultisigConfirmationEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return apTeamMultisigConfirmationEvent
}

export function createAPTeamMultisigDepositEvent(
  sender: Address,
  value: BigInt
): APTeamMultisigDeposit {
  let apTeamMultisigDepositEvent = changetype<APTeamMultisigDeposit>(
    newMockEvent()
  )

  apTeamMultisigDepositEvent.parameters = new Array()

  apTeamMultisigDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  apTeamMultisigDepositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return apTeamMultisigDepositEvent
}

export function createAPTeamMultisigExecutionEvent(
  transactionId: BigInt
): APTeamMultisigExecution {
  let apTeamMultisigExecutionEvent = changetype<APTeamMultisigExecution>(
    newMockEvent()
  )

  apTeamMultisigExecutionEvent.parameters = new Array()

  apTeamMultisigExecutionEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return apTeamMultisigExecutionEvent
}

export function createAPTeamMultisigExecutionFailureEvent(
  transactionId: BigInt
): APTeamMultisigExecutionFailure {
  let apTeamMultisigExecutionFailureEvent = changetype<
    APTeamMultisigExecutionFailure
  >(newMockEvent())

  apTeamMultisigExecutionFailureEvent.parameters = new Array()

  apTeamMultisigExecutionFailureEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return apTeamMultisigExecutionFailureEvent
}

export function createAPTeamMultisigInitializedEvent(
  version: i32
): APTeamMultisigInitialized {
  let apTeamMultisigInitializedEvent = changetype<APTeamMultisigInitialized>(
    newMockEvent()
  )

  apTeamMultisigInitializedEvent.parameters = new Array()

  apTeamMultisigInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return apTeamMultisigInitializedEvent
}

export function createAPTeamMultisigOwnerAdditionEvent(
  owner: Address
): APTeamMultisigOwnerAddition {
  let apTeamMultisigOwnerAdditionEvent = changetype<
    APTeamMultisigOwnerAddition
  >(newMockEvent())

  apTeamMultisigOwnerAdditionEvent.parameters = new Array()

  apTeamMultisigOwnerAdditionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return apTeamMultisigOwnerAdditionEvent
}

export function createAPTeamMultisigOwnerRemovalEvent(
  owner: Address
): APTeamMultisigOwnerRemoval {
  let apTeamMultisigOwnerRemovalEvent = changetype<APTeamMultisigOwnerRemoval>(
    newMockEvent()
  )

  apTeamMultisigOwnerRemovalEvent.parameters = new Array()

  apTeamMultisigOwnerRemovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return apTeamMultisigOwnerRemovalEvent
}

export function createAPTeamMultisigRequirementChangeEvent(
  required: BigInt
): APTeamMultisigRequirementChange {
  let apTeamMultisigRequirementChangeEvent = changetype<
    APTeamMultisigRequirementChange
  >(newMockEvent())

  apTeamMultisigRequirementChangeEvent.parameters = new Array()

  apTeamMultisigRequirementChangeEvent.parameters.push(
    new ethereum.EventParam(
      "required",
      ethereum.Value.fromUnsignedBigInt(required)
    )
  )

  return apTeamMultisigRequirementChangeEvent
}

export function createAPTeamMultisigRevocationEvent(
  sender: Address,
  transactionId: BigInt
): APTeamMultisigRevocation {
  let apTeamMultisigRevocationEvent = changetype<APTeamMultisigRevocation>(
    newMockEvent()
  )

  apTeamMultisigRevocationEvent.parameters = new Array()

  apTeamMultisigRevocationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  apTeamMultisigRevocationEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return apTeamMultisigRevocationEvent
}

export function createAPTeamMultisigSubmissionEvent(
  transactionId: BigInt,
  transaction: ethereum.Tuple
): APTeamMultisigSubmission {
  let apTeamMultisigSubmissionEvent = changetype<APTeamMultisigSubmission>(
    newMockEvent()
  )

  apTeamMultisigSubmissionEvent.parameters = new Array()

  apTeamMultisigSubmissionEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )
  apTeamMultisigSubmissionEvent.parameters.push(
    new ethereum.EventParam(
      "transaction",
      ethereum.Value.fromTuple(transaction)
    )
  )

  return apTeamMultisigSubmissionEvent
}
