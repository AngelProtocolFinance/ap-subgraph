import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { AccountsContractStorageChanged } from "../generated/schema"
import { AccountsContractStorageChanged as AccountsContractStorageChangedEvent } from "../generated/Registrar/Registrar"
import { handleAccountsContractStorageChanged } from "../src/registrar"
import { createAccountsContractStorageChangedEvent } from "./registrar-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _chainName = "Example string value"
    let _accountsContractAddress = "Example string value"
    let newAccountsContractStorageChangedEvent = createAccountsContractStorageChangedEvent(
      _chainName,
      _accountsContractAddress
    )
    handleAccountsContractStorageChanged(newAccountsContractStorageChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountsContractStorageChanged created and stored", () => {
    assert.entityCount("AccountsContractStorageChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountsContractStorageChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_chainName",
      "Example string value"
    )
    assert.fieldEquals(
      "AccountsContractStorageChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_accountsContractAddress",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
