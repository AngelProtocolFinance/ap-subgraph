import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  donationMatchExecuted,
  donationMatchInitialized,
  erc20ApprovalGiven,
  erc20Burned,
  erc20Transfer
} from "../generated/donationMatch/donationMatch"

export function createdonationMatchExecutedEvent(
  donationMatch: Address,
  tokenAddress: Address,
  amount: BigInt,
  accounts_contract: Address,
  endowment_id: BigInt,
  donor: Address
): donationMatchExecuted {
  let donationMatchExecutedEvent = changetype<donationMatchExecuted>(
    newMockEvent()
  )

  donationMatchExecutedEvent.parameters = new Array()

  donationMatchExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "donationMatch",
      ethereum.Value.fromAddress(donationMatch)
    )
  )
  donationMatchExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationMatchExecutedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  donationMatchExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "accounts_contract",
      ethereum.Value.fromAddress(accounts_contract)
    )
  )
  donationMatchExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  donationMatchExecutedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )

  return donationMatchExecutedEvent
}

export function createdonationMatchInitializedEvent(
  endowment_id: BigInt,
  donationMatch: Address,
  config: ethereum.Tuple
): donationMatchInitialized {
  let donationMatchInitializedEvent = changetype<donationMatchInitialized>(
    newMockEvent()
  )

  donationMatchInitializedEvent.parameters = new Array()

  donationMatchInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  donationMatchInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "donationMatch",
      ethereum.Value.fromAddress(donationMatch)
    )
  )
  donationMatchInitializedEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return donationMatchInitializedEvent
}

export function createerc20ApprovalGivenEvent(
  endowment_id: BigInt,
  tokenAddress: Address,
  spender: Address,
  amount: BigInt
): erc20ApprovalGiven {
  let erc20ApprovalGivenEvent = changetype<erc20ApprovalGiven>(newMockEvent())

  erc20ApprovalGivenEvent.parameters = new Array()

  erc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  erc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  erc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  erc20ApprovalGivenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return erc20ApprovalGivenEvent
}

export function createerc20BurnedEvent(
  endowment_id: BigInt,
  tokenAddress: Address,
  amount: BigInt
): erc20Burned {
  let erc20BurnedEvent = changetype<erc20Burned>(newMockEvent())

  erc20BurnedEvent.parameters = new Array()

  erc20BurnedEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  erc20BurnedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  erc20BurnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return erc20BurnedEvent
}

export function createerc20TransferEvent(
  endowment_id: BigInt,
  tokenAddress: Address,
  recipient: Address,
  amount: BigInt
): erc20Transfer {
  let erc20TransferEvent = changetype<erc20Transfer>(newMockEvent())

  erc20TransferEvent.parameters = new Array()

  erc20TransferEvent.parameters.push(
    new ethereum.EventParam(
      "endowment_id",
      ethereum.Value.fromUnsignedBigInt(endowment_id)
    )
  )
  erc20TransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  erc20TransferEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  erc20TransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return erc20TransferEvent
}
