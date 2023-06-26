import {
  AllowanceRemoved as AllowanceRemovedEvent,
  AllowanceUpdated as AllowanceUpdatedEvent,
  ConfigUpdated as ConfigUpdatedEvent,
  DaoContractCreated as DaoContractCreatedEvent,
  DonationDeposited as DonationDepositedEvent,
  DonationMatchCreated as DonationMatchCreatedEvent,
  DonationWithdrawn as DonationWithdrawnEvent,
  EndowmentCreated as EndowmentCreatedEvent,
  EndowmentSettingUpdated as EndowmentSettingUpdatedEvent,
  EndowmentUpdated as EndowmentUpdatedEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  TokenSwapped as TokenSwappedEvent
} from "../generated/Accounts/Accounts"
import {
  AllowanceRemoved,
  AllowanceUpdated,
  ConfigUpdated,
  DaoContractCreated,
  DonationDeposited,
  DonationMatchCreated,
  DonationWithdrawn,
  EndowmentCreated,
  EndowmentSettingUpdated,
  EndowmentUpdated,
  OwnerUpdated,
  TokenSwapped
} from "../generated/schema"

export function handleAllowanceRemoved(event: AllowanceRemovedEvent): void {
  let entity = new AllowanceRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.spender = event.params.spender
  entity.tokenAddress = event.params.tokenAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAllowanceUpdated(event: AllowanceUpdatedEvent): void {
  let entity = new AllowanceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.spender = event.params.spender
  entity.tokenAddress = event.params.tokenAddress
  entity.allowance = event.params.allowance

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

export function handleDaoContractCreated(event: DaoContractCreatedEvent): void {
  let entity = new DaoContractCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId
  entity.daoAddress = event.params.daoAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonationDeposited(event: DonationDepositedEvent): void {
  let entity = new DonationDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonationMatchCreated(
  event: DonationMatchCreatedEvent
): void {
  let entity = new DonationMatchCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId
  entity.donationMatchContract = event.params.donationMatchContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonationWithdrawn(event: DonationWithdrawnEvent): void {
  let entity = new DonationWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId
  entity.recipient = event.params.recipient
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEndowmentCreated(event: EndowmentCreatedEvent): void {
  let entity = new EndowmentCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEndowmentSettingUpdated(
  event: EndowmentSettingUpdatedEvent
): void {
  let entity = new EndowmentSettingUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId
  entity.setting = event.params.setting

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEndowmentUpdated(event: EndowmentUpdatedEvent): void {
  let entity = new EndowmentUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenSwapped(event: TokenSwappedEvent): void {
  let entity = new TokenSwapped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.endowId = event.params.endowId
  entity.accountType = event.params.accountType
  entity.tokenIn = event.params.tokenIn
  entity.amountIn = event.params.amountIn
  entity.tokenOut = event.params.tokenOut
  entity.amountOut = event.params.amountOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
