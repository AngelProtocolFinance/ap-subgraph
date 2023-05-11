import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  IndexfundInitialized,
  allianceMemberAdded,
  allianceMemberRemoved,
  configUpdated,
  donationMessagesUpdated,
  indexFundCreated,
  indexFundRemoved,
  memberAdded,
  memberRemoved,
  ownerUpdated,
  registrarUpdated,
  updateActiveFund,
  updateIndexFundState
} from "../generated/Indexfund/Indexfund"

export function createIndexfundInitializedEvent(
  version: i32
): IndexfundInitialized {
  let indexfundInitializedEvent = changetype<IndexfundInitialized>(
    newMockEvent()
  )

  indexfundInitializedEvent.parameters = new Array()

  indexfundInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return indexfundInitializedEvent
}

export function createallianceMemberAddedEvent(
  member: Address
): allianceMemberAdded {
  let allianceMemberAddedEvent = changetype<allianceMemberAdded>(newMockEvent())

  allianceMemberAddedEvent.parameters = new Array()

  allianceMemberAddedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )

  return allianceMemberAddedEvent
}

export function createallianceMemberRemovedEvent(
  member: Address
): allianceMemberRemoved {
  let allianceMemberRemovedEvent = changetype<allianceMemberRemoved>(
    newMockEvent()
  )

  allianceMemberRemovedEvent.parameters = new Array()

  allianceMemberRemovedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )

  return allianceMemberRemovedEvent
}

export function createconfigUpdatedEvent(
  config: ethereum.Tuple
): configUpdated {
  let configUpdatedEvent = changetype<configUpdated>(newMockEvent())

  configUpdatedEvent.parameters = new Array()

  configUpdatedEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return configUpdatedEvent
}

export function createdonationMessagesUpdatedEvent(
  messages: ethereum.Tuple
): donationMessagesUpdated {
  let donationMessagesUpdatedEvent = changetype<donationMessagesUpdated>(
    newMockEvent()
  )

  donationMessagesUpdatedEvent.parameters = new Array()

  donationMessagesUpdatedEvent.parameters.push(
    new ethereum.EventParam("messages", ethereum.Value.fromTuple(messages))
  )

  return donationMessagesUpdatedEvent
}

export function createindexFundCreatedEvent(
  id: BigInt,
  fund: ethereum.Tuple
): indexFundCreated {
  let indexFundCreatedEvent = changetype<indexFundCreated>(newMockEvent())

  indexFundCreatedEvent.parameters = new Array()

  indexFundCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  indexFundCreatedEvent.parameters.push(
    new ethereum.EventParam("fund", ethereum.Value.fromTuple(fund))
  )

  return indexFundCreatedEvent
}

export function createindexFundRemovedEvent(id: BigInt): indexFundRemoved {
  let indexFundRemovedEvent = changetype<indexFundRemoved>(newMockEvent())

  indexFundRemovedEvent.parameters = new Array()

  indexFundRemovedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return indexFundRemovedEvent
}

export function creatememberAddedEvent(
  fund_id: BigInt,
  member_id: BigInt
): memberAdded {
  let memberAddedEvent = changetype<memberAdded>(newMockEvent())

  memberAddedEvent.parameters = new Array()

  memberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "fund_id",
      ethereum.Value.fromUnsignedBigInt(fund_id)
    )
  )
  memberAddedEvent.parameters.push(
    new ethereum.EventParam(
      "member_id",
      ethereum.Value.fromUnsignedBigInt(member_id)
    )
  )

  return memberAddedEvent
}

export function creatememberRemovedEvent(
  fund_id: BigInt,
  member_id: BigInt
): memberRemoved {
  let memberRemovedEvent = changetype<memberRemoved>(newMockEvent())

  memberRemovedEvent.parameters = new Array()

  memberRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "fund_id",
      ethereum.Value.fromUnsignedBigInt(fund_id)
    )
  )
  memberRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "member_id",
      ethereum.Value.fromUnsignedBigInt(member_id)
    )
  )

  return memberRemovedEvent
}

export function createownerUpdatedEvent(newOwner: Address): ownerUpdated {
  let ownerUpdatedEvent = changetype<ownerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}

export function createregistrarUpdatedEvent(
  newRegistrar: Address
): registrarUpdated {
  let registrarUpdatedEvent = changetype<registrarUpdated>(newMockEvent())

  registrarUpdatedEvent.parameters = new Array()

  registrarUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRegistrar",
      ethereum.Value.fromAddress(newRegistrar)
    )
  )

  return registrarUpdatedEvent
}

export function createupdateActiveFundEvent(fund_id: BigInt): updateActiveFund {
  let updateActiveFundEvent = changetype<updateActiveFund>(newMockEvent())

  updateActiveFundEvent.parameters = new Array()

  updateActiveFundEvent.parameters.push(
    new ethereum.EventParam(
      "fund_id",
      ethereum.Value.fromUnsignedBigInt(fund_id)
    )
  )

  return updateActiveFundEvent
}

export function createupdateIndexFundStateEvent(
  state: ethereum.Tuple
): updateIndexFundState {
  let updateIndexFundStateEvent = changetype<updateIndexFundState>(
    newMockEvent()
  )

  updateIndexFundStateEvent.parameters = new Array()

  updateIndexFundStateEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateIndexFundStateEvent
}
