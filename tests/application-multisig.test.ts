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

import {handleApplicationInitialized, handleApplicationConfirmation, handleApplicationDeposit, handleApplicationExecution, handleApplicationOwnerAddition, handleApplicationOwnerRemoval, handleApplicationRequirementChange, handleApplicationRevocation, handleApplicationSubmission, handleApplicationExecutionFailure} from "../src/application-multisig"

import {createInitializedEvent, createApplicationMultisigConfirmationEvent, createDepositEvent, createExecutionEvent, createExecutionFailureEvent, createOwnerAdditionEvent, createOwnerRemovalEvent, createRequirementChangeEvent, createRevocationEvent, createSubmissionEvent} from "./application-multisig-utils"

import {SubmissionTransactionStruct} from "../generated/ApplicationMultisig/ApplicationMultisig"

describe("Application Multisig", () => {
    beforeAll(()=>{
        let version = 2
        let initialize = createInitializedEvent(version)
        handleApplicationInitialized(initialize)

        let sender = Address.fromString('0x0000000000000000000000000000000000000003')
        let transactionID = BigInt.fromI32(3)
        let confirm = createApplicationMultisigConfirmationEvent(sender, transactionID)
        handleApplicationConfirmation(confirm)
    
        let destination = Address.fromString('0x0000000000000000000000000000000000000001')
        let value = BigInt.fromI32(10)
        let deposit = createDepositEvent(destination, value)
        handleApplicationDeposit(deposit)
    
        let execute = createExecutionEvent(transactionID)
        handleApplicationExecution(execute)
    
        let executefail = createExecutionFailureEvent(transactionID)
        handleApplicationExecutionFailure(executefail)
    
        let owner = Address.fromString('0x0000000000000000000000000000000000000005')
        let owneradd = createOwnerAdditionEvent(owner)
        handleApplicationOwnerAddition(owneradd)
    
        let ownerremove = createOwnerRemovalEvent(owner)
        handleApplicationOwnerRemoval(ownerremove)
    
        let required = BigInt.fromI32(2)
        let requirement = createRequirementChangeEvent(required)
        handleApplicationRequirementChange(requirement)
    
        let revocation = createRevocationEvent(sender, transactionID)
        handleApplicationRevocation(revocation)
    
        let transaction = new SubmissionTransactionStruct()
        transaction.push(ethereum.Value.fromString('0x1'))
        transaction.push(ethereum.Value.fromString('0x1'))
        transaction.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        transaction.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(7)))
        transaction.push(ethereum.Value.fromBytes(Bytes.fromHexString('0x0000000000000000000000000000000000000001')))
        transaction.push(ethereum.Value.fromBoolean(false))
        let submission = createSubmissionEvent(transactionID, transaction)
        handleApplicationSubmission(submission)
    
        logStore()
    })
    
    afterAll(()=>{
        clearStore()
    })

    test("Application Multisig Initialized", () => {
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })

    test('Confirm Application team multisig', ()=>{
        assert.fieldEquals('Confirmation', '\u0003', 'id', '\u0003')
        assert.fieldEquals('Confirmation', '\u0003', 'confirmations', '[0x0000000000000000000000000000000000000003]')
    })
    
    test('Deposit Application team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
        assert.fieldEquals('MultisigTransaction', '3', 'value', '7')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
    })
    
    test('Execute Application team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Execute failure Application team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Owner addition Application team multisig', ()=>{
        assert.fieldEquals('MultisigConfig', '\u0005', 'owners', '[0x0000000000000000000000000000000000000005]')
    })
    
    test('Owner removal Application team multisig', ()=>{
        assert.fieldEquals('MultisigConfig', '\u0005', 'owners', '[0x0000000000000000000000000000000000000005]')
    })
    
    test('Requirement change Application team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Revocation Application team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
    })
    
    test('Submission Application team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
        assert.fieldEquals('MultisigTransaction', '3', 'title', '0x1')
        assert.fieldEquals('MultisigTransaction', '3', 'description', '0x1')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('MultisigTransaction', '3', 'value', '7')
        assert.fieldEquals('MultisigTransaction', '3', 'data', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('MultisigTransaction', '3', 'executed', 'false')
    })
})