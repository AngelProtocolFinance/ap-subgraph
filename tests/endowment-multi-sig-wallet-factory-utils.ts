import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  ContractInstantiation,
  OwnershipTransferred
} from "../generated/EndowmentMultiSigWalletFactory/EndowmentMultiSigWalletFactory"

export function createContractInstantiationEvent(
  sender: Address,
  instantiation: Address
): ContractInstantiation {
  let contractInstantiationEvent = changetype<ContractInstantiation>(
    newMockEvent()
  )

  contractInstantiationEvent.parameters = new Array()

  contractInstantiationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  contractInstantiationEvent.parameters.push(
    new ethereum.EventParam(
      "instantiation",
      ethereum.Value.fromAddress(instantiation)
    )
  )

  return contractInstantiationEvent
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
