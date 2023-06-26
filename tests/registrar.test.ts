import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { AccountsContractStorageUpdated } from "../generated/schema"
import { AccountsContractStorageUpdated as AccountsContractStorageUpdatedEvent } from "../generated/Registrar/Registrar"
import { handleAccountsContractStorageUpdated } from "../src/registrar"
import { createAccountsContractStorageUpdatedEvent } from "./registrar-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _chainName = "Example string value"
    let _accountsContractAddress = "Example string value"
    let newAccountsContractStorageUpdatedEvent = createAccountsContractStorageUpdatedEvent(
      _chainName,
      _accountsContractAddress
    )
    handleAccountsContractStorageUpdated(newAccountsContractStorageUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountsContractStorageUpdated created and stored", () => {
    assert.entityCount("AccountsContractStorageUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountsContractStorageUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_chainName",
      "Example string value"
    )
    assert.fieldEquals(
      "AccountsContractStorageUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_accountsContractAddress",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
