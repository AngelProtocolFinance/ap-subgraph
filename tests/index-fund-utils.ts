import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ConfigUpdated,
  DonationMessagesUpdated,
  IndexFundCreated,
  IndexFundRemoved,
  Initialized,
  MemberAdded,
  MemberRemoved,
  OwnerUpdated,
  RegistrarUpdated,
  UpdateActiveFund,
  UpdateIndexFundState
} from "../generated/IndexFund/IndexFund"

export function createConfigUpdatedEvent(): ConfigUpdated {
  let configUpdatedEvent = changetype<ConfigUpdated>(newMockEvent())

  configUpdatedEvent.parameters = new Array()

  return configUpdatedEvent
}

export function createDonationMessagesUpdatedEvent(): DonationMessagesUpdated {
  let donationMessagesUpdatedEvent = changetype<DonationMessagesUpdated>(
    newMockEvent()
  )

  donationMessagesUpdatedEvent.parameters = new Array()

  return donationMessagesUpdatedEvent
}

export function createIndexFundCreatedEvent(id: BigInt): IndexFundCreated {
  let indexFundCreatedEvent = changetype<IndexFundCreated>(newMockEvent())

  indexFundCreatedEvent.parameters = new Array()

  indexFundCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return indexFundCreatedEvent
}

export function createIndexFundRemovedEvent(id: BigInt): IndexFundRemoved {
  let indexFundRemovedEvent = changetype<IndexFundRemoved>(newMockEvent())

  indexFundRemovedEvent.parameters = new Array()

  indexFundRemovedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return indexFundRemovedEvent
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

export function createMemberAddedEvent(
  fundId: BigInt,
  memberId: BigInt
): MemberAdded {
  let memberAddedEvent = changetype<MemberAdded>(newMockEvent())

  memberAddedEvent.parameters = new Array()

  memberAddedEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )
  memberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "memberId",
      ethereum.Value.fromUnsignedBigInt(memberId)
    )
  )

  return memberAddedEvent
}

export function createMemberRemovedEvent(
  fundId: BigInt,
  memberId: BigInt
): MemberRemoved {
  let memberRemovedEvent = changetype<MemberRemoved>(newMockEvent())

  memberRemovedEvent.parameters = new Array()

  memberRemovedEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )
  memberRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "memberId",
      ethereum.Value.fromUnsignedBigInt(memberId)
    )
  )

  return memberRemovedEvent
}

export function createOwnerUpdatedEvent(newOwner: Address): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}

export function createRegistrarUpdatedEvent(
  newRegistrar: Address
): RegistrarUpdated {
  let registrarUpdatedEvent = changetype<RegistrarUpdated>(newMockEvent())

  registrarUpdatedEvent.parameters = new Array()

  registrarUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRegistrar",
      ethereum.Value.fromAddress(newRegistrar)
    )
  )

  return registrarUpdatedEvent
}

export function createUpdateActiveFundEvent(fundId: BigInt): UpdateActiveFund {
  let updateActiveFundEvent = changetype<UpdateActiveFund>(newMockEvent())

  updateActiveFundEvent.parameters = new Array()

  updateActiveFundEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )

  return updateActiveFundEvent
}

export function createUpdateIndexFundStateEvent(): UpdateIndexFundState {
  let updateIndexFundStateEvent = changetype<UpdateIndexFundState>(
    newMockEvent()
  )

  updateIndexFundStateEvent.parameters = new Array()

  return updateIndexFundStateEvent
}
