import{
  ApplicationMultisig as applicationsmultisigsContract,
  ApplicationMultisigConfirmation as ApplicationsConfirmationEvent,
  Execution as ApplicationsExecutionEvent,
  ExecutionFailure as ApplicationsExecutionFailureEvent,
  OwnerAddition as ApplicationsOwnerAdditionEvent,
  OwnerRemoval as ApplicationsOwnerRemovalEvent,
  RequirementChange as ApplicationsRequirementChangeEvent,
  Revocation as ApplicationsRevocationEvent,
  Submission as ApplicationsSubmissionEvent,
  Initialized as InitializedEvent,
  Deposit as DepositEvent
} from "../generated/ApplicationMultisig/ApplicationMultisig"

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

// Applications Multisigs
export function handleApplicationInitialized(event: InitializedEvent): void{
  let initialized = new MultisigTransaction(event.params.version.toString())
  if(initialized){
    initialized.id = event.params.version.toString()
    initialized.save()
  }
}

export function handleApplicationConfirmation(event: ApplicationsConfirmationEvent): void{
  let confirmation = new Confirmation(event.params.sender.toString())
  if(confirmation){
    confirmation.id = event.params.sender.toString()
    confirmation.confirmations = [event.params.sender]
    confirmation.save()
  }
}

export function handleApplicationDeposit(event: DepositEvent): void{
  let deposit = MultisigTransaction.load(event.params.sender.toString())
  if(deposit){
    deposit.destination = event.params.sender
    deposit.value = event.params.value
    deposit.save()
  }
}

export function handleApplicationExecution(event: ApplicationsExecutionEvent): void{
  let execution = MultisigTransaction.load(event.params.transactionId.toString())
  if(execution){
    execution.id = event.params.transactionId.toString()
    execution.save()
  }
}

export function handleApplicationExecutionFailure(event: ApplicationsExecutionFailureEvent): void{
  let executionFailure = MultisigTransaction.load(event.params.transactionId.toString())
  if(executionFailure){
    executionFailure.id = event.params.transactionId.toString()
    executionFailure.save()
  }
}

export function handleApplicationOwnerAddition(event: ApplicationsOwnerAdditionEvent): void{
  let ownerAddition = new MultisigConfig(event.params.owner.toString())
  if(ownerAddition){
    ownerAddition.owners = [event.params.owner]
    ownerAddition.save()
  } 
}

export function handleApplicationOwnerRemoval(event: ApplicationsOwnerRemovalEvent): void{
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

export function handleApplicationRequirementChange(event: ApplicationsRequirementChangeEvent): void{
  let requirementChange = MultisigTransaction.load(event.params.required.toString())
  if(requirementChange){
    requirementChange.id = event.params.required.toString()
    requirementChange.save()
  }
}

export function handleApplicationRevocation(event: ApplicationsRevocationEvent): void{
  let revocation = MultisigTransaction.load(event.params.transactionId.toString())
  if(revocation){
    revocation.id = event.params.transactionId.toString()
    revocation.destination = event.params.sender
    revocation.save()
  }
}

export function handleApplicationSubmission(event: ApplicationsSubmissionEvent): void{
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
