import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CharityApproved,
  CharityProposed,
  CharityRejected,
  ConfigUpdated,
  Deposit,
  GasSent,
  Initialized,
  SeedAssetTransfer
} from "../generated/CharityApplication/CharityApplication"

export function createCharityApprovedEvent(
  proposalId: BigInt,
  endowmentId: BigInt
): CharityApproved {
  let charityApprovedEvent = changetype<CharityApproved>(newMockEvent())

  charityApprovedEvent.parameters = new Array()

  charityApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  charityApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )

  return charityApprovedEvent
}

export function createCharityProposedEvent(
  proposer: Address,
  proposalId: BigInt,
  meta: string
): CharityProposed {
  let charityProposedEvent = changetype<CharityProposed>(newMockEvent())

  charityProposedEvent.parameters = new Array()

  charityProposedEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  charityProposedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  charityProposedEvent.parameters.push(
    new ethereum.EventParam("meta", ethereum.Value.fromString(meta))
  )

  return charityProposedEvent
}

export function createCharityRejectedEvent(
  proposalId: BigInt
): CharityRejected {
  let charityRejectedEvent = changetype<CharityRejected>(newMockEvent())

  charityRejectedEvent.parameters = new Array()

  charityRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return charityRejectedEvent
}

export function createConfigUpdatedEvent(): ConfigUpdated {
  let configUpdatedEvent = changetype<ConfigUpdated>(newMockEvent())

  configUpdatedEvent.parameters = new Array()

  return configUpdatedEvent
}

export function createDepositEvent(sender: Address, amount: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createGasSentEvent(
  endowmentId: BigInt,
  member: Address,
  amount: BigInt
): GasSent {
  let gasSentEvent = changetype<GasSent>(newMockEvent())

  gasSentEvent.parameters = new Array()

  gasSentEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  gasSentEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  gasSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return gasSentEvent
}

export function createInitializedEvent(): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  return initializedEvent
}

export function createSeedAssetTransferEvent(
  endowmentId: BigInt,
  asset: Address,
  amount: BigInt
): SeedAssetTransfer {
  let seedAssetTransferEvent = changetype<SeedAssetTransfer>(newMockEvent())

  seedAssetTransferEvent.parameters = new Array()

  seedAssetTransferEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  seedAssetTransferEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  seedAssetTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return seedAssetTransferEvent
}
