import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ActiveFundUpdated } from "../generated/schema"
import { ActiveFundUpdated as ActiveFundUpdatedEvent } from "../generated/IndexFund/IndexFund"
import { handleActiveFundUpdated } from "../src/index-fund"
import { createActiveFundUpdatedEvent } from "./index-fund-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let fundId = BigInt.fromI32(234)
    let newActiveFundUpdatedEvent = createActiveFundUpdatedEvent(fundId)
    handleActiveFundUpdated(newActiveFundUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ActiveFundUpdated created and stored", () => {
    assert.entityCount("ActiveFundUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ActiveFundUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fundId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
