import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  addVault,
  deleteNetworkConnection,
  postNetworkConnection,
  removeVault,
  updateRegistrarConfig,
  updateRegistrarFees,
  updateRegistrarOwner,
  updateVault
} from "../generated/registrar/registrar"

export function createaddVaultEvent(
  strategyName: string,
  vault: ethereum.Tuple
): addVault {
  let addVaultEvent = changetype<addVault>(newMockEvent())

  addVaultEvent.parameters = new Array()

  addVaultEvent.parameters.push(
    new ethereum.EventParam(
      "strategyName",
      ethereum.Value.fromString(strategyName)
    )
  )
  addVaultEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromTuple(vault))
  )

  return addVaultEvent
}

export function createdeleteNetworkConnectionEvent(
  chainId: BigInt
): deleteNetworkConnection {
  let deleteNetworkConnectionEvent = changetype<deleteNetworkConnection>(
    newMockEvent()
  )

  deleteNetworkConnectionEvent.parameters = new Array()

  deleteNetworkConnectionEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )

  return deleteNetworkConnectionEvent
}

export function createpostNetworkConnectionEvent(
  chainId: BigInt,
  networkInfo: ethereum.Tuple
): postNetworkConnection {
  let postNetworkConnectionEvent = changetype<postNetworkConnection>(
    newMockEvent()
  )

  postNetworkConnectionEvent.parameters = new Array()

  postNetworkConnectionEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )
  postNetworkConnectionEvent.parameters.push(
    new ethereum.EventParam(
      "networkInfo",
      ethereum.Value.fromTuple(networkInfo)
    )
  )

  return postNetworkConnectionEvent
}

export function createremoveVaultEvent(strategyName: string): removeVault {
  let removeVaultEvent = changetype<removeVault>(newMockEvent())

  removeVaultEvent.parameters = new Array()

  removeVaultEvent.parameters.push(
    new ethereum.EventParam(
      "strategyName",
      ethereum.Value.fromString(strategyName)
    )
  )

  return removeVaultEvent
}

export function createupdateRegistrarConfigEvent(
  details: ethereum.Tuple
): updateRegistrarConfig {
  let updateRegistrarConfigEvent = changetype<updateRegistrarConfig>(
    newMockEvent()
  )

  updateRegistrarConfigEvent.parameters = new Array()

  updateRegistrarConfigEvent.parameters.push(
    new ethereum.EventParam("details", ethereum.Value.fromTuple(details))
  )

  return updateRegistrarConfigEvent
}

export function createupdateRegistrarFeesEvent(
  details: ethereum.Tuple
): updateRegistrarFees {
  let updateRegistrarFeesEvent = changetype<updateRegistrarFees>(newMockEvent())

  updateRegistrarFeesEvent.parameters = new Array()

  updateRegistrarFeesEvent.parameters.push(
    new ethereum.EventParam("details", ethereum.Value.fromTuple(details))
  )

  return updateRegistrarFeesEvent
}

export function createupdateRegistrarOwnerEvent(
  newOwner: Address
): updateRegistrarOwner {
  let updateRegistrarOwnerEvent = changetype<updateRegistrarOwner>(
    newMockEvent()
  )

  updateRegistrarOwnerEvent.parameters = new Array()

  updateRegistrarOwnerEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return updateRegistrarOwnerEvent
}

export function createupdateVaultEvent(
  strategyName: string,
  approved: boolean,
  endowmentTypes: Array<i32>
): updateVault {
  let updateVaultEvent = changetype<updateVault>(newMockEvent())

  updateVaultEvent.parameters = new Array()

  updateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "strategyName",
      ethereum.Value.fromString(strategyName)
    )
  )
  updateVaultEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )
  updateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentTypes",
      ethereum.Value.fromI32Array(endowmentTypes)
    )
  )

  return updateVaultEvent
}
