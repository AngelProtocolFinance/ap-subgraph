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

import {handlesubdaoUpdateConfig, handlesubdaoUpdateState, handlesubdaoUpdatePoll, handlesubdaoUpdatePollStatus, handlesubdapUpdateVotingStatus, handlesubdaoTransfer, handlesubdaoTransferFrom, handlesubdaoInitialized} from "../src/sub-dao"

import {createsubdaoInitializedEvent, createsubdaoUpdateConfigEvent, createsubdaoUpdateStateEvent, createsubdaoUpdatePollEvent, createsubdaoUpdatePollStatusEvent, createsubdapUpdateVotingStatusEvent, createsubdaoTransferEvent, createsubdaoTransferFromEvent} from "./sub-dao-utils"

import {subdaoUpdateConfigConfigStruct, subdaoUpdateStateStateStruct, subdaoUpdatePollPollStruct, subdaoUpdatePollPollExecute_dataStruct, subdapUpdateVotingStatusVoterInfoStruct, subdaoInitializedInstantiate_msgStruct, subdaoInitializedInstantiate_msgTokenStruct, subdaoInitializedInstantiate_msgTokenDataStruct, subdaoInitializedInstantiate_msgTokenDataBondingCurve_curve_typeStruct, subdaoInitializedInstantiate_msgTokenDataBondingCurve_curve_typeDataStruct} from "../generated/subDAO/subDAO"

