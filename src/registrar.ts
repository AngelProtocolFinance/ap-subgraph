import { Value } from "@graphprotocol/graph-ts"
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
  entity._chainName = Value.fromBytes(event.params._chainName).toString()
  entity._accountsContractAddress = Value.fromBytes(event.params._accountsContractAddress).toString()

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
  entity._newAngelProtocolParams_routerAddr =
    event.params._newAngelProtocolParams.routerAddr
  entity._newAngelProtocolParams_refundAddr =
    event.params._newAngelProtocolParams.refundAddr

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
  entity.networkInfo_name = event.params.networkInfo.name
  entity.networkInfo_chainId = event.params.networkInfo.chainId
  entity.networkInfo_router = event.params.networkInfo.router
  entity.networkInfo_axelarGateway = event.params.networkInfo.axelarGateway
  entity.networkInfo_ibcChannel = event.params.networkInfo.ibcChannel
  entity.networkInfo_transferChannel = event.params.networkInfo.transferChannel
  entity.networkInfo_gasReceiver = event.params.networkInfo.gasReceiver
  entity.networkInfo_gasLimit = event.params.networkInfo.gasLimit

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
  entity._newRebalanceParams_rebalanceLiquidProfits =
    event.params._newRebalanceParams.rebalanceLiquidProfits
  entity._newRebalanceParams_lockedRebalanceToLiquid =
    event.params._newRebalanceParams.lockedRebalanceToLiquid
  entity._newRebalanceParams_interestDistribution =
    event.params._newRebalanceParams.interestDistribution
  entity._newRebalanceParams_lockedPrincipleToLiquid =
    event.params._newRebalanceParams.lockedPrincipleToLiquid
  entity._newRebalanceParams_principleDistribution =
    event.params._newRebalanceParams.principleDistribution
  entity._newRebalanceParams_basis = event.params._newRebalanceParams.basis

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
  entity.details_applicationsReview = event.params.details.applicationsReview
  entity.details_indexFundContract = event.params.details.indexFundContract
  entity.details_accountsContract = event.params.details.accountsContract
  entity.details_treasury = event.params.details.treasury
  entity.details_subdaoGovContract = event.params.details.subdaoGovContract
  entity.details_subdaoTokenContract = event.params.details.subdaoTokenContract
  entity.details_subdaoBondingTokenContract =
    event.params.details.subdaoBondingTokenContract
  entity.details_subdaoCw900Contract = event.params.details.subdaoCw900Contract
  entity.details_subdaoDistributorContract =
    event.params.details.subdaoDistributorContract
  entity.details_subdaoEmitter = event.params.details.subdaoEmitter
  entity.details_donationMatchContract =
    event.params.details.donationMatchContract
  entity.details_donationMatchCharitesContract =
    event.params.details.donationMatchCharitesContract
  entity.details_donationMatchEmitter =
    event.params.details.donationMatchEmitter
  entity.details_splitToLiquid_max = event.params.details.splitToLiquid.max
  entity.details_splitToLiquid_min = event.params.details.splitToLiquid.min
  entity.details_splitToLiquid_defaultSplit =
    event.params.details.splitToLiquid.defaultSplit
  entity.details_haloToken = event.params.details.haloToken
  entity.details_haloTokenLpContract = event.params.details.haloTokenLpContract
  entity.details_govContract = event.params.details.govContract
  entity.details_collectorShare = event.params.details.collectorShare
  entity.details_charitySharesContract =
    event.params.details.charitySharesContract
  entity.details_fundraisingContract = event.params.details.fundraisingContract
  entity.details_uniswapSwapRouter = event.params.details.uniswapSwapRouter
  entity.details_multisigFactory = event.params.details.multisigFactory
  entity.details_multisigEmitter = event.params.details.multisigEmitter
  entity.details_charityProposal = event.params.details.charityProposal
  entity.details_lockedWithdrawal = event.params.details.lockedWithdrawal
  entity.details_proxyAdmin = event.params.details.proxyAdmin
  entity.details_usdcAddress = event.params.details.usdcAddress
  entity.details_wMaticAddress = event.params.details.wMaticAddress
  entity.details_cw900lvAddress = event.params.details.cw900lvAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
