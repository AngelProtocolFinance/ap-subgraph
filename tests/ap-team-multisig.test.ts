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

import {handleInitialized, handleConfirmation, handleDepositAPTeam, handleExecution, handleExecutionFailure, handleOwnerAddition, handleOwnerRemoval, handleRequirementChange, handleRevocation, handleSubmission} from "../src/ap-team-multisig"

import {createAPTeamMultisigInitializedEvent, createAPTeamMultisigConfirmationEvent, createAPTeamMultisigDepositEvent, createAPTeamMultisigExecutionEvent, createAPTeamMultisigExecutionFailureEvent, createAPTeamMultisigOwnerAdditionEvent, createAPTeamMultisigOwnerRemovalEvent,createAPTeamMultisigRequirementChangeEvent, createAPTeamMultisigRevocationEvent, createAPTeamMultisigSubmissionEvent} from "./ap-team-multisig-utils"

import {APTeamMultisigSubmissionTransactionStruct} from "../generated/APTeamMultisig/APTeamMultisig"

describe("AP Team Multisig", () => {
    beforeAll(()=>{
        let version = 2
        let initialize = createAPTeamMultisigInitializedEvent(version)
        handleInitialized(initialize)
    
        let sender = Address.fromString('0x0000000000000000000000000000000000000003')
        let transactionID = BigInt.fromI32(3)
        let confirm = createAPTeamMultisigConfirmationEvent(sender, transactionID)
        handleConfirmation(confirm)
    
        let destination = Address.fromString('0x0000000000000000000000000000000000000001')
        let value = BigInt.fromI32(10)
        let deposit = createAPTeamMultisigDepositEvent(destination, value)
        handleDepositAPTeam(deposit)
    
        let execute = createAPTeamMultisigExecutionEvent(transactionID)
        handleExecution(execute)
    
        let executefail = createAPTeamMultisigExecutionFailureEvent(transactionID)
        handleExecutionFailure(executefail)
    
        let owner = Address.fromString('0x0000000000000000000000000000000000000005')
        let owneradd = createAPTeamMultisigOwnerAdditionEvent(owner)
        handleOwnerAddition(owneradd)
    
        let ownerremove = createAPTeamMultisigOwnerRemovalEvent(owner)
        handleOwnerRemoval(ownerremove)
    
        let required = BigInt.fromI32(2)
        let requirement = createAPTeamMultisigRequirementChangeEvent(required)
        handleRequirementChange(requirement)
    
        let revocation = createAPTeamMultisigRevocationEvent(sender, transactionID)
        handleRevocation(revocation)
    
        let transaction = new APTeamMultisigSubmissionTransactionStruct()
        transaction.push(ethereum.Value.fromString('0x1'))
        transaction.push(ethereum.Value.fromString('0x1'))
        transaction.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        transaction.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(7)))
        transaction.push(ethereum.Value.fromBytes(Bytes.fromHexString('0x0000000000000000000000000000000000000001')))
        transaction.push(ethereum.Value.fromBoolean(false))
        let submission = createAPTeamMultisigSubmissionEvent(transactionID, transaction)
        handleSubmission(submission)
    
        logStore()
    })
    
    afterAll(()=>{
        clearStore()
    })
    
    test('Initialize ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Confirm ap team multisig', ()=>{
        assert.fieldEquals('Confirmation', '\u0003', 'id', '\u0003')
        assert.fieldEquals('Confirmation', '\u0003', 'confirmations', '[0x0000000000000000000000000000000000000003]')
    })
    
    test('Deposit ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
        assert.fieldEquals('MultisigTransaction', '3', 'value', '7')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
    })
    
    test('Execute ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Execute failure ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Owner addition ap team multisig', ()=>{
        assert.fieldEquals('MultisigConfig', '\u0005', 'owners', '[0x0000000000000000000000000000000000000005]')
    })
    
    test('Owner removal ap team multisig', ()=>{
        assert.fieldEquals('MultisigConfig', '\u0005', 'owners', '[0x0000000000000000000000000000000000000005]')
    })
    
    test('Requirement change ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
    })
    
    test('Revocation ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
    })
    
    test('Submission ap team multisig', ()=>{
        assert.fieldEquals('MultisigTransaction', '2', 'id', '2')
        assert.fieldEquals('MultisigTransaction', '3', 'title', '0x1')
        assert.fieldEquals('MultisigTransaction', '3', 'description', '0x1')
        assert.fieldEquals('MultisigTransaction', '3', 'destination', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('MultisigTransaction', '3', 'value', '7')
        assert.fieldEquals('MultisigTransaction', '3', 'data', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('MultisigTransaction', '3', 'executed', 'false')
    })
})
