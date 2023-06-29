import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ApprovalsRequiredChanged } from "../generated/schema"
import { ApprovalsRequiredChanged as ApprovalsRequiredChangedEvent } from "../generated/EndowmentMultiSig/EndowmentMultiSig"
import { handleApprovalsRequiredChanged } from "../src/endowment-multi-sig"
import { createApprovalsRequiredChangedEvent } from "./endowment-multi-sig-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let approvalsRequired = BigInt.fromI32(234)
    let newApprovalsRequiredChangedEvent = createApprovalsRequiredChangedEvent(
      approvalsRequired
    )
    handleApprovalsRequiredChanged(newApprovalsRequiredChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApprovalsRequiredChanged created and stored", () => {
    assert.entityCount("ApprovalsRequiredChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApprovalsRequiredChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approvalsRequired",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
