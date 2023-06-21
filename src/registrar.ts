import {
  AccountsContractStorageChanged as AccountsContractStorageChangedEvent,
  AngelProtocolParamsChanged as AngelProtocolParamsChangedEvent,
  DeleteNetworkConnection as DeleteNetworkConnectionEvent,
  FeeUpdated as FeeUpdatedEvent,
  GasFeeUpdated as GasFeeUpdatedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PostNetworkConnection as PostNetworkConnectionEvent,
  RebalanceParamsChanged as RebalanceParamsChangedEvent,
  StrategyApprovalChanged as StrategyApprovalChangedEvent,
  StrategyParamsChanged as StrategyParamsChangedEvent,
  TokenAcceptanceChanged as TokenAcceptanceChangedEvent,
  UpdateRegistrarConfig as UpdateRegistrarConfigEvent
} from "../generated/Registrar/Registrar"
import {
  AccountsContractStorageChanged,
  AngelProtocolParamsChanged,
  DeleteNetworkConnection,
  FeeUpdated,
  GasFeeUpdated,
  Initialized,
  OwnershipTransferred,
  PostNetworkConnection,
  RebalanceParamsChanged,
  StrategyApprovalChanged,
  StrategyParamsChanged,
  TokenAcceptanceChanged,
  UpdateRegistrarConfig
} from "../generated/schema"

export function handleAccountsContractStorageChanged(
  event: AccountsContractStorageChangedEvent
): void {
  let entity = new AccountsContractStorageChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._chainName = event.params._chainName
  entity._accountsContractAddress = event.params._accountsContractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAngelProtocolParamsChanged(
  event: AngelProtocolParamsChangedEvent
): void {
  let entity = new AngelProtocolParamsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeleteNetworkConnection(
  event: DeleteNetworkConnectionEvent
): void {
  let entity = new DeleteNetworkConnection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainId = event.params.chainId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeUpdated(event: FeeUpdatedEvent): void {
  let entity = new FeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._fee = event.params._fee
  entity._rate = event.params._rate
  entity._payout = event.params._payout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasFeeUpdated(event: GasFeeUpdatedEvent): void {
  let entity = new GasFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenAddr = event.params._tokenAddr
  entity._gasFee = event.params._gasFee

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

export function handlePostNetworkConnection(
  event: PostNetworkConnectionEvent
): void {
  let entity = new PostNetworkConnection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainId = event.params.chainId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalanceParamsChanged(
  event: RebalanceParamsChangedEvent
): void {
  let entity = new RebalanceParamsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyApprovalChanged(
  event: StrategyApprovalChangedEvent
): void {
  let entity = new StrategyApprovalChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._strategyId = event.params._strategyId
  entity._approvalState = event.params._approvalState

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyParamsChanged(
  event: StrategyParamsChangedEvent
): void {
  let entity = new StrategyParamsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._strategyId = event.params._strategyId
  entity._lockAddr = event.params._lockAddr
  entity._liqAddr = event.params._liqAddr
  entity._approvalState = event.params._approvalState

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenAcceptanceChanged(
  event: TokenAcceptanceChangedEvent
): void {
  let entity = new TokenAcceptanceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenAddr = event.params._tokenAddr
  entity._isAccepted = event.params._isAccepted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateRegistrarConfig(
  event: UpdateRegistrarConfigEvent
): void {
  let entity = new UpdateRegistrarConfig(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
