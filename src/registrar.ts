
import{
  registrar as registrarContract,
  addVault as addVaultEvent,
  removeVault as removeVaultEvent,
  deleteNetworkConnection as deleteNetworkConnectionEvent,
  postNetworkConnection as postNetworkConnectionEvent,
  updateRegistrarConfig as updateRegistrarConfigEvent,
  updateRegistrarFees as updateRegistrarFeesEvent,
  updateRegistrarOwner as updateRegistrarOwnerEvent,
  updateVault as updateVaultEvent,
} from "../generated/registrar/registrar"
import {
    RebalanceDetails, AcceptedTokens, RegistrarConfig, YieldVault, NetworkInfo, Network_Connection, Fee,SplitDetails
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
  
export function handleupdateRegistrarConfig(event: updateRegistrarConfigEvent): void{
    let registrarConfigUpdate = new RegistrarConfig(event.params.details.owner.toHexString())
    if(registrarConfigUpdate){
      registrarConfigUpdate.owner = event.params.details.owner
      registrarConfigUpdate.applications_review = event.params.details.applications_review
      registrarConfigUpdate.index_fund_contract = event.params.details.index_fund_contract
      registrarConfigUpdate.accounts_contract = event.params.details.accounts_contract
      registrarConfigUpdate.treasury = event.params.details.treasury
      registrarConfigUpdate.subdao_gov_code = event.params.details.subdao_gov_code
      registrarConfigUpdate.subdao_cw20_token_code = event.params.details.subdao_cw20_token_code
      registrarConfigUpdate.subdao_bonding_token_code = event.params.details.subdao_bonding_token_code
      registrarConfigUpdate.subdao_cw900_code = (event.params.details.subdao_cw900_code)
      registrarConfigUpdate.subdao_distributor_code = event.params.details.subdao_distributor_code
      registrarConfigUpdate.subdao_emitter = event.params.details.subdao_emitter
      registrarConfigUpdate.donation_match_code = event.params.details.donation_match_code
      registrarConfigUpdate.donation_match_charites_contract = event.params.details.donation_match_charites_contract
      registrarConfigUpdate.donation_match_emitter = event.params.details.donation_match_emitter
  
      let accepted_tokens = new AcceptedTokens(event.params.details.owner.toHexString())
      accepted_tokens.id = event.params.details.owner.toHexString()
      accepted_tokens.cw20 = addressesToBytes(event.params.details.accepted_tokens.cw20)
      accepted_tokens.save()
  
      // registrarConfigUpdate.split_to_liquid = event.params.details.split_to_liquid.toString()
      let split_to_liquid = new SplitDetails(event.params.details.owner.toHexString())
      split_to_liquid.id = event.params.details.owner.toHexString()
      split_to_liquid.max = event.params.details.split_to_liquid.max
      split_to_liquid.min = event.params.details.split_to_liquid.min
      split_to_liquid.defaultSplit = event.params.details.split_to_liquid.defaultSplit
      split_to_liquid.save()
  
      registrarConfigUpdate.halo_token = event.params.details.halo_token
      registrarConfigUpdate.halo_token_lp_contract = event.params.details.halo_token_lp_contract
      registrarConfigUpdate.gov_contract = event.params.details.gov_contract
      registrarConfigUpdate.collector_addr = event.params.details.collector_addr
      registrarConfigUpdate.collector_share = event.params.details.collector_share.toI32()
      registrarConfigUpdate.charity_shares_contract = event.params.details.charity_shares_contract
      registrarConfigUpdate.fundraising_contract = event.params.details.fundraising_contract
  
      // registrarConfigUpdate.rebalance = event.params.details.rebalance.toString()
      let rebalance = new RebalanceDetails(event.params.details.owner.toHexString())
      rebalance.id = event.params.details.owner.toHexString()
      rebalance.rebalance_liquid_invested_profits = event.params.details.rebalance.rebalance_liquid_invested_profits
      rebalance.locked_interests_to_liquid = event.params.details.rebalance.locked_interests_to_liquid
      rebalance.interest_distribution = event.params.details.rebalance.interest_distribution.toI32()
      rebalance.locked_principle_to_liquid = event.params.details.rebalance.locked_principle_to_liquid
      rebalance.principle_distribution = event.params.details.rebalance.principle_distribution.toI32()
      rebalance.save()
  
      registrarConfigUpdate.swaps_router = event.params.details.swaps_router
      registrarConfigUpdate.multisig_factory = event.params.details.multisig_factory
      registrarConfigUpdate.multisig_emitter = event.params.details.multisig_emitter
      registrarConfigUpdate.charity_proposal = event.params.details.charity_proposal
      registrarConfigUpdate.locked_withdrawal = event.params.details.locked_withdrawal
      registrarConfigUpdate.proxy_admin = event.params.details.proxy_admin
      registrarConfigUpdate.USDC_address = event.params.details.USDC_address
      registrarConfigUpdate.Weth_address = event.params.details.Weth_address
      registrarConfigUpdate.cw900lv_address = event.params.details.cw900lv_address
  
      registrarConfigUpdate.save()
    }
  }
  
  export function handleupdateRegistrarOwner(event: updateRegistrarOwnerEvent): void{
    let registrarOwnerUpdate = RegistrarConfig.load(event.params.newOwner.toHexString())
    if(registrarOwnerUpdate){
      registrarOwnerUpdate.owner = event.params.newOwner
      registrarOwnerUpdate.save()
    }
  }
  
  export function handleupdateRegistrarFees(event: updateRegistrarFeesEvent): void{
    let registrarFeesUpdate = new Fee(event.params.details.keys.toString())
    if(registrarFeesUpdate){
      registrarFeesUpdate.id = event.params.details.keys.toString()
  
      for(let i=0;i<event.params.details.keys.length;i++){
        let fee = new Fee(event.params.details.keys[i].toString())
        fee.id = event.params.details.keys[i].toString()
        fee.fees = [event.params.details.values[i].toI32()]
      }
      registrarFeesUpdate.save()
    }
  }
  
  export function handleaddVault(event: addVaultEvent): void{
    let vaultAdd = new YieldVault(event.params.vault.addr)
    if(vaultAdd){
      vaultAdd.addr = event.params.vault.addr
      vaultAdd.network = event.params.vault.network.toI32()
      vaultAdd.input_denom = event.params.vault.input_denom
      vaultAdd.yield_token = event.params.vault.yield_token
      vaultAdd.approved = event.params.vault.approved
      vaultAdd.restricted_from = "Charity"
      vaultAdd.acct_type = "None"
      vaultAdd.vault_type = "Native"
  
      let tempnetwork = new Array<string>()
      for(let i=0;i<event.params.vault.network.length;i++){
        let temp2 = new Network_Connection(event.params.vault.network[i].toString())
        temp2.id = event.params.vault.network[i].toString()
        // vaultAdd.network_connect = networkType
        let network_info = new NetworkInfo(event.params.vault.network.toI32().toString())
        network_info.name = event.params.strategyName.toString()
        network_info.save()
        temp2.save()
        tempnetwork.push(temp2.id)
      }
  
      vaultAdd.save()
    }
  }
  
  export function handleremoveVault(event: removeVaultEvent): void{
    let vaultRemove = YieldVault.load(event.params.strategyName)
    if(vaultRemove){
      vaultRemove.addr = event.params.strategyName
      vaultRemove.save()
      
    }
  }
  
  export function handleupdateVault(event: updateVaultEvent): void{
    let vaultUpdate = YieldVault.load(event.params.strategyName)
    if(vaultUpdate){
      vaultUpdate.addr = event.params.strategyName
      vaultUpdate.approved = event.params.approved
      vaultUpdate.restricted_from = "Charity"
      vaultUpdate.save()
    }
  }
  
  export function handledeleteNetworkConnection(event: deleteNetworkConnectionEvent): void{
    let networkConnectionDelete = NetworkInfo.load(event.params.chainId.toI32().toString())
    if(networkConnectionDelete){
      networkConnectionDelete.chain_id = event.params.chainId.toI32()
      networkConnectionDelete.save()
    }
  }
  
  export function handlepostNetworkConnection(event: postNetworkConnectionEvent): void{
    let networkConnectionPost = new NetworkInfo(event.params.chainId.toI32().toString())
    if(networkConnectionPost){
      networkConnectionPost.chain_id = event.params.chainId.toI32()
      networkConnectionPost.save()
    }
  }
