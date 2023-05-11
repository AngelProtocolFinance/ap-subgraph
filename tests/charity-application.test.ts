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

  import {handleCharityProposed,handleinitilizedCharityApplication,handleCharityApproved,handleDepositCharity,handleGasSent,handleSeedAssetSent,handleCharityRejected} from '../src/charity-application'
  import {createCharityProposedEvent, createinitilizedCharityApplicationEvent,createCharityApprovedEvent,createcharityApplicationDepositEvent,createGasSentEvent,createSeedAssetSentEvent,createCharityRejectedEvent} from '../tests/charity-application-utils'

  import {initilizedCharityApplicationUpdatedConfigStruct,CharityProposedCharityApplicationStruct,CharityProposedCharityApplicationCategoriesStruct,CharityProposedCharityApplicationCw3_thresholdStruct,CharityProposedCharityApplicationCw3_thresholdDataStruct,CharityProposedCharityApplicationEarnings_feeStruct,CharityProposedCharityApplicationWithdraw_feeStruct,CharityProposedCharityApplicationDeposit_feeStruct,CharityProposedCharityApplicationAum_feeStruct,CharityProposedCharityApplicationDaoStruct,CharityProposedCharityApplicationDaoTokenStruct,CharityProposedCharityApplicationDaoTokenDataStruct,CharityProposedCharityApplicationDaoTokenDataBondingCurve_curve_typeStruct,CharityProposedCharityApplicationDaoTokenDataBondingCurve_curve_typeDataStruct,CharityProposedCharityApplicationSettings_controllerStruct,CharityProposedCharityApplicationSettings_controllerEndowment_controllerStruct,CharityProposedCharityApplicationSettings_controllerStrategiesStruct,CharityProposedCharityApplicationSettings_controllerWhitelisted_beneficiariesStruct,CharityProposedCharityApplicationSettings_controllerMaturity_whitelistStruct,CharityProposedCharityApplicationSettings_controllerMaturity_timeStruct,CharityProposedCharityApplicationSettings_controllerProfileStruct,CharityProposedCharityApplicationSettings_controllerEarnings_feeStruct,CharityProposedCharityApplicationSettings_controllerWithdraw_feeStruct,CharityProposedCharityApplicationSettings_controllerDeposit_feeStruct,CharityProposedCharityApplicationSettings_controllerAum_feeStruct,CharityProposedCharityApplicationSettings_controllerAum_feeDelegateStruct,CharityProposedCharityApplicationSettings_controllerDeposit_feeDelegateStruct,CharityProposedCharityApplicationSettings_controllerWithdraw_feeDelegateStruct,CharityProposedCharityApplicationSettings_controllerEarnings_feeDelegateStruct,CharityProposedCharityApplicationSettings_controllerMaturity_timeDelegateStruct,CharityProposedCharityApplicationSettings_controllerStrategiesDelegateStruct,CharityProposedCharityApplicationSettings_controllerWhitelisted_beneficiariesDelegateStruct,CharityProposedCharityApplicationSettings_controllerMaturity_whitelistDelegateStruct,CharityProposedCharityApplicationSettings_controllerKyc_donors_onlyStruct,CharityProposedCharityApplicationSettings_controllerKyc_donors_onlyDelegateStruct,CharityProposedCharityApplicationSettings_controllerNameStruct,CharityProposedCharityApplicationSettings_controllerImageStruct,CharityProposedCharityApplicationSettings_controllerImageDelegateStruct, CharityProposedCharityApplicationSettings_controllerLogoStruct,CharityProposedCharityApplicationSettings_controllerLogoDelegateStruct,CharityProposedCharityApplicationSettings_controllerCategoriesStruct,CharityProposedCharityApplicationSettings_controllerCategoriesDelegateStruct,CharityProposedCharityApplicationSettings_controllerSplit_to_liquidStruct,CharityProposedCharityApplicationSettings_controllerSplit_to_liquidDelegateStruct,CharityProposedCharityApplicationSettings_controllerIgnore_user_splitsStruct,CharityProposedCharityApplicationSettings_controllerIgnore_user_splitsDelegateStruct,CharityProposedCharityApplicationSettings_controllerWhitelisted_contributorsStruct,CharityProposedCharityApplicationSettings_controllerWhitelisted_contributorsDelegateStruct,CharityProposedCharityApplicationSplit_to_liquidStruct} from '../generated/charityApplication/charityApplication'
