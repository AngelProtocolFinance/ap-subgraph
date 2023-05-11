import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EndowmentsMultisigEndowmentConfirmation,
  EndowmentsMultisigEndowmentDeposit,
  EndowmentsMultisigEndowmentExecution,
  EndowmentsMultisigEndowmentExecutionFailure,
  EndowmentsMultisigEndowmentOwnerAddition,
  EndowmentsMultisigEndowmentOwnerRemoval,
  EndowmentsMultisigEndowmentRequirementChange,
  EndowmentsMultisigEndowmentRevocation,
  EndowmentsMultisigEndowmentSubmission,
  EndowmentsMultisigMultisigCreated
} from "../generated/EndowmentsMultisig/EndowmentsMultisig"

export function createEndowmentsMultisigEndowmentConfirmationEvent(
  endowmentId: BigInt,
  sender: Address,
  transactionId: BigInt
): EndowmentsMultisigEndowmentConfirmation {
  let endowmentsMultisigEndowmentConfirmationEvent = changetype<
    EndowmentsMultisigEndowmentConfirmation
  >(newMockEvent())

  endowmentsMultisigEndowmentConfirmationEvent.parameters = new Array()

  endowmentsMultisigEndowmentConfirmationEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentConfirmationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  endowmentsMultisigEndowmentConfirmationEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return endowmentsMultisigEndowmentConfirmationEvent
}

export function createEndowmentsMultisigEndowmentDepositEvent(
  endowmentId: BigInt,
  sender: Address,
  value: BigInt
): EndowmentsMultisigEndowmentDeposit {
  let endowmentsMultisigEndowmentDepositEvent = changetype<
    EndowmentsMultisigEndowmentDeposit
  >(newMockEvent())

  endowmentsMultisigEndowmentDepositEvent.parameters = new Array()

  endowmentsMultisigEndowmentDepositEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  endowmentsMultisigEndowmentDepositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return endowmentsMultisigEndowmentDepositEvent
}

export function createEndowmentsMultisigEndowmentExecutionEvent(
  endowmentId: BigInt,
  transactionId: BigInt
): EndowmentsMultisigEndowmentExecution {
  let endowmentsMultisigEndowmentExecutionEvent = changetype<
    EndowmentsMultisigEndowmentExecution
  >(newMockEvent())

  endowmentsMultisigEndowmentExecutionEvent.parameters = new Array()

  endowmentsMultisigEndowmentExecutionEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentExecutionEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return endowmentsMultisigEndowmentExecutionEvent
}

export function createEndowmentsMultisigEndowmentExecutionFailureEvent(
  endowmentId: BigInt,
  transactionId: BigInt
): EndowmentsMultisigEndowmentExecutionFailure {
  let endowmentsMultisigEndowmentExecutionFailureEvent = changetype<
    EndowmentsMultisigEndowmentExecutionFailure
  >(newMockEvent())

  endowmentsMultisigEndowmentExecutionFailureEvent.parameters = new Array()

  endowmentsMultisigEndowmentExecutionFailureEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentExecutionFailureEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return endowmentsMultisigEndowmentExecutionFailureEvent
}

export function createEndowmentsMultisigEndowmentOwnerAdditionEvent(
  endowmentId: BigInt,
  owner: Address
): EndowmentsMultisigEndowmentOwnerAddition {
  let endowmentsMultisigEndowmentOwnerAdditionEvent = changetype<
    EndowmentsMultisigEndowmentOwnerAddition
  >(newMockEvent())

  endowmentsMultisigEndowmentOwnerAdditionEvent.parameters = new Array()

  endowmentsMultisigEndowmentOwnerAdditionEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentOwnerAdditionEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return endowmentsMultisigEndowmentOwnerAdditionEvent
}

