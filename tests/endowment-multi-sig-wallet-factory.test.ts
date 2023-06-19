import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ContractInstantiation } from "../generated/schema"
import { ContractInstantiation as ContractInstantiationEvent } from "../generated/EndowmentMultiSigWalletFactory/EndowmentMultiSigWalletFactory"
import { handleContractInstantiation } from "../src/endowment-multi-sig-wallet-factory"
import { createContractInstantiationEvent } from "./endowment-multi-sig-wallet-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let instantiation = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newContractInstantiationEvent = createContractInstantiationEvent(
      sender,
      instantiation
    )
    handleContractInstantiation(newContractInstantiationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ContractInstantiation created and stored", () => {
    assert.entityCount("ContractInstantiation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ContractInstantiation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ContractInstantiation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "instantiation",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