describe("SubDAO", ()=>{
    beforeAll(()=>{

        let bonding_data = new subdaoInitializedInstantiate_msgTokenDataBondingCurve_curve_typeDataStruct()
        bonding_data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        bonding_data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        bonding_data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        bonding_data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

        let bonding_curve = new subdaoInitializedInstantiate_msgTokenDataBondingCurve_curve_typeStruct()
        bonding_curve.push(ethereum.Value.fromI32(1))
        bonding_curve.push(ethereum.Value.fromTuple(bonding_data))

        let data = new subdaoInitializedInstantiate_msgTokenDataStruct()
        data.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        data.push(ethereum.Value.fromString('0x1'))
        data.push(ethereum.Value.fromString('0x1'))
        data.push(ethereum.Value.fromTuple(bonding_curve))
        data.push(ethereum.Value.fromString('0x1'))
        data.push(ethereum.Value.fromString('0x1'))
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        data.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        data.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))

        let token = new subdaoInitializedInstantiate_msgTokenStruct()
        token.push(ethereum.Value.fromI32(1))
        token.push(ethereum.Value.fromTuple(data))

        let subdao = Address.fromString('0x0000000000000000000000000000000000000001')
        let instantiate_msg = new subdaoInitializedInstantiate_msgStruct()
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        instantiate_msg.push(ethereum.Value.fromTuple(token))
        instantiate_msg.push(ethereum.Value.fromI32(1))
        instantiate_msg.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        instantiate_msg.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))

        let initialize = createsubdaoInitializedEvent(subdao, instantiate_msg)
        handlesubdaoInitialized(initialize)

        // let subdao = Address.fromString('0x0000000000000000000000000000000000000001')
        let config = new subdaoUpdateConfigConfigStruct()
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000001')))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        config.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        let updateconfig = createsubdaoUpdateConfigEvent(subdao, config)
        handlesubdaoUpdateConfig(updateconfig)

        let state = new subdaoUpdateStateStateStruct()
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(3)))
        state.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(4)))
        let updatestate = createsubdaoUpdateStateEvent(subdao, state)
        handlesubdaoUpdateState(updatestate)

        let execute_data = new subdaoUpdatePollPollExecute_dataStruct()
        execute_data.push(ethereum.Value.fromUnsignedBigIntArray([BigInt.fromI64(1), BigInt.fromI64(2), BigInt.fromI64(3)]))
        execute_data.push(ethereum.Value.fromAddressArray([Address.fromString('0x0000000000000000000000000000000000000005'), Address.fromString('0x0000000000000000000000000000000000000007')]))
        execute_data.push(ethereum.Value.fromBytesArray([Address.fromString('0x0000000000000000000000000000000000000003'), Address.fromString('0x0000000000000000000000000000000000000005')]))

        let pollID = BigInt.fromI64(5)
        let poll = new subdaoUpdatePollPollStruct()
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(7)))
        poll.push(ethereum.Value.fromAddress(Address.fromString('0x0000000000000000000000000000000000000007')))
        poll.push(ethereum.Value.fromI32(3))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(4)))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(4)))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(6)))
        poll.push(ethereum.Value.fromString('0x0000000000000000000000000000000000000001'))
        poll.push(ethereum.Value.fromString('0x0000000000000000000000000000000000000001'))
        poll.push(ethereum.Value.fromString('0x0000000000000000000000000000000000000001'))
        poll.push(ethereum.Value.fromTuple(execute_data))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
        poll.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(2)))
        let pollupdate = createsubdaoUpdatePollEvent(subdao, pollID, poll)
        handlesubdaoUpdatePoll(pollupdate)

        let pollStatus = 2
        let subdaoAddr = Address.fromString('0x0000000000000000000000000000000000000001')
        let pollstatus = createsubdaoUpdatePollStatusEvent(subdaoAddr, pollID, pollStatus)
        handlesubdaoUpdatePollStatus(pollstatus)

        let voter = Address.fromString('0x0000000000000000000000000000000000000001')
        let voterInfo = new subdapUpdateVotingStatusVoterInfoStruct()
        voterInfo.push(ethereum.Value.fromI32(1))
        voterInfo.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI64(1)))
        voterInfo.push(ethereum.Value.fromBoolean(true))
        let votingstatus = createsubdapUpdateVotingStatusEvent(subdao, pollID, voter, voterInfo)
        handlesubdapUpdateVotingStatus(votingstatus)

        let tokenAddress = Address.fromString('0x0000000000000000000000000000000000000003')
        let recipient = Address.fromString('0x0000000000000000000000000000000000000004')
        let amount = BigInt.fromI64(10)
        let transfer = createsubdaoTransferEvent(subdao, tokenAddress,recipient, amount)
        handlesubdaoTransfer(transfer)

        let from = Address.fromString('0x0000000000000000000000000000000000000008')
        let to = Address.fromString('0x0000000000000000000000000000000000000009')
        let transferFrom = createsubdaoTransferFromEvent(subdao, tokenAddress, from, to, amount)
        handlesubdaoTransferFrom(transferFrom)

        logStore()
    })

    afterAll(()=>{
        clearStore()
    })

    test('SubDAO Initialize', ()=>{
        assert.fieldEquals('SubDAOConfig', '\u0001', 'id', '\u0001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'registrar_contract', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'owner', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'dao_token', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 've_token', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'quorum', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'threshold', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'voting_period', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'timelock_period', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'expiration_period', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'proposal_deposit', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'snapshot_period', '1')
    })

    test('SubDAO Update Config', ()=>{
        assert.fieldEquals('SubDAOConfig', '\u0001', 'id', '\u0001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'registrar_contract', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'owner', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'dao_token', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 've_token', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'swap_factory', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'quorum', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'threshold', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'voting_period', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'timelock_period', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'expiration_period', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'proposal_deposit', '1')
        assert.fieldEquals('SubDAOConfig', '\u0001', 'snapshot_period', '1')
    })

    test('SubDAO Update State', ()=>{
        assert.fieldEquals('SubDAOState', '\u0001', 'id', '\u0001')
        assert.fieldEquals('SubDAOState', '\u0001', 'poll_count', '2')
        assert.fieldEquals('SubDAOState', '\u0001', 'total_share', '3')
        assert.fieldEquals('SubDAOState', '\u0001', 'total_deposit', '4')
    })

    test('Update Poll', ()=>{
        assert.fieldEquals('Poll', '5', 'id', '5')
        assert.fieldEquals('Poll', '5', 'creator', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('Poll', '5', 'status', 'Rejected')
        assert.fieldEquals('Poll', '5', 'yes_votes', '2')
        assert.fieldEquals('Poll', '5', 'no_votes', '2')
        assert.fieldEquals('Poll', '5', 'start_block', '4')
        assert.fieldEquals('Poll', '5', 'start_time', '4')
        assert.fieldEquals('Poll', '5', 'end_height', '6')
        assert.fieldEquals('Poll', '5', 'title', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('Poll', '5', 'description', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('Poll', '5', 'link', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('ExecuteData', '0x7', 'order', '[1, 2, 3]')
        assert.fieldEquals('ExecuteData', '0x7', 'contract_address', '[0x0000000000000000000000000000000000000005, 0x0000000000000000000000000000000000000007]')
        assert.fieldEquals('ExecuteData', '0x7', 'execution_message', '[0x0000000000000000000000000000000000000003, 0x0000000000000000000000000000000000000005]')
        assert.fieldEquals('Poll', '5', 'deposit_amount', '2')
        assert.fieldEquals('Poll', '5', 'total_balance_at_end_poll', '2')
        assert.fieldEquals('Poll', '5', 'staked_amount', '2')
    })

    test('Update Poll Status', ()=>{
        assert.fieldEquals('Poll', '5', 'id', '5')
        assert.fieldEquals('Poll', '5', 'creator','0x0000000000000000000000000000000000000001')
        assert.fieldEquals('Poll', '5', 'status', 'Rejected')
    })

    test('Update Voting Status', ()=>{
        assert.fieldEquals('VotingStatus', '5', 'id', '5')
        assert.fieldEquals('VotingStatus', '5', 'voter_address', '0x0000000000000000000000000000000000000001')
        assert.fieldEquals('VoterInfo', '0x5', 'votes', 'Yes')
        assert.fieldEquals('VoterInfo', '0x5', 'voted', 'true')
        assert.fieldEquals('VoterInfo', '0x5', 'balance', '1')
    })

    test('SubDAO Transfer', ()=>{
        assert.fieldEquals('SubdaoTransfer', '\u0001', 'id', '\u0001')
        assert.fieldEquals('SubdaoTransfer', '\u0001', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('SubdaoTransfer', '\u0001', 'recipient', '0x0000000000000000000000000000000000000004')
        assert.fieldEquals('SubdaoTransfer', '\u0001', 'amount', '10')
    })

    test('SubDAO Transfer From',()=>{
        assert.fieldEquals('SubdaoTransferFrom', '\u0001', 'id', '\u0001')
        assert.fieldEquals('SubdaoTransferFrom', '\u0001', 'tokenAddress', '0x0000000000000000000000000000000000000003')
        assert.fieldEquals('SubdaoTransferFrom', '\u0001', 'from', '0x0000000000000000000000000000000000000008')
        assert.fieldEquals('SubdaoTransferFrom', '\u0001', 'to', '0x0000000000000000000000000000000000000009')
        assert.fieldEquals('SubdaoTransferFrom', '\u0001', 'amount', '10')
    })
})