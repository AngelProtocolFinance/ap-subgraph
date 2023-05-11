import {
    assert,
    describe,
    test,
    clearStore,
    beforeAll,
    afterAll,
    logStore
  } from "matchstick-as/assembly/index"
  import { Address, BigInt , ethereum} from "@graphprotocol/graph-ts"

  import {handleaddVault,handlepostNetworkConnection,handledeleteNetworkConnection,handleremoveVault,handleupdateRegistrarConfig,handleupdateRegistrarFees,handleupdateVault} from '../src/registrar'
  import {createaddVaultEvent,createpostNetworkConnectionEvent,createdeleteNetworkConnectionEvent,createremoveVaultEvent,createupdateRegistrarConfigEvent,createupdateRegistrarFeesEvent,createupdateVaultEvent} from '../tests/registrar-utils'

  import {addVaultVaultStruct,postNetworkConnectionNetworkInfoStruct,updateRegistrarConfigDetailsStruct,updateRegistrarConfigDetailsSplit_to_liquidStruct,updateRegistrarConfigDetailsRebalanceStruct,updateRegistrarConfigDetailsAccepted_tokensStruct, updateRegistrarFees,updateRegistrarFeesDetailsStruct} from '../generated/registrar/registrar'
import { NetworkInfo } from "../generated/schema"


  describe("Registar Test",()=>{
    beforeAll(()=>{

     // ADD VAULT
      let strategyName = "Hello"
      let valut =new addVaultVaultStruct()
      valut.push(ethereum.Value.fromString('0x0000000000000000000000000000000000000001')) //addr
      valut.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //network
      valut.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//input_denom
      valut.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//yield_token
      valut.push(ethereum.Value.fromBoolean(true))//approved
      valut.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1),BigInt.fromI64(2)])) //restricted_from
      valut.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //acct_type
      valut.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //vault_type
      let addVault = createaddVaultEvent(strategyName,valut)
      handleaddVault(addVault)
    

    // postNetworkConnection
      let chainId = BigInt.fromI64(1)
      let networkInfo = new postNetworkConnectionNetworkInfoStruct()
      networkInfo.push(ethereum.Value.fromString('NAME')) //name
      networkInfo.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //chain_id
      networkInfo.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001'))) //router
      networkInfo.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001'))) //axelerGateway
      networkInfo.push(ethereum.Value.fromString('IBC')) //ibc_channel
      networkInfo.push(ethereum.Value.fromString('TRANSFER')) //transfer_channel
      networkInfo.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001'))) //ibc_host_contract
      networkInfo.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //gas_limit

      let postNetwork = createpostNetworkConnectionEvent(chainId,networkInfo)
      handlepostNetworkConnection(postNetwork)
      
      //Delete Network Connection
      let chain_id = BigInt.fromI64(1)
      let deleteNetwork = createdeleteNetworkConnectionEvent(chain_id)
      handledeleteNetworkConnection(deleteNetwork)

      //Remove Vault
      let statergy ='Hello'
      let removeVault = createremoveVaultEvent(statergy)
      handleremoveVault(removeVault)

      //Update Registar Config
      let details = new updateRegistrarConfigDetailsStruct()
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//owner
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//application_review
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//index_fund_contract
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//accounts_contract
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//treasury
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//subdao_gov_code
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//subdao_cw20_token_code
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//subdao_bonding_token_code
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//subdao_cw900_code
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//subdao_distributor_code
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//subdao_emitter
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//donation_match_code
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//ion_match_charites_contrac
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//donation_match_emitter
      let split_to_liquid = new updateRegistrarConfigDetailsSplit_to_liquidStruct()
      split_to_liquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //max
      split_to_liquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //min
      split_to_liquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //defaultSplit

      details.push(ethereum.Value.fromTuple(split_to_liquid)) //split_to_liquid
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//halo_token
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//halo_token_lp_contract
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//gov_contract
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//collector_addr
      details.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))//collector_share
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//charity_shares_contract
      let accepted_tokens = new updateRegistrarConfigDetailsAccepted_tokensStruct()
     
      accepted_tokens.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001'),Address.fromString('0x0000000000000000000000000000000000000001')])) //interest_distribution
      


      let rebalance = new updateRegistrarConfigDetailsRebalanceStruct()
      rebalance.push(ethereum.Value.fromBoolean(true))//rebalance_liquid_invested_profits
      rebalance.push(ethereum.Value.fromBoolean(true))//rebalance_liquid_invested_profits
      rebalance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //interest_distribution
      rebalance.push(ethereum.Value.fromBoolean(true))//rebalance_liquid_invested_profits
      rebalance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //principle_distribution



      
      details.push(ethereum.Value.fromTuple(accepted_tokens))

      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//owner
      details.push(ethereum.Value.fromTuple(rebalance))
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//swaps_router
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//multisig_factory
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//multisig_emitter
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//locked_withdrawal
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//proxy_admin
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//USDC_address
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//Weth_address
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//cw900lv_address
      details.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//owner

      let updateRegistarConfig = createupdateRegistrarConfigEvent(details)
      handleupdateRegistrarConfig(updateRegistarConfig)

      //UPDATE REGISTRAR FEE
      let details1 = new ethereum.Tuple();
      details1.push(ethereum.Value.fromStringArray(['demo','demo']))
      details1.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1),BigInt.fromI64(2)]))
 
      
      let updateRegistarFee = createupdateRegistrarFeesEvent(details1)
      handleupdateRegistrarFees(updateRegistarFee)

      //UPDATE VAULT
      // let strategyname = 'change'
      let approved = false
      let endowmentTypes =[1,2]
      let updateVault = createupdateVaultEvent(strategyName,approved,endowmentTypes)
      handleupdateVault(updateVault)
      
      logStore()
    })

    test("Add vault",()=>{
        assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','addr','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','network','1')
        assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','yield_token','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','approved','true')
        assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','restricted_from','Charity')
        assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','vault_type','Native')

    })
    test("PostNetwork",()=>{
        assert.fieldEquals("NetworkInfo",'1','chain_id','1')
        // assert.fieldEquals("NetworkInfo",'1','router','0x0000000000000000000000000000000000000001')
        // assert.fieldEquals("NetworkInfo",'1','axelerGateway','0x0000000000000000000000000000000000000001')
        // assert.fieldEquals("NetworkInfo",'1','axelerGatew','0x0000000000000000000000000000000000000001')
    })
    test("DeleteNetwork",()=>{
        assert.fieldEquals("NetworkInfo",'1','chain_id','1')
        // assert.fieldEquals("NetworkInfo",'1','router','0x0000000000000000000000000000000000000001')
        // assert.fieldEquals("NetworkInfo",'1','axelerGateway','0x0000000000000000000000000000000000000001')
        // assert.fieldEquals("NetworkInfo",'1','axelerGatew','0x0000000000000000000000000000000000000001')
    })
    test("RemoveVault",()=>{
        // assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','addr','0x0000000000000000000000000000000000000001')
    })
    test("Update Registar Config",()=>{
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','id','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','owner','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','gov_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','swaps_router','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','proxy_admin','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','halo_token','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','donation_match_emitter','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','subdao_cw20_token_code','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','charity_proposal','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','cw900lv_address','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','treasury','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','subdao_emitter','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','accounts_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','multisig_factory','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','index_fund_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','subdao_distributor_code','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','subdao_gov_code','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','collector_addr','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','applications_review','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','fundraising_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','charity_shares_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','halo_token_lp_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','subdao_bonding_token_code','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','subdao_cw900_code','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','donation_match_charites_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','donation_match_code','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','USDC_address','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','multisig_emitter','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','locked_withdrawal','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','Weth_address','0x0000000000000000000000000000000000000001')
        assert.fieldEquals("RegistrarConfig",'0x0000000000000000000000000000000000000001','collector_share','1')
    })
    test("Update Registar Fee",()=>{
        assert.fieldEquals("Fee",'demo,demo','id','demo,demo')
    })
    test("Update vault",()=>{
      assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','addr','0x0000000000000000000000000000000000000001')
      assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','network','1')
      assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','yield_token','0x0000000000000000000000000000000000000001')
      assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','approved','true')
      assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','restricted_from','Charity')
      assert.fieldEquals("YieldVault",'0x0000000000000000000000000000000000000001','vault_type','Native')

  })
  })
