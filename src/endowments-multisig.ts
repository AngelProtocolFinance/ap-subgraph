import{
  EndowmentsMultisig as EndowmentsMultisigContract,
  EndowmentsMultisigEndowmentConfirmation as EndowmentConfirmationEvent,
  EndowmentsMultisigEndowmentDeposit as EndowmentDepositEvent,
  EndowmentsMultisigEndowmentExecution as EndowmentExecutionEvent,
  EndowmentsMultisigEndowmentExecutionFailure as EndowmentExecutionFailureEvent,
  EndowmentsMultisigEndowmentOwnerAddition as EndowmentOwnerAdditionEvent,
  EndowmentsMultisigEndowmentOwnerRemoval as EndowmentOwnerRemovalEvent,
  EndowmentsMultisigEndowmentRequirementChange as EndowmentRequirementChangeEvent,
  EndowmentsMultisigEndowmentRevocation as EndowmentRevocationEvent,
  EndowmentsMultisigEndowmentSubmission as EndowmentSubmissionEvent
} from "../generated/EndowmentsMultisig/EndowmentsMultisig"

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

// Endowment Multisigs
export function handleEndowmentsMultisigEndowmentConfirmation(event: EndowmentConfirmationEvent): void{
    let confirmation = new Confirmation(event.params.sender.toString())
    if(confirmation){
      confirmation.id = event.params.sender.toString()
      confirmation.confirmations = [event.params.sender]
      confirmation.save()
    } 
  }
  
  export function handleEndowmentsMultisigEndowmentDeposit(event: EndowmentDepositEvent): void{
    let deposit = new MultisigTransaction(event.params.sender.toString())
    if(deposit){
      deposit.destination = event.params.sender
      deposit.value = event.params.value
      deposit.save()
    }
  }
  
  export function handleEndowmentsMultisigEndowmentExecution(event: EndowmentExecutionEvent): void{
    let execution = MultisigTransaction.load(event.params.transactionId.toString())
    if(execution){
      execution.id = event.params.transactionId.toString()
      execution.save()
    }
  }
  
  export function handleEndowmentsMultisigEndowmentsMultisigEndowmentExecutionFailure(event: EndowmentExecutionFailureEvent): void{
    let executionFailure = MultisigTransaction.load(event.params.transactionId.toString())
    if(executionFailure){
      executionFailure.id = event.params.transactionId.toString()
      executionFailure.save()
    }
  }
  
  export function handleEndowmentsMultisigEndowmentOwnerAddition(event: EndowmentOwnerAdditionEvent): void{
      let ownerAddition = new MultisigConfig(event.params.owner.toString())
      if(ownerAddition){
        ownerAddition.owners = [event.params.owner]
        ownerAddition.save()
      } 
  }
  
  export function handleEndowmentsMultisigEndowmentOwnerRemoval(event: EndowmentOwnerRemovalEvent): void{
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
  
  export function handleEndowmentsMultisigEndowmentRequirementChange(event: EndowmentRequirementChangeEvent): void{
    let requirementChange = MultisigTransaction.load(event.params.required.toString())
    if(requirementChange){
      requirementChange.id = event.params.required.toString()
      requirementChange.save()
    }
  }
  
  export function handleEndowmentsMultisigEndowmentRevocation(event: EndowmentRevocationEvent): void{
    let revocation = MultisigTransaction.load(event.params.transactionId.toString())
    if(revocation){
      revocation.id = event.params.transactionId.toString()
      revocation.destination = event.params.sender
      revocation.save()
    }
  }
  
  export function handleEndowmentsMultisigEndowmentSubmission(event: EndowmentSubmissionEvent): void{
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