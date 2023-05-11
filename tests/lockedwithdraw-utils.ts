import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  LockedwithdrawInitialized,
  LockedWithdrawAPTeam,
  LockedWithdrawApproved,
  LockedWithdrawEndowment,
  LockedWithdrawInitiated,
  LockedWithdrawRejected
} from "../generated/Lockedwithdraw/Lockedwithdraw"

export function createLockedwithdrawInitializedEvent(
  version: i32
): LockedwithdrawInitialized {
  let lockedwithdrawInitializedEvent = changetype<LockedwithdrawInitialized>(
    newMockEvent()
  )

  lockedwithdrawInitializedEvent.parameters = new Array()

  lockedwithdrawInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return lockedwithdrawInitializedEvent
}

export function createLockedWithdrawAPTeamEvent(
  accountId: BigInt,
  sender: Address
): LockedWithdrawAPTeam {
  let lockedWithdrawApTeamEvent = changetype<LockedWithdrawAPTeam>(
    newMockEvent()
  )

  lockedWithdrawApTeamEvent.parameters = new Array()

  lockedWithdrawApTeamEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  lockedWithdrawApTeamEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return lockedWithdrawApTeamEvent
}

export function createLockedWithdrawApprovedEvent(
  accountId: BigInt,
  _beneficiary: Address,
  _tokenAddress: Array<Address>,
  _amount: Array<BigInt>
): LockedWithdrawApproved {
  let lockedWithdrawApprovedEvent = changetype<LockedWithdrawApproved>(
    newMockEvent()
  )

  lockedWithdrawApprovedEvent.parameters = new Array()

  lockedWithdrawApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  lockedWithdrawApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "_beneficiary",
      ethereum.Value.fromAddress(_beneficiary)
    )
  )
  lockedWithdrawApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddressArray(_tokenAddress)
    )
  )
  lockedWithdrawApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigIntArray(_amount)
    )
  )

  return lockedWithdrawApprovedEvent
}

export function createLockedWithdrawEndowmentEvent(
  accountId: BigInt,
  sender: Address
): LockedWithdrawEndowment {
  let lockedWithdrawEndowmentEvent = changetype<LockedWithdrawEndowment>(
    newMockEvent()
  )

  lockedWithdrawEndowmentEvent.parameters = new Array()

  lockedWithdrawEndowmentEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  lockedWithdrawEndowmentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return lockedWithdrawEndowmentEvent
}

export function createLockedWithdrawInitiatedEvent(
  accountId: BigInt,
  initiator: Address,
  _beneficiary: Address,
  _tokenAddress: Array<Address>,
  _amount: Array<BigInt>
): LockedWithdrawInitiated {
  let lockedWithdrawInitiatedEvent = changetype<LockedWithdrawInitiated>(
    newMockEvent()
  )

  lockedWithdrawInitiatedEvent.parameters = new Array()

  lockedWithdrawInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )
  lockedWithdrawInitiatedEvent.parameters.push(
    new ethereum.EventParam("initiator", ethereum.Value.fromAddress(initiator))
  )
  lockedWithdrawInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "_beneficiary",
      ethereum.Value.fromAddress(_beneficiary)
    )
  )
  lockedWithdrawInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddressArray(_tokenAddress)
    )
  )
  lockedWithdrawInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigIntArray(_amount)
    )
  )

  return lockedWithdrawInitiatedEvent
}

export function createLockedWithdrawRejectedEvent(
  accountId: BigInt
): LockedWithdrawRejected {
  let lockedWithdrawRejectedEvent = changetype<LockedWithdrawRejected>(
    newMockEvent()
  )

  lockedWithdrawRejectedEvent.parameters = new Array()

  lockedWithdrawRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromUnsignedBigInt(accountId)
    )
  )

  return lockedWithdrawRejectedEvent
}
