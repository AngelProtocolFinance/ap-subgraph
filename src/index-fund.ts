import {
  ConfigUpdated as ConfigUpdatedEvent,
  DonationMessagesUpdated as DonationMessagesUpdatedEvent,
  IndexFundCreated as IndexFundCreatedEvent,
  IndexFundRemoved as IndexFundRemovedEvent,
  Initialized as InitializedEvent,
  MemberAdded as MemberAddedEvent,
  MemberRemoved as MemberRemovedEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  RegistrarUpdated as RegistrarUpdatedEvent,
  UpdateActiveFund as UpdateActiveFundEvent,
  UpdateIndexFundState as UpdateIndexFundStateEvent
} from "../generated/IndexFund/IndexFund"
import {
  ConfigUpdated,
  DonationMessagesUpdated,
  IndexFundCreated,
  IndexFundRemoved,
  Initialized,
  MemberAdded,
  MemberRemoved,
  OwnerUpdated,
  RegistrarUpdated,
  UpdateActiveFund,
  UpdateIndexFundState
} from "../generated/schema"

export function handleConfigUpdated(event: ConfigUpdatedEvent): void {
  let entity = new ConfigUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.config_owner = event.params.config.owner
  entity.config_registrarContract = event.params.config.registrarContract
  entity.config_fundRotation = event.params.config.fundRotation
  entity.config_fundMemberLimit = event.params.config.fundMemberLimit
  entity.config_fundingGoal = event.params.config.fundingGoal

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
  entity.messages_member_ids = event.params.messages.member_ids
  entity.messages_locked_donation_amount =
    event.params.messages.locked_donation_amount
  entity.messages_liquid_donation_amount =
    event.params.messages.liquid_donation_amount
  entity.messages_lockedSplit = event.params.messages.lockedSplit
  entity.messages_liquidSplit = event.params.messages.liquidSplit

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
  entity.fund_id = event.params.fund.id
  entity.fund_name = event.params.fund.name
  entity.fund_description = event.params.fund.description
  entity.fund_members = event.params.fund.members
  entity.fund_splitToLiquid = event.params.fund.splitToLiquid
  entity.fund_expiryTime = event.params.fund.expiryTime

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
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberAdded(event: MemberAddedEvent): void {
  let entity = new MemberAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.memberId = event.params.memberId

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

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
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

export function handleUpdateActiveFund(event: UpdateActiveFundEvent): void {
  let entity = new UpdateActiveFund(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateIndexFundState(
  event: UpdateIndexFundStateEvent
): void {
  let entity = new UpdateIndexFundState(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.state_totalFunds = event.params.state.totalFunds
  entity.state_activeFund = event.params.state.activeFund
  entity.state_roundDonations = event.params.state.roundDonations
  entity.state_nextRotationBlock = event.params.state.nextRotationBlock
  entity.state_nextFundId = event.params.state.nextFundId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
