import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit,
  ErrorBytesLogged,
  ErrorLogged,
  Initialized,
  OwnershipTransferred,
  Redeem,
  Refund,
  RewardsHarvested,
  Transfer
} from "../generated/Router/Router"

export function createDepositEvent(action: ethereum.Tuple): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )

  return depositEvent
}

export function createErrorBytesLoggedEvent(
  action: ethereum.Tuple,
  data: Bytes
): ErrorBytesLogged {
  let errorBytesLoggedEvent = changetype<ErrorBytesLogged>(newMockEvent())

  errorBytesLoggedEvent.parameters = new Array()

  errorBytesLoggedEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  errorBytesLoggedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return errorBytesLoggedEvent
}

export function createErrorLoggedEvent(
  action: ethereum.Tuple,
  message: string
): ErrorLogged {
  let errorLoggedEvent = changetype<ErrorLogged>(newMockEvent())

  errorLoggedEvent.parameters = new Array()

  errorLoggedEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  errorLoggedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return errorLoggedEvent
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

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRedeemEvent(
  action: ethereum.Tuple,
  amount: BigInt
): Redeem {
  let redeemEvent = changetype<Redeem>(newMockEvent())

  redeemEvent.parameters = new Array()

  redeemEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return redeemEvent
}

export function createRefundEvent(
  action: ethereum.Tuple,
  amount: BigInt
): Refund {
  let refundEvent = changetype<Refund>(newMockEvent())

  refundEvent.parameters = new Array()

  refundEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  refundEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refundEvent
}

export function createRewardsHarvestedEvent(
  action: ethereum.Tuple
): RewardsHarvested {
  let rewardsHarvestedEvent = changetype<RewardsHarvested>(newMockEvent())

  rewardsHarvestedEvent.parameters = new Array()

  rewardsHarvestedEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )

  return rewardsHarvestedEvent
}

export function createTransferEvent(
  action: ethereum.Tuple,
  amount: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEvent
}
