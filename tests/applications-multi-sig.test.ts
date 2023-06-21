import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Confirmation } from "../generated/schema"
import { Confirmation as ConfirmationEvent } from "../generated/ApplicationsMultiSig/ApplicationsMultiSig"
import { handleConfirmation } from "../src/applications-multi-sig"
import { createConfirmationEvent } from "./applications-multi-sig-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let transactionId = BigInt.fromI32(234)
    let newConfirmationEvent = createConfirmationEvent(sender, transactionId)
    handleConfirmation(newConfirmationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Confirmation created and stored", () => {
    assert.entityCount("Confirmation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Confirmation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Confirmation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "transactionId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
