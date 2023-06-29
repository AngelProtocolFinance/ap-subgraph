import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { ApplicationConfirmationRevoked } from "../generated/schema"
import { ApplicationConfirmationRevoked as ApplicationConfirmationRevokedEvent } from "../generated/CharityApplications/CharityApplications"
import { handleApplicationConfirmationRevoked } from "../src/charity-applications"
import { createApplicationConfirmationRevokedEvent } from "./charity-applications-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let proposalId = BigInt.fromI32(234)
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let newApplicationConfirmationRevokedEvent = createApplicationConfirmationRevokedEvent(
      proposalId,
      owner
    )
    handleApplicationConfirmationRevoked(newApplicationConfirmationRevokedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApplicationConfirmationRevoked created and stored", () => {
    assert.entityCount("ApplicationConfirmationRevoked", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApplicationConfirmationRevoked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposalId",
      "234"
    )
    assert.fieldEquals(
      "ApplicationConfirmationRevoked",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
