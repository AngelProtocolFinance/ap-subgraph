import {
  ActiveFundUpdated as ActiveFundUpdatedEvent,
  ConfigUpdated as ConfigUpdatedEvent,
  DonationMessagesUpdated as DonationMessagesUpdatedEvent,
  IndexFundCreated as IndexFundCreatedEvent,
  IndexFundRemoved as IndexFundRemovedEvent,
  Initialized as InitializedEvent,
  MemberRemoved as MemberRemovedEvent,
  MembersUpdated as MembersUpdatedEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  RegistrarUpdated as RegistrarUpdatedEvent,
  StateUpdated as StateUpdatedEvent
} from "../generated/IndexFund/IndexFund"
import {
  ActiveFundUpdated,
  ConfigUpdated,
  DonationMessagesUpdated,
  IndexFundCreated,
  IndexFundRemoved,
  IndexFundInitialized,
  IndexFundOwnerUpdated,
  MemberRemoved,
  MembersUpdated,
  RegistrarUpdated,
  StateUpdated
} from "../generated/schema"

export function handleActiveFundUpdated(event: ActiveFundUpdatedEvent): void {
  let entity = new ActiveFundUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId

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

export function handleDonationMessagesUpdated(
  event: DonationMessagesUpdatedEvent
): void {
  let entity = new DonationMessagesUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIndexFundCreated(event: IndexFundCreatedEvent): void {
  let entity = new IndexFundCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.IndexFund_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIndexFundRemoved(event: IndexFundRemovedEvent): void {
  let entity = new IndexFundRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.IndexFund_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new IndexFundInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberRemoved(event: MemberRemovedEvent): void {
  let entity = new MemberRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.memberId = event.params.memberId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMembersUpdated(event: MembersUpdatedEvent): void {
  let entity = new MembersUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.members = event.params.members

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new IndexFundOwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistrarUpdated(event: RegistrarUpdatedEvent): void {
  let entity = new RegistrarUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRegistrar = event.params.newRegistrar

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStateUpdated(event: StateUpdatedEvent): void {
  let entity = new StateUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
