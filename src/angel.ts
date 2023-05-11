import {
  Angel as AngelContract,
  AllowanceStateUpdatedTo as AllowanceStateUpdatedToEvent,
  DaoContractCreated as DaoContractCreatedEvent,
  DonationDeposited as DonationDepositedEvent,
  DonationWithdrawn as DonationWithdrawnEvent,
  DonationMatchSetup as DonationMatchSetupEvent,
  EndowmentCreated as EndowmentCreatedEvent,
  RemoveAllowance as RemoveAllowanceEvent,
  SwapToken as SwapTokenEvent,
  UpdateConfig as UpdateConfigEvent,
  UpdateEndowment as UpdateEndowmentEvent,
  UpdateEndowmentState as UpdateEndowmentStateEvent
} from "../generated/Angel/Angel"

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

export function handleEndowmentCreated(event: EndowmentCreatedEvent): void {
  let endowment = new Endowment(event.params.id.toHexString())
  if(endowment){
    endowment.id = event.params.id.toHexString()

    endowment.owner = event.params.endowment.owner
    endowment.name = event.params.endowment.name
    endowment.tier = event.params.endowment.tier
    endowment.logo = event.params.endowment.logo
    endowment.deposit_approved = event.params.endowment.deposit_approved
    endowment.withdraw_approved = event.params.endowment.withdraw_approved
    endowment.maturity_time = event.params.endowment.maturity_time

    // endowment.categories = [event.params.endowment.categories.toString()]
    let categories = new Categories(event.params.id.toHexString())
    categories.id = event.params.id.toHexString()
    categories.sdgs = event.params.endowment.categories.sdgs
    categories.general = event.params.endowment.categories.general
    categories.save()

    // endowment.endow_type = event.params.endowment.endow_type.toString()
    // const endowmentTypeValue = event.params.endowment.endow_type;
    // const endowmentType = EndowmentType[endowmentTypeValue];
    endowment.endow_type = "Charity"

    // endowment.status = event.params.endowment.status.toString()
    // const endowmentStatusValue = event.params.endowment.endow_type;
    // const endowmentStatus = EndowmentStatus[endowmentStatusValue];
    endowment.status = "Approved"

    // endowment.strategies = event.params.endowment.strategies.toString()
    let strategies = new AccountStrategies(event.params.id.toHexString())
    strategies.id = event.params.id.toHexString()
    strategies.locked_percentage = event.params.endowment.strategies.locked_percentage
    strategies.liquid_percentage = event.params.endowment.strategies.liquid_percentage
    strategies.locked_vault = event.params.endowment.strategies.locked_vault
    strategies.liquid_vault = event.params.endowment.strategies.liquid_vault
    strategies.save()

    // endowment.oneoff_vaults = event.params.endowment.oneoff_vaults.toString()
    let oneoff_vaults = new OneOffVaults(event.params.id.toHexString())
    oneoff_vaults.id = event.params.id.toHexString()
    oneoff_vaults.locked = event.params.endowment.oneoff_vaults.locked
    oneoff_vaults.liquid = event.params.endowment.oneoff_vaults.liquid
    oneoff_vaults.locked_amount = event.params.endowment.oneoff_vaults.locked_amount
    oneoff_vaults.liquid_amount = event.params.endowment.oneoff_vaults.liquid_amount
    oneoff_vaults.save()

    // endowment.rebalance = event.params.endowment.rebalance.toString()
    let rebalance = new RebalanceDetails(event.params.id.toHexString())
    rebalance.id = event.params.id.toHexString()
    rebalance.rebalance_liquid_invested_profits = event.params.endowment.rebalance.rebalance_liquid_invested_profits
    rebalance.locked_interests_to_liquid = event.params.endowment.rebalance.locked_interests_to_liquid
    rebalance.interest_distribution = event.params.endowment.rebalance.interest_distribution.toI32()
    rebalance.locked_principle_to_liquid = event.params.endowment.rebalance.locked_principle_to_liquid
    rebalance.principle_distribution = event.params.endowment.rebalance.principle_distribution.toI32()
    rebalance.save()

    endowment.kyc_donors_only = event.params.endowment.kyc_donors_only
    endowment.pending_redemptions = event.params.endowment.pending_redemptions.toI32()
    endowment.copycat_strategy = event.params.endowment.copycat_strategy.toI32()
    endowment.proposal_link = event.params.endowment.proposal_link
    endowment.dao = event.params.endowment.dao
    endowment.dao_token = event.params.endowment.dao_token
    endowment.donation_match_active = event.params.endowment.donation_match_active
    endowment.donation_match_contract = event.params.endowment.donation_match_contract
    endowment.whitelisted_beneficiaries = addressesToBytes(event.params.endowment.whitelisted_beneficiaries)
    endowment.whitelisted_contributors = addressesToBytes(event.params.endowment.whitelisted_contributors)
    endowment.maturity_whitelist = addressesToBytes(event.params.endowment.maturity_whitelist)
    endowment.earnings_fee = event.params.endowment.earnings_fee.fee_percentage
    endowment.deposit_fee = event.params.endowment.deposit_fee.fee_percentage
    endowment.withdraw_fee = event.params.endowment.withdraw_fee.fee_percentage
    endowment.aum_fee = event.params.endowment.aum_fee.fee_percentage

    let delegate = new Delegate(event.params.id.toHexString())
    delegate.id = event.params.id.toHexString()
    delegate.addr = event.params.endowment.settings_controller.settings_controller.delegate.Addr
    delegate.expires = event.params.endowment.settings_controller.settings_controller.delegate.expires
    delegate.save()

    let settings_permission = new SettingsPermission(event.params.id.toHexString())
    settings_permission.id = event.params.id.toHexString()
    settings_permission.owner_controlled = event.params.endowment.settings_controller.settings_controller.owner_controlled
    settings_permission.gov_controlled = event.params.endowment.settings_controller.settings_controller.gov_controlled
    settings_permission.modifiable_after_init = event.params.endowment.settings_controller.settings_controller.modifiable_after_init
    settings_permission.save()

    // endowment.settings_controller = event.params.endowment.settings_controller.toString()
    let settings_controller = new SettingsController(event.params.id.toHexString())
    settings_controller.id = event.params.id.toHexString()
    settings_controller.endowment_controller = event.params.endowment.settings_controller.settings_controller.delegate.Addr.toString()
    settings_controller.strategies = event.params.endowment.settings_controller.strategies.delegate.Addr.toString()
    settings_controller.whitelisted_beneficiaries = event.params.endowment.settings_controller.whitelisted_beneficiaries.delegate.Addr.toString()
    settings_controller.whitelisted_contributors = event.params.endowment.settings_controller.whitelisted_contributors.delegate.Addr.toString()
    settings_controller.maturity_whitelist = event.params.endowment.settings_controller.settings_controller.delegate.Addr.toString()
    settings_controller.maturity_time = event.params.endowment.settings_controller.maturity_time.delegate.expires.toString()
    settings_controller.profile = event.params.endowment.settings_controller.profile.delegate.Addr.toString()
    settings_controller.earnings_fee = event.params.endowment.settings_controller.earnings_fee.delegate.expires.toString()
    settings_controller.withdraw_fee = event.params.endowment.settings_controller.withdraw_fee.delegate.expires.toString()
    settings_controller.deposit_fee = event.params.endowment.settings_controller.deposit_fee.delegate.expires.toString()
    settings_controller.aum_fee = event.params.endowment.settings_controller.aum_fee.delegate.expires.toString()
    settings_controller.kyc_donors_only = event.params.endowment.settings_controller.kyc_donors_only.delegate.Addr.toString()
    settings_controller.name = event.params.endowment.settings_controller.name.delegate.Addr.toString()
    settings_controller.image = event.params.endowment.settings_controller.image.owner_controlled.toString()
    settings_controller.logo = event.params.endowment.settings_controller.logo.owner_controlled.toString()
    settings_controller.categories = event.params.endowment.settings_controller.categories.owner_controlled.toString()
    settings_controller.save()

    endowment.parent = event.params.endowment.parent.toI32()
    endowment.ignore_user_splits = event.params.endowment.ignore_user_splits

    // endowment.split_to_liquid = event.params.endowment.split_to_liquid.toString()
    let split_to_liquid = new SplitDetails(event.params.id.toHexString())
    split_to_liquid.id = event.params.id.toHexString()
    split_to_liquid.max = event.params.endowment.split_to_liquid.max
    split_to_liquid.min = event.params.endowment.split_to_liquid.min
    split_to_liquid.defaultSplit = event.params.endowment.split_to_liquid.defaultSplit
    split_to_liquid.save()

    endowment.save()
  }
}

