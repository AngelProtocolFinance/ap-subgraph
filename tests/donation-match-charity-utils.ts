import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  donationMatchCharityInitialized,
  donationMatchCharityErc20ApprovalGiven,
  donationMatchCharityErc20Burned,
  donationMatchCharityErc20Transfer,
  donationMatchCharityExecuted,
  donationMatchCharityInitialized1
} from "../generated/donationMatchCharity/donationMatchCharity"

export function createdonationMatchCharityInitializedEvent(
  version: i32
): donationMatchCharityInitialized {
  let donationMatchCharityInitializedEvent = changetype<
    donationMatchCharityInitialized
  >(newMockEvent())

  donationMatchCharityInitializedEvent.parameters = new Array()

  donationMatchCharityInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return donationMatchCharityInitializedEvent
}

export function createdonationMatchCharityErc20ApprovalGivenEvent(
  endowment_id: BigInt,
  tokenAddress: Address,
  spender: Address,
  amount: BigInt
): donationMatchCharityErc20ApprovalGiven {
  let donationMatchCharityErc20ApprovalGivenEvent = changetype<
    donationMatchCharityErc20ApprovalGiven
  >(newMockEvent())

  donationMatchCharityErc20ApprovalGivenEvent.parameters = new Array()

  donationMatchCharityErc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  donationMatchCharityErc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationMatchCharityErc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  donationMatchCharityErc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationMatchCharityErc20ApprovalGivenEvent
}

export function createdonationMatchCharityErc20BurnedEvent(
  endowment_id: BigInt,
  tokenAddress: Address,
  amount: BigInt
): donationMatchCharityErc20Burned {
  let donationMatchCharityErc20BurnedEvent = changetype<
    donationMatchCharityErc20Burned
  >(newMockEvent())

  donationMatchCharityErc20BurnedEvent.parameters = new Array()

  donationMatchCharityErc20BurnedEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  donationMatchCharityErc20BurnedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationMatchCharityErc20BurnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationMatchCharityErc20BurnedEvent
}

export function createdonationMatchCharityErc20TransferEvent(
  endowment_id: BigInt,
  tokenAddress: Address,
  recipient: Address,
  amount: BigInt
): donationMatchCharityErc20Transfer {
  let donationMatchCharityErc20TransferEvent = changetype<
    donationMatchCharityErc20Transfer
  >(newMockEvent())

  donationMatchCharityErc20TransferEvent.parameters = new Array()

  donationMatchCharityErc20TransferEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  donationMatchCharityErc20TransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationMatchCharityErc20TransferEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationMatchCharityErc20TransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationMatchCharityErc20TransferEvent
}

export function createdonationMatchCharityExecutedEvent(
  donationMatch: Address,
  tokenAddress: Address,
  amount: BigInt,
  accounts_contract: Address,
  endowment_id: BigInt,
  donor: Address
): donationMatchCharityExecuted {
  let donationMatchCharityExecutedEvent = changetype<
    donationMatchCharityExecuted
  >(newMockEvent())

  donationMatchCharityExecutedEvent.parameters = new Array()

  donationMatchCharityExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "donationMatch",
      ethereum.Value.fromAddress(donationMatch)
    )
  )
  donationMatchCharityExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationMatchCharityExecutedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  donationMatchCharityExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "accounts_contract",
      ethereum.Value.fromAddress(accounts_contract)
    )
  )
  donationMatchCharityExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  donationMatchCharityExecutedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )

  return donationMatchCharityExecutedEvent
}

export function createdonationMatchCharityInitialized1Event(
  donationMatch: Address,
  config: ethereum.Tuple
): donationMatchCharityInitialized1 {
  let donationMatchCharityInitialized1Event = changetype<
    donationMatchCharityInitialized1
  >(newMockEvent())

  donationMatchCharityInitialized1Event.parameters = new Array()

  donationMatchCharityInitialized1Event.parameters.push(
    new ethereum.EventParam(
      "donationMatch",
      ethereum.Value.fromAddress(donationMatch)
    )
  )
  donationMatchCharityInitialized1Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return donationMatchCharityInitialized1Event
}
