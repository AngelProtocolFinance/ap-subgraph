import {
    assert,
    describe,
    test,
    clearStore,
    beforeAll,
    afterAll,
    logStore
} from "matchstick-as/assembly/index"
  
import { Address, BigInt , Bytes, ethereum} from "@graphprotocol/graph-ts"

import {handleEndowmentsMultisigEndowmentConfirmation, handleEndowmentsMultisigEndowmentDeposit, handleEndowmentsMultisigEndowmentExecution, handleEndowmentsMultisigEndowmentsMultisigEndowmentExecutionFailure, handleEndowmentsMultisigEndowmentOwnerAddition, handleEndowmentsMultisigEndowmentOwnerRemoval, handleEndowmentsMultisigEndowmentRequirementChange, handleEndowmentsMultisigEndowmentRevocation, handleEndowmentsMultisigEndowmentSubmission} from "../src/endowments-multisig"

import {createEndowmentsMultisigEndowmentConfirmationEvent, createEndowmentsMultisigEndowmentDepositEvent, createEndowmentsMultisigEndowmentExecutionEvent, createEndowmentsMultisigEndowmentExecutionFailureEvent, createEndowmentsMultisigEndowmentOwnerAdditionEvent, createEndowmentsMultisigEndowmentOwnerRemovalEvent, createEndowmentsMultisigEndowmentRequirementChangeEvent, createEndowmentsMultisigEndowmentRevocationEvent, createEndowmentsMultisigEndowmentSubmissionEvent} from "./endowments-multisig-utils"

import {EndowmentsMultisigEndowmentSubmissionTransactionStruct} from "../generated/EndowmentsMultisig/EndowmentsMultisig"

describe("Endowments Multisig", () => {
    beforeAll(()=>{

        let endowmentId = BigInt.fromI32(1)
        let sender = Address.fromString('0x0000000000000000000000000000000000000003')
        let transactionID = BigInt.fromI32(3)
        let confirm = createEndowmentsMultisigEndowmentConfirmationEvent(endowmentId, sender, transactionID)
        handleEndowmentsMultisigEndowmentConfirmation(confirm)
    
        let destination = Address.fromString('0x0000000000000000000000000000000000000001')
        let value = BigInt.fromI32(10)
        let deposit = createEndowmentsMultisigEndowmentDepositEvent(endowmentId ,destination, value)
        handleEndowmentsMultisigEndowmentDeposit(deposit)
    
        let execute = createEndowmentsMultisigEndowmentExecutionEvent(endowmentId, transactionID)
        handleEndowmentsMultisigEndowmentExecution(execute)
    
        let executefail = createEndowmentsMultisigEndowmentExecutionFailureEvent(endowmentId ,transactionID)
        handleEndowmentsMultisigEndowmentsMultisigEndowmentExecutionFailure(executefail)
    
        let owner = Address.fromString('0x0000000000000000000000000000000000000005')
        let owneradd = createEndowmentsMultisigEndowmentOwnerAdditionEvent(endowmentId, owner)
        handleEndowmentsMultisigEndowmentOwnerAddition(owneradd)
    
        let ownerremove = createEndowmentsMultisigEndowmentOwnerRemovalEvent(endowmentId,owner)
        handleEndowmentsMultisigEndowmentOwnerRemoval(ownerremove)
    
        let required = BigInt.fromI32(2)
        let requirement = createEndowmentsMultisigEndowmentRequirementChangeEvent(endowmentId ,required)
        handleEndowmentsMultisigEndowmentRequirementChange(requirement)
    
        let revocation = createEndowmentsMultisigEndowmentRevocationEvent(endowmentId ,sender, transactionID)
        handleEndowmentsMultisigEndowmentRevocation(revocation)
    
        let transaction = new EndowmentsMultisigEndowmentSubmissionTransactionStruct()
        transaction.push(ethereum.Value.fromString('0x1'))
        transaction.push(ethereum.Value.fromString('0x1'))
        transaction.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        transaction.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(7)))
        transaction.push(ethereum.Value.fromBytes(Bytes.fromHexString('0x0000000000000000000000000000000000000001')))
        transaction.push(ethereum.Value.fromBoolean(false))
        let submission = createEndowmentsMultisigEndowmentSubmissionEvent(endowmentId,transactionID, transaction)
        handleEndowmentsMultisigEndowmentSubmission(submission)

        logStore()
    })

    afterAll(()=>{
        clearStore()
    })

    test('Confirm Endowments team multisig', ()=>{
        assert.fieldEquals('Confirmation', '\u0003', 'id', '\u0003')
        assert.fieldEquals('Confirmation', '\u0003', 'confirmations', '[0x0000000000000000000000000000000000000003]')
    })
    
    test('Deposit Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '\u0001', 'id', '\u0001')
        assert.fieldEquals('MultisigTransaction', '3', 'value', '7')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
    })
    
    test('Execute Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '\u0001', 'id', '\u0001')
    })
    
    test('Execute failure Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '\u0001', 'id', '\u0001')
    })
    
    test('Owner addition Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigConfig', '\u0005', 'owners', '[0x0000000000000000000000000000000000000005]')
    })
    
    test('Owner removal Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigConfig', '\u0005', 'owners', '[0x0000000000000000000000000000000000000005]')
    })
    
    test('Requirement change Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '\u0001', 'id', '\u0001')
    })
    
    test('Revocation Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '\u0001', 'id', '\u0001')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
    })
    
    test('Submission Endowments team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '\u0001', 'id', '\u0001')
        assert.fieldEquals('MultisigTransaction', '3', 'title', '0x1')
        assert.fieldEquals('MultisigTransaction', '3', 'description', '0x1')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('MultisigTransaction', '3', 'value', '7')
        assert.fieldEquals('MultisigTransaction', '3', 'data', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('MultisigTransaction', '3', 'executed', 'false')
    })
})
