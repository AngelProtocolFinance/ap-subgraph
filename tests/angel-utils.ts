import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AllowanceStateUpdatedTo,
  DaoContractCreated,
  DonationDeposited,
  DonationMatchSetup,
  DonationWithdrawn,
  EndowmentCreated,
  RemoveAllowance,
  SwapToken,
  UpdateConfig,
  UpdateEndowment,
  UpdateEndowmentState,
  AllowanceStateUpdatedTo1,
  DaoContractCreated1,
  DonationDeposited1,
  DonationMatchSetup1,
  DonationWithdrawn1,
  EndowmentCreated1,
  RemoveAllowance1,
  SwapToken1,
  UpdateConfig1,
  UpdateEndowment1,
  UpdateEndowmentState1,
  AllowanceStateUpdatedTo2,
  DaoContractCreated2,
  DonationDeposited2,
  DonationMatchSetup2,
  DonationWithdrawn2,
  EndowmentCreated2,
  RemoveAllowance2,
  SwapToken2,
  UpdateConfig2,
  UpdateEndowment2,
  UpdateEndowmentState2,
  AllowanceStateUpdatedTo3,
  DaoContractCreated3,
  DonationDeposited3,
  DonationMatchSetup3,
  DonationWithdrawn3,
  EndowmentCreated3,
  RemoveAllowance3,
  SwapToken3,
  UpdateConfig3,
  UpdateEndowment3,
  UpdateEndowmentState3,
  AllowanceStateUpdatedTo4,
  DaoContractCreated4,
  DonationDeposited4,
  DonationMatchSetup4,
  DonationWithdrawn4,
  EndowmentCreated4,
  RemoveAllowance4,
  SwapToken4,
  UpdateConfig4,
  UpdateEndowment4,
  UpdateEndowmentState4,
  AllowanceStateUpdatedTo5,
  DaoContractCreated5,
  DonationDeposited5,
  DonationMatchSetup5,
  DonationWithdrawn5,
  EndowmentCreated5,
  RemoveAllowance5,
  SwapToken5,
  UpdateConfig5,
  UpdateEndowment5,
  UpdateEndowmentState5,
  AllowanceStateUpdatedTo6,
  DaoContractCreated6,
  DonationDeposited6,
  DonationMatchSetup6,
  DonationWithdrawn6,
  EndowmentCreated6,
  RemoveAllowance6,
  SwapToken6,
  UpdateConfig6,
  UpdateEndowment6,
  UpdateEndowmentState6,
  AllowanceStateUpdatedTo7,
  DaoContractCreated7,
  DonationDeposited7,
  DonationMatchSetup7,
  DonationWithdrawn7,
  EndowmentCreated7,
  RemoveAllowance7,
  SwapToken7,
  UpdateConfig7,
  UpdateEndowment7,
  UpdateEndowmentState7,
  AllowanceStateUpdatedTo8,
  DaoContractCreated8,
  DonationDeposited8,
  DonationMatchSetup8,
  DonationWithdrawn8,
  EndowmentCreated8,
  RemoveAllowance8,
  SwapToken8,
  UpdateConfig8,
  UpdateEndowment8,
  UpdateEndowmentState8,
  AllowanceStateUpdatedTo9,
  DaoContractCreated9,
  DonationDeposited9,
  DonationMatchSetup9,
  DonationWithdrawn9,
  EndowmentCreated9,
  RemoveAllowance9,
  SwapToken9,
  UpdateConfig9,
  UpdateEndowment9,
  UpdateEndowmentState9,
  AllowanceStateUpdatedTo10,
  DaoContractCreated10,
  DonationDeposited10,
  DonationMatchSetup10,
  DonationWithdrawn10,
  EndowmentCreated10,
  RemoveAllowance10,
  SwapToken10,
  UpdateConfig10,
  UpdateEndowment10,
  UpdateEndowmentState10,
  AllowanceStateUpdatedTo11,
  DaoContractCreated11,
  DonationDeposited11,
  DonationMatchSetup11,
  DonationWithdrawn11,
  EndowmentCreated11,
  RemoveAllowance11,
  SwapToken11,
  UpdateConfig11,
  UpdateEndowment11,
  UpdateEndowmentState11,
  AllowanceStateUpdatedTo12,
  DaoContractCreated12,
  DonationDeposited12,
  DonationMatchSetup12,
  DonationWithdrawn12,
  EndowmentCreated12,
  RemoveAllowance12,
  SwapToken12,
  UpdateConfig12,
  UpdateEndowment12,
  UpdateEndowmentState12,
  AllowanceStateUpdatedTo13,
  DaoContractCreated13,
  DonationDeposited13,
  DonationMatchSetup13,
  DonationWithdrawn13,
  EndowmentCreated13,
  RemoveAllowance13,
  SwapToken13,
  UpdateConfig13,
  UpdateEndowment13,
  UpdateEndowmentState13
} from "../generated/Angel/Angel"

