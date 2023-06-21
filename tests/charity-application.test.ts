import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CharityApproved } from "../generated/schema"
import { CharityApproved as CharityApprovedEvent } from "../generated/CharityApplication/CharityApplication"
import { handleCharityApproved } from "../src/charity-application"
import { createCharityApprovedEvent } from "./charity-application-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proposalId = BigInt.fromI32(234)
    let endowmentId = BigInt.fromI32(234)
    let newCharityApprovedEvent = createCharityApprovedEvent(
      proposalId,
      endowmentId
    )
    handleCharityApproved(newCharityApprovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CharityApproved created and stored", () => {
    assert.entityCount("CharityApproved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CharityApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalId",
      "234"
    )
    assert.fieldEquals(
      "CharityApproved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "endowmentId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
