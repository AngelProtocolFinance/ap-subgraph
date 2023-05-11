
import {
  donationMatchCharity as donationMatchCharityContract,
  donationMatchCharityInitialized as donationMatchCharityInitializedEvent,
  donationMatchCharityExecuted as donationMatchCharityExecutedEvent,
  donationMatchCharityErc20ApprovalGiven as donationMatchCharityErc20ApprovalGivenEvent,
  donationMatchCharityErc20Transfer as donationMatchCharityErc20TransferEvent,
  donationMatchCharityErc20Burned as donationMatchCharityErc20BurnedEvent,
} from "../generated/donationMatchCharity/donationMatchCharity"

import {
  AccountsConfig, Categories, AccountStrategies, OneOffVaults, RebalanceDetails, EndowmentFee, Delegate, SettingsPermission, SettingsController, SplitDetails, Endowment, SocialMedialUrls, Profile, AllowanceData, GenericBalance, BalanceInfo, DonationsReceived, EndowmentState, AccountState, SubDAOConfig, ExecuteData, Poll, MultisigConfig, MultisigTransaction, Confirmation, CharityConfig, CharityApplicationProposal, IndexfundConfig, IndexfundState, IndexFund, AcceptedTokens, RegistrarConfig, YieldVault, NetworkInfo, Network_Connection, Fee, AllowanceRemove, TokenSwap, DonationMatchSet, DepositCharity, GasDispatched, SeedFunded, Withdrawal, LockedWihtdrawalConfig, SubDAOState, VotingStatus, SubdaoTransferFrom, SubdaoTransfer, DonationMatchConfig, DonationMatchExecute, erc20, FundEndowment, VoterInfo, DonationMatchCharity
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

// Donation Match Charity
export function handledonationMatchCharityInitialized(event: donationMatchCharityInitializedEvent): void{
  let donationMatchCharity = new DonationMatchCharity(event.params.version.toString())
  if(donationMatchCharity){
    donationMatchCharity.version = event.params.version

    donationMatchCharity.save()
  }
}

export function handledonationMatchCharityExecuted(event: donationMatchCharityExecutedEvent): void{
  let donationMatchCharityexecute = new DonationMatchExecute(event.params.donationMatch.toString())
  if(donationMatchCharityexecute){
    donationMatchCharityexecute.id = event.params.endowment_id.toString()
    donationMatchCharityexecute.donation_match = event.params.donationMatch 
    donationMatchCharityexecute.amount = event.params.amount
    donationMatchCharityexecute.accounts_contract = event.params.accounts_contract
    donationMatchCharityexecute.tokenAddress = event.params.tokenAddress
    donationMatchCharityexecute.donor = event.params.donor
    donationMatchCharityexecute.save()
  }
}

export function handledonationMatchCharityErc20ApprovalGiven(event: donationMatchCharityErc20ApprovalGivenEvent): void{
  let erc20Approvalcharity = new erc20(event.params.endowment_id.toString())
  if(erc20Approvalcharity){
    erc20Approvalcharity.id = event.params.endowment_id.toString()
    erc20Approvalcharity.tokenAddress = event.params.tokenAddress
    erc20Approvalcharity.spender = event.params.spender
    erc20Approvalcharity.amount = event.params.amount
    erc20Approvalcharity.save()
  }
}

export function handledonationMatchCharityErc20Burned(event: donationMatchCharityErc20BurnedEvent): void{
  let erc20Burncharity = erc20.load(event.params.endowment_id.toString())
  if(erc20Burncharity){
    erc20Burncharity.id = event.params.endowment_id.toString()
    erc20Burncharity.tokenAddress = event.params.tokenAddress
    erc20Burncharity.amount = event.params.amount
    erc20Burncharity.save()
  }
}

export function handledonationMatchCharityErc20Transfer(event: donationMatchCharityErc20TransferEvent): void{
  let erc20Transfercharity = erc20.load(event.params.endowment_id.toString())
  if(erc20Transfercharity){
    erc20Transfercharity.id = event.params.endowment_id.toString()
    erc20Transfercharity.tokenAddress = event.params.tokenAddress
    erc20Transfercharity.recipient = event.params.recipient
    erc20Transfercharity.amount = event.params.amount
    erc20Transfercharity.save()
  }
}