export function createEndowmentsMultisigEndowmentOwnerRemovalEvent(
  endowmentId: BigInt,
  owner: Address
): EndowmentsMultisigEndowmentOwnerRemoval {
  let endowmentsMultisigEndowmentOwnerRemovalEvent = changetype<
    EndowmentsMultisigEndowmentOwnerRemoval
  >(newMockEvent())

  endowmentsMultisigEndowmentOwnerRemovalEvent.parameters = new Array()

  endowmentsMultisigEndowmentOwnerRemovalEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentOwnerRemovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return endowmentsMultisigEndowmentOwnerRemovalEvent
}

export function createEndowmentsMultisigEndowmentRequirementChangeEvent(
  endowmentId: BigInt,
  required: BigInt
): EndowmentsMultisigEndowmentRequirementChange {
  let endowmentsMultisigEndowmentRequirementChangeEvent = changetype<
    EndowmentsMultisigEndowmentRequirementChange
  >(newMockEvent())

  endowmentsMultisigEndowmentRequirementChangeEvent.parameters = new Array()

  endowmentsMultisigEndowmentRequirementChangeEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentRequirementChangeEvent.parameters.push(
    new ethereum.EventParam(
      "required",
      ethereum.Value.fromUnsignedBigInt(required)
    )
  )

  return endowmentsMultisigEndowmentRequirementChangeEvent
}

export function createEndowmentsMultisigEndowmentRevocationEvent(
  endowmentId: BigInt,
  sender: Address,
  transactionId: BigInt
): EndowmentsMultisigEndowmentRevocation {
  let endowmentsMultisigEndowmentRevocationEvent = changetype<
    EndowmentsMultisigEndowmentRevocation
  >(newMockEvent())

  endowmentsMultisigEndowmentRevocationEvent.parameters = new Array()

  endowmentsMultisigEndowmentRevocationEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentRevocationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  endowmentsMultisigEndowmentRevocationEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )

  return endowmentsMultisigEndowmentRevocationEvent
}

export function createEndowmentsMultisigEndowmentSubmissionEvent(
  endowmentId: BigInt,
  transactionId: BigInt,
  transaction: ethereum.Tuple
): EndowmentsMultisigEndowmentSubmission {
  let endowmentsMultisigEndowmentSubmissionEvent = changetype<
    EndowmentsMultisigEndowmentSubmission
  >(newMockEvent())

  endowmentsMultisigEndowmentSubmissionEvent.parameters = new Array()

  endowmentsMultisigEndowmentSubmissionEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigEndowmentSubmissionEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )
  endowmentsMultisigEndowmentSubmissionEvent.parameters.push(
    new ethereum.EventParam(
      "transaction",
      ethereum.Value.fromTuple(transaction)
    )
  )

  return endowmentsMultisigEndowmentSubmissionEvent
}

export function createEndowmentsMultisigMultisigCreatedEvent(
  multisigAddress: Address,
  endowmentId: BigInt,
  _emitter: Address,
  _owners: Array<Address>,
  _required: BigInt,
  _requireExecution: boolean
): EndowmentsMultisigMultisigCreated {
  let endowmentsMultisigMultisigCreatedEvent = changetype<
    EndowmentsMultisigMultisigCreated
  >(newMockEvent())

  endowmentsMultisigMultisigCreatedEvent.parameters = new Array()

  endowmentsMultisigMultisigCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "multisigAddress",
      ethereum.Value.fromAddress(multisigAddress)
    )
  )
  endowmentsMultisigMultisigCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  endowmentsMultisigMultisigCreatedEvent.parameters.push(
    new ethereum.EventParam("_emitter", ethereum.Value.fromAddress(_emitter))
  )
  endowmentsMultisigMultisigCreatedEvent.parameters.push(
    new ethereum.EventParam("_owners", ethereum.Value.fromAddressArray(_owners))
  )
  endowmentsMultisigMultisigCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_required",
      ethereum.Value.fromUnsignedBigInt(_required)
    )
  )
  endowmentsMultisigMultisigCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_requireExecution",
      ethereum.Value.fromBoolean(_requireExecution)
    )
  )

  return endowmentsMultisigMultisigCreatedEvent
}
