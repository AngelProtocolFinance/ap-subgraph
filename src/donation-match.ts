import{
  donationMatch as donationMatchContract,
  donationMatchExecuted as donationMatchExecutedEvent,
  donationMatchInitialized as donationMatchInitializedEvent,
  erc20ApprovalGiven as erc20ApprovalGivenEvent,
  erc20Transfer as erc20TransferEvent,
  erc20Burned as erc20BurnedEvent,
} from "../generated/donationMatch/donationMatch"

import {
    AccountsConfig, Categories, AccountStrategies, OneOffVaults, RebalanceDetails, EndowmentFee, Delegate, SettingsPermission, SettingsController, SplitDetails, Endowment, SocialMedialUrls, Profile, AllowanceData, GenericBalance, BalanceInfo, DonationsReceived, EndowmentState, AccountState, SubDAOConfig, ExecuteData, Poll, MultisigConfig, MultisigTransaction, Confirmation, CharityConfig, CharityApplicationProposal, IndexfundConfig, IndexfundState, IndexFund, AcceptedTokens, RegistrarConfig, YieldVault, NetworkInfo, Network_Connection, Fee, AllowanceRemove, TokenSwap, DonationMatchSet, DepositCharity, GasDispatched, SeedFunded, Withdrawal, LockedWihtdrawalConfig, SubDAOState, VotingStatus, SubdaoTransferFrom, SubdaoTransfer, DonationMatchConfig, DonationMatchExecute, erc20, FundEndowment, VoterInfo
  } from "../generated/schema"
  
  import { Bytes, Address } from '@graphprotocol/graph-ts';
  
  // Convert an array of Ethereum addresses to an array of 20-byte values
  function addressesToBytes(addresses: Address[]) : Bytes[]{
    let bytes = new Array<Bytes>(addresses.length)
    for(let i = 0; i < addresses.length; i++){
      bytes[i] = Bytes.fromHexString(addresses[i].toHexString().slice(2))
    }
    return bytes
  }

  // Donation Match
export function handledonationMatchInitialized(event: donationMatchInitializedEvent): void{
    let donationMatch = new DonationMatchConfig(event.params.donationMatch.toString())
    if(donationMatch){
      donationMatch.id = event.params.endowment_id.toString()
      donationMatch.donation_match = event.params.donationMatch
      donationMatch.reserve_token = event.params.config.reserve_token
      donationMatch.uniswap_factory = event.params.config.uniswap_factory
      donationMatch.USDC_address = event.params.config.USDC_address
      donationMatch.registrar_contract = event.params.config.registrar_contract
      donationMatch.pool_fee = event.params.config.pool_fee
   
      donationMatch.save()
    }
  }
  
  export function handledonationMatchExecuted(event: donationMatchExecutedEvent): void{
    let donationMatchexecute = new DonationMatchExecute(event.params.donationMatch.toString())
    if(donationMatchexecute){
      donationMatchexecute.id = event.params.endowment_id.toString()
      donationMatchexecute.donation_match = event.params.donationMatch
      donationMatchexecute.amount = event.params.amount
      donationMatchexecute.accounts_contract = event.params.accounts_contract
      donationMatchexecute.tokenAddress = event.params.tokenAddress
      donationMatchexecute.donor = event.params.donor
      donationMatchexecute.save()
    }
  }
  
  export function handleerc20ApprovalGiven(event: erc20ApprovalGivenEvent): void{
    let erc20Approval = new erc20(event.params.endowment_id.toString())
    if(erc20Approval){
      erc20Approval.id = event.params.endowment_id.toString()
      erc20Approval.tokenAddress = event.params.tokenAddress
      erc20Approval.spender = event.params.spender
      erc20Approval.amount = event.params.amount
      erc20Approval.save()
    }
  }
  
  export function handleerc20Burned(event: erc20BurnedEvent): void{
    let erc20Burn = erc20.load(event.params.endowment_id.toString())
    if(erc20Burn){
      erc20Burn.id = event.params.endowment_id.toString()
      erc20Burn.tokenAddress = event.params.tokenAddress
      erc20Burn.amount = event.params.amount
      erc20Burn.save()
    }
  }
  
  export function handleerc20Transfer(event: erc20TransferEvent): void{
    let erc20Transfer = erc20.load(event.params.endowment_id.toString())
    if(erc20Transfer){
      erc20Transfer.id = event.params.endowment_id.toString()
      erc20Transfer.tokenAddress = event.params.tokenAddress
      erc20Transfer.recipient = event.params.recipient
      erc20Transfer.amount = event.params.amount
      erc20Transfer.save()
    }
  }
  