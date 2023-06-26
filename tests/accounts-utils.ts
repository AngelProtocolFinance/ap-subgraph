import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Accounts/Accounts"

export function createAllowanceRemovedEvent(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): AllowanceRemoved {
  let allowanceRemovedEvent = changetype<AllowanceRemoved>(newMockEvent())

  allowanceRemovedEvent.parameters = new Array()

  allowanceRemovedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceRemovedEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return allowanceRemovedEvent
}

export function createAllowanceUpdatedEvent(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: BigInt
): AllowanceUpdated {
  let allowanceUpdatedEvent = changetype<AllowanceUpdated>(newMockEvent())

  allowanceUpdatedEvent.parameters = new Array()

  allowanceUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceUpdatedEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "allowance",
      ethereum.Value.fromUnsignedBigInt(allowance)
    )
  )

  return allowanceUpdatedEvent
}

export function createConfigUpdatedEvent(): ConfigUpdated {
  let configUpdatedEvent = changetype<ConfigUpdated>(newMockEvent())

  configUpdatedEvent.parameters = new Array()

  return configUpdatedEvent
}

export function createDaoContractCreatedEvent(
  endowId: BigInt,
  daoAddress: Address
): DaoContractCreated {
  let daoContractCreatedEvent = changetype<DaoContractCreated>(newMockEvent())

  daoContractCreatedEvent.parameters = new Array()

  daoContractCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )
  daoContractCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreatedEvent
}

export function createDonationDepositedEvent(
  endowId: BigInt,
  tokenAddress: Address,
  amount: BigInt
): DonationDeposited {
  let donationDepositedEvent = changetype<DonationDeposited>(newMockEvent())

  donationDepositedEvent.parameters = new Array()

  donationDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )
  donationDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationDepositedEvent
}

export function createDonationMatchCreatedEvent(
  endowId: BigInt,
  donationMatchContract: Address
): DonationMatchCreated {
  let donationMatchCreatedEvent = changetype<DonationMatchCreated>(
    newMockEvent()
  )

  donationMatchCreatedEvent.parameters = new Array()

  donationMatchCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )
  donationMatchCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchCreatedEvent
}

export function createDonationWithdrawnEvent(
  endowId: BigInt,
  recipient: Address,
  tokenAddress: Address,
  amount: BigInt
): DonationWithdrawn {
  let donationWithdrawnEvent = changetype<DonationWithdrawn>(newMockEvent())

  donationWithdrawnEvent.parameters = new Array()

  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )
  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawnEvent
}

export function createEndowmentCreatedEvent(endowId: BigInt): EndowmentCreated {
  let endowmentCreatedEvent = changetype<EndowmentCreated>(newMockEvent())

  endowmentCreatedEvent.parameters = new Array()

  endowmentCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )

  return endowmentCreatedEvent
}

export function createEndowmentSettingUpdatedEvent(
  endowId: BigInt,
  setting: string
): EndowmentSettingUpdated {
  let endowmentSettingUpdatedEvent = changetype<EndowmentSettingUpdated>(
    newMockEvent()
  )

  endowmentSettingUpdatedEvent.parameters = new Array()

  endowmentSettingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )
  endowmentSettingUpdatedEvent.parameters.push(
    new ethereum.EventParam("setting", ethereum.Value.fromString(setting))
  )

  return endowmentSettingUpdatedEvent
}

export function createEndowmentUpdatedEvent(endowId: BigInt): EndowmentUpdated {
  let endowmentUpdatedEvent = changetype<EndowmentUpdated>(newMockEvent())

  endowmentUpdatedEvent.parameters = new Array()

  endowmentUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )

  return endowmentUpdatedEvent
}

export function createOwnerUpdatedEvent(owner: Address): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerUpdatedEvent
}

export function createTokenSwappedEvent(
  endowId: BigInt,
  accountType: i32,
  tokenIn: Address,
  amountIn: BigInt,
  tokenOut: Address,
  amountOut: BigInt
): TokenSwapped {
  let tokenSwappedEvent = changetype<TokenSwapped>(newMockEvent())

  tokenSwappedEvent.parameters = new Array()

  tokenSwappedEvent.parameters.push(
    new ethereum.EventParam(
      "endowId",
      ethereum.Value.fromUnsignedBigInt(endowId)
    )
  )
  tokenSwappedEvent.parameters.push(
    new ethereum.EventParam(
      "accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(accountType))
    )
  )
  tokenSwappedEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  tokenSwappedEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  tokenSwappedEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  tokenSwappedEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )

  return tokenSwappedEvent
}
