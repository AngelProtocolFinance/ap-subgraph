import {
  AccountsContractStorageUpdated as AccountsContractStorageUpdatedEvent,
  AngelProtocolParamsUpdated as AngelProtocolParamsUpdatedEvent,
  ConfigUpdated as ConfigUpdatedEvent,
  FeeSettingsUpdated as FeeSettingsUpdatedEvent,
  GasFeeUpdated as GasFeeUpdatedEvent,
  Initialized as InitializedEvent,
  NetworkConnectionPosted as NetworkConnectionPostedEvent,
  NetworkConnectionRemoved as NetworkConnectionRemovedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RebalanceParamsUpdated as RebalanceParamsUpdatedEvent,
  StrategyApprovalUpdated as StrategyApprovalUpdatedEvent,
  StrategyParamsUpdated as StrategyParamsUpdatedEvent,
  TokenAcceptanceUpdated as TokenAcceptanceUpdatedEvent
} from "../generated/Registrar/Registrar"
import {
  AccountsContractStorageUpdated,
  AngelProtocolParamsUpdated,
  ConfigUpdated,
  FeeSettingsUpdated,
  GasFeeUpdated,
  RegistrarInitialized,
  NetworkConnectionPosted,
  NetworkConnectionRemoved,
  RegistrarOwnershipTransferred,
  RebalanceParamsUpdated,
  StrategyApprovalUpdated,
  StrategyParamsUpdated,
  TokenAcceptanceUpdated
} from "../generated/schema"

export function handleAccountsContractStorageUpdated(
  event: AccountsContractStorageUpdatedEvent
): void {
  let entity = new AccountsContractStorageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._chainName = event.params._chainName
  entity._accountsContractAddress = event.params._accountsContractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAngelProtocolParamsUpdated(
  event: AngelProtocolParamsUpdatedEvent
): void {
  let entity = new AngelProtocolParamsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

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

export function handleFeeSettingsUpdated(event: FeeSettingsUpdatedEvent): void {
  let entity = new FeeSettingsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._feeType = event.params._feeType
  entity._bpsRate = event.params._bpsRate
  entity._payoutAddress = event.params._payoutAddress

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
  let entity = new RegistrarInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNetworkConnectionPosted(
  event: NetworkConnectionPostedEvent
): void {
  let entity = new NetworkConnectionPosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainId = event.params.chainId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNetworkConnectionRemoved(
  event: NetworkConnectionRemovedEvent
): void {
  let entity = new NetworkConnectionRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.chainId = event.params.chainId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new RegistrarOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRebalanceParamsUpdated(
  event: RebalanceParamsUpdatedEvent
): void {
  let entity = new RebalanceParamsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyApprovalUpdated(
  event: StrategyApprovalUpdatedEvent
): void {
  let entity = new StrategyApprovalUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._strategyId = event.params._strategyId
  entity._approvalState = event.params._approvalState

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStrategyParamsUpdated(
  event: StrategyParamsUpdatedEvent
): void {
  let entity = new StrategyParamsUpdated(
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

export function handleTokenAcceptanceUpdated(
  event: TokenAcceptanceUpdatedEvent
): void {
  let entity = new TokenAcceptanceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenAddr = event.params._tokenAddr
  entity._isAccepted = event.params._isAccepted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
