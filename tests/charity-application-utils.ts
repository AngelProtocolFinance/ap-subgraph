import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CharityApproved,
  CharityProposed,
  CharityRejected,
  charityApplicationDeposit,
  GasSent,
  SeedAssetSent,
  initilizedCharityApplication
} from "../generated/charityApplication/charityApplication"

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
  charityApplication: ethereum.Tuple,
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
    new ethereum.EventParam(
      "charityApplication",
      ethereum.Value.fromTuple(charityApplication)
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

export function createcharityApplicationDepositEvent(
  sender: Address,
  value: BigInt
): charityApplicationDeposit {
  let charityApplicationDepositEvent = changetype<charityApplicationDeposit>(
    newMockEvent()
  )

  charityApplicationDepositEvent.parameters = new Array()

  charityApplicationDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  charityApplicationDepositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return charityApplicationDepositEvent
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

export function createinitilizedCharityApplicationEvent(
  updatedConfig: ethereum.Tuple
): initilizedCharityApplication {
  let initilizedCharityApplicationEvent = changetype<
    initilizedCharityApplication
  >(newMockEvent())

  initilizedCharityApplicationEvent.parameters = new Array()

  initilizedCharityApplicationEvent.parameters.push(
    new ethereum.EventParam(
      "updatedConfig",
      ethereum.Value.fromTuple(updatedConfig)
    )
  )

  return initilizedCharityApplicationEvent
}
