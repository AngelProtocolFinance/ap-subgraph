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
// import { Address, BigInt } from "@graphprotocol/graph-ts"
// import { AllowanceStateUpdatedTo } from "../generated/schema"
// import { AllowanceStateUpdatedTo as AllowanceStateUpdatedToEvent } from "../generated/Contract/Contract"
import { handleEndowmentCreated, handleUpdateEndowmentState,handleUpdateEndowment,handleDaoContractCreated,handleAllowanceStateUpdatedTo,handleRemoveAllowance,handleDonationDeposited,handleDonationMatchSetup,handleDonationWithdrawn,handleUpdateConfig,handleSwapToken} from "../src/angel"
import { createUpdateEndowmentStateEvent,createRemoveAllowanceEvent,createAllowanceStateUpdatedToEvent,createDonationDepositedEvent, createEndowmentCreatedEvent,createDonationMatchSetupEvent ,createUpdateEndowmentEvent,createDaoContractCreatedEvent,createDonationWithdrawnEvent,createSwapTokenEvent,createUpdateConfigEvent} from "./angel-utils"

import {UpdateEndowmentEndowmentStruct,UpdateConfigConfigStruct,DaoContractCreated_CreateDaoMessageTokenStruct,DaoContractCreated_CreateDaoMessageTokenDataStruct,DaoContractCreated_CreateDaoMessageTokenDataBondingCurve_curve_typeStruct,DaoContractCreated_CreateDaoMessageTokenDataBondingCurve_curve_typeDataStruct,DaoContractCreated_CreateDaoMessageStruct,UpdateEndowmentStateStateClosing_beneficiaryDataStruct,UpdateEndowmentStateStateClosing_beneficiaryStruct,UpdateEndowmentStateStateBalancesLockedStruct,UpdateEndowmentStateStateBalancesLiquidStruct,UpdateEndowmentStateStateBalancesStruct,UpdateEndowmentStateStateDonations_receivedStruct,UpdateEndowmentStateStateStruct,AllowanceStateUpdatedToAllowanceStruct,UpdateEndowmentEndowmentSplit_to_liquidStruct,UpdateEndowmentEndowmentSettings_controllerCategoriesDelegateStruct,UpdateEndowmentEndowmentSettings_controllerCategoriesStruct,UpdateEndowmentEndowmentSettings_controllerLogoDelegateStruct,UpdateEndowmentEndowmentSettings_controllerLogoStruct,UpdateEndowmentEndowmentSettings_controllerImageDelegateStruct,UpdateEndowmentEndowmentSettings_controllerImageStruct,UpdateEndowmentEndowmentSettings_controllerNameDelegateStruct,UpdateEndowmentEndowmentSettings_controllerNameStruct,UpdateEndowmentEndowmentSettings_controllerKyc_donors_onlyDelegateStruct,UpdateEndowmentEndowmentSettings_controllerKyc_donors_onlyStruct,UpdateEndowmentEndowmentSettings_controllerAum_feeStruct,UpdateEndowmentEndowmentSettings_controllerAum_feeDelegateStruct,UpdateEndowmentEndowmentSettings_controllerDeposit_feeDelegateStruct, UpdateEndowmentEndowmentSettings_controllerDeposit_feeStruct,UpdateEndowmentEndowmentSettings_controllerWithdraw_feeDelegateStruct,UpdateEndowmentEndowmentSettings_controllerWithdraw_feeStruct,UpdateEndowmentEndowmentSettings_controllerEarnings_feeDelegateStruct ,UpdateEndowmentEndowmentSettings_controllerEarnings_feeStruct,UpdateEndowmentEndowmentSettings_controllerProfileDelegateStruct,UpdateEndowmentEndowmentSettings_controllerProfileStruct,UpdateEndowmentEndowmentSettings_controllerMaturity_timeDelegateStruct,UpdateEndowmentEndowmentSettings_controllerMaturity_timeStruct,UpdateEndowmentEndowmentSettings_controllerWhitelisted_contributorsDelegateStruct ,UpdateEndowmentEndowmentSettings_controllerWhitelisted_contributorsStruct,UpdateEndowmentEndowmentSettings_controllerWhitelisted_beneficiariesDelegateStruct,UpdateEndowmentEndowmentSettings_controllerWhitelisted_beneficiariesStruct,UpdateEndowmentEndowmentSettings_controllerStrategiesDelegateStruct ,UpdateEndowmentEndowmentSettings_controllerStrategiesStruct,UpdateEndowmentEndowmentSettings_controllerSettings_controllerStruct,UpdateEndowmentEndowmentSettings_controllerSettings_controllerDelegateStruct,UpdateEndowmentEndowmentSettings_controllerStruct,UpdateEndowmentEndowmentAum_feeStruct,UpdateEndowmentEndowmentDeposit_feeStruct ,UpdateEndowmentEndowmentWithdraw_feeStruct,UpdateEndowmentEndowmentEarnings_feeStruct,UpdateEndowmentEndowmentRebalanceStruct,UpdateEndowmentEndowmentOneoff_vaultsStruct,UpdateEndowmentEndowmentStrategiesStruct,UpdateEndowmentEndowmentCategoriesStruct,EndowmentCreatedEndowmentStruct, EndowmentCreatedEndowmentCategoriesStruct, EndowmentCreatedEndowmentStrategiesStruct,EndowmentCreatedEndowmentOneoff_vaultsStruct, EndowmentCreatedEndowmentRebalanceStruct, EndowmentCreatedEndowmentEarnings_feeStruct, EndowmentCreatedEndowmentWithdraw_feeStruct, EndowmentCreatedEndowmentDeposit_feeStruct, EndowmentCreatedEndowmentAum_feeStruct, EndowmentCreatedEndowmentSettings_controllerStruct, EndowmentCreatedEndowmentSettings_controllerSettings_controllerStruct, EndowmentCreatedEndowmentSettings_controllerSettings_controllerDelegateStruct, EndowmentCreatedEndowmentSettings_controllerStrategiesStruct, EndowmentCreatedEndowmentSettings_controllerStrategiesDelegateStruct, EndowmentCreatedEndowmentSettings_controllerWhitelisted_beneficiariesStruct,EndowmentCreatedEndowmentSettings_controllerWhitelisted_beneficiariesDelegateStruct, EndowmentCreatedEndowmentSettings_controllerWhitelisted_contributorsStruct, EndowmentCreatedEndowmentSettings_controllerWhitelisted_contributorsDelegateStruct, EndowmentCreatedEndowmentSettings_controllerMaturity_timeStruct, EndowmentCreatedEndowmentSettings_controllerMaturity_timeDelegateStruct, EndowmentCreatedEndowmentSettings_controllerProfileStruct, EndowmentCreatedEndowmentSettings_controllerProfileDelegateStruct, EndowmentCreatedEndowmentSettings_controllerEarnings_feeStruct, EndowmentCreatedEndowmentSettings_controllerEarnings_feeDelegateStruct, EndowmentCreatedEndowmentSettings_controllerWithdraw_feeStruct, EndowmentCreatedEndowmentSettings_controllerWithdraw_feeDelegateStruct, EndowmentCreatedEndowmentSettings_controllerDeposit_feeStruct, EndowmentCreatedEndowmentSettings_controllerDeposit_feeDelegateStruct, EndowmentCreatedEndowmentSettings_controllerAum_feeStruct, EndowmentCreatedEndowmentSettings_controllerAum_feeDelegateStruct, EndowmentCreatedEndowmentSettings_controllerKyc_donors_onlyStruct, EndowmentCreatedEndowmentSettings_controllerKyc_donors_onlyDelegateStruct, EndowmentCreatedEndowmentSettings_controllerNameStruct, EndowmentCreatedEndowmentSettings_controllerNameDelegateStruct, EndowmentCreatedEndowmentSettings_controllerImageStruct, EndowmentCreatedEndowmentSettings_controllerImageDelegateStruct, EndowmentCreatedEndowmentSettings_controllerLogoStruct, EndowmentCreatedEndowmentSettings_controllerLogoDelegateStruct, EndowmentCreatedEndowmentSettings_controllerCategoriesStruct, EndowmentCreatedEndowmentSettings_controllerCategoriesDelegateStruct, EndowmentCreatedEndowmentSplit_to_liquidStruct} from "../generated/Angel/Angel";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Accounts & Endowments", () => {
  beforeAll(() => {
    let categories = new EndowmentCreatedEndowmentCategoriesStruct()
    categories.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))
    categories.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))

    let strategies = new EndowmentCreatedEndowmentStrategiesStruct()
    strategies.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    strategies.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))
    strategies.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    strategies.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))

    let oneoffvault = new EndowmentCreatedEndowmentOneoff_vaultsStruct()
    oneoffvault.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    oneoffvault.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))
    oneoffvault.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    oneoffvault.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))

    let rebalance = new EndowmentCreatedEndowmentRebalanceStruct()
    rebalance.push(ethereum.Value.fromBoolean(false))
    rebalance.push(ethereum.Value.fromBoolean(false))
    rebalance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    rebalance.push(ethereum.Value.fromBoolean(false))
    rebalance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let earningFee = new EndowmentCreatedEndowmentEarnings_feeStruct()
    earningFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    earningFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    earningFee.push(ethereum.Value.fromBoolean(false))

    let withdrawFee = new EndowmentCreatedEndowmentWithdraw_feeStruct()
    withdrawFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    withdrawFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    withdrawFee.push(ethereum.Value.fromBoolean(false))

    let depositFee = new EndowmentCreatedEndowmentDeposit_feeStruct()
    depositFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    depositFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    depositFee.push(ethereum.Value.fromBoolean(false))

    let aumFee = new EndowmentCreatedEndowmentAum_feeStruct()
    aumFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    aumFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    aumFee.push(ethereum.Value.fromBoolean(false))

    let settingsettingdelegate = new EndowmentCreatedEndowmentSettings_controllerSettings_controllerDelegateStruct()
    settingsettingdelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingsettingdelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingsetting = new EndowmentCreatedEndowmentSettings_controllerSettings_controllerStruct()
    settingsetting.push(ethereum.Value.fromBoolean(false))
    settingsetting.push(ethereum.Value.fromBoolean(false))
    settingsetting.push(ethereum.Value.fromBoolean(false))
    settingsetting.push(ethereum.Value.fromTuple(settingsettingdelegate))

    let settingstrategiesdelegate = new EndowmentCreatedEndowmentSettings_controllerStrategiesDelegateStruct()
    settingstrategiesdelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingstrategiesdelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingstrategies = new EndowmentCreatedEndowmentSettings_controllerStrategiesStruct()
    settingstrategies.push(ethereum.Value.fromBoolean(false))
    settingstrategies.push(ethereum.Value.fromBoolean(false))
    settingstrategies.push(ethereum.Value.fromBoolean(false))
    settingstrategies.push(ethereum.Value.fromTuple(settingstrategiesdelegate))

    let settingbeneficiarydelegate = new EndowmentCreatedEndowmentSettings_controllerWhitelisted_beneficiariesDelegateStruct()
    settingbeneficiarydelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingbeneficiarydelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingbeneficiary = new EndowmentCreatedEndowmentSettings_controllerWhitelisted_beneficiariesStruct()
    settingbeneficiary.push(ethereum.Value.fromBoolean(false))
    settingbeneficiary.push(ethereum.Value.fromBoolean(false))
    settingbeneficiary.push(ethereum.Value.fromBoolean(false))
    settingbeneficiary.push(ethereum.Value.fromTuple(settingbeneficiarydelegate))

    let settingcontributordelegate = new EndowmentCreatedEndowmentSettings_controllerWhitelisted_contributorsDelegateStruct()
    settingcontributordelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingcontributordelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingcontributor = new EndowmentCreatedEndowmentSettings_controllerWhitelisted_contributorsStruct()
    settingcontributor.push(ethereum.Value.fromBoolean(false))
    settingcontributor.push(ethereum.Value.fromBoolean(false))
    settingcontributor.push(ethereum.Value.fromBoolean(false))
    settingcontributor.push(ethereum.Value.fromTuple(settingcontributordelegate))

    let settingmaturitytimedelegate = new EndowmentCreatedEndowmentSettings_controllerMaturity_timeDelegateStruct()
    settingmaturitytimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingmaturitytimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingmaturitytime = new EndowmentCreatedEndowmentSettings_controllerMaturity_timeStruct()
    settingmaturitytime.push(ethereum.Value.fromBoolean(false))
    settingmaturitytime.push(ethereum.Value.fromBoolean(false))
    settingmaturitytime.push(ethereum.Value.fromBoolean(false))
    settingmaturitytime.push(ethereum.Value.fromTuple(settingmaturitytimedelegate))

    let settingprofiletimedelegate = new EndowmentCreatedEndowmentSettings_controllerProfileDelegateStruct()
    settingprofiletimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingprofiletimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingprofile = new EndowmentCreatedEndowmentSettings_controllerProfileStruct()
    settingprofile.push(ethereum.Value.fromBoolean(false))
    settingprofile.push(ethereum.Value.fromBoolean(false))
    settingprofile.push(ethereum.Value.fromBoolean(false))
    settingprofile.push(ethereum.Value.fromTuple(settingprofiletimedelegate))

    let settingearningtimedelegate = new EndowmentCreatedEndowmentSettings_controllerEarnings_feeDelegateStruct()
    settingearningtimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingearningtimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingearning = new EndowmentCreatedEndowmentSettings_controllerEarnings_feeStruct()
    settingearning.push(ethereum.Value.fromBoolean(false))
    settingearning.push(ethereum.Value.fromBoolean(false))
    settingearning.push(ethereum.Value.fromBoolean(false))
    settingearning.push(ethereum.Value.fromTuple(settingearningtimedelegate))

    let settingwithdrawtimedelegate = new EndowmentCreatedEndowmentSettings_controllerWithdraw_feeDelegateStruct()
    settingwithdrawtimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingwithdrawtimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingwithdraw = new EndowmentCreatedEndowmentSettings_controllerWithdraw_feeStruct() 
    settingwithdraw.push(ethereum.Value.fromBoolean(false))
    settingwithdraw.push(ethereum.Value.fromBoolean(false))
    settingwithdraw.push(ethereum.Value.fromBoolean(false))
    settingwithdraw.push(ethereum.Value.fromTuple(settingwithdrawtimedelegate))

    let settingdeposittimedelegate = new EndowmentCreatedEndowmentSettings_controllerDeposit_feeDelegateStruct()
    settingdeposittimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingdeposittimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingdeposit = new EndowmentCreatedEndowmentSettings_controllerDeposit_feeStruct()
    settingdeposit.push(ethereum.Value.fromBoolean(false))
    settingdeposit.push(ethereum.Value.fromBoolean(false))
    settingdeposit.push(ethereum.Value.fromBoolean(false))
    settingdeposit.push(ethereum.Value.fromTuple(settingdeposittimedelegate))

    let settingaumtimedelegate = new EndowmentCreatedEndowmentSettings_controllerAum_feeDelegateStruct()
    settingaumtimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingaumtimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingaum = new EndowmentCreatedEndowmentSettings_controllerAum_feeStruct()
    settingaum.push(ethereum.Value.fromBoolean(false))
    settingaum.push(ethereum.Value.fromBoolean(false))
    settingaum.push(ethereum.Value.fromBoolean(false))
    settingaum.push(ethereum.Value.fromTuple(settingaumtimedelegate))
    
    let settingkyctimedelegate = new EndowmentCreatedEndowmentSettings_controllerKyc_donors_onlyDelegateStruct()
    settingkyctimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingkyctimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingkyc = new EndowmentCreatedEndowmentSettings_controllerKyc_donors_onlyStruct()
    settingkyc.push(ethereum.Value.fromBoolean(false))
    settingkyc.push(ethereum.Value.fromBoolean(false))
    settingkyc.push(ethereum.Value.fromBoolean(false))
    settingkyc.push(ethereum.Value.fromTuple(settingkyctimedelegate))

    let settingnametimedelegate = new EndowmentCreatedEndowmentSettings_controllerNameDelegateStruct()
    settingnametimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingnametimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingname = new EndowmentCreatedEndowmentSettings_controllerNameStruct()
    settingname.push(ethereum.Value.fromBoolean(false))
    settingname.push(ethereum.Value.fromBoolean(false))
    settingname.push(ethereum.Value.fromBoolean(false))
    settingname.push(ethereum.Value.fromTuple(settingnametimedelegate))

    let settingimagetimedelegate = new EndowmentCreatedEndowmentSettings_controllerImageDelegateStruct()
    settingimagetimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingimagetimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingimage = new EndowmentCreatedEndowmentSettings_controllerImageStruct()
    settingimage.push(ethereum.Value.fromBoolean(false))
    settingimage.push(ethereum.Value.fromBoolean(false))
    settingimage.push(ethereum.Value.fromBoolean(false))
    settingimage.push(ethereum.Value.fromTuple(settingimagetimedelegate))

    let settinglogotimedelegate = new EndowmentCreatedEndowmentSettings_controllerLogoDelegateStruct()
    settinglogotimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settinglogotimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settinglogo = new EndowmentCreatedEndowmentSettings_controllerLogoStruct()
    settinglogo.push(ethereum.Value.fromBoolean(false))
    settinglogo.push(ethereum.Value.fromBoolean(false))
    settinglogo.push(ethereum.Value.fromBoolean(false))
    settinglogo.push(ethereum.Value.fromTuple(settinglogotimedelegate))

    let settingcategoriestimedelegate = new EndowmentCreatedEndowmentSettings_controllerCategoriesDelegateStruct()
    settingcategoriestimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    settingcategoriestimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let settingcategories = new EndowmentCreatedEndowmentSettings_controllerCategoriesStruct()
    settingcategories.push(ethereum.Value.fromBoolean(false))
    settingcategories.push(ethereum.Value.fromBoolean(false))
    settingcategories.push(ethereum.Value.fromBoolean(false))
    settingcategories.push(ethereum.Value.fromTuple(settingcategoriestimedelegate))


    let settingsControl = new EndowmentCreatedEndowmentSettings_controllerStruct()
    settingsControl.push(ethereum.Value.fromTuple(settingsetting))
    settingsControl.push(ethereum.Value.fromTuple(settingstrategies))
    settingsControl.push(ethereum.Value.fromTuple(settingbeneficiary))
    settingsControl.push(ethereum.Value.fromTuple(settingcontributor))
    settingsControl.push(ethereum.Value.fromTuple(settingmaturitytime))
    settingsControl.push(ethereum.Value.fromTuple(settingprofile))
    settingsControl.push(ethereum.Value.fromTuple(settingearning))
    settingsControl.push(ethereum.Value.fromTuple(settingwithdraw))
    settingsControl.push(ethereum.Value.fromTuple(settingdeposit))
    settingsControl.push(ethereum.Value.fromTuple(settingaum))
    settingsControl.push(ethereum.Value.fromTuple(settingkyc))
    settingsControl.push(ethereum.Value.fromTuple(settingname))
    settingsControl.push(ethereum.Value.fromTuple(settingimage))
    settingsControl.push(ethereum.Value.fromTuple(settinglogo))
    settingsControl.push(ethereum.Value.fromTuple(settingcategories))

    let splittoLiquid = new EndowmentCreatedEndowmentSplit_to_liquidStruct()
    splittoLiquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    splittoLiquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    splittoLiquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let endowment_id = BigInt.fromI64(1)
    let endowment = new EndowmentCreatedEndowmentStruct()
    endowment.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001'))) // owner
    endowment.push(ethereum.Value.fromString('0x0')) // name
    endowment.push(ethereum.Value.fromTuple(categories)) // categories
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) // tier
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) // endow_type
    endowment.push(ethereum.Value.fromString('0x0')) // logo
    endowment.push(ethereum.Value.fromString('0x0')) // image
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) // status
    endowment.push(ethereum.Value.fromBoolean(false)) // deposit_approved
    endowment.push(ethereum.Value.fromBoolean(false)) // withdraw_approved
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) // maturity_time
    endowment.push(ethereum.Value.fromTuple(strategies)) //stategies
    endowment.push(ethereum.Value.fromTuple(oneoffvault)) //oneoff_vaults
    endowment.push(ethereum.Value.fromTuple(rebalance)) //rebalance
    endowment.push(ethereum.Value.fromBoolean(false)) //kyc_donors_only
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) // pending_redemption
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //copycat_strategy
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //proposal_link
    endowment.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002'))) //dao
    endowment.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002'))) //dao_token
    endowment.push(ethereum.Value.fromBoolean(false)) // donation_match_active
    endowment.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    endowment.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001')]))
    endowment.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001')]))
    endowment.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001')]))
    endowment.push(ethereum.Value.fromTuple(earningFee))
    endowment.push(ethereum.Value.fromTuple(withdrawFee))
    endowment.push(ethereum.Value.fromTuple(depositFee))
    endowment.push(ethereum.Value.fromTuple(aumFee))
    endowment.push(ethereum.Value.fromTuple(settingsControl))
    endowment.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    endowment.push(ethereum.Value.fromBoolean(false))
    endowment.push(ethereum.Value.fromTuple(splittoLiquid))
    
    let createEndowment = createEndowmentCreatedEvent(endowment_id, endowment)
    handleEndowmentCreated(createEndowment)


    //UPDATE ENDOWMENT

    let Categories = new UpdateEndowmentEndowmentCategoriesStruct()
    Categories.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))
    Categories.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))

    let Strategies = new UpdateEndowmentEndowmentStrategiesStruct()
    Strategies.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    Strategies.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))
    Strategies.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    Strategies.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))

    let Oneoffvault = new UpdateEndowmentEndowmentOneoff_vaultsStruct()
    Oneoffvault.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    Oneoffvault.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))
    Oneoffvault.push(ethereum.Value.fromStringArray(['0x0', '0x0']))
    Oneoffvault.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(1)]))

    let Rebalance = new UpdateEndowmentEndowmentRebalanceStruct()
    Rebalance.push(ethereum.Value.fromBoolean(false))
    Rebalance.push(ethereum.Value.fromBoolean(false))
    Rebalance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Rebalance.push(ethereum.Value.fromBoolean(false))
    Rebalance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let EarningFee = new UpdateEndowmentEndowmentEarnings_feeStruct()
    EarningFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    EarningFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    EarningFee.push(ethereum.Value.fromBoolean(false))

    let WithdrawFee = new UpdateEndowmentEndowmentWithdraw_feeStruct()
    WithdrawFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    WithdrawFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    WithdrawFee.push(ethereum.Value.fromBoolean(false))

    let DepositFee = new UpdateEndowmentEndowmentDeposit_feeStruct ()
    DepositFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    DepositFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    DepositFee.push(ethereum.Value.fromBoolean(false))

    let AumFee = new UpdateEndowmentEndowmentAum_feeStruct()
    AumFee.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    AumFee.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    AumFee.push(ethereum.Value.fromBoolean(false))

    let Settingsettingdelegate = new UpdateEndowmentEndowmentSettings_controllerSettings_controllerDelegateStruct()
    Settingsettingdelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingsettingdelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingsetting = new UpdateEndowmentEndowmentSettings_controllerSettings_controllerStruct()
    Settingsetting.push(ethereum.Value.fromBoolean(false))
    Settingsetting.push(ethereum.Value.fromBoolean(false))
    Settingsetting.push(ethereum.Value.fromBoolean(false))
    Settingsetting.push(ethereum.Value.fromTuple(Settingsettingdelegate))

    let Settingstrategiesdelegate = new UpdateEndowmentEndowmentSettings_controllerStrategiesDelegateStruct ()
    Settingstrategiesdelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingstrategiesdelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingstrategies = new UpdateEndowmentEndowmentSettings_controllerStrategiesStruct()
    Settingstrategies.push(ethereum.Value.fromBoolean(false))
    Settingstrategies.push(ethereum.Value.fromBoolean(false))
    Settingstrategies.push(ethereum.Value.fromBoolean(false))
    Settingstrategies.push(ethereum.Value.fromTuple(Settingstrategiesdelegate))

    let Settingbeneficiarydelegate = new UpdateEndowmentEndowmentSettings_controllerWhitelisted_beneficiariesDelegateStruct()
    Settingbeneficiarydelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingbeneficiarydelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingbeneficiary = new UpdateEndowmentEndowmentSettings_controllerWhitelisted_beneficiariesStruct()
    Settingbeneficiary.push(ethereum.Value.fromBoolean(false))
    Settingbeneficiary.push(ethereum.Value.fromBoolean(false))
    Settingbeneficiary.push(ethereum.Value.fromBoolean(false))
    Settingbeneficiary.push(ethereum.Value.fromTuple(Settingbeneficiarydelegate))

    let Settingcontributordelegate = new UpdateEndowmentEndowmentSettings_controllerWhitelisted_contributorsDelegateStruct()
    Settingcontributordelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingcontributordelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingcontributor = new UpdateEndowmentEndowmentSettings_controllerWhitelisted_contributorsStruct()
    Settingcontributor.push(ethereum.Value.fromBoolean(false))
    Settingcontributor.push(ethereum.Value.fromBoolean(false))
    Settingcontributor.push(ethereum.Value.fromBoolean(false))
    Settingcontributor.push(ethereum.Value.fromTuple(Settingcontributordelegate))

    let Settingmaturitytimedelegate = new UpdateEndowmentEndowmentSettings_controllerMaturity_timeDelegateStruct()
    Settingmaturitytimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingmaturitytimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingmaturitytime = new UpdateEndowmentEndowmentSettings_controllerMaturity_timeStruct()
    Settingmaturitytime.push(ethereum.Value.fromBoolean(false))
    Settingmaturitytime.push(ethereum.Value.fromBoolean(false))
    Settingmaturitytime.push(ethereum.Value.fromBoolean(false))
    Settingmaturitytime.push(ethereum.Value.fromTuple(Settingmaturitytimedelegate))

    let Settingprofiletimedelegate = new UpdateEndowmentEndowmentSettings_controllerProfileDelegateStruct()
    Settingprofiletimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingprofiletimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingprofile = new UpdateEndowmentEndowmentSettings_controllerProfileStruct()
    Settingprofile.push(ethereum.Value.fromBoolean(false))
    Settingprofile.push(ethereum.Value.fromBoolean(false))
    Settingprofile.push(ethereum.Value.fromBoolean(false))
    Settingprofile.push(ethereum.Value.fromTuple(settingprofiletimedelegate))

    let Settingearningtimedelegate = new UpdateEndowmentEndowmentSettings_controllerEarnings_feeDelegateStruct ()
    Settingearningtimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingearningtimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingearning = new UpdateEndowmentEndowmentSettings_controllerEarnings_feeStruct()
    Settingearning.push(ethereum.Value.fromBoolean(false))
    Settingearning.push(ethereum.Value.fromBoolean(false))
    Settingearning.push(ethereum.Value.fromBoolean(false))
    Settingearning.push(ethereum.Value.fromTuple(Settingearningtimedelegate))

    let Settingwithdrawtimedelegate = new UpdateEndowmentEndowmentSettings_controllerWithdraw_feeDelegateStruct()
    Settingwithdrawtimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingwithdrawtimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingwithdraw = new UpdateEndowmentEndowmentSettings_controllerWithdraw_feeStruct() 
    Settingwithdraw.push(ethereum.Value.fromBoolean(false))
    Settingwithdraw.push(ethereum.Value.fromBoolean(false))
    Settingwithdraw.push(ethereum.Value.fromBoolean(false))
    Settingwithdraw.push(ethereum.Value.fromTuple(Settingwithdrawtimedelegate))

    let Settingdeposittimedelegate = new UpdateEndowmentEndowmentSettings_controllerDeposit_feeDelegateStruct()
    Settingdeposittimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingdeposittimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingdeposit = new  UpdateEndowmentEndowmentSettings_controllerDeposit_feeStruct()
    Settingdeposit.push(ethereum.Value.fromBoolean(false))
    Settingdeposit.push(ethereum.Value.fromBoolean(false))
    Settingdeposit.push(ethereum.Value.fromBoolean(false))
    Settingdeposit.push(ethereum.Value.fromTuple(Settingdeposittimedelegate))

    let Settingaumtimedelegate = new UpdateEndowmentEndowmentSettings_controllerAum_feeDelegateStruct()
    Settingaumtimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingaumtimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingaum = new UpdateEndowmentEndowmentSettings_controllerAum_feeStruct()
    Settingaum.push(ethereum.Value.fromBoolean(false))
    Settingaum.push(ethereum.Value.fromBoolean(false))
    Settingaum.push(ethereum.Value.fromBoolean(false))
    Settingaum.push(ethereum.Value.fromTuple(Settingaumtimedelegate))
    
    let Settingkyctimedelegate = new UpdateEndowmentEndowmentSettings_controllerKyc_donors_onlyDelegateStruct()
    Settingkyctimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingkyctimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingkyc = new UpdateEndowmentEndowmentSettings_controllerKyc_donors_onlyStruct()
    Settingkyc.push(ethereum.Value.fromBoolean(false))
    Settingkyc.push(ethereum.Value.fromBoolean(false))
    Settingkyc.push(ethereum.Value.fromBoolean(false))
    Settingkyc.push(ethereum.Value.fromTuple(Settingkyctimedelegate))

    let Settingnametimedelegate = new UpdateEndowmentEndowmentSettings_controllerNameDelegateStruct()
    Settingnametimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingnametimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingname = new UpdateEndowmentEndowmentSettings_controllerNameStruct()
    Settingname.push(ethereum.Value.fromBoolean(false))
    Settingname.push(ethereum.Value.fromBoolean(false))
    Settingname.push(ethereum.Value.fromBoolean(false))
    Settingname.push(ethereum.Value.fromTuple(Settingnametimedelegate))

    let Settingimagetimedelegate = new UpdateEndowmentEndowmentSettings_controllerImageDelegateStruct()
    Settingimagetimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingimagetimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingimage = new UpdateEndowmentEndowmentSettings_controllerImageStruct()
    Settingimage.push(ethereum.Value.fromBoolean(false))
    Settingimage.push(ethereum.Value.fromBoolean(false))
    Settingimage.push(ethereum.Value.fromBoolean(false))
    Settingimage.push(ethereum.Value.fromTuple(Settingimagetimedelegate))

    let Settinglogotimedelegate = new UpdateEndowmentEndowmentSettings_controllerLogoDelegateStruct()
    Settinglogotimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settinglogotimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settinglogo = new UpdateEndowmentEndowmentSettings_controllerLogoStruct()
    Settinglogo.push(ethereum.Value.fromBoolean(false))
    Settinglogo.push(ethereum.Value.fromBoolean(false))
    Settinglogo.push(ethereum.Value.fromBoolean(false))
    Settinglogo.push(ethereum.Value.fromTuple(settinglogotimedelegate))

    let Settingcategoriestimedelegate = new UpdateEndowmentEndowmentSettings_controllerCategoriesDelegateStruct()
    Settingcategoriestimedelegate.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    Settingcategoriestimedelegate.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let Settingcategories = new UpdateEndowmentEndowmentSettings_controllerCategoriesStruct()
    Settingcategories.push(ethereum.Value.fromBoolean(false))
    Settingcategories.push(ethereum.Value.fromBoolean(false))
    Settingcategories.push(ethereum.Value.fromBoolean(false))
    Settingcategories.push(ethereum.Value.fromTuple(Settingcategoriestimedelegate))


    let SettingsControl = new UpdateEndowmentEndowmentSettings_controllerStruct()
    SettingsControl.push(ethereum.Value.fromTuple(Settingsetting))
    SettingsControl.push(ethereum.Value.fromTuple(Settingstrategies))
    SettingsControl.push(ethereum.Value.fromTuple(Settingbeneficiary))
    SettingsControl.push(ethereum.Value.fromTuple(Settingcontributor))
    SettingsControl.push(ethereum.Value.fromTuple(Settingmaturitytime))
    SettingsControl.push(ethereum.Value.fromTuple(Settingprofile))
    SettingsControl.push(ethereum.Value.fromTuple(Settingearning))
    SettingsControl.push(ethereum.Value.fromTuple(Settingwithdraw))
    SettingsControl.push(ethereum.Value.fromTuple(Settingdeposit))
    SettingsControl.push(ethereum.Value.fromTuple(Settingaum))
    SettingsControl.push(ethereum.Value.fromTuple(Settingkyc))
    SettingsControl.push(ethereum.Value.fromTuple(Settingname))
    SettingsControl.push(ethereum.Value.fromTuple(Settingimage))
    SettingsControl.push(ethereum.Value.fromTuple(Settinglogo))
    SettingsControl.push(ethereum.Value.fromTuple(Settingcategories))

    let SplittoLiquid = new UpdateEndowmentEndowmentSplit_to_liquidStruct()
    SplittoLiquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    SplittoLiquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    SplittoLiquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))



    let update = new UpdateEndowmentEndowmentStruct()
    update.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001'))) // owner
    update.push(ethereum.Value.fromString('0x0')) // name
    update.push(ethereum.Value.fromTuple(Categories)) // categories
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) // tier
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) // endow_type
    update.push(ethereum.Value.fromString('0x0')) // logo
    update.push(ethereum.Value.fromString('0x0')) // image
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))) // status
    update.push(ethereum.Value.fromBoolean(false)) // deposit_approved
    update.push(ethereum.Value.fromBoolean(false)) // withdraw_approved
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) // maturity_time
    update.push(ethereum.Value.fromTuple(Strategies)) //stategies
    update.push(ethereum.Value.fromTuple(Oneoffvault)) //oneoff_vaults
    update.push(ethereum.Value.fromTuple(Rebalance)) //rebalance
    update.push(ethereum.Value.fromBoolean(false)) //kyc_donors_only
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) // pending_redemption
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //copycat_strategy
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //proposal_link
    update.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002'))) //dao
    update.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002'))) //dao_token
    update.push(ethereum.Value.fromBoolean(false)) // donation_match_active
    update.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000002')))
    update.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000002')]))
    update.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000002')]))
    update.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000002')]))
    update.push(ethereum.Value.fromTuple(EarningFee))
    update.push(ethereum.Value.fromTuple(WithdrawFee))
    update.push(ethereum.Value.fromTuple(DepositFee))
    update.push(ethereum.Value.fromTuple(AumFee))
    update.push(ethereum.Value.fromTuple(SettingsControl))
    update.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    update.push(ethereum.Value.fromBoolean(false))
    update.push(ethereum.Value.fromTuple(SplittoLiquid))

    let updateEndowment = createUpdateEndowmentEvent(endowment_id, update)
    handleUpdateEndowment(updateEndowment)



    // ALLOWANCE STATE UPDATE

    let id = BigInt.fromI64(1)
    
    let donations_received = new UpdateEndowmentStateStateDonations_receivedStruct()

    donations_received.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //locked
    donations_received.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1))) //liquid
    
    let Liquid = new UpdateEndowmentStateStateBalancesLiquidStruct()
    Liquid.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Liquid.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1)]))
    Liquid.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001')]))

    let Locked = new UpdateEndowmentStateStateBalancesLiquidStruct()
    Locked.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Locked.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1)]))
    Locked.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001')]))

    // let Locked = new UpdateEndowmentStateStateBalancesLockedStruct()
    let balances = new UpdateEndowmentStateStateBalancesStruct()
    balances.push(ethereum.Value.fromTuple(Liquid))
    balances.push(ethereum.Value.fromTuple(Locked))
  
    let data = new UpdateEndowmentStateStateClosing_beneficiaryDataStruct()
    data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    data.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))

     

    let closing_benificiary = new UpdateEndowmentStateStateClosing_beneficiaryStruct()
    closing_benificiary.push(ethereum.Value.fromTuple(data))
    closing_benificiary.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    let endowmentState = new UpdateEndowmentStateStateStruct()

    endowmentState.push(ethereum.Value.fromTuple(donations_received)) //donations_received
    endowmentState.push(ethereum.Value.fromTuple(balances)) //balances
    endowmentState.push(ethereum.Value.fromBoolean(false)) //closing_endowment
    endowmentState.push(ethereum.Value.fromTuple(closing_benificiary)) //closing_beneficiary

    let daoAdress =Address.fromString('0x0000000000000000000000000000000000000001')
    let Data = new DaoContractCreated_CreateDaoMessageStruct();

    let bondingCurveData = new DaoContractCreated_CreateDaoMessageTokenDataBondingCurve_curve_typeDataStruct();

    bondingCurveData.push( ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    bondingCurveData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    bondingCurveData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    bondingCurveData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let bondingCurveTuple= new DaoContractCreated_CreateDaoMessageTokenDataBondingCurve_curve_typeStruct();

    bondingCurveTuple.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(0)))
    bondingCurveTuple.push(ethereum.Value.fromTuple(bondingCurveData));

    let tokenData = new DaoContractCreated_CreateDaoMessageTokenDataStruct();
    tokenData.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    tokenData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    tokenData.push(ethereum.Value.fromString('0x0'))
    tokenData.push(ethereum.Value.fromString('0x0'))
    tokenData.push(ethereum.Value.fromTuple(bondingCurveTuple))
    tokenData.push(ethereum.Value.fromString('0x0'))
    tokenData.push(ethereum.Value.fromString('0x0'))
    tokenData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    tokenData.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    tokenData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    tokenData.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

    let token = new DaoContractCreated_CreateDaoMessageTokenStruct();
    
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)));
    Data.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromTuple(token))
    Data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    Data.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    Data.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
 
    let newDao = createDaoContractCreatedEvent(Data,daoAdress)
    handleDaoContractCreated(newDao)
   
    //handleAllowanceStateUpdatedTo
    let sender = Address.fromString('0x0000000000000000000000000000000000000001')
    let spender = Address.fromString('0x0000000000000000000000000000000000000001')
    let tokenAddress = Address.fromString('0x0000000000000000000000000000000000000001')

    let allowance =new AllowanceStateUpdatedToAllowanceStruct()
    allowance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    allowance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    allowance.push(ethereum.Value.fromBoolean(true))
    allowance.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    allowance.push(ethereum.Value.fromBoolean(true))
    let newAllowanceStateUpdate =createAllowanceStateUpdatedToEvent(sender,spender,tokenAddress,allowance)
    handleAllowanceStateUpdatedTo(newAllowanceStateUpdate)

    //Remove Allowance
    let s =Address.fromString('0x0000000000000000000000000000000000000001')
    let p=Address.fromString('0x0000000000000000000000000000000000000001')
    let a =Address.fromString('0x0000000000000000000000000000000000000001')
    let newallowance= createRemoveAllowanceEvent(s,p,a)
    handleRemoveAllowance(newallowance)

    let donation_id = BigInt.fromI64(1)
    let deposit_amount = BigInt.fromI64(150)
    let donationdeposit = createDonationDepositedEvent(donation_id, deposit_amount)
    handleDonationDeposited(donationdeposit)
    

    let donationMatchContract = Address.fromString('0x0000000000000000000000000000000000000002')
    let donationSetup = createDonationMatchSetupEvent(donation_id, donationMatchContract)
    handleDonationMatchSetup(donationSetup)

    let recipient = Address.fromString('0x0000000000000000000000000000000000000003')
    let withdraw_amount = BigInt.fromI64(50)
    let donationWithdraw = createDonationWithdrawnEvent(donation_id, recipient, withdraw_amount)
    handleDonationWithdrawn(donationWithdraw)

    let config = new UpdateConfigConfigStruct()
    config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
    config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
    config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
    let updateConfig = createUpdateConfigEvent(config)
    handleUpdateConfig(updateConfig)

    let token_id = BigInt.fromI64(1)
    let account_type = 1
    let token_amount = BigInt.fromI64(100)
    let tokenin = Address.fromString('0x0000000000000000000000000000000000000004')
    let tokenout = Address.fromString('0x0000000000000000000000000000000000000005')
    let amountout = BigInt.fromI64(10)
    let swaptoken = createSwapTokenEvent(token_id, account_type, token_amount, tokenin, tokenout, amountout)
    handleSwapToken(swaptoken)

    let endowmentStateUpdate = createUpdateEndowmentStateEvent(id,endowmentState)
    handleUpdateEndowmentState(endowmentStateUpdate)

    logStore()
  })

  afterAll(() => {
    clearStore()
  })

  test('Endowment Created', ()=>{
    assert.fieldEquals('Endowment','0x1', 'id', '0x1')
    assert.fieldEquals('Endowment', '0x1', 'owner', '0x0000000000000000000000000000000000000001')
    assert.fieldEquals('Endowment', '0x1', 'name', '0x0')
    assert.fieldEquals('Endowment', '0x1', 'tier', '1')
    assert.fieldEquals('Endowment', '0x1', 'logo', '0x0')
    // assert.fieldEquals('Endowment', '0x1', 'image', '0x0')
    assert.fieldEquals('Endowment', '0x1', 'deposit_approved', 'false')
    assert.fieldEquals('Endowment', '0x1', 'withdraw_approved', 'false')
    assert.fieldEquals('Endowment', '0x1', 'maturity_time', '1')
    // assert.fieldEquals('Endowment', '0x1', 'categories', '1')
    assert.fieldEquals('Endowment', '0x1', 'endow_type', 'Charity')
    assert.fieldEquals('Endowment', '0x1', 'status', 'Approved')
    // assert.fieldEquals('Endowment', '0x1', 'strategies', '1')
    // assert.fieldEquals('Endowment', '0x1', 'oneoff_vaults', '1')
    // assert.fieldEquals('Endowment', '0x1', 'rebalance', '1')
    assert.fieldEquals('Endowment', '0x1', 'kyc_donors_only', 'false')
    assert.fieldEquals('Endowment', '0x1', 'pending_redemptions', '1')
    assert.fieldEquals('Endowment', '0x1', 'copycat_strategy', '1')
    assert.fieldEquals('Endowment', '0x1', 'proposal_link', '1')
    assert.fieldEquals('Endowment', '0x1', 'dao', '0x0000000000000000000000000000000000000002')
    assert.fieldEquals('Endowment', '0x1', 'dao_token', '0x0000000000000000000000000000000000000002')
    assert.fieldEquals('Endowment', '0x1', 'donation_match_active', 'false')
    assert.fieldEquals('Endowment', '0x1', 'donation_match_contract','0x0000000000000000000000000000000000000002')
    assert.fieldEquals('Endowment', '0x1', 'whitelisted_beneficiaries', '[0x0000000000000000000000000000000000000002]')
    assert.fieldEquals('Endowment', '0x1', 'whitelisted_contributors', '[0x0000000000000000000000000000000000000002]')
    assert.fieldEquals('Endowment', '0x1', 'maturity_whitelist', '[0x0000000000000000000000000000000000000002]')
    assert.fieldEquals('Endowment', '0x1', 'earnings_fee', '1')
    assert.fieldEquals('Endowment', '0x1', 'withdraw_fee', '1')
    assert.fieldEquals('Endowment', '0x1', 'deposit_fee', '1')
    assert.fieldEquals('Endowment', '0x1', 'aum_fee', '1')
    // assert.fieldEquals('Endowment', '0x1', 'settings_controller', '1')
    assert.fieldEquals('Endowment', '0x1', 'parent', '1')
    assert.fieldEquals('Endowment', '0x1', 'ignore_user_splits', 'false')
    // assert.fieldEquals('Endowment', '0x1', 'split_to_liquid', '1')
  })

  test('Endowment Updated', ()=>{
    assert.fieldEquals('Endowment','0x1', 'id', '0x1')
    assert.fieldEquals('Endowment', '0x1', 'owner', '0x0000000000000000000000000000000000000001')
    assert.fieldEquals('Endowment', '0x1', 'name', '0x0')
    assert.fieldEquals('Endowment', '0x1', 'tier', '1')
    assert.fieldEquals('Endowment', '0x1', 'logo', '0x0')
    // assert.fieldEquals('Endowment', '0x1', 'image', '0x0')
    assert.fieldEquals('Endowment', '0x1', 'deposit_approved', 'false')
    assert.fieldEquals('Endowment', '0x1', 'withdraw_approved', 'false')
    assert.fieldEquals('Endowment', '0x1', 'maturity_time', '1')
    // assert.fieldEquals('Endowment', '0x1', 'categories', '1')
    assert.fieldEquals('Endowment', '0x1', 'endow_type', 'Charity')
    assert.fieldEquals('Endowment', '0x1', 'status', 'Approved')
    // assert.fieldEquals('Endowment', '0x1', 'strategies', '1')
    // assert.fieldEquals('Endowment', '0x1', 'oneoff_vaults', '1')
    // assert.fieldEquals('Endowment', '0x1', 'rebalance', '1')
    assert.fieldEquals('Endowment', '0x1', 'kyc_donors_only', 'false')
    assert.fieldEquals('Endowment', '0x1', 'pending_redemptions', '1')
    assert.fieldEquals('Endowment', '0x1', 'copycat_strategy', '1')
    assert.fieldEquals('Endowment', '0x1', 'proposal_link', '1')
    assert.fieldEquals('Endowment', '0x1', 'dao', '0x0000000000000000000000000000000000000002')
    assert.fieldEquals('Endowment', '0x1', 'dao_token', '0x0000000000000000000000000000000000000002')
    assert.fieldEquals('Endowment', '0x1', 'donation_match_active', 'false')
    assert.fieldEquals('Endowment', '0x1', 'donation_match_contract','0x0000000000000000000000000000000000000002')
    assert.fieldEquals('Endowment', '0x1', 'whitelisted_beneficiaries', '[0x0000000000000000000000000000000000000002]')
    assert.fieldEquals('Endowment', '0x1', 'whitelisted_contributors', '[0x0000000000000000000000000000000000000002]')
    assert.fieldEquals('Endowment', '0x1', 'maturity_whitelist', '[0x0000000000000000000000000000000000000002]')
    assert.fieldEquals('Endowment', '0x1', 'earnings_fee', '1')
    assert.fieldEquals('Endowment', '0x1', 'withdraw_fee', '1')
    assert.fieldEquals('Endowment', '0x1', 'deposit_fee', '1')
    assert.fieldEquals('Endowment', '0x1', 'aum_fee', '1')
    // assert.fieldEquals('Endowment', '0x1', 'settings_controller', '1')
    assert.fieldEquals('Endowment', '0x1', 'parent', '1')
    assert.fieldEquals('Endowment', '0x1', 'ignore_user_splits', 'false')
    // assert.fieldEquals('Endowment', '0x1', 'split_to_liquid', '1')
  })
  test('EndowmentState Updated', ()=>{
    assert.fieldEquals('EndowmentState','0x1', 'id', '0x1')
    // assert.fieldEquals('EndowmentState', '0x1', 'owner', '0x0000000000000000000000000000000000000001')
    assert.fieldEquals('EndowmentState', '0x1', 'closing_endowment', 'false')
    assert.fieldEquals('EndowmentState', '0x1', 'closing_beneficiary', '0x0000000000000000000000000000000000000001')
   
  })
  test('DaoContract Created',()=>{
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','id','0x0000000000000000000000000000000000000001')
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','owner','0x0000000000000000000000000000000000000001')
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','voting_period','1')
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','snapshot_period','1')
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','quorum','1')
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','expiration_period','1')
    assert.fieldEquals('SubDAOConfig','0x0000000000000000000000000000000000000001','threshold','1')
  })

  //allowanceStateUpdate
  test('allowanceStateUpdate',()=>{
    assert.entityCount('AllowanceData',1)
    assert.fieldEquals('AllowanceData','0x0000000000000000000000000000000000000001','id','0x0000000000000000000000000000000000000001')
    assert.fieldEquals('AllowanceData','0x0000000000000000000000000000000000000001','height','1')
    assert.fieldEquals('AllowanceData','0x0000000000000000000000000000000000000001','timestamp','1')
    assert.fieldEquals('AllowanceData','0x0000000000000000000000000000000000000001','expires','true')
    assert.fieldEquals('AllowanceData','0x0000000000000000000000000000000000000001','allowanceAmount','1')
    assert.fieldEquals('AllowanceData','0x0000000000000000000000000000000000000001','configured','true')
  })

  //Remove Allowance
  test('RemoveAllowance',()=>{
    assert.entityCount('AllowanceRemove',1)
    assert.fieldEquals('AllowanceRemove','0x0000000000000000000000000000000000000001','id','0x0000000000000000000000000000000000000001')
    assert.fieldEquals('AllowanceRemove','0x0000000000000000000000000000000000000001','sender','0x0000000000000000000000000000000000000001')
    assert.fieldEquals('AllowanceRemove','0x0000000000000000000000000000000000000001','spender','0x0000000000000000000000000000000000000001')
    assert.fieldEquals('AllowanceRemove','0x0000000000000000000000000000000000000001','tokenAddress','0x0000000000000000000000000000000000000001')
  })
  test('Donation deposited',()=>{
    
    assert.fieldEquals('DonationsReceived','0x1','id','0x1')
    assert.fieldEquals('DonationsReceived','0x1','liquid','1')
    assert.fieldEquals('DonationsReceived','0x1','locked','1')
  })

  test('Donation Match Setup',()=>{
    assert.fieldEquals('DonationMatchSet','0x1','id','0x1')
    // assert.fieldEquals('DonationMatchSet','0x1','donation_id','1')
    assert.fieldEquals('DonationMatchSet','0x1','donation_match_contract', '0x0000000000000000000000000000000000000002')
  })

  test('Donation Withdrawn',()=>{
    assert.fieldEquals('DonationsReceived','0x1','id','0x1')
    assert.fieldEquals('DonationsReceived','0x1','liquid','1')
    assert.fieldEquals('DonationsReceived','0x1','locked','1')
  })

  test('Update Config',()=>{
    assert.fieldEquals('AccountsConfig', '0x2', 'owner', '0x0000000000000000000000000000000000000001')
   
    assert.fieldEquals('AccountsConfig', '0x2', 'next_account_id', '2')
    assert.fieldEquals('AccountsConfig', '0x2', 'max_general_category_id', '1')
  })

  test('Swap Token',()=>{
    assert.fieldEquals('TokenSwap', '0x1', 'id', '0x1')
    assert.fieldEquals('TokenSwap', '0x1', 'accountType', '1')
    assert.fieldEquals('TokenSwap', '0x1', 'amount', '100')
    assert.fieldEquals('TokenSwap', '0x1', 'tokenIn', '0x0000000000000000000000000000000000000004')
    assert.fieldEquals('TokenSwap', '0x1', 'tokenOut', '0x0000000000000000000000000000000000000005')
    assert.fieldEquals('TokenSwap', '0x1', 'amountOut', '10')
  })
})
