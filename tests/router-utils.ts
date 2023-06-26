import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  Deposit,
  FallbackRefund,
  Harvest,
  Initialized,
  LogError,
  LogErrorBytes,
  OwnershipTransferred,
  Redemption,
  TokensSent
} from "../generated/Router/Router"

export function createDepositEvent(action: ethereum.Tuple): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )

  return depositEvent
}

export function createFallbackRefundEvent(
  action: ethereum.Tuple,
  amount: BigInt
): FallbackRefund {
  let fallbackRefundEvent = changetype<FallbackRefund>(newMockEvent())

  fallbackRefundEvent.parameters = new Array()

  fallbackRefundEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  fallbackRefundEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fallbackRefundEvent
}

export function createHarvestEvent(action: ethereum.Tuple): Harvest {
  let harvestEvent = changetype<Harvest>(newMockEvent())

  harvestEvent.parameters = new Array()

  harvestEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )

  return harvestEvent
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

export function createLogErrorEvent(
  action: ethereum.Tuple,
  message: string
): LogError {
  let logErrorEvent = changetype<LogError>(newMockEvent())

  logErrorEvent.parameters = new Array()

  logErrorEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  logErrorEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )

  return logErrorEvent
}

export function createLogErrorBytesEvent(
  action: ethereum.Tuple,
  data: Bytes
): LogErrorBytes {
  let logErrorBytesEvent = changetype<LogErrorBytes>(newMockEvent())

  logErrorBytesEvent.parameters = new Array()

  logErrorBytesEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  logErrorBytesEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return logErrorBytesEvent
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

export function createRedemptionEvent(
  action: ethereum.Tuple,
  amount: BigInt
): Redemption {
  let redemptionEvent = changetype<Redemption>(newMockEvent())

  redemptionEvent.parameters = new Array()

  redemptionEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  redemptionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return redemptionEvent
}

export function createTokensSentEvent(
  action: ethereum.Tuple,
  amount: BigInt
): TokensSent {
  let tokensSentEvent = changetype<TokensSent>(newMockEvent())

  tokensSentEvent.parameters = new Array()

  tokensSentEvent.parameters.push(
    new ethereum.EventParam("action", ethereum.Value.fromTuple(action))
  )
  tokensSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensSentEvent
}
