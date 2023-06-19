import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ConfigUpdated } from "../generated/schema"
import { ConfigUpdated as ConfigUpdatedEvent } from "../generated/IndexFund/IndexFund"
import { handleConfigUpdated } from "../src/index-fund"
import { createConfigUpdatedEvent } from "./index-fund-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let config = "ethereum.Tuple Not implemented"
    let newConfigUpdatedEvent = createConfigUpdatedEvent(config)
    handleConfigUpdated(newConfigUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ConfigUpdated created and stored", () => {
    assert.entityCount("ConfigUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ConfigUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "config",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
