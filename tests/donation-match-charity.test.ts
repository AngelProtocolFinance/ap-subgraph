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

import {handledonationMatchCharityInitialized, handledonationMatchCharityExecuted, handledonationMatchCharityErc20ApprovalGiven, handledonationMatchCharityErc20Burned, handledonationMatchCharityErc20Transfer} from "../src/donation-match-charity"

import {createdonationMatchCharityInitializedEvent, createdonationMatchCharityExecutedEvent, createdonationMatchCharityErc20ApprovalGivenEvent, createdonationMatchCharityErc20BurnedEvent, createdonationMatchCharityErc20TransferEvent} from "./donation-match-charity-utils"

import {} from "../generated/donationMatchCharity/donationMatchCharity"

describe('Donation Match Charity',()=>{
    beforeAll(()=>{
        let version = 2
        let initialize = createdonationMatchCharityInitializedEvent(version)
        handledonationMatchCharityInitialized(initialize)

        let endowment_id = BigInt.fromI32(1)
        let donationMatch = Address.fromString('0x0000000000000000000000000000000000000001')
        let tokenAddress = Address.fromString('0x0000000000000000000000000000000000000003')
        let amount = BigInt.fromI32(10)
        let accounts_contract = Address.fromString('0x0000000000000000000000000000000000000004')
        let donor = Address.fromString('0x0000000000000000000000000000000000000005')
        let execute = createdonationMatchCharityExecutedEvent(donationMatch, tokenAddress, amount, accounts_contract, endowment_id, donor)
        handledonationMatchCharityExecuted(execute)

        let spender = Address.fromString('0x0000000000000000000000000000000000000002')
        let erc20approve = createdonationMatchCharityErc20ApprovalGivenEvent(endowment_id, tokenAddress, spender, amount)
        handledonationMatchCharityErc20ApprovalGiven(erc20approve)

        let burn = createdonationMatchCharityErc20BurnedEvent(endowment_id, tokenAddress, amount)
        handledonationMatchCharityErc20Burned(burn)

        let recipient = Address.fromString('0x0000000000000000000000000000000000000001')
        let transfer = createdonationMatchCharityErc20TransferEvent(endowment_id, tokenAddress, recipient, amount)
        handledonationMatchCharityErc20Transfer(transfer)

        logStore()
    })

    afterAll(()=>{
        clearStore()
    })

    test('Initialize donation match charity', ()=>{
        assert.fieldEquals('DonationMatchCharity', '2', 'version', '2')
    })

    test('Execute donation match charity', ()=>{
        assert.fieldEquals('DonationMatchExecute', '1', 'id', '1')
        assert.fieldEquals('DonationMatchExecute', '1', 'donation_match', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('DonationMatchExecute', '1', 'amount', '10')
        assert.fieldEquals('DonationMatchExecute', '1', 'accounts_contract', '0x0000000000000000000000000000000000000004')
        assert.fieldEquals('DonationMatchExecute', '1', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('DonationMatchExecute', '1', 'donor', '0x0000000000000000000000000000000000000005')
    })

    test('Erc20 approval given', ()=>{
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