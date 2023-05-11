
import{
  charityApplication as charityApplicationContract,
  CharityApproved as CharityApprovedEvent,
  CharityProposed as CharityProposedEvent,
  CharityRejected as CharityRejectedEvent,
  charityApplicationDeposit as DepositEvent,
  GasSent as GasSentEvent,
  SeedAssetSent as SeedAssetSentEvent,
  initilizedCharityApplication as initilizedCharityApplicationEvent,
} from "../generated/charityApplication/charityApplication"

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

// Charity Applications
export function handleinitilizedCharityApplication(event: initilizedCharityApplicationEvent): void{
  let charityApplication = new CharityConfig(event.params.updatedConfig.proposalExpiry.toString())
  if(charityApplication){
    charityApplication.id = event.params.updatedConfig.proposalExpiry.toString()
    charityApplication.proposalExpiry = event.params.updatedConfig.proposalExpiry
    charityApplication.applicationMultisig = event.params.updatedConfig.applicationMultisig
    charityApplication.accountsContract = event.params.updatedConfig.accountsContract
    charityApplication.seedSplitToLiquid = event.params.updatedConfig.seedSplitToLiquid
    charityApplication.newEndowGasMoney = event.params.updatedConfig.newEndowGasMoney
    charityApplication.gasAmount = event.params.updatedConfig.gasAmount
    charityApplication.fundSeedAsset = event.params.updatedConfig.fundSeedAsset
    charityApplication.seedAsset = event.params.updatedConfig.seedAsset
    charityApplication.seedAssetAmount = event.params.updatedConfig.seedAssetAmount
    charityApplication.save()
  }
}

