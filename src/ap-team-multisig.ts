import{
  APTeamMultisig as APTeamMultisigContract,
  APTeamMultisigInitialized as APTeamMultisigInitializedEvent,
  APTeamMultisigConfirmation as APTeamConfirmationEvent,
  APTeamMultisigExecution as APTeamExecutionEvent,
  APTeamMultisigExecutionFailure as APTeamExecutionFailureEvent,
  APTeamMultisigOwnerAddition as APTeamOwnerAdditionEvent,
  APTeamMultisigOwnerRemoval as APTeamOwnerRemovalEvent,
  APTeamMultisigRequirementChange as APTeamRequirementChangeEvent,
  APTeamMultisigRevocation as APTeamRevocationEvent,
  APTeamMultisigSubmission as APTeamSubmissionEvent,
  APTeamMultisigDeposit as APTeamDepositEvent
} from "../generated/APTeamMultisig/APTeamMultisig"

import {
    AccountsConfig, Categories, AccountStrategies, OneOffVaults, RebalanceDetails, EndowmentFee, Delegate, SettingsPermission, SettingsController, SplitDetails, Endowment, SocialMedialUrls, Profile, AllowanceData, GenericBalance, BalanceInfo, DonationsReceived, EndowmentState, AccountState, SubDAOConfig, ExecuteData, Poll, MultisigConfig, MultisigTransaction, Confirmation, CharityConfig, CharityApplicationProposal, IndexfundConfig, IndexfundState, IndexFund, AcceptedTokens, RegistrarConfig, YieldVault, NetworkInfo, Network_Connection, Fee, AllowanceRemove, TokenSwap, DonationMatchSet, DepositCharity, GasDispatched, SeedFunded, Withdrawal, LockedWihtdrawalConfig, SubDAOState, VotingStatus, SubdaoTransferFrom, SubdaoTransfer, DonationMatchConfig, DonationMatchExecute, erc20, FundEndowment, VoterInfo
  } from "../generated/schema"
  
  import { Bytes, Address, store } from '@graphprotocol/graph-ts';
  
  // Convert an array of Ethereum addresses to an array of 20-byte values
  function addressesToBytes(addresses: Address[]) : Bytes[]{
    let bytes = new Array<Bytes>(addresses.length)
    for(let i = 0; i < addresses.length; i++){
      bytes[i] = Bytes.fromHexString(addresses[i].toHexString().slice(2))
    }
    return bytes
  }

// APTeam Multisigs
export function handleInitialized(event: APTeamMultisigInitializedEvent): void{
    let initialized = new MultisigTransaction(event.params.version.toString())
    if(initialized){
      initialized.id = event.params.version.toString()
      initialized.save()
    }
  }
  
  export function handleConfirmation(event: APTeamConfirmationEvent): void{
    let confirmation = new Confirmation(event.params.sender.toString())
    if(confirmation){
      confirmation.id = event.params.sender.toString()
      confirmation.confirmations = [event.params.sender]
      confirmation.save()
    }
  }
  
  export function handleDepositAPTeam(event: APTeamDepositEvent): void{
    let depositAPTeam = MultisigTransaction.load(event.params.sender.toString())
    if(depositAPTeam){
      depositAPTeam.destination = event.params.sender
      depositAPTeam.value = event.params.value
      depositAPTeam.save()
    }
  }
  
  export function handleExecution(event: APTeamExecutionEvent): void{
    let execution = MultisigTransaction.load(event.params.transactionId.toString())
    if(execution){
      execution.id = event.params.transactionId.toString()
      execution.save()
    }
  }
  
  export function handleExecutionFailure(event: APTeamExecutionFailureEvent): void{
    let executionFailure = MultisigTransaction.load(event.params.transactionId.toString())
    if(executionFailure){
      executionFailure.id = event.params.transactionId.toString()
      executionFailure.save()
    }
  }
  
  export function handleOwnerAddition(event: APTeamOwnerAdditionEvent): void{
    let ownerAddition = new MultisigConfig(event.params.owner.toString())
    if(ownerAddition){
      ownerAddition.owners = [event.params.owner]
      ownerAddition.save()
    } 
  }
  
  export function handleOwnerRemoval(event: APTeamOwnerRemovalEvent): void{
    let ownerRemoval = MultisigConfig.load(event.params.owner.toString())
    if(ownerRemoval){
      ownerRemoval.owners = [event.params.owner]
      // ownerRemoval.owners = null
      // let owner = ownerRemoval.owners
      // owner.pop()
      // ownerRemoval.owners = owner 
      ownerRemoval.save()
    }
  }
  
  export function handleRequirementChange(event: APTeamRequirementChangeEvent): void{
    let requirementChange = MultisigTransaction.load(event.params.required.toString())
    if(requirementChange){
      requirementChange.id = event.params.required.toString()
      requirementChange.save()
    }
  }
  
  export function handleRevocation(event: APTeamRevocationEvent): void{
    let revocation = MultisigTransaction.load(event.params.transactionId.toString())
    if(revocation){
      revocation.id = event.params.transactionId.toString()
      revocation.destination = event.params.sender
      revocation.save()
    }
  }
  
  export function handleSubmission(event: APTeamSubmissionEvent): void{
    let submission = new MultisigTransaction(event.params.transactionId.toString())
    if(submission){
      submission.id = event.params.transactionId.toString()
      submission.title = event.params.transaction.title
      submission.description = event.params.transaction.description
      submission.destination = event.params.transaction.destination
      submission.value = event.params.transaction.value
      submission.data = event.params.transaction.data
      submission.executed = event.params.transaction.executed
      submission.save()
    }
  }
  

