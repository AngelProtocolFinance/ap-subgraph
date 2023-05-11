import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  subdaoInitialized,
  subdaoTransfer,
  subdaoTransferFrom,
  subdaoUpdateConfig,
  subdaoUpdatePoll,
  subdaoUpdatePollStatus,
  subdaoUpdateState,
  subdapUpdateVotingStatus
} from "../generated/subDAO/subDAO"

export function createsubdaoInitializedEvent(
  subdao: Address,
  instantiate_msg: ethereum.Tuple
): subdaoInitialized {
  let subdaoInitializedEvent = changetype<subdaoInitialized>(newMockEvent())

  subdaoInitializedEvent.parameters = new Array()

  subdaoInitializedEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "instantiate_msg",
      ethereum.Value.fromTuple(instantiate_msg)
    )
  )

  return subdaoInitializedEvent
}

export function createsubdaoTransferEvent(
  subdao: Address,
  tokenAddress: Address,
  recipient: Address,
  amount: BigInt
): subdaoTransfer {
  let subdaoTransferEvent = changetype<subdaoTransfer>(newMockEvent())

  subdaoTransferEvent.parameters = new Array()

  subdaoTransferEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  subdaoTransferEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  subdaoTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return subdaoTransferEvent
}

export function createsubdaoTransferFromEvent(
  subdao: Address,
  tokenAddress: Address,
  from: Address,
  to: Address,
  amount: BigInt
): subdaoTransferFrom {
  let subdaoTransferFromEvent = changetype<subdaoTransferFrom>(newMockEvent())

  subdaoTransferFromEvent.parameters = new Array()

  subdaoTransferFromEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoTransferFromEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  subdaoTransferFromEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  subdaoTransferFromEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  subdaoTransferFromEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return subdaoTransferFromEvent
}

export function createsubdaoUpdateConfigEvent(
  subdao: Address,
  config: ethereum.Tuple
): subdaoUpdateConfig {
  let subdaoUpdateConfigEvent = changetype<subdaoUpdateConfig>(newMockEvent())

  subdaoUpdateConfigEvent.parameters = new Array()

  subdaoUpdateConfigEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoUpdateConfigEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return subdaoUpdateConfigEvent
}

export function createsubdaoUpdatePollEvent(
  subdao: Address,
  id: BigInt,
  poll: ethereum.Tuple
): subdaoUpdatePoll {
  let subdaoUpdatePollEvent = changetype<subdaoUpdatePoll>(newMockEvent())

  subdaoUpdatePollEvent.parameters = new Array()

  subdaoUpdatePollEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoUpdatePollEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  subdaoUpdatePollEvent.parameters.push(
    new ethereum.EventParam("poll", ethereum.Value.fromTuple(poll))
  )

  return subdaoUpdatePollEvent
}

export function createsubdaoUpdatePollStatusEvent(
  subdao: Address,
  id: BigInt,
  pollStatus: i32
): subdaoUpdatePollStatus {
  let subdaoUpdatePollStatusEvent = changetype<subdaoUpdatePollStatus>(
    newMockEvent()
  )

  subdaoUpdatePollStatusEvent.parameters = new Array()

  subdaoUpdatePollStatusEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoUpdatePollStatusEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  subdaoUpdatePollStatusEvent.parameters.push(
    new ethereum.EventParam(
      "pollStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pollStatus))
    )
  )

  return subdaoUpdatePollStatusEvent
}

export function createsubdaoUpdateStateEvent(
  subdao: Address,
  state: ethereum.Tuple
): subdaoUpdateState {
  let subdaoUpdateStateEvent = changetype<subdaoUpdateState>(newMockEvent())

  subdaoUpdateStateEvent.parameters = new Array()

  subdaoUpdateStateEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdaoUpdateStateEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return subdaoUpdateStateEvent
}

export function createsubdapUpdateVotingStatusEvent(
  subdao: Address,
  poll_id: BigInt,
  voter: Address,
  voterInfo: ethereum.Tuple
): subdapUpdateVotingStatus {
  let subdapUpdateVotingStatusEvent = changetype<subdapUpdateVotingStatus>(
    newMockEvent()
  )

  subdapUpdateVotingStatusEvent.parameters = new Array()

  subdapUpdateVotingStatusEvent.parameters.push(
    new ethereum.EventParam("subdao", ethereum.Value.fromAddress(subdao))
  )
  subdapUpdateVotingStatusEvent.parameters.push(
    new ethereum.EventParam(
      "poll_id",
      ethereum.Value.fromUnsignedBigInt(poll_id)
    )
  )
  subdapUpdateVotingStatusEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  subdapUpdateVotingStatusEvent.parameters.push(
    new ethereum.EventParam("voterInfo", ethereum.Value.fromTuple(voterInfo))
  )

  return subdapUpdateVotingStatusEvent
}
