import {
  ContractInstantiation as ContractInstantiationEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/EndowmentMultiSigWalletFactory/EndowmentMultiSigWalletFactory"
import {
  ContractInstantiation,
  OwnershipTransferred
} from "../generated/schema"
import {EndowmentMultiSig} from "../generated/templates"

export function handleContractInstantiation(
  event: ContractInstantiationEvent
): void {
  let entity = new ContractInstantiation(
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

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
