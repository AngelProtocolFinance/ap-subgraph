import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AccountsContractStorageUpdated,
  AngelProtocolParamsUpdated,
  ConfigUpdated,
  FeeSettingsUpdated,
  GasFeeUpdated,
  Initialized,
  NetworkConnectionPosted,
  NetworkConnectionRemoved,
  OwnershipTransferred,
  RebalanceParamsUpdated,
  StrategyApprovalUpdated,
  StrategyParamsUpdated,
  TokenAcceptanceUpdated
} from "../generated/Registrar/Registrar"

export function createAccountsContractStorageUpdatedEvent(
  _chainName: string,
  _accountsContractAddress: string
): AccountsContractStorageUpdated {
  let accountsContractStorageUpdatedEvent = changetype<
    AccountsContractStorageUpdated
  >(newMockEvent())

  accountsContractStorageUpdatedEvent.parameters = new Array()

  accountsContractStorageUpdatedEvent.parameters.push(
    new ethereum.EventParam("_chainName", ethereum.Value.fromString(_chainName))
  )
  accountsContractStorageUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_accountsContractAddress",
      ethereum.Value.fromString(_accountsContractAddress)
    )
  )

  return accountsContractStorageUpdatedEvent
}

export function createAngelProtocolParamsUpdatedEvent(): AngelProtocolParamsUpdated {
  let angelProtocolParamsUpdatedEvent = changetype<AngelProtocolParamsUpdated>(
    newMockEvent()
  )

  angelProtocolParamsUpdatedEvent.parameters = new Array()

  return angelProtocolParamsUpdatedEvent
}

export function createConfigUpdatedEvent(): ConfigUpdated {
  let configUpdatedEvent = changetype<ConfigUpdated>(newMockEvent())

  configUpdatedEvent.parameters = new Array()

  return configUpdatedEvent
}

export function createFeeSettingsUpdatedEvent(
  _feeType: i32,
  _bpsRate: BigInt,
  _payoutAddress: Address
): FeeSettingsUpdated {
  let feeSettingsUpdatedEvent = changetype<FeeSettingsUpdated>(newMockEvent())

  feeSettingsUpdatedEvent.parameters = new Array()

  feeSettingsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_feeType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_feeType))
    )
  )
  feeSettingsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_bpsRate",
      ethereum.Value.fromUnsignedBigInt(_bpsRate)
    )
  )
  feeSettingsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_payoutAddress",
      ethereum.Value.fromAddress(_payoutAddress)
    )
  )

  return feeSettingsUpdatedEvent
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

export function createNetworkConnectionPostedEvent(
  chainId: BigInt
): NetworkConnectionPosted {
  let networkConnectionPostedEvent = changetype<NetworkConnectionPosted>(
    newMockEvent()
  )

  networkConnectionPostedEvent.parameters = new Array()

  networkConnectionPostedEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )

  return networkConnectionPostedEvent
}

export function createNetworkConnectionRemovedEvent(
  chainId: BigInt
): NetworkConnectionRemoved {
  let networkConnectionRemovedEvent = changetype<NetworkConnectionRemoved>(
    newMockEvent()
  )

  networkConnectionRemovedEvent.parameters = new Array()

  networkConnectionRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "chainId",
      ethereum.Value.fromUnsignedBigInt(chainId)
    )
  )

  return networkConnectionRemovedEvent
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

export function createRebalanceParamsUpdatedEvent(): RebalanceParamsUpdated {
  let rebalanceParamsUpdatedEvent = changetype<RebalanceParamsUpdated>(
    newMockEvent()
  )

  rebalanceParamsUpdatedEvent.parameters = new Array()

  return rebalanceParamsUpdatedEvent
}

export function createStrategyApprovalUpdatedEvent(
  _strategyId: Bytes,
  _approvalState: i32
): StrategyApprovalUpdated {
  let strategyApprovalUpdatedEvent = changetype<StrategyApprovalUpdated>(
    newMockEvent()
  )

  strategyApprovalUpdatedEvent.parameters = new Array()

  strategyApprovalUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_strategyId",
      ethereum.Value.fromFixedBytes(_strategyId)
    )
  )
  strategyApprovalUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_approvalState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_approvalState))
    )
  )

  return strategyApprovalUpdatedEvent
}

export function createStrategyParamsUpdatedEvent(
  _strategyId: Bytes,
  _lockAddr: Address,
  _liqAddr: Address,
  _approvalState: i32
): StrategyParamsUpdated {
  let strategyParamsUpdatedEvent = changetype<StrategyParamsUpdated>(
    newMockEvent()
  )

  strategyParamsUpdatedEvent.parameters = new Array()

  strategyParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_strategyId",
      ethereum.Value.fromFixedBytes(_strategyId)
    )
  )
  strategyParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam("_lockAddr", ethereum.Value.fromAddress(_lockAddr))
  )
  strategyParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam("_liqAddr", ethereum.Value.fromAddress(_liqAddr))
  )
  strategyParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_approvalState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_approvalState))
    )
  )

  return strategyParamsUpdatedEvent
}

export function createTokenAcceptanceUpdatedEvent(
  _tokenAddr: Address,
  _isAccepted: boolean
): TokenAcceptanceUpdated {
  let tokenAcceptanceUpdatedEvent = changetype<TokenAcceptanceUpdated>(
    newMockEvent()
  )

  tokenAcceptanceUpdatedEvent.parameters = new Array()

  tokenAcceptanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddr",
      ethereum.Value.fromAddress(_tokenAddr)
    )
  )
  tokenAcceptanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_isAccepted",
      ethereum.Value.fromBoolean(_isAccepted)
    )
  )

  return tokenAcceptanceUpdatedEvent
}