// Accounts
export function handleUpdateEndowmentState(event: UpdateEndowmentStateEvent): void {
  let EndowState = new EndowmentState(event.params.id.toHexString())
  if(EndowState){
    EndowState.id = event.params.id.toHexString()

    // EndowState.donations_received = event.params.state.donations_received.toString()
    let donations_received = new DonationsReceived(event.params.id.toHexString())
    donations_received.id = event.params.id.toHexString()
    donations_received.locked = event.params.state.donations_received.locked
    donations_received.liquid = event.params.state.donations_received.liquid
    donations_received.save()

    let generic_bal = new GenericBalance(event.params.id.toHexString())
    generic_bal.id = event.params.id.toHexString()
    generic_bal.coin_native_amount = event.params.state.balances.locked.coin_native_amount
    generic_bal.Cw20CoinVerified_amount = event.params.state.balances.locked.Cw20CoinVerified_amount
    generic_bal.Cw20CoinVerified_addr = addressesToBytes(event.params.state.balances.locked.Cw20CoinVerified_addr)
    generic_bal.save()
    // EndowState.balances = event.params.state.balances.toString()
    let balance = new BalanceInfo(event.params.id.toHexString())
    balance.id = event.params.id.toHexString()
    balance.locked = event.params.state.balances.locked.Cw20CoinVerified_amount.toString()
    balance.liquid = event.params.state.balances.liquid.Cw20CoinVerified_addr.toString()
    balance.locked = event.params.state.balances.locked.coin_native_amount.toString()
    balance.liquid = event.params.state.balances.liquid.coin_native_amount.toString()
    balance.save()

    EndowState.closing_endowment = event.params.state.closing_endowment
    EndowState.closing_beneficiary = event.params.state.closing_beneficiary.data.addr

    EndowState.save()
  }
}

