import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CharityApproved,
  CharityProposed,
  CharityRejected,
  Deposit,
  GasSent,
  InitilizedCharityApplication,
  SeedAssetSent
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

export function createDepositEvent(sender: Address, value: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
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

export function createInitilizedCharityApplicationEvent(): InitilizedCharityApplication {
  let initilizedCharityApplicationEvent = changetype<
    InitilizedCharityApplication
  >(newMockEvent())

  initilizedCharityApplicationEvent.parameters = new Array()

  return initilizedCharityApplicationEvent
}

export function createSeedAssetSentEvent(
  endowmentId: BigInt,
  asset: Address,
  amount: BigInt
): SeedAssetSent {
  let seedAssetSentEvent = changetype<SeedAssetSent>(newMockEvent())

  seedAssetSentEvent.parameters = new Array()

  seedAssetSentEvent.parameters.push(
    new ethereum.EventParam(
      "endowmentId",
      ethereum.Value.fromUnsignedBigInt(endowmentId)
    )
  )
  seedAssetSentEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  seedAssetSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return seedAssetSentEvent
}
