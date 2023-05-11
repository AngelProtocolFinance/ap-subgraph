import{
  Indexfund as IndexfundContract,
  indexFundCreated as indexFundCreatedEvent,
  indexFundRemoved as indexFundRemovedEvent,
  allianceMemberAdded as allianceMemberAddedEvent,
  allianceMemberRemoved as allianceMemberRemovedEvent,
  configUpdated as configUpdatedEvent,
  donationMessagesUpdated as donationMessagesUpdatedEvent,
  memberAdded as memberAddedEvent,
  memberRemoved as memberRemovedEvent,
  ownerUpdated as ownerUpdatedEvent,
  registrarUpdated as registrarUpdatedEvent,
  updateActiveFund as updateActiveFundEvent,
  updateIndexFundState as updateIndexFundStateEvent,
} from "../generated/Indexfund/Indexfund"

import {
  AccountsConfig, Categories, AccountStrategies, OneOffVaults, RebalanceDetails, EndowmentFee, Delegate, SettingsPermission, SettingsController, SplitDetails, Endowment, SocialMedialUrls, Profile, AllowanceData, GenericBalance, BalanceInfo, DonationsReceived, EndowmentState, AccountState, SubDAOConfig, ExecuteData, Poll, MultisigConfig, MultisigTransaction, Confirmation, CharityConfig, CharityApplicationProposal, IndexfundConfig, IndexfundState, IndexFund, AcceptedTokens, RegistrarConfig, YieldVault, NetworkInfo, Network_Connection, Fee, AllowanceRemove, TokenSwap, DonationMatchSet, DepositCharity, GasDispatched, SeedFunded, Withdrawal, LockedWihtdrawalConfig, SubDAOState, VotingStatus, SubdaoTransferFrom, SubdaoTransfer, DonationMatchConfig, DonationMatchExecute, erc20, FundEndowment, VoterInfo
} from "../generated/schema"

import { Bytes, Address, log } from '@graphprotocol/graph-ts';

// Convert an array of Ethereum addresses to an array of 20-byte values
function addressesToBytes(addresses: Address[]) : Bytes[]{
  let bytes = new Array<Bytes>(addresses.length)
  for(let i = 0; i < addresses.length; i++){
    bytes[i] = Bytes.fromHexString(addresses[i].toHexString().slice(2))
  }
  return bytes
}

// Index Funds
export function handleindexFundCreated(event: indexFundCreatedEvent): void{
  let indexFund = new IndexFund(event.params.id.toHexString())
  if(indexFund){
    indexFund.id = event.params.id.toHexString()
    indexFund.name = event.params.fund.name
    indexFund.description = event.params.fund.description

    let tempMembers: String[] = []

    // for(let i = 0; i < event.params.fund.members.length; i++){
    //   let temp = new FundEndowment(event.params.fund.id.toHexString())
    //   temp.id = event.params.fund.id.toHexString()
    //   temp.members = event.params.fund.members[i].toString()
    //   temp.save()
    //   tempMembers.push((temp.members))
    //   log.error("tempMembers: {}", [tempMembers.toString()])
    // }

    indexFund.members = event.params.fund.members
    indexFund.rotating_fund = event.params.fund.rotating_fund
    indexFund.split_to_liquid = event.params.fund.split_to_liquid
    indexFund.expiry_time = event.params.fund.expiry_time
    indexFund.expiry_height = event.params.fund.expiry_height

    indexFund.save()
  }
}

export function handleindexFundRemoved(event: indexFundRemovedEvent): void{
  let indexFundRemove = IndexFund.load(event.params.id.toHexString())
  if(indexFundRemove){
    indexFundRemove.id = event.params.id.toHexString()
    indexFundRemove.save()
  }
}

export function handleconfigUpdated(event: configUpdatedEvent): void{
  let indexfundConfigUpdate = new IndexfundConfig(event.params.config.owner.toHexString())
  if(indexfundConfigUpdate){
    indexfundConfigUpdate.owner = event.params.config.owner
    indexfundConfigUpdate.registrar_contract = event.params.config.registrar_contract
    // log.info("hello", [event.params.config.registrar_contract.toString()])
    indexfundConfigUpdate.fund_rotation = event.params.config.fund_rotation
    indexfundConfigUpdate.fund_member_limit = event.params.config.fund_member_limit
    indexfundConfigUpdate.funding_goal = event.params.config.funding_goal
    indexfundConfigUpdate.alliance_members = addressesToBytes(event.params.config.alliance_members)
    indexfundConfigUpdate.save()
  }
}

export function handleallianceMemberAdded(event: allianceMemberAddedEvent): void{
  let allianceMemberAdd = IndexfundConfig.load(event.params.member.toHexString())
  if(allianceMemberAdd){
    allianceMemberAdd.alliance_members = [event.params.member]
    allianceMemberAdd.save()
  }
}

export function handleallianceMemberRemoved(event: allianceMemberRemovedEvent): void{
  let allianceMemberRemove = IndexfundConfig.load(event.params.member.toHexString())
  if(allianceMemberRemove){
    allianceMemberRemove.alliance_members = [event.params.member]
    // allianceMemberRemove.alliance_members = null
    // let member = allianceMemberRemove.alliance_members
    // member.pop()
    // allianceMemberRemove.alliance_members = member  
    allianceMemberRemove.save()
  }
}

export function handleregistrarUpdated(event: registrarUpdatedEvent): void{
  let registrarUpdate = new RegistrarConfig(event.params.newRegistrar.toHexString())
  if(registrarUpdate){
    registrarUpdate.index_fund_contract = event.params.newRegistrar
    registrarUpdate.save()
  }
}

export function handlememberAdded(event: memberAddedEvent): void{
  let memberAdd = IndexFund.load(event.params.fund_id.toHexString())
  if(memberAdd){
    memberAdd.id = event.params.fund_id.toHexString()
    memberAdd.members = [event.params.member_id]
    memberAdd.save()
  }
}

export function handlememberRemoved(event: memberRemovedEvent): void{
  let memberRemove = IndexFund.load(event.params.fund_id.toHexString())
  if(memberRemove){
    memberRemove.id = event.params.fund_id.toHexString()
    memberRemove.members = [event.params.member_id]
    memberRemove.save()
  }
}

export function handleupdateActiveFund(event: updateActiveFundEvent): void{
  let activeFundUpdate = new IndexFund(event.params.fund_id.toHexString())
  if(activeFundUpdate){
    activeFundUpdate.id = event.params.fund_id.toHexString()
    activeFundUpdate.save()
  }
}

export function handleupdateIndexFundState(event: updateIndexFundStateEvent): void{
  let indexFundStateUpdate = new IndexfundState(event.params.state.next_fund_id.toHexString())
  if(indexFundStateUpdate){
    indexFundStateUpdate.total_funds = event.params.state.total_funds
    indexFundStateUpdate.next_fund_id = event.params.state.next_fund_id
    indexFundStateUpdate.active_fund = event.params.state.active_fund
    indexFundStateUpdate.round_donations = event.params.state.round_donations
    indexFundStateUpdate.next_rotation_block = event.params.state.next_rotation_block
    indexFundStateUpdate.save()
  }
}

export function handleownerUpdated(event: ownerUpdatedEvent): void{
  let ownerUpdate = IndexfundConfig.load(event.params.newOwner.toHexString())
  if(ownerUpdate){
    ownerUpdate.owner = event.params.newOwner
    ownerUpdate.save()
  }
}