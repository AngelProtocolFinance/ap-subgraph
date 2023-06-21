import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/Registrar/Registrar"

export function createAccountsContractStorageChangedEvent(
  _chainName: string,
  _accountsContractAddress: string
): AccountsContractStorageChanged {
  let accountsContractStorageChangedEvent = changetype<
    AccountsContractStorageChanged
  >(newMockEvent())

  accountsContractStorageChangedEvent.parameters = new Array()

  accountsContractStorageChangedEvent.parameters.push(
    new ethereum.EventParam("_chainName", ethereum.Value.fromString(_chainName))
  )
  accountsContractStorageChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_accountsContractAddress",
      ethereum.Value.fromString(_accountsContractAddress)
    )
  )

  return accountsContractStorageChangedEvent
}

export function createAngelProtocolParamsChangedEvent(): AngelProtocolParamsChanged {
  let angelProtocolParamsChangedEvent = changetype<AngelProtocolParamsChanged>(
    newMockEvent()
  )

  angelProtocolParamsChangedEvent.parameters = new Array()

  return angelProtocolParamsChangedEvent
}

export function createDeleteNetworkConnectionEvent(
  chainId: BigInt
): DeleteNetworkConnection {
  let deleteNetworkConnectionEvent = changetype<DeleteNetworkConnection>(
    newMockEvent()
  )

  deleteNetworkConnectionEvent.parameters = new Array()

  deleteNetworkConnectionEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )

  return deleteNetworkConnectionEvent
}

export function createFeeUpdatedEvent(
  _fee: i32,
  _rate: BigInt,
  _payout: Address
): FeeUpdated {
  let feeUpdatedEvent = changetype<FeeUpdated>(newMockEvent())

  feeUpdatedEvent.parameters = new Array()

  feeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_fee))
    )
  )
  feeUpdatedEvent.parameters.push(
    new ethereum.EventParam("_rate", ethereum.Value.fromUnsignedBigInt(_rate))
  )
  feeUpdatedEvent.parameters.push(
    new ethereum.EventParam("_payout", ethereum.Value.fromAddress(_payout))
  )

  return feeUpdatedEvent
}

export function createGasFeeUpdatedEvent(
  _tokenAddr: Address,
  _gasFee: BigInt
): GasFeeUpdated {
  let gasFeeUpdatedEvent = changetype<GasFeeUpdated>(newMockEvent())

  gasFeeUpdatedEvent.parameters = new Array()

  gasFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddr",
      ethereum.Value.fromAddress(_tokenAddr)
    )
  )
  gasFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_gasFee",
      ethereum.Value.fromUnsignedBigInt(_gasFee)
    )
  )

  return gasFeeUpdatedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPostNetworkConnectionEvent(
  chainId: BigInt
): PostNetworkConnection {
  let postNetworkConnectionEvent = changetype<PostNetworkConnection>(
    newMockEvent()
  )

  postNetworkConnectionEvent.parameters = new Array()

  postNetworkConnectionEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )

  return postNetworkConnectionEvent
}

export function createRebalanceParamsChangedEvent(): RebalanceParamsChanged {
  let rebalanceParamsChangedEvent = changetype<RebalanceParamsChanged>(
    newMockEvent()
  )

  rebalanceParamsChangedEvent.parameters = new Array()

  return rebalanceParamsChangedEvent
}

export function createStrategyApprovalChangedEvent(
  _strategyId: Bytes,
  _approvalState: i32
): StrategyApprovalChanged {
  let strategyApprovalChangedEvent = changetype<StrategyApprovalChanged>(
    newMockEvent()
  )

  strategyApprovalChangedEvent.parameters = new Array()

  strategyApprovalChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_strategyId",
      ethereum.Value.fromFixedBytes(_strategyId)
    )
  )
  strategyApprovalChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_approvalState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_approvalState))
    )
  )

  return strategyApprovalChangedEvent
}

export function createStrategyParamsChangedEvent(
  _strategyId: Bytes,
  _lockAddr: Address,
  _liqAddr: Address,
  _approvalState: i32
): StrategyParamsChanged {
  let strategyParamsChangedEvent = changetype<StrategyParamsChanged>(
    newMockEvent()
  )

  strategyParamsChangedEvent.parameters = new Array()

  strategyParamsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_strategyId",
      ethereum.Value.fromFixedBytes(_strategyId)
    )
  )
  strategyParamsChangedEvent.parameters.push(
    new ethereum.EventParam("_lockAddr", ethereum.Value.fromAddress(_lockAddr))
  )
  strategyParamsChangedEvent.parameters.push(
    new ethereum.EventParam("_liqAddr", ethereum.Value.fromAddress(_liqAddr))
  )
  strategyParamsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_approvalState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_approvalState))
    )
  )

  return strategyParamsChangedEvent
}

export function createTokenAcceptanceChangedEvent(
  _tokenAddr: Address,
  _isAccepted: boolean
): TokenAcceptanceChanged {
  let tokenAcceptanceChangedEvent = changetype<TokenAcceptanceChanged>(
    newMockEvent()
  )

  tokenAcceptanceChangedEvent.parameters = new Array()

  tokenAcceptanceChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddr",
      ethereum.Value.fromAddress(_tokenAddr)
    )
  )
  tokenAcceptanceChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_isAccepted",
      ethereum.Value.fromBoolean(_isAccepted)
    )
  )

  return tokenAcceptanceChangedEvent
}

export function createUpdateRegistrarConfigEvent(): UpdateRegistrarConfig {
  let updateRegistrarConfigEvent = changetype<UpdateRegistrarConfig>(
    newMockEvent()
  )

  updateRegistrarConfigEvent.parameters = new Array()

  return updateRegistrarConfigEvent
}
