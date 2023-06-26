import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  ContractInstantiated,
  ImplementationUpdated,
  OwnershipTransferred,
  ProxyAdminUpdated
} from "../generated/EndowmentMultiSigFactory/EndowmentMultiSigFactory"

export function createContractInstantiatedEvent(
  sender: Address,
  instantiation: Address
): ContractInstantiated {
  let contractInstantiatedEvent = changetype<ContractInstantiated>(
    newMockEvent()
  )

  contractInstantiatedEvent.parameters = new Array()

  contractInstantiatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  contractInstantiatedEvent.parameters.push(
    new ethereum.EventParam(
      "instantiation",
      ethereum.Value.fromAddress(instantiation)
    )
  )

  return contractInstantiatedEvent
}

export function createImplementationUpdatedEvent(
  implementationAddress: Address
): ImplementationUpdated {
  let implementationUpdatedEvent = changetype<ImplementationUpdated>(
    newMockEvent()
  )

  implementationUpdatedEvent.parameters = new Array()

  implementationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "implementationAddress",
      ethereum.Value.fromAddress(implementationAddress)
    )
  )

  return implementationUpdatedEvent
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

export function createProxyAdminUpdatedEvent(
  admin: Address
): ProxyAdminUpdated {
  let proxyAdminUpdatedEvent = changetype<ProxyAdminUpdated>(newMockEvent())

  proxyAdminUpdatedEvent.parameters = new Array()

  proxyAdminUpdatedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return proxyAdminUpdatedEvent
}