import { Delegate } from "../generated/schema"


  describe("Charity Test Cases",()=>{
    beforeAll(()=>{
    
        let updateConfig = new initilizedCharityApplicationUpdatedConfigStruct()
        updateConfig.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //proposal_expiry
        updateConfig.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//proposal_expiry
        updateConfig.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//proposal_expiry
        updateConfig.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //proposal_expiry
        updateConfig.push(ethereum.Value.fromBoolean(true)) //proposal_expiry
        updateConfig.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //proposal_expiry
        updateConfig.push(ethereum.Value.fromBoolean(true)) //proposal_expiry
        updateConfig.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//proposal_expiry
        updateConfig.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //proposal_expiry

        let charityIntialize = createinitilizedCharityApplicationEvent(updateConfig)
        handleinitilizedCharityApplication(charityIntialize)

        //Charity Proposal
        let proposer = Address.fromString('0x0000000000000000000000000000000000000001')
        let proposalId = BigInt.fromI64(1)
        let charityAplication = new CharityProposedCharityApplicationStruct()
        charityAplication.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//owner
        charityAplication.push(ethereum.Value.fromBoolean(true)) //withdraw_before_maturity
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //maturity_time
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //_heigh
        charityAplication.push(ethereum.Value.fromString('demo')) //name

        let categories = new CharityProposedCharityApplicationCategoriesStruct()
        categories.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1),BigInt.fromI64(2)])) //sdgs
        categories.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1),BigInt.fromI64(2)])) //general
        categories.push(ethereum.Value.fromTuple(categories)) //name

        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //tier
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) //endow_type
        charityAplication.push(ethereum.Value.fromString('logo')) //logo
        charityAplication.push(ethereum.Value.fromString('image')) //image
        charityAplication.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001'),Address.fromString('0x0000000000000000000000000000000000000001')])) //cw4_members
        charityAplication.push(ethereum.Value.fromBoolean(true)) //kyc_donors_only

        let cw3_threshold = new CharityProposedCharityApplicationCw3_thresholdStruct()
        cw3_threshold.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) //enumData

        let data = new CharityProposedCharityApplicationCw3_thresholdDataStruct()
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //weight
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //percentage
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //threshold
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //quorum
        
        cw3_threshold.push(ethereum.Value.fromTuple(data)) //data
        
        charityAplication.push(ethereum.Value.fromTuple(cw3_threshold)) //cw3_threshold
        charityAplication.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001'),Address.fromString('0x0000000000000000000000000000000000000001')])) //cw4_members
        charityAplication.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001'),Address.fromString('0x0000000000000000000000000000000000000001')])) //cw4_members
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //split_max
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //split_min
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //split_default

        let earnings_fee = new CharityProposedCharityApplicationEarnings_feeStruct()
        earnings_fee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//payout_address
        earnings_fee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        earnings_fee.push(ethereum.Value.fromBoolean(true)) //active

        charityAplication.push(ethereum.Value.fromTuple(earnings_fee)) //data

        let withdraw_fee = new CharityProposedCharityApplicationWithdraw_feeStruct()
        withdraw_fee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//payout_address
        withdraw_fee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        withdraw_fee.push(ethereum.Value.fromBoolean(true)) //active
        charityAplication.push(ethereum.Value.fromTuple(withdraw_fee)) //withdraw_fee

        let deposit_fee = new CharityProposedCharityApplicationDeposit_feeStruct()
        deposit_fee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//payout_address
        deposit_fee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        deposit_fee.push(ethereum.Value.fromBoolean(true)) //active
        charityAplication.push(ethereum.Value.fromTuple(deposit_fee)) //deposit_fee

        let aum_fee = new CharityProposedCharityApplicationAum_feeStruct()
        aum_fee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//payout_address
        aum_fee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        aum_fee.push(ethereum.Value.fromBoolean(true)) //active
        charityAplication.push(ethereum.Value.fromTuple(aum_fee)) //aum_fee
        
        let dao = new CharityProposedCharityApplicationDaoStruct()
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        dao.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage

        let token = new CharityProposedCharityApplicationDaoTokenStruct()
        token.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) //token
        let data1 = new CharityProposedCharityApplicationDaoTokenDataStruct()
        data1.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//ExistingCw20_data
        data1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //NewCw20_initial_supply
        data1.push(ethereum.Value.fromString('name')) //NewCw20_name
        data1.push(ethereum.Value.fromString('symbol')) //NewCw20_symbol

        let BondingCurve_curve_type = new CharityProposedCharityApplicationDaoTokenDataBondingCurve_curve_typeStruct()
        token.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) //curve_type

        let data3 = new CharityProposedCharityApplicationDaoTokenDataBondingCurve_curve_typeDataStruct()
        data3.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //value
        data3.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //scale(
        data3.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //slope
        data3.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //power(

        data1.push(ethereum.Value.fromTuple(data3)) //data
        data1.push(ethereum.Value.fromTuple(BondingCurve_curve_type)) //NewCw20_symbol
        data1.push(ethereum.Value.fromString('name')) //BondingCurve_name
        data1.push(ethereum.Value.fromString('name')) //BondingCurve_symbol
        data1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        data1.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//BondingCurve_reserve_denom
        data1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_reserve_decimals
        data1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_unbonding_period

        token.push(ethereum.Value.fromTuple(data1)) //data

        dao.push(ethereum.Value.fromTuple(token)) //aum_fee

        charityAplication.push(ethereum.Value.fromTuple(dao)) //dao
        charityAplication.push(ethereum.Value.fromBoolean(true)) //active
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //fee_percentage
        let setting_controller = new CharityProposedCharityApplicationSettings_controllerStruct()

        let endowment_controller = new CharityProposedCharityApplicationSettings_controllerEndowment_controllerStruct()
        endowment_controller.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        endowment_controller.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        endowment_controller.push(ethereum.Value.fromBoolean(true)) //modifiable_after_init
        let delegate8 =new CharityProposedCharityApplicationSettings_controllerMaturity_timeDelegateStruct()
        delegate8.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate8.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        endowment_controller.push(ethereum.Value.fromTuple(delegate8))
        setting_controller.push(ethereum.Value.fromTuple(endowment_controller)) //1

        let strategies = new CharityProposedCharityApplicationSettings_controllerStrategiesStruct()
        strategies.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        strategies.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        strategies.push(ethereum.Value.fromBoolean(true)) //modifiable_after_init
        let delegate7 =new CharityProposedCharityApplicationSettings_controllerStrategiesDelegateStruct()
        delegate7.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate7.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        strategies.push(ethereum.Value.fromTuple(delegate7))
        setting_controller.push(ethereum.Value.fromTuple(strategies)) //2

        let whitelisted_contributors = new CharityProposedCharityApplicationSettings_controllerWhitelisted_contributorsStruct()
        whitelisted_contributors.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        whitelisted_contributors.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        whitelisted_contributors.push(ethereum.Value.fromBoolean(true)) //modifiable_after_init
        let delegate18 =new CharityProposedCharityApplicationSettings_controllerWhitelisted_contributorsDelegateStruct()
        delegate18.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate18.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        whitelisted_contributors.push(ethereum.Value.fromTuple(delegate18))
        setting_controller.push(ethereum.Value.fromTuple(whitelisted_contributors)) //3

        let whitelisted_beneficiaries = new CharityProposedCharityApplicationSettings_controllerWhitelisted_beneficiariesStruct()
        whitelisted_beneficiaries.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        whitelisted_beneficiaries.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        whitelisted_beneficiaries.push(ethereum.Value.fromBoolean(true)) //modifiable_after_init
        let delegate9 =new CharityProposedCharityApplicationSettings_controllerWhitelisted_beneficiariesDelegateStruct()
        delegate9.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate9.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        whitelisted_beneficiaries.push(ethereum.Value.fromTuple(delegate9))
        setting_controller.push(ethereum.Value.fromTuple(whitelisted_beneficiaries)) //3

        let maturity_whitelist = new CharityProposedCharityApplicationSettings_controllerMaturity_whitelistStruct()
        maturity_whitelist.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        maturity_whitelist.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        maturity_whitelist.push(ethereum.Value.fromBoolean(true))
        let delegate10 =new CharityProposedCharityApplicationSettings_controllerMaturity_whitelistDelegateStruct()
        delegate10.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate10.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        maturity_whitelist.push(ethereum.Value.fromTuple(delegate10))
        setting_controller.push(ethereum.Value.fromTuple(maturity_whitelist)) //4

        let maturity_time = new CharityProposedCharityApplicationSettings_controllerMaturity_timeStruct()
        maturity_time.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        maturity_time.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        maturity_time.push(ethereum.Value.fromBoolean(true))
        let delegate6 =new CharityProposedCharityApplicationSettings_controllerMaturity_timeDelegateStruct()
        delegate6.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate6.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        maturity_time.push(ethereum.Value.fromTuple(delegate6))
        setting_controller.push(ethereum.Value.fromTuple(maturity_time)) //5

        let profile =new CharityProposedCharityApplicationSettings_controllerProfileStruct()
        profile.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        profile.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        profile.push(ethereum.Value.fromBoolean(true))
        let delegate5 =new CharityProposedCharityApplicationSettings_controllerEarnings_feeDelegateStruct()
        delegate5.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate5.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        profile.push(ethereum.Value.fromTuple(delegate5))
        setting_controller.push(ethereum.Value.fromTuple(profile)) //6

        let earningsfee = new CharityProposedCharityApplicationSettings_controllerEarnings_feeStruct()
        earnings_fee.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        earnings_fee.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        earnings_fee.push(ethereum.Value.fromBoolean(true))
        let delegate4 =new CharityProposedCharityApplicationSettings_controllerEarnings_feeDelegateStruct()
        delegate4.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate4.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        earningsfee.push(ethereum.Value.fromTuple(delegate4))
        setting_controller.push(ethereum.Value.fromTuple(earningsfee)) //7
 
        let withdrawfee = new CharityProposedCharityApplicationSettings_controllerWithdraw_feeStruct()
        withdrawfee.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        withdrawfee.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        withdrawfee.push(ethereum.Value.fromBoolean(true)) 
       let delegate3 =new CharityProposedCharityApplicationSettings_controllerWithdraw_feeDelegateStruct()
       delegate3.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
       delegate3.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
       withdrawfee.push(ethereum.Value.fromTuple(delegate3)) //8

        setting_controller.push(ethereum.Value.fromTuple(withdrawfee)) //8
  
        let depositfee = new CharityProposedCharityApplicationSettings_controllerDeposit_feeStruct()
        depositfee.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        depositfee.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        depositfee.push(ethereum.Value.fromBoolean(true))
        let delegate2 = new CharityProposedCharityApplicationSettings_controllerDeposit_feeDelegateStruct()
        delegate2.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate2.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        depositfee.push(ethereum.Value.fromTuple(delegate2)) //9

        setting_controller.push(ethereum.Value.fromTuple(depositfee)) //9

        let aumfee = new CharityProposedCharityApplicationSettings_controllerAum_feeStruct()
        aumfee.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        aumfee.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        aumfee.push(ethereum.Value.fromBoolean(true))
        let delegate1 = new CharityProposedCharityApplicationSettings_controllerAum_feeDelegateStruct()
        delegate1.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        aumfee.push(ethereum.Value.fromTuple(delegate1)) //9

        setting_controller.push(ethereum.Value.fromTuple(aumfee)) //10

        let kyc_donors_only = new CharityProposedCharityApplicationSettings_controllerKyc_donors_onlyStruct()
        kyc_donors_only.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        kyc_donors_only.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        kyc_donors_only.push(ethereum.Value.fromBoolean(true))
        let delegate11 = new CharityProposedCharityApplicationSettings_controllerKyc_donors_onlyDelegateStruct()
        delegate11.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate11.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        kyc_donors_only.push(ethereum.Value.fromTuple(delegate11)) //9
        setting_controller.push(ethereum.Value.fromTuple(kyc_donors_only)) //11
     
        let Name1 =new CharityProposedCharityApplicationSettings_controllerNameStruct()
        Name1.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        Name1.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        Name1.push(ethereum.Value.fromBoolean(true))
        let delegate12 = new CharityProposedCharityApplicationSettings_controllerKyc_donors_onlyDelegateStruct()
        delegate12.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate12.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        Name1.push(ethereum.Value.fromTuple(delegate12)) 

        setting_controller.push(ethereum.Value.fromTuple(Name1)) //12

        let image = new CharityProposedCharityApplicationSettings_controllerImageStruct()
        image.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        image.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        image.push(ethereum.Value.fromBoolean(true))
        let delegate13 = new CharityProposedCharityApplicationSettings_controllerImageDelegateStruct()
        delegate13.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate13.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        image.push(ethereum.Value.fromTuple(delegate13)) 
        setting_controller.push(ethereum.Value.fromTuple(image)) //13

        let logo = new  CharityProposedCharityApplicationSettings_controllerLogoStruct()
        logo.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        logo.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        logo.push(ethereum.Value.fromBoolean(true))
        let delegate14 = new CharityProposedCharityApplicationSettings_controllerLogoDelegateStruct()
        delegate13.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate13.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        logo.push(ethereum.Value.fromTuple(delegate14)) 
        setting_controller.push(ethereum.Value.fromTuple(logo)) //14

        let categories1 = new CharityProposedCharityApplicationSettings_controllerCategoriesStruct()
        categories1.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        categories1.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        categories1.push(ethereum.Value.fromBoolean(true))
        let delegate15 = new CharityProposedCharityApplicationSettings_controllerCategoriesDelegateStruct()
        delegate15.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate15.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        categories1.push(ethereum.Value.fromTuple(delegate15)) 
        setting_controller.push(ethereum.Value.fromTuple(categories1)) //15

        let split_to_liquid = new CharityProposedCharityApplicationSettings_controllerSplit_to_liquidStruct()
        split_to_liquid.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        split_to_liquid.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        split_to_liquid.push(ethereum.Value.fromBoolean(true))
        let delegate16 = new CharityProposedCharityApplicationSettings_controllerSplit_to_liquidDelegateStruct()
        delegate16.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate16.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        split_to_liquid.push(ethereum.Value.fromTuple(delegate16)) 
        setting_controller.push(ethereum.Value.fromTuple(split_to_liquid)) //16

        let ignore_user_splits = new CharityProposedCharityApplicationSettings_controllerIgnore_user_splitsStruct()
        ignore_user_splits.push(ethereum.Value.fromBoolean(true)) //owner_controlled
        ignore_user_splits.push(ethereum.Value.fromBoolean(true)) //gov_controlled
        ignore_user_splits.push(ethereum.Value.fromBoolean(true))
        let delegate17 = new CharityProposedCharityApplicationSettings_controllerIgnore_user_splitsDelegateStruct()
        delegate17.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))//
        delegate17.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //BondingCurve_decimals
        ignore_user_splits.push(ethereum.Value.fromTuple(delegate17)) 
        setting_controller.push(ethereum.Value.fromTuple(ignore_user_splits)) //17
        setting_controller.push(ethereum.Value.fromTuple(dao)) //18

        charityAplication.push(ethereum.Value.fromTuple(setting_controller)) //aum_fee
        charityAplication.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //_heigh
        charityAplication.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001'),Address.fromString('0x0000000000000000000000000000000000000001')])) //_heigh
        charityAplication.push(ethereum.Value.fromBoolean(true)) //_heigh
        let split_to_liquid1 = new CharityProposedCharityApplicationSplit_to_liquidStruct()
        split_to_liquid1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //_heigh
        split_to_liquid1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //_heigh
        split_to_liquid1.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //_heigh
        charityAplication.push(ethereum.Value.fromTuple(split_to_liquid1)) //_heigh
        
        let meta = 'string'
        let charityProposal = createCharityProposedEvent(proposer,proposalId,charityAplication,meta)
        handleCharityProposed(charityProposal)

        //CHARITY APPROVED
        let pId = BigInt.fromI64(1)
        let endowmentId =BigInt.fromI64(1)
        let charityApproved = createCharityApprovedEvent(pId,endowmentId)
        handleCharityApproved(charityApproved)

        //CHARITY DEPOSIT
        let sender= Address.fromString('0x0000000000000000000000000000000000000001')
        let value = BigInt.fromI64(1)
        let charityDeposit = createcharityApplicationDepositEvent(sender,value)
        handleDepositCharity(charityDeposit)

        //GAS SENT
        let member = Address.fromString('0x0000000000000000000000000000000000000001')
        let amount = BigInt.fromI64(1)
        let gasSent = createGasSentEvent(endowmentId,member,amount)
        handleGasSent(gasSent)
        

        //SEED FUNDED
        let asset= Address.fromString('0x0000000000000000000000000000000000000001')
        let seedAsset = createSeedAssetSentEvent(endowmentId,asset,amount)
        handleSeedAssetSent(seedAsset)

        //CHARITY REJECT
        let p1Id = BigInt.fromI64(1)
        let charityReject = createCharityRejectedEvent(p1Id)
        handleCharityRejected(charityReject)

        logStore()
    })

    test("Intialize Charity Application",()=>{
      assert.fieldEquals('CharityConfig','1','proposalExpiry','1')
      assert.fieldEquals('CharityConfig','1','gasAmount','1')
      assert.fieldEquals('CharityConfig','1','newEndowGasMoney','true')
      assert.fieldEquals('CharityConfig','1','accountsContract','0x0000000000000000000000000000000000000001')
    })
    test("Charity Application Proposed",()=>{
      assert.fieldEquals('CharityApplicationProposal','1','id','1')
      assert.fieldEquals('CharityApplicationProposal','1','meta','string')
      assert.fieldEquals('CharityApplicationProposal','1','proposalId','1')
      assert.fieldEquals('CharityApplicationProposal','1','proposer','0x0000000000000000000000000000000000000001')
    })
    test("Charity Application Approved",()=>{
      assert.fieldEquals('Confirmation','1','id','1')
      assert.fieldEquals('Confirmation','1','confirmations','[0xa16081f360e3847006db660bae1c6d1b2e17ec2a]')
    })
    test("Charity Deposit",()=>{
      assert.fieldEquals('DepositCharity','\u0001','id','\u0001')
      assert.fieldEquals('DepositCharity','\u0001','charity_sender','0x0000000000000000000000000000000000000001')
      assert.fieldEquals('DepositCharity','\u0001','amount','1')

    })
    test("Gas Sent",()=>{
      assert.fieldEquals('GasDispatched','1','id','1')
      assert.fieldEquals('GasDispatched','1','gassent_address','0x0000000000000000000000000000000000000001')
      assert.fieldEquals('GasDispatched','1','gasAmount','1')

    })
    test("Seed Funded",()=>{
      assert.fieldEquals('SeedFunded','1','id','1')
      assert.fieldEquals('SeedFunded','1','seedAsset','0x0000000000000000000000000000000000000001')
      assert.fieldEquals('SeedFunded','1','seedAssetAmount','1')

    })
    test("Charity Reject",()=>{
      assert.fieldEquals('SeedFunded','1','id','1')
      assert.fieldEquals('SeedFunded','1','seedAsset','0x0000000000000000000000000000000000000001')
      assert.fieldEquals('SeedFunded','1','seedAssetAmount','1')
    })
  })
