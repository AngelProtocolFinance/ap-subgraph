import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AllowanceStateUpdatedTo } from "../generated/schema"
import { AllowanceStateUpdatedTo as AllowanceStateUpdatedToEvent } from "../generated/Accounts/Accounts"
import { handleAllowanceStateUpdatedTo } from "../src/accounts"
import { createAllowanceStateUpdatedToEvent } from "./accounts-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let spender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let allowance = BigInt.fromI32(234)
    let newAllowanceStateUpdatedToEvent = createAllowanceStateUpdatedToEvent(
      sender,
      spender,
      tokenAddress,
      allowance
    )
    handleAllowanceStateUpdatedTo(newAllowanceStateUpdatedToEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AllowanceStateUpdatedTo created and stored", () => {
    assert.entityCount("AllowanceStateUpdatedTo", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AllowanceStateUpdatedTo",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllowanceStateUpdatedTo",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "spender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllowanceStateUpdatedTo",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AllowanceStateUpdatedTo",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "allowance",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