export function handleUpdateEndowment(event: UpdateEndowmentEvent): void {
  let endowmentState = Endowment.load(event.params.id.toHexString())
  if(endowmentState){
    endowmentState.id = event.params.id.toHexString()

    endowmentState.owner = event.params.endowment.owner
    endowmentState.name = event.params.endowment.name
    endowmentState.tier = event.params.endowment.tier
    endowmentState.logo = event.params.endowment.logo
    endowmentState.deposit_approved = event.params.endowment.deposit_approved
    endowmentState.withdraw_approved = event.params.endowment.withdraw_approved
    endowmentState.maturity_time = event.params.endowment.maturity_time

    // endowment.categories = [event.params.endowment.categories.toString()]
    let categories = new Categories(event.params.id.toHexString())
    categories.id = event.params.id.toHexString()
    categories.sdgs = event.params.endowment.categories.sdgs
    categories.general = event.params.endowment.categories.general
    categories.save()

    // endowment.endow_type = event.params.endowment.endow_type.toString()
    // const endowmentTypeValue = event.params.endowment.endow_type;
    // const endowmentType = EndowmentType[endowmentTypeValue];
    endowmentState.endow_type = "Charity"

    // endowment.status = event.params.endowment.status.toString()
    // const endowmentStatusValue = event.params.endowment.endow_type;
    // const endowmentStatus = EndowmentStatus[endowmentStatusValue];
    endowmentState.status = "Approved"

    // endowment.strategies = event.params.endowment.strategies.toString()
    let strategies = new AccountStrategies(event.params.id.toHexString())
    strategies.id = event.params.id.toHexString()
    strategies.locked_percentage = event.params.endowment.strategies.locked_percentage
    strategies.liquid_percentage = event.params.endowment.strategies.liquid_percentage
    strategies.locked_vault = event.params.endowment.strategies.locked_vault
    strategies.liquid_vault = event.params.endowment.strategies.liquid_vault
    strategies.save()

    // endowment.oneoff_vaults = event.params.endowment.oneoff_vaults.toString()
    let oneoff_vaults = new OneOffVaults(event.params.id.toHexString())
    oneoff_vaults.id = event.params.id.toHexString()
    oneoff_vaults.locked = event.params.endowment.oneoff_vaults.locked
    oneoff_vaults.liquid = event.params.endowment.oneoff_vaults.liquid
    oneoff_vaults.locked_amount = event.params.endowment.oneoff_vaults.locked_amount
    oneoff_vaults.liquid_amount = event.params.endowment.oneoff_vaults.liquid_amount
    oneoff_vaults.save()

    // endowment.rebalance = event.params.endowment.rebalance.toString()
    let rebalance = new RebalanceDetails(event.params.id.toHexString())
    rebalance.id = event.params.id.toHexString()
    rebalance.rebalance_liquid_invested_profits = event.params.endowment.rebalance.rebalance_liquid_invested_profits
    rebalance.locked_interests_to_liquid = event.params.endowment.rebalance.locked_interests_to_liquid
    rebalance.interest_distribution = event.params.endowment.rebalance.interest_distribution.toI32()
    rebalance.locked_principle_to_liquid = event.params.endowment.rebalance.locked_principle_to_liquid
    rebalance.principle_distribution = event.params.endowment.rebalance.principle_distribution.toI32()
    rebalance.save()

    endowmentState.kyc_donors_only = event.params.endowment.kyc_donors_only
    endowmentState.pending_redemptions = event.params.endowment.pending_redemptions.toI32()
    endowmentState.copycat_strategy = event.params.endowment.copycat_strategy.toI32()
    endowmentState.proposal_link = event.params.endowment.proposal_link
    endowmentState.dao = event.params.endowment.dao
    endowmentState.dao_token = event.params.endowment.dao_token
    endowmentState.donation_match_active = event.params.endowment.donation_match_active
    endowmentState.donation_match_contract = event.params.endowment.donation_match_contract
    endowmentState.whitelisted_beneficiaries = addressesToBytes(event.params.endowment.whitelisted_beneficiaries)
    endowmentState.whitelisted_contributors = addressesToBytes(event.params.endowment.whitelisted_contributors)
    endowmentState.maturity_whitelist = addressesToBytes(event.params.endowment.maturity_whitelist)
    endowmentState.earnings_fee = event.params.endowment.earnings_fee.fee_percentage
    endowmentState.deposit_fee = event.params.endowment.deposit_fee.fee_percentage
    endowmentState.withdraw_fee = event.params.endowment.withdraw_fee.fee_percentage
    endowmentState.aum_fee = event.params.endowment.aum_fee.fee_percentage

    let delegate = new Delegate(event.params.id.toHexString())
    delegate.id = event.params.id.toHexString()
    delegate.addr = event.params.endowment.settings_controller.settings_controller.delegate.Addr
    delegate.expires = event.params.endowment.settings_controller.settings_controller.delegate.expires
    delegate.save()

    let settings_permission = new SettingsPermission(event.params.id.toHexString())
    settings_permission.id = event.params.id.toHexString()
    settings_permission.owner_controlled = event.params.endowment.settings_controller.settings_controller.owner_controlled
    settings_permission.gov_controlled = event.params.endowment.settings_controller.settings_controller.gov_controlled
    settings_permission.modifiable_after_init = event.params.endowment.settings_controller.settings_controller.modifiable_after_init
    settings_permission.save()

    // endowment.settings_controller = event.params.endowment.settings_controller.toString()
    let settings_controller = new SettingsController(event.params.id.toHexString())
    settings_controller.id = event.params.id.toHexString()
    settings_controller.endowment_controller = event.params.endowment.settings_controller.settings_controller.delegate.Addr.toString()
    settings_controller.strategies = event.params.endowment.settings_controller.strategies.delegate.Addr.toString()
    settings_controller.whitelisted_beneficiaries = event.params.endowment.settings_controller.whitelisted_beneficiaries.delegate.Addr.toString()
    settings_controller.whitelisted_contributors = event.params.endowment.settings_controller.whitelisted_contributors.delegate.Addr.toString()
    settings_controller.maturity_whitelist = event.params.endowment.settings_controller.settings_controller.delegate.Addr.toString()
    settings_controller.maturity_time = event.params.endowment.settings_controller.maturity_time.delegate.expires.toString()
    settings_controller.profile = event.params.endowment.settings_controller.profile.delegate.Addr.toString()
    settings_controller.earnings_fee = event.params.endowment.settings_controller.earnings_fee.delegate.expires.toString()
    settings_controller.withdraw_fee = event.params.endowment.settings_controller.withdraw_fee.delegate.expires.toString()
    settings_controller.deposit_fee = event.params.endowment.settings_controller.deposit_fee.delegate.expires.toString()
    settings_controller.aum_fee = event.params.endowment.settings_controller.aum_fee.delegate.expires.toString()
    settings_controller.kyc_donors_only = event.params.endowment.settings_controller.kyc_donors_only.delegate.Addr.toString()
    settings_controller.name = event.params.endowment.settings_controller.name.delegate.Addr.toString()
    settings_controller.image = event.params.endowment.settings_controller.image.owner_controlled.toString()
    settings_controller.logo = event.params.endowment.settings_controller.logo.owner_controlled.toString()
    settings_controller.categories = event.params.endowment.settings_controller.categories.owner_controlled.toString()
    settings_controller.save()

    endowmentState.parent = event.params.endowment.parent.toI32()
    endowmentState.ignore_user_splits = event.params.endowment.ignore_user_splits

    // endowment.split_to_liquid = event.params.endowment.split_to_liquid.toString()
    let split_to_liquid = new SplitDetails(event.params.id.toHexString())
    split_to_liquid.id = event.params.id.toHexString()
    split_to_liquid.max = event.params.endowment.split_to_liquid.max
    split_to_liquid.min = event.params.endowment.split_to_liquid.min
    split_to_liquid.defaultSplit = event.params.endowment.split_to_liquid.defaultSplit
    split_to_liquid.save()

    endowmentState.save()
  }
}

