import{
  Lockedwithdraw as lockedwithdrawContract,
  LockedwithdrawInitialized as LockedwithdrawInitializedEvent,
  LockedWithdrawAPTeam as LockedWithdrawAPTeamEvent,
  LockedWithdrawApproved as LockedWithdrawApprovedEvent,
  LockedWithdrawEndowment as LockedWithdrawEndowmentEvent,
  LockedWithdrawInitiated as LockedWithdrawInitiatedEvent,
  LockedWithdrawRejected as LockedWithdrawRejectedEvent,
} from "../generated/Lockedwithdraw/Lockedwithdraw"
  
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

  // Locked Withdraw
export function handleLockedWithdrawInitiated(event: LockedWithdrawInitiatedEvent): void{
    let lockedWithdrawInitiated = new Withdrawal(event.params.accountId.toString())
    if(lockedWithdrawInitiated){
      lockedWithdrawInitiated.id = event.params.accountId.toString()
      lockedWithdrawInitiated.pending = event.params.initiator
      lockedWithdrawInitiated.beneficiary = event.params._beneficiary
      lockedWithdrawInitiated.tokenAddress = addressesToBytes(event.params._tokenAddress)
      lockedWithdrawInitiated.amount = event.params._amount
    
      lockedWithdrawInitiated.save()
    }
  }
  
  export function handleLockedWithdrawRejected(event: LockedWithdrawRejectedEvent): void{
    let lockedWithdrawRejected = Withdrawal.load(event.params.accountId.toString())
    if(lockedWithdrawRejected){
      lockedWithdrawRejected.id = event.params.accountId.toString()
      lockedWithdrawRejected.save()
    }
  }
  
  export function handleLockedWithdrawApproved(event: LockedWithdrawApprovedEvent): void{
    let lockedWithdrawApproved = Withdrawal.load(event.params.accountId.toString())
    if(lockedWithdrawApproved){
      lockedWithdrawApproved.id = event.params.accountId.toString()
      lockedWithdrawApproved.beneficiary = event.params._beneficiary
      lockedWithdrawApproved.tokenAddress =addressesToBytes(event.params._tokenAddress)
      lockedWithdrawApproved.amount = event.params._amount
      lockedWithdrawApproved.save()
    }
  }
  
  export function handleLockedWithdrawAPTeam(event: LockedWithdrawAPTeamEvent): void{
    let lockedWithdrawAPTeam = new LockedWihtdrawalConfig(event.params.accountId.toString())
    if(lockedWithdrawAPTeam){
      lockedWithdrawAPTeam.id = event.params.accountId.toString()
      lockedWithdrawAPTeam.apTeamMultisig = event.params.sender
      lockedWithdrawAPTeam.save()
    }
  }
  
  export function handleLockedWithdrawEndowment(event: LockedWithdrawEndowmentEvent): void{
    let lockedWithdrawEndowment = LockedWihtdrawalConfig.load(event.params.accountId.toString())
    if(lockedWithdrawEndowment){
      lockedWithdrawEndowment.id = event.params.accountId.toString()
      lockedWithdrawEndowment.endowFactory = event.params.sender
      lockedWithdrawEndowment.save()
    }
  }

  export function handleLockedwithdrawInitialized(event: LockedwithdrawInitializedEvent): void{
    let lockedwithdrawInitialized = new Withdrawal(event.params.version.toString())
    if(lockedwithdrawInitialized){
      lockedwithdrawInitialized.id = event.params.version.toString()
      lockedwithdrawInitialized.save()
    }
  }
  