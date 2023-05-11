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

import {handleindexFundCreated, handleindexFundRemoved, handlememberAdded, handlememberRemoved, handleallianceMemberAdded, handleallianceMemberRemoved, handleconfigUpdated, handleupdateActiveFund, handleregistrarUpdated, handleupdateIndexFundState, handleownerUpdated} from "../src/indexfund"

import {createindexFundCreatedEvent, createindexFundRemovedEvent, creatememberAddedEvent, creatememberRemovedEvent, createconfigUpdatedEvent, createallianceMemberAddedEvent, createallianceMemberRemovedEvent, createregistrarUpdatedEvent, createupdateActiveFundEvent, createupdateIndexFundStateEvent, createownerUpdatedEvent} from "./indexfund-utils"

import {indexFundCreatedFundStruct, configUpdatedConfigStruct, updateIndexFundStateStateStruct} from "../generated/Indexfund/Indexfund"
import { IndexFund } from "../generated/schema"
// import { config } from "hardhat"

describe("Index Fund", ()=>{
    beforeAll(()=>{
        let id = BigInt.fromI64(2)
        let fund = new indexFundCreatedFundStruct()
        fund.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        fund.push(ethereum.Value.fromString('0x0'))
        fund.push(ethereum.Value.fromString('0x0'))
        fund.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1)]))
        fund.push(ethereum.Value.fromBoolean(false))
        fund.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        fund.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        fund.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        let indexfundcreate = createindexFundCreatedEvent(id, fund)
        handleindexFundCreated(indexfundcreate)

        let indexfundremove = createindexFundRemovedEvent(id)
        handleindexFundRemoved(indexfundremove)

        let member_id = BigInt.fromI64(2)
        let addmember = creatememberAddedEvent(id, member_id)
        handlememberAdded(addmember)

        let removemember = creatememberRemovedEvent(id, member_id)
        handlememberRemoved(removemember)

        let config = new configUpdatedConfigStruct()
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000001')]))
        let updateconfig = createconfigUpdatedEvent(config)
        handleconfigUpdated(updateconfig)

        let member = Address.fromString('0x0000000000000000000000000000000000000001')
        let addalliance = createallianceMemberAddedEvent(member)
        handleallianceMemberAdded(addalliance)

        let removealliance = createallianceMemberRemovedEvent(member)
        handleallianceMemberRemoved(removealliance)

        let new_registrar = Address.fromString('0x0000000000000000000000000000000000000003')
        let updateregistrar = createregistrarUpdatedEvent(new_registrar)
        handleregistrarUpdated(updateregistrar)

        let update_id = BigInt.fromI64(4)
        let active_fund = createupdateActiveFundEvent(update_id)
        handleupdateActiveFund(active_fund)

        let state = new updateIndexFundStateStateStruct()
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        let indexfundstate = createupdateIndexFundStateEvent(state)
        handleupdateIndexFundState(indexfundstate)

        let newowner = Address.fromString('0x0000000000000000000000000000000000000001')
        let updateowner = createownerUpdatedEvent(newowner)
        handleownerUpdated(updateowner)

        logStore()
    })

    afterAll(() => {
        clearStore()
    })

    test("Index Fund Created", () => {
        assert.fieldEquals('IndexFund', '0x2', 'id', '0x2')
        assert.fieldEquals('IndexFund', '0x2', 'name', '0x0')
        assert.fieldEquals('IndexFund', '0x2', 'description', '0x0')
        assert.fieldEquals('IndexFund', '0x2', 'members', '[2]')
        assert.fieldEquals('IndexFund', '0x2', 'rotating_fund', 'false')
        assert.fieldEquals('IndexFund', '0x2', 'split_to_liquid', '1')
        assert.fieldEquals('IndexFund', '0x2', 'expiry_time', '1')
        assert.fieldEquals('IndexFund', '0x2', 'expiry_height', '1')
    })

    test("Index Fund Removed", () => {
        assert.fieldEquals('IndexFund', '0x2', 'id', '0x2')
    })

    test("Member added", ()=>{
        assert.fieldEquals('IndexFund', '0x2', 'id', '0x2')
        assert.fieldEquals('IndexFund', '0x2', 'members', '[2]')
    })

    test("Member removed", ()=>{
        assert.fieldEquals('IndexFund', '0x2', 'id', '0x2')
        assert.fieldEquals('IndexFund', '0x2', 'members', '[2]')
    })

    test("Updates config", ()=>{
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'owner', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'registrar_contract', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'fund_rotation', '1')
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'fund_member_limit', '1')
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'funding_goal', '1')
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'alliance_members', '[0x0000000000000000000000000000000000000001]')
    })

    test("Alliance member added", ()=>{
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'alliance_members', '[0x0000000000000000000000000000000000000001]')
    })

    test("Alliance member removed", ()=>{
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'alliance_members', '[0x0000000000000000000000000000000000000001]')
    })

    test("Registrar updated", ()=>{
        assert.fieldEquals('RegistrarConfig', '0x0000000000000000000000000000000000000003', 'index_fund_contract', '0x0000000000000000000000000000000000000003')
    })

    test("Update Active Fund",()=>{
        assert.fieldEquals('IndexFund','0x4', 'id', '0x4')
    })

    test("Update IndexFund State", ()=>{
        assert.fieldEquals('IndexfundState', '0x1', 'total_funds', '1')
        assert.fieldEquals('IndexfundState', '0x1', 'next_fund_id', '1')
        assert.fieldEquals('IndexfundState', '0x1', 'active_fund', '1')
        assert.fieldEquals('IndexfundState', '0x1', 'round_donations', '1')
        assert.fieldEquals('IndexfundState', '0x1', 'next_rotation_block', '1')
    })

    test("Owner updated",()=>{
        assert.fieldEquals('IndexfundConfig', '0x0000000000000000000000000000000000000001', 'owner', '0x0000000000000000000000000000000000000001')
    })
})