export function handleDaoContractCreated(event: DaoContractCreatedEvent): void {
  let dao = new SubDAOConfig(event.params.daoAddress.toHexString())
  if(dao){
    dao.id = event.params.daoAddress.toHexString()

    dao.snapshot_period = event.params._CreateDaoMessage.snapshot_period
    dao.voting_period = event.params._CreateDaoMessage.voting_period
    dao.threshold = event.params._CreateDaoMessage.threshold
    dao.expiration_period = event.params._CreateDaoMessage.expiration_period
    dao.owner=event.params._CreateDaoMessage.owner
    dao.quorum=event.params._CreateDaoMessage.quorum
    dao.registrar_contract=event.params._CreateDaoMessage.registrar_contract
    dao.timelock_period = event.params._CreateDaoMessage.timelock_period
    dao.save()
  }
}

export function handleAllowanceStateUpdatedTo(event: AllowanceStateUpdatedToEvent): void {
  let allowance = new AllowanceData(event.params.sender.toHexString())
  if(allowance){
    allowance.id = event.params.sender.toHexString()

    allowance.height =  event.params.allowance.height
    allowance.timestamp = event.params.allowance.timestamp
    allowance.expires = event.params.allowance.expires
    allowance.allowanceAmount = event.params.allowance.allowanceAmount
    allowance.configured = event.params.allowance.configured
    allowance.save()
  }
}