export function createAllowanceStateUpdatedToEvent(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo {
  let allowanceStateUpdatedToEvent = changetype<AllowanceStateUpdatedTo>(
    newMockEvent()
  )

  allowanceStateUpdatedToEvent.parameters = new Array()

  allowanceStateUpdatedToEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedToEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedToEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedToEvent.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedToEvent
}

export function createDaoContractCreatedEvent(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated {
  let daoContractCreatedEvent = changetype<DaoContractCreated>(newMockEvent())

  daoContractCreatedEvent.parameters = new Array()

  daoContractCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
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
  _id: BigInt,
  _amount: BigInt
): DonationDeposited {
  let donationDepositedEvent = changetype<DonationDeposited>(newMockEvent())

  donationDepositedEvent.parameters = new Array()

  donationDepositedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDepositedEvent
}

export function createDonationMatchSetupEvent(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup {
  let donationMatchSetupEvent = changetype<DonationMatchSetup>(newMockEvent())

  donationMatchSetupEvent.parameters = new Array()

  donationMatchSetupEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetupEvent.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetupEvent
}

export function createDonationWithdrawnEvent(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn {
  let donationWithdrawnEvent = changetype<DonationWithdrawn>(newMockEvent())

  donationWithdrawnEvent.parameters = new Array()

  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawnEvent
}

export function createEndowmentCreatedEvent(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated {
  let endowmentCreatedEvent = changetype<EndowmentCreated>(newMockEvent())

  endowmentCreatedEvent.parameters = new Array()

  endowmentCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreatedEvent.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreatedEvent
}

export function createRemoveAllowanceEvent(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance {
  let removeAllowanceEvent = changetype<RemoveAllowance>(newMockEvent())

  removeAllowanceEvent.parameters = new Array()

  removeAllowanceEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowanceEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowanceEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowanceEvent
}

export function createSwapTokenEvent(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken {
  let swapTokenEvent = changetype<SwapToken>(newMockEvent())

  swapTokenEvent.parameters = new Array()

  swapTokenEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapTokenEvent.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapTokenEvent.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapTokenEvent
}

export function createUpdateConfigEvent(config: ethereum.Tuple): UpdateConfig {
  let updateConfigEvent = changetype<UpdateConfig>(newMockEvent())

  updateConfigEvent.parameters = new Array()

  updateConfigEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfigEvent
}

export function createUpdateEndowmentEvent(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment {
  let updateEndowmentEvent = changetype<UpdateEndowment>(newMockEvent())

  updateEndowmentEvent.parameters = new Array()

  updateEndowmentEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentEvent.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowmentEvent
}

export function createUpdateEndowmentStateEvent(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState {
  let updateEndowmentStateEvent = changetype<UpdateEndowmentState>(
    newMockEvent()
  )

  updateEndowmentStateEvent.parameters = new Array()

  updateEndowmentStateEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentStateEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentStateEvent
}

export function createAllowanceStateUpdatedTo1Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo1 {
  let allowanceStateUpdatedTo1Event = changetype<AllowanceStateUpdatedTo1>(
    newMockEvent()
  )

  allowanceStateUpdatedTo1Event.parameters = new Array()

  allowanceStateUpdatedTo1Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo1Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo1Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo1Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo1Event
}

export function createDaoContractCreated1Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated1 {
  let daoContractCreated1Event = changetype<DaoContractCreated1>(newMockEvent())

  daoContractCreated1Event.parameters = new Array()

  daoContractCreated1Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated1Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated1Event
}

export function createDonationDeposited1Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited1 {
  let donationDeposited1Event = changetype<DonationDeposited1>(newMockEvent())

  donationDeposited1Event.parameters = new Array()

  donationDeposited1Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited1Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited1Event
}

export function createDonationMatchSetup1Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup1 {
  let donationMatchSetup1Event = changetype<DonationMatchSetup1>(newMockEvent())

  donationMatchSetup1Event.parameters = new Array()

  donationMatchSetup1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup1Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup1Event
}

export function createDonationWithdrawn1Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn1 {
  let donationWithdrawn1Event = changetype<DonationWithdrawn1>(newMockEvent())

  donationWithdrawn1Event.parameters = new Array()

  donationWithdrawn1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn1Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn1Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn1Event
}

export function createEndowmentCreated1Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated1 {
  let endowmentCreated1Event = changetype<EndowmentCreated1>(newMockEvent())

  endowmentCreated1Event.parameters = new Array()

  endowmentCreated1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated1Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated1Event
}

export function createRemoveAllowance1Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance1 {
  let removeAllowance1Event = changetype<RemoveAllowance1>(newMockEvent())

  removeAllowance1Event.parameters = new Array()

  removeAllowance1Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance1Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance1Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance1Event
}

export function createSwapToken1Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken1 {
  let swapToken1Event = changetype<SwapToken1>(newMockEvent())

  swapToken1Event.parameters = new Array()

  swapToken1Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken1Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken1Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken1Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken1Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken1Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken1Event
}

export function createUpdateConfig1Event(
  config: ethereum.Tuple
): UpdateConfig1 {
  let updateConfig1Event = changetype<UpdateConfig1>(newMockEvent())

  updateConfig1Event.parameters = new Array()

  updateConfig1Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig1Event
}

export function createUpdateEndowment1Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment1 {
  let updateEndowment1Event = changetype<UpdateEndowment1>(newMockEvent())

  updateEndowment1Event.parameters = new Array()

  updateEndowment1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment1Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment1Event
}

export function createUpdateEndowmentState1Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState1 {
  let updateEndowmentState1Event = changetype<UpdateEndowmentState1>(
    newMockEvent()
  )

  updateEndowmentState1Event.parameters = new Array()

  updateEndowmentState1Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState1Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState1Event
}

export function createAllowanceStateUpdatedTo2Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo2 {
  let allowanceStateUpdatedTo2Event = changetype<AllowanceStateUpdatedTo2>(
    newMockEvent()
  )

  allowanceStateUpdatedTo2Event.parameters = new Array()

  allowanceStateUpdatedTo2Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo2Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo2Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo2Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo2Event
}

export function createDaoContractCreated2Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated2 {
  let daoContractCreated2Event = changetype<DaoContractCreated2>(newMockEvent())

  daoContractCreated2Event.parameters = new Array()

  daoContractCreated2Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated2Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated2Event
}

export function createDonationDeposited2Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited2 {
  let donationDeposited2Event = changetype<DonationDeposited2>(newMockEvent())

  donationDeposited2Event.parameters = new Array()

  donationDeposited2Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited2Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited2Event
}

export function createDonationMatchSetup2Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup2 {
  let donationMatchSetup2Event = changetype<DonationMatchSetup2>(newMockEvent())

  donationMatchSetup2Event.parameters = new Array()

  donationMatchSetup2Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup2Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup2Event
}

export function createDonationWithdrawn2Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn2 {
  let donationWithdrawn2Event = changetype<DonationWithdrawn2>(newMockEvent())

  donationWithdrawn2Event.parameters = new Array()

  donationWithdrawn2Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn2Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn2Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn2Event
}

export function createEndowmentCreated2Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated2 {
  let endowmentCreated2Event = changetype<EndowmentCreated2>(newMockEvent())

  endowmentCreated2Event.parameters = new Array()

  endowmentCreated2Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated2Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated2Event
}

export function createRemoveAllowance2Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance2 {
  let removeAllowance2Event = changetype<RemoveAllowance2>(newMockEvent())

  removeAllowance2Event.parameters = new Array()

  removeAllowance2Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance2Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance2Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance2Event
}

export function createSwapToken2Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken2 {
  let swapToken2Event = changetype<SwapToken2>(newMockEvent())

  swapToken2Event.parameters = new Array()

  swapToken2Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken2Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken2Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken2Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken2Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken2Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken2Event
}

export function createUpdateConfig2Event(
  config: ethereum.Tuple
): UpdateConfig2 {
  let updateConfig2Event = changetype<UpdateConfig2>(newMockEvent())

  updateConfig2Event.parameters = new Array()

  updateConfig2Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig2Event
}

export function createUpdateEndowment2Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment2 {
  let updateEndowment2Event = changetype<UpdateEndowment2>(newMockEvent())

  updateEndowment2Event.parameters = new Array()

  updateEndowment2Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment2Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment2Event
}

export function createUpdateEndowmentState2Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState2 {
  let updateEndowmentState2Event = changetype<UpdateEndowmentState2>(
    newMockEvent()
  )

  updateEndowmentState2Event.parameters = new Array()

  updateEndowmentState2Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState2Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState2Event
}

export function createAllowanceStateUpdatedTo3Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo3 {
  let allowanceStateUpdatedTo3Event = changetype<AllowanceStateUpdatedTo3>(
    newMockEvent()
  )

  allowanceStateUpdatedTo3Event.parameters = new Array()

  allowanceStateUpdatedTo3Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo3Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo3Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo3Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo3Event
}

export function createDaoContractCreated3Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated3 {
  let daoContractCreated3Event = changetype<DaoContractCreated3>(newMockEvent())

  daoContractCreated3Event.parameters = new Array()

  daoContractCreated3Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated3Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated3Event
}

export function createDonationDeposited3Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited3 {
  let donationDeposited3Event = changetype<DonationDeposited3>(newMockEvent())

  donationDeposited3Event.parameters = new Array()

  donationDeposited3Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited3Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited3Event
}

export function createDonationMatchSetup3Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup3 {
  let donationMatchSetup3Event = changetype<DonationMatchSetup3>(newMockEvent())

  donationMatchSetup3Event.parameters = new Array()

  donationMatchSetup3Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup3Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup3Event
}

export function createDonationWithdrawn3Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn3 {
  let donationWithdrawn3Event = changetype<DonationWithdrawn3>(newMockEvent())

  donationWithdrawn3Event.parameters = new Array()

  donationWithdrawn3Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn3Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn3Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn3Event
}

export function createEndowmentCreated3Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated3 {
  let endowmentCreated3Event = changetype<EndowmentCreated3>(newMockEvent())

  endowmentCreated3Event.parameters = new Array()

  endowmentCreated3Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated3Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated3Event
}

export function createRemoveAllowance3Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance3 {
  let removeAllowance3Event = changetype<RemoveAllowance3>(newMockEvent())

  removeAllowance3Event.parameters = new Array()

  removeAllowance3Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance3Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance3Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance3Event
}

export function createSwapToken3Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken3 {
  let swapToken3Event = changetype<SwapToken3>(newMockEvent())

  swapToken3Event.parameters = new Array()

  swapToken3Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken3Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken3Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken3Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken3Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken3Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken3Event
}

export function createUpdateConfig3Event(
  config: ethereum.Tuple
): UpdateConfig3 {
  let updateConfig3Event = changetype<UpdateConfig3>(newMockEvent())

  updateConfig3Event.parameters = new Array()

  updateConfig3Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig3Event
}

export function createUpdateEndowment3Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment3 {
  let updateEndowment3Event = changetype<UpdateEndowment3>(newMockEvent())

  updateEndowment3Event.parameters = new Array()

  updateEndowment3Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment3Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment3Event
}

export function createUpdateEndowmentState3Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState3 {
  let updateEndowmentState3Event = changetype<UpdateEndowmentState3>(
    newMockEvent()
  )

  updateEndowmentState3Event.parameters = new Array()

  updateEndowmentState3Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState3Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState3Event
}

export function createAllowanceStateUpdatedTo4Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo4 {
  let allowanceStateUpdatedTo4Event = changetype<AllowanceStateUpdatedTo4>(
    newMockEvent()
  )

  allowanceStateUpdatedTo4Event.parameters = new Array()

  allowanceStateUpdatedTo4Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo4Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo4Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo4Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo4Event
}

export function createDaoContractCreated4Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated4 {
  let daoContractCreated4Event = changetype<DaoContractCreated4>(newMockEvent())

  daoContractCreated4Event.parameters = new Array()

  daoContractCreated4Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated4Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated4Event
}

export function createDonationDeposited4Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited4 {
  let donationDeposited4Event = changetype<DonationDeposited4>(newMockEvent())

  donationDeposited4Event.parameters = new Array()

  donationDeposited4Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited4Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited4Event
}

export function createDonationMatchSetup4Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup4 {
  let donationMatchSetup4Event = changetype<DonationMatchSetup4>(newMockEvent())

  donationMatchSetup4Event.parameters = new Array()

  donationMatchSetup4Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup4Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup4Event
}

export function createDonationWithdrawn4Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn4 {
  let donationWithdrawn4Event = changetype<DonationWithdrawn4>(newMockEvent())

  donationWithdrawn4Event.parameters = new Array()

  donationWithdrawn4Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn4Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn4Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn4Event
}

export function createEndowmentCreated4Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated4 {
  let endowmentCreated4Event = changetype<EndowmentCreated4>(newMockEvent())

  endowmentCreated4Event.parameters = new Array()

  endowmentCreated4Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated4Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated4Event
}

export function createRemoveAllowance4Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance4 {
  let removeAllowance4Event = changetype<RemoveAllowance4>(newMockEvent())

  removeAllowance4Event.parameters = new Array()

  removeAllowance4Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance4Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance4Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance4Event
}

export function createSwapToken4Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken4 {
  let swapToken4Event = changetype<SwapToken4>(newMockEvent())

  swapToken4Event.parameters = new Array()

  swapToken4Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken4Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken4Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken4Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken4Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken4Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken4Event
}

export function createUpdateConfig4Event(
  config: ethereum.Tuple
): UpdateConfig4 {
  let updateConfig4Event = changetype<UpdateConfig4>(newMockEvent())

  updateConfig4Event.parameters = new Array()

  updateConfig4Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig4Event
}

export function createUpdateEndowment4Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment4 {
  let updateEndowment4Event = changetype<UpdateEndowment4>(newMockEvent())

  updateEndowment4Event.parameters = new Array()

  updateEndowment4Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment4Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment4Event
}

export function createUpdateEndowmentState4Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState4 {
  let updateEndowmentState4Event = changetype<UpdateEndowmentState4>(
    newMockEvent()
  )

  updateEndowmentState4Event.parameters = new Array()

  updateEndowmentState4Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState4Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState4Event
}

export function createAllowanceStateUpdatedTo5Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo5 {
  let allowanceStateUpdatedTo5Event = changetype<AllowanceStateUpdatedTo5>(
    newMockEvent()
  )

  allowanceStateUpdatedTo5Event.parameters = new Array()

  allowanceStateUpdatedTo5Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo5Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo5Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo5Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo5Event
}

export function createDaoContractCreated5Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated5 {
  let daoContractCreated5Event = changetype<DaoContractCreated5>(newMockEvent())

  daoContractCreated5Event.parameters = new Array()

  daoContractCreated5Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated5Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated5Event
}

export function createDonationDeposited5Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited5 {
  let donationDeposited5Event = changetype<DonationDeposited5>(newMockEvent())

  donationDeposited5Event.parameters = new Array()

  donationDeposited5Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited5Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited5Event
}

export function createDonationMatchSetup5Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup5 {
  let donationMatchSetup5Event = changetype<DonationMatchSetup5>(newMockEvent())

  donationMatchSetup5Event.parameters = new Array()

  donationMatchSetup5Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup5Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup5Event
}

export function createDonationWithdrawn5Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn5 {
  let donationWithdrawn5Event = changetype<DonationWithdrawn5>(newMockEvent())

  donationWithdrawn5Event.parameters = new Array()

  donationWithdrawn5Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn5Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn5Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn5Event
}

export function createEndowmentCreated5Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated5 {
  let endowmentCreated5Event = changetype<EndowmentCreated5>(newMockEvent())

  endowmentCreated5Event.parameters = new Array()

  endowmentCreated5Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated5Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated5Event
}

export function createRemoveAllowance5Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance5 {
  let removeAllowance5Event = changetype<RemoveAllowance5>(newMockEvent())

  removeAllowance5Event.parameters = new Array()

  removeAllowance5Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance5Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance5Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance5Event
}

export function createSwapToken5Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken5 {
  let swapToken5Event = changetype<SwapToken5>(newMockEvent())

  swapToken5Event.parameters = new Array()

  swapToken5Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken5Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken5Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken5Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken5Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken5Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken5Event
}

export function createUpdateConfig5Event(
  config: ethereum.Tuple
): UpdateConfig5 {
  let updateConfig5Event = changetype<UpdateConfig5>(newMockEvent())

  updateConfig5Event.parameters = new Array()

  updateConfig5Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig5Event
}

export function createUpdateEndowment5Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment5 {
  let updateEndowment5Event = changetype<UpdateEndowment5>(newMockEvent())

  updateEndowment5Event.parameters = new Array()

  updateEndowment5Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment5Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment5Event
}

export function createUpdateEndowmentState5Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState5 {
  let updateEndowmentState5Event = changetype<UpdateEndowmentState5>(
    newMockEvent()
  )

  updateEndowmentState5Event.parameters = new Array()

  updateEndowmentState5Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState5Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState5Event
}

export function createAllowanceStateUpdatedTo6Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo6 {
  let allowanceStateUpdatedTo6Event = changetype<AllowanceStateUpdatedTo6>(
    newMockEvent()
  )

  allowanceStateUpdatedTo6Event.parameters = new Array()

  allowanceStateUpdatedTo6Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo6Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo6Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo6Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo6Event
}

export function createDaoContractCreated6Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated6 {
  let daoContractCreated6Event = changetype<DaoContractCreated6>(newMockEvent())

  daoContractCreated6Event.parameters = new Array()

  daoContractCreated6Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated6Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated6Event
}

export function createDonationDeposited6Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited6 {
  let donationDeposited6Event = changetype<DonationDeposited6>(newMockEvent())

  donationDeposited6Event.parameters = new Array()

  donationDeposited6Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited6Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited6Event
}

export function createDonationMatchSetup6Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup6 {
  let donationMatchSetup6Event = changetype<DonationMatchSetup6>(newMockEvent())

  donationMatchSetup6Event.parameters = new Array()

  donationMatchSetup6Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup6Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup6Event
}

export function createDonationWithdrawn6Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn6 {
  let donationWithdrawn6Event = changetype<DonationWithdrawn6>(newMockEvent())

  donationWithdrawn6Event.parameters = new Array()

  donationWithdrawn6Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn6Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn6Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn6Event
}

export function createEndowmentCreated6Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated6 {
  let endowmentCreated6Event = changetype<EndowmentCreated6>(newMockEvent())

  endowmentCreated6Event.parameters = new Array()

  endowmentCreated6Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated6Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated6Event
}

export function createRemoveAllowance6Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance6 {
  let removeAllowance6Event = changetype<RemoveAllowance6>(newMockEvent())

  removeAllowance6Event.parameters = new Array()

  removeAllowance6Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance6Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance6Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance6Event
}

export function createSwapToken6Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken6 {
  let swapToken6Event = changetype<SwapToken6>(newMockEvent())

  swapToken6Event.parameters = new Array()

  swapToken6Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken6Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken6Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken6Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken6Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken6Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken6Event
}

export function createUpdateConfig6Event(
  config: ethereum.Tuple
): UpdateConfig6 {
  let updateConfig6Event = changetype<UpdateConfig6>(newMockEvent())

  updateConfig6Event.parameters = new Array()

  updateConfig6Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig6Event
}

export function createUpdateEndowment6Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment6 {
  let updateEndowment6Event = changetype<UpdateEndowment6>(newMockEvent())

  updateEndowment6Event.parameters = new Array()

  updateEndowment6Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment6Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment6Event
}

export function createUpdateEndowmentState6Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState6 {
  let updateEndowmentState6Event = changetype<UpdateEndowmentState6>(
    newMockEvent()
  )

  updateEndowmentState6Event.parameters = new Array()

  updateEndowmentState6Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState6Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState6Event
}

export function createAllowanceStateUpdatedTo7Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo7 {
  let allowanceStateUpdatedTo7Event = changetype<AllowanceStateUpdatedTo7>(
    newMockEvent()
  )

  allowanceStateUpdatedTo7Event.parameters = new Array()

  allowanceStateUpdatedTo7Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo7Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo7Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo7Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo7Event
}

export function createDaoContractCreated7Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated7 {
  let daoContractCreated7Event = changetype<DaoContractCreated7>(newMockEvent())

  daoContractCreated7Event.parameters = new Array()

  daoContractCreated7Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated7Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated7Event
}

export function createDonationDeposited7Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited7 {
  let donationDeposited7Event = changetype<DonationDeposited7>(newMockEvent())

  donationDeposited7Event.parameters = new Array()

  donationDeposited7Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited7Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited7Event
}

export function createDonationMatchSetup7Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup7 {
  let donationMatchSetup7Event = changetype<DonationMatchSetup7>(newMockEvent())

  donationMatchSetup7Event.parameters = new Array()

  donationMatchSetup7Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup7Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup7Event
}

export function createDonationWithdrawn7Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn7 {
  let donationWithdrawn7Event = changetype<DonationWithdrawn7>(newMockEvent())

  donationWithdrawn7Event.parameters = new Array()

  donationWithdrawn7Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn7Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn7Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn7Event
}

export function createEndowmentCreated7Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated7 {
  let endowmentCreated7Event = changetype<EndowmentCreated7>(newMockEvent())

  endowmentCreated7Event.parameters = new Array()

  endowmentCreated7Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated7Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated7Event
}

export function createRemoveAllowance7Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance7 {
  let removeAllowance7Event = changetype<RemoveAllowance7>(newMockEvent())

  removeAllowance7Event.parameters = new Array()

  removeAllowance7Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance7Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance7Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance7Event
}

export function createSwapToken7Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken7 {
  let swapToken7Event = changetype<SwapToken7>(newMockEvent())

  swapToken7Event.parameters = new Array()

  swapToken7Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken7Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken7Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken7Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken7Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken7Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken7Event
}

export function createUpdateConfig7Event(
  config: ethereum.Tuple
): UpdateConfig7 {
  let updateConfig7Event = changetype<UpdateConfig7>(newMockEvent())

  updateConfig7Event.parameters = new Array()

  updateConfig7Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig7Event
}

export function createUpdateEndowment7Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment7 {
  let updateEndowment7Event = changetype<UpdateEndowment7>(newMockEvent())

  updateEndowment7Event.parameters = new Array()

  updateEndowment7Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment7Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment7Event
}

export function createUpdateEndowmentState7Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState7 {
  let updateEndowmentState7Event = changetype<UpdateEndowmentState7>(
    newMockEvent()
  )

  updateEndowmentState7Event.parameters = new Array()

  updateEndowmentState7Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState7Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState7Event
}

export function createAllowanceStateUpdatedTo8Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo8 {
  let allowanceStateUpdatedTo8Event = changetype<AllowanceStateUpdatedTo8>(
    newMockEvent()
  )

  allowanceStateUpdatedTo8Event.parameters = new Array()

  allowanceStateUpdatedTo8Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo8Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo8Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo8Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo8Event
}

export function createDaoContractCreated8Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated8 {
  let daoContractCreated8Event = changetype<DaoContractCreated8>(newMockEvent())

  daoContractCreated8Event.parameters = new Array()

  daoContractCreated8Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated8Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated8Event
}

export function createDonationDeposited8Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited8 {
  let donationDeposited8Event = changetype<DonationDeposited8>(newMockEvent())

  donationDeposited8Event.parameters = new Array()

  donationDeposited8Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited8Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited8Event
}

export function createDonationMatchSetup8Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup8 {
  let donationMatchSetup8Event = changetype<DonationMatchSetup8>(newMockEvent())

  donationMatchSetup8Event.parameters = new Array()

  donationMatchSetup8Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup8Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup8Event
}

export function createDonationWithdrawn8Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn8 {
  let donationWithdrawn8Event = changetype<DonationWithdrawn8>(newMockEvent())

  donationWithdrawn8Event.parameters = new Array()

  donationWithdrawn8Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn8Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn8Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn8Event
}

export function createEndowmentCreated8Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated8 {
  let endowmentCreated8Event = changetype<EndowmentCreated8>(newMockEvent())

  endowmentCreated8Event.parameters = new Array()

  endowmentCreated8Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated8Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated8Event
}

export function createRemoveAllowance8Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance8 {
  let removeAllowance8Event = changetype<RemoveAllowance8>(newMockEvent())

  removeAllowance8Event.parameters = new Array()

  removeAllowance8Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance8Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance8Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance8Event
}

export function createSwapToken8Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken8 {
  let swapToken8Event = changetype<SwapToken8>(newMockEvent())

  swapToken8Event.parameters = new Array()

  swapToken8Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken8Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken8Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken8Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken8Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken8Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken8Event
}

export function createUpdateConfig8Event(
  config: ethereum.Tuple
): UpdateConfig8 {
  let updateConfig8Event = changetype<UpdateConfig8>(newMockEvent())

  updateConfig8Event.parameters = new Array()

  updateConfig8Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig8Event
}

export function createUpdateEndowment8Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment8 {
  let updateEndowment8Event = changetype<UpdateEndowment8>(newMockEvent())

  updateEndowment8Event.parameters = new Array()

  updateEndowment8Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment8Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment8Event
}

export function createUpdateEndowmentState8Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState8 {
  let updateEndowmentState8Event = changetype<UpdateEndowmentState8>(
    newMockEvent()
  )

  updateEndowmentState8Event.parameters = new Array()

  updateEndowmentState8Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState8Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState8Event
}

export function createAllowanceStateUpdatedTo9Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo9 {
  let allowanceStateUpdatedTo9Event = changetype<AllowanceStateUpdatedTo9>(
    newMockEvent()
  )

  allowanceStateUpdatedTo9Event.parameters = new Array()

  allowanceStateUpdatedTo9Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo9Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo9Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo9Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo9Event
}

export function createDaoContractCreated9Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated9 {
  let daoContractCreated9Event = changetype<DaoContractCreated9>(newMockEvent())

  daoContractCreated9Event.parameters = new Array()

  daoContractCreated9Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated9Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated9Event
}

export function createDonationDeposited9Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited9 {
  let donationDeposited9Event = changetype<DonationDeposited9>(newMockEvent())

  donationDeposited9Event.parameters = new Array()

  donationDeposited9Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited9Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited9Event
}

export function createDonationMatchSetup9Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup9 {
  let donationMatchSetup9Event = changetype<DonationMatchSetup9>(newMockEvent())

  donationMatchSetup9Event.parameters = new Array()

  donationMatchSetup9Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup9Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup9Event
}

export function createDonationWithdrawn9Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn9 {
  let donationWithdrawn9Event = changetype<DonationWithdrawn9>(newMockEvent())

  donationWithdrawn9Event.parameters = new Array()

  donationWithdrawn9Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn9Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn9Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn9Event
}

export function createEndowmentCreated9Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated9 {
  let endowmentCreated9Event = changetype<EndowmentCreated9>(newMockEvent())

  endowmentCreated9Event.parameters = new Array()

  endowmentCreated9Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated9Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated9Event
}

export function createRemoveAllowance9Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance9 {
  let removeAllowance9Event = changetype<RemoveAllowance9>(newMockEvent())

  removeAllowance9Event.parameters = new Array()

  removeAllowance9Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance9Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance9Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance9Event
}

export function createSwapToken9Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken9 {
  let swapToken9Event = changetype<SwapToken9>(newMockEvent())

  swapToken9Event.parameters = new Array()

  swapToken9Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken9Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken9Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken9Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken9Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken9Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken9Event
}

export function createUpdateConfig9Event(
  config: ethereum.Tuple
): UpdateConfig9 {
  let updateConfig9Event = changetype<UpdateConfig9>(newMockEvent())

  updateConfig9Event.parameters = new Array()

  updateConfig9Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig9Event
}

export function createUpdateEndowment9Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment9 {
  let updateEndowment9Event = changetype<UpdateEndowment9>(newMockEvent())

  updateEndowment9Event.parameters = new Array()

  updateEndowment9Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment9Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment9Event
}

export function createUpdateEndowmentState9Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState9 {
  let updateEndowmentState9Event = changetype<UpdateEndowmentState9>(
    newMockEvent()
  )

  updateEndowmentState9Event.parameters = new Array()

  updateEndowmentState9Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState9Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState9Event
}

export function createAllowanceStateUpdatedTo10Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo10 {
  let allowanceStateUpdatedTo10Event = changetype<AllowanceStateUpdatedTo10>(
    newMockEvent()
  )

  allowanceStateUpdatedTo10Event.parameters = new Array()

  allowanceStateUpdatedTo10Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo10Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo10Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo10Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo10Event
}

export function createDaoContractCreated10Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated10 {
  let daoContractCreated10Event = changetype<DaoContractCreated10>(
    newMockEvent()
  )

  daoContractCreated10Event.parameters = new Array()

  daoContractCreated10Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated10Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated10Event
}

export function createDonationDeposited10Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited10 {
  let donationDeposited10Event = changetype<DonationDeposited10>(newMockEvent())

  donationDeposited10Event.parameters = new Array()

  donationDeposited10Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited10Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited10Event
}

export function createDonationMatchSetup10Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup10 {
  let donationMatchSetup10Event = changetype<DonationMatchSetup10>(
    newMockEvent()
  )

  donationMatchSetup10Event.parameters = new Array()

  donationMatchSetup10Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup10Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup10Event
}

export function createDonationWithdrawn10Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn10 {
  let donationWithdrawn10Event = changetype<DonationWithdrawn10>(newMockEvent())

  donationWithdrawn10Event.parameters = new Array()

  donationWithdrawn10Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn10Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn10Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn10Event
}

export function createEndowmentCreated10Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated10 {
  let endowmentCreated10Event = changetype<EndowmentCreated10>(newMockEvent())

  endowmentCreated10Event.parameters = new Array()

  endowmentCreated10Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated10Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated10Event
}

export function createRemoveAllowance10Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance10 {
  let removeAllowance10Event = changetype<RemoveAllowance10>(newMockEvent())

  removeAllowance10Event.parameters = new Array()

  removeAllowance10Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance10Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance10Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance10Event
}

export function createSwapToken10Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken10 {
  let swapToken10Event = changetype<SwapToken10>(newMockEvent())

  swapToken10Event.parameters = new Array()

  swapToken10Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken10Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken10Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken10Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken10Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken10Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken10Event
}

export function createUpdateConfig10Event(
  config: ethereum.Tuple
): UpdateConfig10 {
  let updateConfig10Event = changetype<UpdateConfig10>(newMockEvent())

  updateConfig10Event.parameters = new Array()

  updateConfig10Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig10Event
}

export function createUpdateEndowment10Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment10 {
  let updateEndowment10Event = changetype<UpdateEndowment10>(newMockEvent())

  updateEndowment10Event.parameters = new Array()

  updateEndowment10Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment10Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment10Event
}

export function createUpdateEndowmentState10Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState10 {
  let updateEndowmentState10Event = changetype<UpdateEndowmentState10>(
    newMockEvent()
  )

  updateEndowmentState10Event.parameters = new Array()

  updateEndowmentState10Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState10Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState10Event
}

export function createAllowanceStateUpdatedTo11Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo11 {
  let allowanceStateUpdatedTo11Event = changetype<AllowanceStateUpdatedTo11>(
    newMockEvent()
  )

  allowanceStateUpdatedTo11Event.parameters = new Array()

  allowanceStateUpdatedTo11Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo11Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo11Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo11Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo11Event
}

export function createDaoContractCreated11Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated11 {
  let daoContractCreated11Event = changetype<DaoContractCreated11>(
    newMockEvent()
  )

  daoContractCreated11Event.parameters = new Array()

  daoContractCreated11Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated11Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated11Event
}

export function createDonationDeposited11Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited11 {
  let donationDeposited11Event = changetype<DonationDeposited11>(newMockEvent())

  donationDeposited11Event.parameters = new Array()

  donationDeposited11Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited11Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited11Event
}

export function createDonationMatchSetup11Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup11 {
  let donationMatchSetup11Event = changetype<DonationMatchSetup11>(
    newMockEvent()
  )

  donationMatchSetup11Event.parameters = new Array()

  donationMatchSetup11Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup11Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup11Event
}

export function createDonationWithdrawn11Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn11 {
  let donationWithdrawn11Event = changetype<DonationWithdrawn11>(newMockEvent())

  donationWithdrawn11Event.parameters = new Array()

  donationWithdrawn11Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn11Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn11Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn11Event
}

export function createEndowmentCreated11Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated11 {
  let endowmentCreated11Event = changetype<EndowmentCreated11>(newMockEvent())

  endowmentCreated11Event.parameters = new Array()

  endowmentCreated11Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated11Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated11Event
}

export function createRemoveAllowance11Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance11 {
  let removeAllowance11Event = changetype<RemoveAllowance11>(newMockEvent())

  removeAllowance11Event.parameters = new Array()

  removeAllowance11Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance11Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance11Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance11Event
}

export function createSwapToken11Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken11 {
  let swapToken11Event = changetype<SwapToken11>(newMockEvent())

  swapToken11Event.parameters = new Array()

  swapToken11Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken11Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken11Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken11Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken11Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken11Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken11Event
}

export function createUpdateConfig11Event(
  config: ethereum.Tuple
): UpdateConfig11 {
  let updateConfig11Event = changetype<UpdateConfig11>(newMockEvent())

  updateConfig11Event.parameters = new Array()

  updateConfig11Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig11Event
}

export function createUpdateEndowment11Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment11 {
  let updateEndowment11Event = changetype<UpdateEndowment11>(newMockEvent())

  updateEndowment11Event.parameters = new Array()

  updateEndowment11Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment11Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment11Event
}

export function createUpdateEndowmentState11Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState11 {
  let updateEndowmentState11Event = changetype<UpdateEndowmentState11>(
    newMockEvent()
  )

  updateEndowmentState11Event.parameters = new Array()

  updateEndowmentState11Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState11Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState11Event
}

export function createAllowanceStateUpdatedTo12Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo12 {
  let allowanceStateUpdatedTo12Event = changetype<AllowanceStateUpdatedTo12>(
    newMockEvent()
  )

  allowanceStateUpdatedTo12Event.parameters = new Array()

  allowanceStateUpdatedTo12Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo12Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo12Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo12Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo12Event
}

export function createDaoContractCreated12Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated12 {
  let daoContractCreated12Event = changetype<DaoContractCreated12>(
    newMockEvent()
  )

  daoContractCreated12Event.parameters = new Array()

  daoContractCreated12Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated12Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated12Event
}

export function createDonationDeposited12Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited12 {
  let donationDeposited12Event = changetype<DonationDeposited12>(newMockEvent())

  donationDeposited12Event.parameters = new Array()

  donationDeposited12Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited12Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited12Event
}

export function createDonationMatchSetup12Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup12 {
  let donationMatchSetup12Event = changetype<DonationMatchSetup12>(
    newMockEvent()
  )

  donationMatchSetup12Event.parameters = new Array()

  donationMatchSetup12Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup12Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup12Event
}

export function createDonationWithdrawn12Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn12 {
  let donationWithdrawn12Event = changetype<DonationWithdrawn12>(newMockEvent())

  donationWithdrawn12Event.parameters = new Array()

  donationWithdrawn12Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn12Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn12Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn12Event
}

export function createEndowmentCreated12Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated12 {
  let endowmentCreated12Event = changetype<EndowmentCreated12>(newMockEvent())

  endowmentCreated12Event.parameters = new Array()

  endowmentCreated12Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated12Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated12Event
}

export function createRemoveAllowance12Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance12 {
  let removeAllowance12Event = changetype<RemoveAllowance12>(newMockEvent())

  removeAllowance12Event.parameters = new Array()

  removeAllowance12Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance12Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance12Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance12Event
}

export function createSwapToken12Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken12 {
  let swapToken12Event = changetype<SwapToken12>(newMockEvent())

  swapToken12Event.parameters = new Array()

  swapToken12Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken12Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken12Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken12Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken12Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken12Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken12Event
}

export function createUpdateConfig12Event(
  config: ethereum.Tuple
): UpdateConfig12 {
  let updateConfig12Event = changetype<UpdateConfig12>(newMockEvent())

  updateConfig12Event.parameters = new Array()

  updateConfig12Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig12Event
}

export function createUpdateEndowment12Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment12 {
  let updateEndowment12Event = changetype<UpdateEndowment12>(newMockEvent())

  updateEndowment12Event.parameters = new Array()

  updateEndowment12Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment12Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment12Event
}

export function createUpdateEndowmentState12Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState12 {
  let updateEndowmentState12Event = changetype<UpdateEndowmentState12>(
    newMockEvent()
  )

  updateEndowmentState12Event.parameters = new Array()

  updateEndowmentState12Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState12Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState12Event
}

export function createAllowanceStateUpdatedTo13Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address,
  allowance: ethereum.Tuple
): AllowanceStateUpdatedTo13 {
  let allowanceStateUpdatedTo13Event = changetype<AllowanceStateUpdatedTo13>(
    newMockEvent()
  )

  allowanceStateUpdatedTo13Event.parameters = new Array()

  allowanceStateUpdatedTo13Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  allowanceStateUpdatedTo13Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  allowanceStateUpdatedTo13Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  allowanceStateUpdatedTo13Event.parameters.push(
    new ethereum.EventParam("allowance", ethereum.Value.fromTuple(allowance))
  )

  return allowanceStateUpdatedTo13Event
}

export function createDaoContractCreated13Event(
  _CreateDaoMessage: ethereum.Tuple,
  daoAddress: Address
): DaoContractCreated13 {
  let daoContractCreated13Event = changetype<DaoContractCreated13>(
    newMockEvent()
  )

  daoContractCreated13Event.parameters = new Array()

  daoContractCreated13Event.parameters.push(
    new ethereum.EventParam(
      "_CreateDaoMessage",
      ethereum.Value.fromTuple(_CreateDaoMessage)
    )
  )
  daoContractCreated13Event.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoContractCreated13Event
}

export function createDonationDeposited13Event(
  _id: BigInt,
  _amount: BigInt
): DonationDeposited13 {
  let donationDeposited13Event = changetype<DonationDeposited13>(newMockEvent())

  donationDeposited13Event.parameters = new Array()

  donationDeposited13Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  donationDeposited13Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return donationDeposited13Event
}

export function createDonationMatchSetup13Event(
  id: BigInt,
  donationMatchContract: Address
): DonationMatchSetup13 {
  let donationMatchSetup13Event = changetype<DonationMatchSetup13>(
    newMockEvent()
  )

  donationMatchSetup13Event.parameters = new Array()

  donationMatchSetup13Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationMatchSetup13Event.parameters.push(
    new ethereum.EventParam(
      "donationMatchContract",
      ethereum.Value.fromAddress(donationMatchContract)
    )
  )

  return donationMatchSetup13Event
}

export function createDonationWithdrawn13Event(
  id: BigInt,
  recipient: Address,
  amount: BigInt
): DonationWithdrawn13 {
  let donationWithdrawn13Event = changetype<DonationWithdrawn13>(newMockEvent())

  donationWithdrawn13Event.parameters = new Array()

  donationWithdrawn13Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  donationWithdrawn13Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  donationWithdrawn13Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationWithdrawn13Event
}

export function createEndowmentCreated13Event(
  id: BigInt,
  endowment: ethereum.Tuple
): EndowmentCreated13 {
  let endowmentCreated13Event = changetype<EndowmentCreated13>(newMockEvent())

  endowmentCreated13Event.parameters = new Array()

  endowmentCreated13Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  endowmentCreated13Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return endowmentCreated13Event
}

export function createRemoveAllowance13Event(
  sender: Address,
  spender: Address,
  tokenAddress: Address
): RemoveAllowance13 {
  let removeAllowance13Event = changetype<RemoveAllowance13>(newMockEvent())

  removeAllowance13Event.parameters = new Array()

  removeAllowance13Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  removeAllowance13Event.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  removeAllowance13Event.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return removeAllowance13Event
}

export function createSwapToken13Event(
  _id: BigInt,
  _accountType: i32,
  _amount: BigInt,
  _tokenIn: Address,
  _tokenOut: Address,
  _amountOut: BigInt
): SwapToken13 {
  let swapToken13Event = changetype<SwapToken13>(newMockEvent())

  swapToken13Event.parameters = new Array()

  swapToken13Event.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  swapToken13Event.parameters.push(
    new ethereum.EventParam(
      "_accountType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_accountType))
    )
  )
  swapToken13Event.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  swapToken13Event.parameters.push(
    new ethereum.EventParam("_tokenIn", ethereum.Value.fromAddress(_tokenIn))
  )
  swapToken13Event.parameters.push(
    new ethereum.EventParam("_tokenOut", ethereum.Value.fromAddress(_tokenOut))
  )
  swapToken13Event.parameters.push(
    new ethereum.EventParam(
      "_amountOut",
      ethereum.Value.fromUnsignedBigInt(_amountOut)
    )
  )

  return swapToken13Event
}

export function createUpdateConfig13Event(
  config: ethereum.Tuple
): UpdateConfig13 {
  let updateConfig13Event = changetype<UpdateConfig13>(newMockEvent())

  updateConfig13Event.parameters = new Array()

  updateConfig13Event.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return updateConfig13Event
}

export function createUpdateEndowment13Event(
  id: BigInt,
  endowment: ethereum.Tuple
): UpdateEndowment13 {
  let updateEndowment13Event = changetype<UpdateEndowment13>(newMockEvent())

  updateEndowment13Event.parameters = new Array()

  updateEndowment13Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowment13Event.parameters.push(
    new ethereum.EventParam("endowment", ethereum.Value.fromTuple(endowment))
  )

  return updateEndowment13Event
}

export function createUpdateEndowmentState13Event(
  id: BigInt,
  state: ethereum.Tuple
): UpdateEndowmentState13 {
  let updateEndowmentState13Event = changetype<UpdateEndowmentState13>(
    newMockEvent()
  )

  updateEndowmentState13Event.parameters = new Array()

  updateEndowmentState13Event.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  updateEndowmentState13Event.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromTuple(state))
  )

  return updateEndowmentState13Event
}
