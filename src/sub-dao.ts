import{
  subDAO as subdaoContract,
  subdaoInitialized as subdaoInitializedEvent,
  subdaoTransfer as subdaoTransferEvent,
  subdaoTransferFrom as subdaoTransferFromEvent,
  subdaoUpdateConfig as subdaoUpdateConfigEvent,
  subdaoUpdatePoll as subdaoUpdatePollEvent,
  subdaoUpdatePollStatus as subdaoUpdatePollStatusEvent,
  subdaoUpdateState as subdaoUpdateStateEvent,
  subdapUpdateVotingStatus as subdapUpdateVotingStatusEvent,
} from "../generated/subDAO/subDAO"

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

  // SubDAO
export function handlesubdaoUpdateConfig(event: subdaoUpdateConfigEvent): void{
    let daoConfig = new SubDAOConfig(event.params.subdao.toString())
    if(daoConfig){
      daoConfig.id = event.params.subdao.toString()
      daoConfig.registrar_contract = event.params.config.registrar_contract
      daoConfig.owner = event.params.config.owner
      daoConfig.dao_token = event.params.config.dao_token
      daoConfig.ve_token = event.params.config.ve_token
      daoConfig.swap_factory = event.params.config.swap_factory
      daoConfig.quorum = event.params.config.quorum
      daoConfig.threshold = event.params.config.threshold
      daoConfig.voting_period  = event.params.config.voting_period
      daoConfig.timelock_period = event.params.config.timelock_period
      daoConfig.expiration_period = event.params.config.expiration_period
      daoConfig.proposal_deposit = event.params.config.proposal_deposit
      daoConfig.snapshot_period = event.params.config.snapshot_period
      daoConfig.save()
    }
  }
  
  export function handlesubdaoUpdateState(event: subdaoUpdateStateEvent): void{
    let daoState = new SubDAOState(event.params.subdao.toString())
    if(daoState){
      daoState.id = event.params.subdao.toString()
      daoState.poll_count = event.params.state.poll_count
      daoState.total_share = event.params.state.total_share
      daoState.total_deposit = event.params.state.total_deposit
      daoState.save()
    }
  }
  
  export function handlesubdaoUpdatePoll(event: subdaoUpdatePollEvent): void{
    let daoPoll = new Poll(event.params.id.toString())
    if(daoPoll){
      daoPoll.id = event.params.id.toString()
      daoPoll.creator = event.params.poll.creator
      daoPoll.status = "Passed"
      daoPoll.yes_votes = event.params.poll.yes_votes
      daoPoll.no_votes = event.params.poll.no_votes
      daoPoll.start_block = event.params.poll.start_block
      daoPoll.start_time = event.params.poll.start_time
      daoPoll.end_height = event.params.poll.end_height
      daoPoll.title = event.params.poll.title
      daoPoll.description = event.params.poll.description
      daoPoll.link = event.params.poll.link
  
      let execute_data = new ExecuteData(event.params.poll.id.toHexString())
      execute_data.id = event.params.poll.id.toHexString()
      execute_data.order = event.params.poll.execute_data.order
      execute_data.contract_address = addressesToBytes(event.params.poll.execute_data.contract_address)
      execute_data.execution_message = event.params.poll.execute_data.execution_message
      execute_data.save()
  
      daoPoll.deposit_amount = event.params.poll.deposit_amount
      daoPoll.total_balance_at_end_poll = event.params.poll.total_balance_at_end_poll
      daoPoll.staked_amount = event.params.poll.staked_amount
      daoPoll.save()
    }
  }
  
  export function handlesubdaoUpdatePollStatus(event: subdaoUpdatePollStatusEvent): void{
    let pollStatus = Poll.load(event.params.id.toString())
    if(pollStatus){
      pollStatus.id = event.params.id.toString()
      pollStatus.creator = event.params.subdao
      pollStatus.status = "Rejected"
      pollStatus.save()
    }
  }
  
  export function handlesubdapUpdateVotingStatus(event: subdapUpdateVotingStatusEvent): void{
    let votingStatus = new VotingStatus(event.params.poll_id.toString())
    if(votingStatus){
      votingStatus.id = event.params.poll_id.toString()
      votingStatus.voter_address = event.params.subdao
  
      let voter_info = new VoterInfo(event.params.poll_id.toHexString())
      voter_info.votes = "Yes"
      voter_info.balance = event.params.voterInfo.balance
      voter_info.voted = event.params.voterInfo.voted
      voter_info.save()
  
      votingStatus.save()
    }
  }
  
  export function handlesubdaoTransfer(event: subdaoTransferEvent): void{
    let transfer = new SubdaoTransfer(event.params.subdao.toString())
    if(transfer){
      transfer.id = event.params.subdao.toString()
      transfer.tokenAddress = event.params.tokenAddress
      transfer.recipient = event.params.recipient
      transfer.amount = event.params.amount
      transfer.save()
    }
  }
  
  export function handlesubdaoTransferFrom(event: subdaoTransferFromEvent): void{
    let transferFrom = new SubdaoTransferFrom(event.params.subdao.toString())
    if(transferFrom){
      transferFrom.id = event.params.subdao.toString()
      transferFrom.tokenAddress = event.params.tokenAddress
      transferFrom.from = event.params.from
      transferFrom.to = event.params.to
      transferFrom.amount = event.params.amount
      transferFrom.save()
    }
  }

  export function handlesubdaoInitialized(event: subdaoInitializedEvent): void{
    let dao = new SubDAOConfig(event.params.subdao.toString())
    if(dao){
      dao.id = event.params.subdao.toString()
      dao.registrar_contract = event.params.instantiate_msg.registrar_contract
      dao.owner = event.params.instantiate_msg.owner
      dao.dao_token = event.params.instantiate_msg.token.data.ExistingCw20_data
      dao.ve_token = event.params.instantiate_msg.endow_owner
      dao.quorum = event.params.instantiate_msg.quorum
      dao.threshold = event.params.instantiate_msg.threshold
      dao.voting_period  = event.params.instantiate_msg.voting_period
      dao.timelock_period = event.params.instantiate_msg.timelock_period
      dao.expiration_period = event.params.instantiate_msg.expiration_period
      dao.proposal_deposit = event.params.instantiate_msg.proposal_deposit
      dao.snapshot_period = event.params.instantiate_msg.snapshot_period

      dao.save()
    }
  }