export function handleDonationDeposited(event: DonationDepositedEvent): void{
  let donationDeposit = DonationsReceived.load(event.params._id.toHexString())
  if(donationDeposit){
    donationDeposit.id = event.params._id.toHexString()
    donationDeposit.locked = event.params._amount 
    donationDeposit.liquid = event.params._amount
    donationDeposit.save()
  }
}

export function handleDonationMatchSetup(event: DonationMatchSetupEvent): void{
  let donationMatchSetup = new DonationMatchSet(event.params.id.toHexString())
  if(donationMatchSetup){
    donationMatchSetup.id = event.params.id.toHexString()
    donationMatchSetup.donation_match_contract = event.params.donationMatchContract
    donationMatchSetup.save()
  }
}

export function handleDonationWithdrawn(event: DonationWithdrawnEvent): void{
  let donationWithdraw = DonationsReceived.load(event.params.id.toHexString())
  if(donationWithdraw){
    donationWithdraw.id = event.params.id.toHexString()
    donationWithdraw.locked = event.params.amount 
    donationWithdraw.liquid = event.params.amount
    donationWithdraw.save()
  }
}

export function handleRemoveAllowance(event: RemoveAllowanceEvent): void{
  let allowanceRemove = new AllowanceRemove(event.params.sender.toHexString())
  if(allowanceRemove){
    allowanceRemove.id = event.params.sender.toHexString()
    allowanceRemove.sender = event.params.sender
    allowanceRemove.spender = event.params.spender
    allowanceRemove.tokenAddress = event.params.tokenAddress
    allowanceRemove.save()
  }
}

export function handleSwapToken(event: SwapTokenEvent): void{
  let swapToken = new TokenSwap(event.params._id.toHexString())
  if(swapToken){
    swapToken.id = event.params._id.toHexString()
    swapToken.accountType= event.params._accountType
    swapToken.amount = event.params._amount
    swapToken.tokenIn = event.params._tokenIn
    swapToken.tokenOut = event.params._tokenOut
    swapToken.amountOut = event.params._amountOut
    swapToken.save()
  }
}

export function handleUpdateConfig(event: UpdateConfigEvent): void{
  let updateAccountsConfig = new AccountsConfig(event.params.config.next_account_id.toHexString())
  if(updateAccountsConfig){
    updateAccountsConfig.id = event.params.config.next_account_id.toHexString()
    updateAccountsConfig.owner = event.params.config.owner
    updateAccountsConfig.registrar_contract = event.params.config.registrar_contract
    updateAccountsConfig.next_account_id = event.params.config.next_account_id
    updateAccountsConfig.max_general_category_id = event.params.config.max_general_category_id

    updateAccountsConfig.save()
  }
}