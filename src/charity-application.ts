import {
  CharityApproved as CharityApprovedEvent,
  CharityProposed as CharityProposedEvent,
  CharityRejected as CharityRejectedEvent,
  Deposit as DepositEvent,
  GasSent as GasSentEvent,
  InitilizedCharityApplication as InitilizedCharityApplicationEvent,
  SeedAssetSent as SeedAssetSentEvent
} from "../generated/CharityApplication/CharityApplication"
import {
  CharityApproved,
  CharityProposed,
  CharityRejected,
  Deposit,
  GasSent,
  InitilizedCharityApplication,
  SeedAssetSent
} from "../generated/schema"

export function handleCharityApproved(event: CharityApprovedEvent): void {
  let entity = new CharityApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.endowmentId = event.params.endowmentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharityProposed(event: CharityProposedEvent): void {
  let entity = new CharityProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposer = event.params.proposer
  entity.proposalId = event.params.proposalId
  entity.meta = event.params.meta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharityRejected(event: CharityRejectedEvent): void {
  let entity = new CharityRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasSent(event: GasSentEvent): void {
  let entity = new GasSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowmentId = event.params.endowmentId
  entity.member = event.params.member
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitilizedCharityApplication(
  event: InitilizedCharityApplicationEvent
): void {
  let entity = new InitilizedCharityApplication(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeedAssetSent(event: SeedAssetSentEvent): void {
  let entity = new SeedAssetSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowmentId = event.params.endowmentId
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
