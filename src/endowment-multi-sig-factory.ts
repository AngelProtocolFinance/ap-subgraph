import {
  ContractInstantiated as ContractInstantiatedEvent,
  ImplementationUpdated as ImplementationUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProxyAdminUpdated as ProxyAdminUpdatedEvent
} from "../generated/EndowmentMultiSigFactory/EndowmentMultiSigFactory"
import {
  ContractInstantiated,
  EndowmentMultiSigFactoryOwnershipTransferred,
  ImplementationUpdated,
  ProxyAdminUpdated
} from "../generated/schema"
import { EndowmentMultiSig } from "../generated/templates"

export function handleContractInstantiated(
  event: ContractInstantiatedEvent
): void {
  let entity = new ContractInstantiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.instantiation = event.params.instantiation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  EndowmentMultiSig.create(event.params.instantiation)

  entity.save()
}

export function handleImplementationUpdated(
  event: ImplementationUpdatedEvent
): void {
  let entity = new ImplementationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementationAddress = event.params.implementationAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new EndowmentMultiSigFactoryOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProxyAdminUpdated(event: ProxyAdminUpdatedEvent): void {
  let entity = new ProxyAdminUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
