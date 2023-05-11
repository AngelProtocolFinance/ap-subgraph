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

import {handleLockedWithdrawInitiated, handleLockedWithdrawRejected, handleLockedWithdrawApproved, handleLockedWithdrawAPTeam, handleLockedWithdrawEndowment, handleLockedwithdrawInitialized} from "../src/lockedwithdraw"

import {createLockedWithdrawInitiatedEvent, createLockedWithdrawRejectedEvent, createLockedWithdrawApprovedEvent, createLockedWithdrawAPTeamEvent, createLockedWithdrawEndowmentEvent, createLockedwithdrawInitializedEvent} from "./lockedwithdraw-utils"


describe("Locked Withdraw", ()=>{
    beforeAll(()=>{
        let accountId = BigInt.fromI64(2)
        let initiator = Address.fromString('0x0000000000000000000000000000000000000001')
        let beneficiary = Address.fromString('0x0000000000000000000000000000000000000001')
        let tokenAddress = [Address.fromString('0x0000000000000000000000000000000000000001')]
        let amount = [BigInt.fromI64(1)]
        let initiate = createLockedWithdrawInitiatedEvent(accountId, initiator, beneficiary, tokenAddress, amount)
        handleLockedWithdrawInitiated(initiate)

        let removeID = BigInt.fromI64(2)
        let reject = createLockedWithdrawRejectedEvent(removeID)
        handleLockedWithdrawRejected(reject)

        let approve = createLockedWithdrawApprovedEvent(accountId, beneficiary, tokenAddress, amount)
        handleLockedWithdrawApproved(approve)

        let accountid = BigInt.fromI64(3)
        let sender = Address.fromString('0x0000000000000000000000000000000000000002')
        let withdrawAP = createLockedWithdrawAPTeamEvent(accountid, sender)
        handleLockedWithdrawAPTeam(withdrawAP)

        let witdrawEndowment = createLockedWithdrawEndowmentEvent(accountid,sender)
        handleLockedWithdrawEndowment(witdrawEndowment)

        let version = 1
        let initialize = createLockedwithdrawInitializedEvent(version)
        handleLockedwithdrawInitialized(initialize)

        logStore()
    })

    afterAll(() => {
        clearStore()
    })

    test("Locked Withdraw Initiated", ()=>{
        assert.fieldEquals("Withdrawal", '2', 'id', '2')
        assert.fieldEquals("Withdrawal", '2', 'pending', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals("Withdrawal", '2', 'beneficiary', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals("Withdrawal", '2', 'tokenAddress', '[0x0000000000000000000000000000000000000001]')
        assert.fieldEquals("Withdrawal", '2', 'amount', '[1]')
    })

    test("Locked Withdraw Rejected", ()=>{
        assert.fieldEquals("Withdrawal", '2', 'id', '2')
    })

    test("Locked Withdraw Approved", ()=>{
        assert.fieldEquals("Withdrawal", '2', 'id', '2')
        assert.fieldEquals("Withdrawal", '2', 'beneficiary', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals("Withdrawal", '2', 'tokenAddress', '[0x0000000000000000000000000000000000000001]')
        assert.fieldEquals("Withdrawal", '2', 'amount', '[1]')
    })

    test("Locked Withdraw AP Team", ()=>{
        assert.fieldEquals('LockedWihtdrawalConfig', '3', 'id', '3')
        assert.fieldEquals('LockedWihtdrawalConfig', '3', 'apTeamMultisig', '0x0000000000000000000000000000000000000002')
    })

    test("Locked Withdraw Endowment Team", ()=>{
        assert.fieldEquals('LockedWihtdrawalConfig', '3', 'id', '3')
        assert.fieldEquals('LockedWihtdrawalConfig', '3', 'endowFactory', '0x0000000000000000000000000000000000000002')
    })

    test("Locked Withdraw Initialized", ()=>{
        assert.fieldEquals('Withdrawal', '2', 'id', '2')
    })
})