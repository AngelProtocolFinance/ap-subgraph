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

import {handledonationMatchInitialized, handledonationMatchExecuted, handleerc20ApprovalGiven, handleerc20Burned, handleerc20Transfer} from "../src/donation-match"

import {createdonationMatchInitializedEvent, createdonationMatchExecutedEvent, createerc20ApprovalGivenEvent, createerc20BurnedEvent, createerc20TransferEvent} from "./donation-match-utils"

import {donationMatchInitializedConfigStruct} from "../generated/donationMatch/donationMatch"

describe('Donation Match',()=>{
    beforeAll(()=>{

        let endowment_id = BigInt.fromI32(1)
        let donationMatch = Address.fromString('0x0000000000000000000000000000000000000001')
        let config = new donationMatchInitializedConfigStruct()
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromI32(1))
        let initialize = createdonationMatchInitializedEvent(endowment_id, donationMatch, config)
        handledonationMatchInitialized(initialize)

        let tokenAddress = Address.fromString('0x0000000000000000000000000000000000000003')
        let amount = BigInt.fromI32(10)
        let accounts_contract = Address.fromString('0x0000000000000000000000000000000000000004')
        let donor = Address.fromString('0x0000000000000000000000000000000000000005')
        let execute = createdonationMatchExecutedEvent(donationMatch, tokenAddress, amount, accounts_contract, endowment_id, donor)
        handledonationMatchExecuted(execute)

        let spender = Address.fromString('0x0000000000000000000000000000000000000002')
        let erc20approve = createerc20ApprovalGivenEvent(endowment_id, tokenAddress, spender, amount)
        handleerc20ApprovalGiven(erc20approve)

        let erc20burn = createerc20BurnedEvent(endowment_id, tokenAddress, amount)
        handleerc20Burned(erc20burn)

        let recipient = Address.fromString('0x0000000000000000000000000000000000000001')
        let erc20transfer = createerc20TransferEvent(endowment_id, tokenAddress, recipient, amount)
        handleerc20Transfer(erc20transfer)

        logStore()
    })

    afterAll(()=>{
        clearStore()
    })

    test('Initialize donation match', ()=>{
        assert.fieldEquals('DonationMatchConfig', '1', 'id', '1')
        assert.fieldEquals('DonationMatchConfig', '1', 'donation_match','0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchConfig', '1', 'reserve_token','0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchConfig', '1', 'uniswap_factory','0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchConfig', '1', 'USDC_address','0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchConfig', '1', 'registrar_contract','0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchConfig', '1', 'pool_fee', '1')
    })

    test('Execute donation match', ()=>{
        assert.fieldEquals('DonationMatchExecute', '1', 'id', '1')
        assert.fieldEquals('DonationMatchExecute', '1', 'donation_match', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchExecute', '1', 'amount', '10')
        assert.fieldEquals('DonationMatchExecute', '1', 'accounts_contract', '0x0000000000000000000000000000000000000004')
        assert.fieldEquals('DonationMatchExecute', '1', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('DonationMatchExecute', '1', 'donor', '0x0000000000000000000000000000000000000005')
    })

    test('ERC20 Approval Given',()=>{
        assert.fieldEquals('erc20', '1', 'id', '1')
        assert.fieldEquals('erc20', '1', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('erc20', '1', 'spender', '0x0000000000000000000000000000000000000002')
        assert.fieldEquals('erc20', '1', 'amount', '10')
    })

    test('ERC20 Burn',()=>{
        assert.fieldEquals('erc20', '1', 'id', '1')
        assert.fieldEquals('erc20', '1', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('erc20', '1', 'amount', '10')
    })

    test('ERC20 Transfer',()=>{
        assert.fieldEquals('erc20', '1', 'id', '1')
        assert.fieldEquals('erc20', '1', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('erc20', '1', 'recipient', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('erc20', '1', 'amount', '10')
    })
})