export function handleCharityProposed(event: CharityProposedEvent): void{
  let charityProposed = new CharityApplicationProposal(event.params.proposalId.toString())
  if(charityProposed){
    charityProposed.id = event.params.proposalId.toString()
    charityProposed.proposalId = event.params.proposalId
    charityProposed.proposer = event.params.proposer

    // charityProposed.charityApplication = event.params.charityApplication.toString()
    let endowment = Endowment.load(event.params.charityApplication.owner.toHexString())
    if(endowment){
      endowment.owner = event.params.charityApplication.owner
      endowment.name = event.params.charityApplication.name
      endowment.tier = event.params.charityApplication.tier
      endowment.logo = event.params.charityApplication.logo
      endowment.withdraw_approved = event.params.charityApplication.withdraw_before_maturity
      endowment.maturity_time = event.params.charityApplication.maturity_time
      // endowment.categories = [event.params.endowment.categories.toString()]
      let categories = new Categories(event.params.charityApplication.categories.sdgs.toString())
      categories.sdgs = event.params.charityApplication.categories.sdgs
      categories.general = event.params.charityApplication.categories.general
      categories.save()

      endowment.endow_type = "Charity"
      endowment.status = "Pending"

      endowment.kyc_donors_only = event.params.charityApplication.kyc_donors_only
      endowment.pending_redemptions = event.params.charityApplication.cw3_threshold.enumData
      endowment.copycat_strategy = event.params.charityApplication.cw3_threshold.enumData
      endowment.proposal_link = event.params.charityApplication.proposal_link
      endowment.dao = event.params.charityApplication.dao.token.data.ExistingCw20_data
      endowment.dao_token = event.params.charityApplication.dao.token.data.ExistingCw20_data
      endowment.whitelisted_beneficiaries = addressesToBytes(event.params.charityApplication.whitelisted_beneficiaries)
      endowment.whitelisted_contributors = addressesToBytes(event.params.charityApplication.whitelisted_contributors)
      endowment.maturity_whitelist = addressesToBytes(event.params.charityApplication.maturity_whitelist)
      endowment.earnings_fee = event.params.charityApplication.earnings_fee.fee_percentage
      endowment.deposit_fee = event.params.charityApplication.deposit_fee.fee_percentage
      endowment.withdraw_fee = event.params.charityApplication.withdraw_fee.fee_percentage
      endowment.aum_fee = event.params.charityApplication.aum_fee.fee_percentage

      // endowment.settings_controller = event.params.endowment.settings_controller.toString()
      let settings_controller = new SettingsController(event.params.charityApplication.settings_controller.endowment_controller.owner_controlled.toString())
      settings_controller.endowment_controller = event.params.charityApplication.settings_controller.categories.delegate.Addr.toString()
      settings_controller.strategies = event.params.charityApplication.settings_controller.strategies.delegate.Addr.toString()
      settings_controller.whitelisted_beneficiaries = event.params.charityApplication.settings_controller.whitelisted_beneficiaries.delegate.Addr.toString()
      settings_controller.whitelisted_contributors = event.params.charityApplication.settings_controller.whitelisted_contributors.delegate.Addr.toString()
      settings_controller.maturity_whitelist = event.params.charityApplication.settings_controller.maturity_whitelist.delegate.Addr.toString()
      settings_controller.maturity_time = event.params.charityApplication.settings_controller.maturity_time.delegate.expires.toString()
      settings_controller.profile = event.params.charityApplication.settings_controller.profile.delegate.Addr.toString()
      settings_controller.earnings_fee = event.params.charityApplication.settings_controller.earnings_fee.delegate.expires.toString()
      settings_controller.withdraw_fee = event.params.charityApplication.settings_controller.withdraw_fee.delegate.expires.toString()
      settings_controller.deposit_fee = event.params.charityApplication.settings_controller.deposit_fee.delegate.expires.toString()
      settings_controller.aum_fee = event.params.charityApplication.settings_controller.aum_fee.delegate.expires.toString()
      settings_controller.kyc_donors_only = event.params.charityApplication.settings_controller.kyc_donors_only.delegate.Addr.toString()
      settings_controller.name = event.params.charityApplication.settings_controller.name.delegate.Addr.toString()
      settings_controller.image = event.params.charityApplication.settings_controller.image.owner_controlled.toString()
      settings_controller.logo = event.params.charityApplication.settings_controller.logo.owner_controlled.toString()
      settings_controller.categories = event.params.charityApplication.settings_controller.categories.owner_controlled.toString()
      settings_controller.save()

      endowment.parent = event.params.charityApplication.parent.toI32()
      endowment.ignore_user_splits = event.params.charityApplication.ignore_user_splits

      // endowment.split_to_liquid = event.params.endowment.split_to_liquid.toString()
      let split_to_liquid = new SplitDetails(event.params.charityApplication.split_to_liquid.defaultSplit.toHexString())
      split_to_liquid.max = event.params.charityApplication.split_to_liquid.max
      split_to_liquid.min = event.params.charityApplication.split_to_liquid.min
      split_to_liquid.defaultSplit = event.params.charityApplication.split_to_liquid.defaultSplit
      split_to_liquid.save()

      endowment.save()
    }

    charityProposed.meta = event.params.meta
    charityProposed.save()
  }
}

export function handleCharityApproved(event: CharityApprovedEvent): void{
  let charityApproved = new Confirmation(event.params.proposalId.toString())
  if(charityApproved){
    charityApproved.id = event.params.proposalId.toString()
    charityApproved.confirmations = [event.params._event.address]
    charityApproved.save()
  }
}

export function handleCharityRejected(event: CharityRejectedEvent): void{
  let charityRejected = Confirmation.load(event.params.proposalId.toHex())
  if(charityRejected){
    charityRejected.id = event.params.proposalId.toString()
    charityRejected.save()
  }
}

export function handleDepositCharity(event: DepositEvent): void{
  let depositCharity = new DepositCharity(event.params.sender.toString())
  if(depositCharity){
    depositCharity.charity_sender = event.params.sender
    depositCharity.amount = event.params.value
    depositCharity.save()
  }
}

export function handleGasSent(event: GasSentEvent): void{
  let gasSent = new GasDispatched(event.params.endowmentId.toString())
  if(gasSent){
    gasSent.id = event.params.endowmentId.toString()
    gasSent.gassent_address = event.params.member
    gasSent.gasAmount = event.params.amount
    gasSent.save()
  }
}

export function handleSeedAssetSent(event: SeedAssetSentEvent): void{
  let seedAssetSent = new SeedFunded(event.params.endowmentId.toString())
  if(seedAssetSent){
    seedAssetSent.id = event.params.endowmentId.toString()
    seedAssetSent.seedAsset = event.params.asset
    seedAssetSent.seedAssetAmount = event.params.amount
    seedAssetSent.save()
  }
}
