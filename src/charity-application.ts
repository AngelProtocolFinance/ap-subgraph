import {
  CharityApproved as CharityApprovedEvent,
  CharityProposed as CharityProposedEvent,
  CharityRejected as CharityRejectedEvent,
  ConfigUpdated as ConfigUpdatedEvent,
  Deposit as DepositEvent,
  GasSent as GasSentEvent,
  Initialized as InitializedEvent,
  SeedAssetTransfer as SeedAssetTransferEvent
} from "../generated/CharityApplication/CharityApplication"
import {
  CharityApplicationDeposit,
  CharityApproved,
  CharityProposed,
  CharityRejected,
  ConfigUpdated,
  GasSent,
  Initialized,
  SeedAssetTransfer
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

export function handleConfigUpdated(event: ConfigUpdatedEvent): void {
  let entity = new ConfigUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new CharityApplicationDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

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

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeedAssetTransfer(event: SeedAssetTransferEvent): void {
  let entity = new SeedAssetTransfer(
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
