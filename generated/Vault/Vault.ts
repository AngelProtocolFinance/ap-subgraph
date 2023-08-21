// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get endowId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get vault(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sharesReceived(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DepositERC4626 extends ethereum.Event {
  get params(): DepositERC4626__Params {
    return new DepositERC4626__Params(this);
  }
}

export class DepositERC4626__Params {
  _event: DepositERC4626;

  constructor(event: DepositERC4626) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get assets(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get shares(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Redeem extends ethereum.Event {
  get params(): Redeem__Params {
    return new Redeem__Params(this);
  }
}

export class Redeem__Params {
  _event: Redeem;

  constructor(event: Redeem) {
    this._event = event;
  }

  get endowId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get vault(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amountRedeemed(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RewardsHarvested extends ethereum.Event {
  get params(): RewardsHarvested__Params {
    return new RewardsHarvested__Params(this);
  }
}

export class RewardsHarvested__Params {
  _event: RewardsHarvested;

  constructor(event: RewardsHarvested) {
    this._event = event;
  }

  get endowId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get vault(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get shares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amountHarvested(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VaultConfigUpdated extends ethereum.Event {
  get params(): VaultConfigUpdated__Params {
    return new VaultConfigUpdated__Params(this);
  }
}

export class VaultConfigUpdated__Params {
  _event: VaultConfigUpdated;

  constructor(event: VaultConfigUpdated) {
    this._event = event;
  }

  get vault(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get config(): VaultConfigUpdatedConfigStruct {
    return changetype<VaultConfigUpdatedConfigStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class VaultConfigUpdatedConfigStruct extends ethereum.Tuple {
  get vaultType(): i32 {
    return this[0].toI32();
  }

  get strategySelector(): Bytes {
    return this[1].toBytes();
  }

  get strategy(): Address {
    return this[2].toAddress();
  }

  get registrar(): Address {
    return this[3].toAddress();
  }

  get baseToken(): Address {
    return this[4].toAddress();
  }

  get yieldToken(): Address {
    return this[5].toAddress();
  }

  get apTokenName(): string {
    return this[6].toString();
  }

  get apTokenSymbol(): string {
    return this[7].toString();
  }

  get admin(): Address {
    return this[8].toAddress();
  }
}

export class WithdrawERC4626 extends ethereum.Event {
  get params(): WithdrawERC4626__Params {
    return new WithdrawERC4626__Params(this);
  }
}

export class WithdrawERC4626__Params {
  _event: WithdrawERC4626;

  constructor(event: WithdrawERC4626) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get owner(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get assets(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get shares(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Vault__getVaultConfigResultValue0Struct extends ethereum.Tuple {
  get vaultType(): i32 {
    return this[0].toI32();
  }

  get strategySelector(): Bytes {
    return this[1].toBytes();
  }

  get strategy(): Address {
    return this[2].toAddress();
  }

  get registrar(): Address {
    return this[3].toAddress();
  }

  get baseToken(): Address {
    return this[4].toAddress();
  }

  get yieldToken(): Address {
    return this[5].toAddress();
  }

  get apTokenName(): string {
    return this[6].toString();
  }

  get apTokenSymbol(): string {
    return this[7].toString();
  }

  get admin(): Address {
    return this[8].toAddress();
  }
}

export class Vault__principleByAccountIdResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getBaseToken(): BigInt {
    return this.value0;
  }

  getCostBasis_withPrecision(): BigInt {
    return this.value1;
  }
}

export class Vault__vaultConfigResult {
  value0: i32;
  value1: Bytes;
  value2: Address;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: string;
  value7: string;
  value8: Address;

  constructor(
    value0: i32,
    value1: Bytes,
    value2: Address,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: string,
    value7: string,
    value8: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromString(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    return map;
  }

  getVaultType(): i32 {
    return this.value0;
  }

  getStrategySelector(): Bytes {
    return this.value1;
  }

  getStrategy(): Address {
    return this.value2;
  }

  getRegistrar(): Address {
    return this.value3;
  }

  getBaseToken(): Address {
    return this.value4;
  }

  getYieldToken(): Address {
    return this.value5;
  }

  getApTokenName(): string {
    return this.value6;
  }

  getApTokenSymbol(): string {
    return this.value7;
  }

  getAdmin(): Address {
    return this.value8;
  }
}

export class Vault extends ethereum.SmartContract {
  static bind(address: Address): Vault {
    return new Vault("Vault", address);
  }

  asset(): Address {
    let result = super.call("asset", "asset():(address)", []);

    return result[0].toAddress();
  }

  try_asset(): ethereum.CallResult<Address> {
    let result = super.tryCall("asset", "asset():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(account: BigInt): BigInt {
    let result = super.call("balanceOf", "balanceOf(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  convertToAssets(shares: BigInt): BigInt {
    let result = super.call(
      "convertToAssets",
      "convertToAssets(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );

    return result[0].toBigInt();
  }

  try_convertToAssets(shares: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "convertToAssets",
      "convertToAssets(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  convertToShares(assets: BigInt): BigInt {
    let result = super.call(
      "convertToShares",
      "convertToShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );

    return result[0].toBigInt();
  }

  try_convertToShares(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "convertToShares",
      "convertToShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  depositERC4626(strategy: Address, assets: BigInt, receiver: BigInt): BigInt {
    let result = super.call(
      "depositERC4626",
      "depositERC4626(address,uint256,uint32):(uint256)",
      [
        ethereum.Value.fromAddress(strategy),
        ethereum.Value.fromUnsignedBigInt(assets),
        ethereum.Value.fromUnsignedBigInt(receiver)
      ]
    );

    return result[0].toBigInt();
  }

  try_depositERC4626(
    strategy: Address,
    assets: BigInt,
    receiver: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "depositERC4626",
      "depositERC4626(address,uint256,uint32):(uint256)",
      [
        ethereum.Value.fromAddress(strategy),
        ethereum.Value.fromUnsignedBigInt(assets),
        ethereum.Value.fromUnsignedBigInt(receiver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPricePerFullShare(): BigInt {
    let result = super.call(
      "getPricePerFullShare",
      "getPricePerFullShare():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPricePerFullShare(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPricePerFullShare",
      "getPricePerFullShare():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVaultConfig(): Vault__getVaultConfigResultValue0Struct {
    let result = super.call(
      "getVaultConfig",
      "getVaultConfig():((uint8,bytes4,address,address,address,address,string,string,address))",
      []
    );

    return changetype<Vault__getVaultConfigResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getVaultConfig(): ethereum.CallResult<
    Vault__getVaultConfigResultValue0Struct
  > {
    let result = super.tryCall(
      "getVaultConfig",
      "getVaultConfig():((uint8,bytes4,address,address,address,address,string,string,address))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Vault__getVaultConfigResultValue0Struct>(value[0].toTuple())
    );
  }

  maxDeposit(param0: BigInt): BigInt {
    let result = super.call("maxDeposit", "maxDeposit(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_maxDeposit(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxDeposit", "maxDeposit(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxMint(param0: BigInt): BigInt {
    let result = super.call("maxMint", "maxMint(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_maxMint(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxMint", "maxMint(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxRedeem(owner: BigInt): BigInt {
    let result = super.call("maxRedeem", "maxRedeem(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(owner)
    ]);

    return result[0].toBigInt();
  }

  try_maxRedeem(owner: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxRedeem", "maxRedeem(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxWithdraw(owner: BigInt): BigInt {
    let result = super.call("maxWithdraw", "maxWithdraw(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(owner)
    ]);

    return result[0].toBigInt();
  }

  try_maxWithdraw(owner: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxWithdraw", "maxWithdraw(uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mint(shares: BigInt, receiver: BigInt): BigInt {
    let result = super.call("mint", "mint(uint256,uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(shares),
      ethereum.Value.fromUnsignedBigInt(receiver)
    ]);

    return result[0].toBigInt();
  }

  try_mint(shares: BigInt, receiver: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mint", "mint(uint256,uint32):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(shares),
      ethereum.Value.fromUnsignedBigInt(receiver)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  previewDeposit(assets: BigInt): BigInt {
    let result = super.call(
      "previewDeposit",
      "previewDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );

    return result[0].toBigInt();
  }

  try_previewDeposit(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "previewDeposit",
      "previewDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  previewMint(shares: BigInt): BigInt {
    let result = super.call("previewMint", "previewMint(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(shares)
    ]);

    return result[0].toBigInt();
  }

  try_previewMint(shares: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "previewMint",
      "previewMint(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  previewRedeem(shares: BigInt): BigInt {
    let result = super.call(
      "previewRedeem",
      "previewRedeem(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );

    return result[0].toBigInt();
  }

  try_previewRedeem(shares: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "previewRedeem",
      "previewRedeem(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  previewWithdraw(assets: BigInt): BigInt {
    let result = super.call(
      "previewWithdraw",
      "previewWithdraw(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );

    return result[0].toBigInt();
  }

  try_previewWithdraw(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "previewWithdraw",
      "previewWithdraw(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  principleByAccountId(param0: BigInt): Vault__principleByAccountIdResult {
    let result = super.call(
      "principleByAccountId",
      "principleByAccountId(uint32):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Vault__principleByAccountIdResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_principleByAccountId(
    param0: BigInt
  ): ethereum.CallResult<Vault__principleByAccountIdResult> {
    let result = super.tryCall(
      "principleByAccountId",
      "principleByAccountId(uint32):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Vault__principleByAccountIdResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  redeemERC4626(shares: BigInt, receiver: Address, owner: BigInt): BigInt {
    let result = super.call(
      "redeemERC4626",
      "redeemERC4626(uint256,address,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(shares),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(owner)
      ]
    );

    return result[0].toBigInt();
  }

  try_redeemERC4626(
    shares: BigInt,
    receiver: Address,
    owner: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "redeemERC4626",
      "redeemERC4626(uint256,address,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(shares),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalAssets(): BigInt {
    let result = super.call("totalAssets", "totalAssets():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalAssets(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalAssets", "totalAssets():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(param0: BigInt, param1: BigInt): boolean {
    let result = super.call("transfer", "transfer(uint32,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(param0: BigInt, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(uint32,uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: BigInt, to: BigInt, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(uint32,uint32,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: BigInt,
    to: BigInt,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(uint32,uint32,uint256):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  vaultConfig(): Vault__vaultConfigResult {
    let result = super.call(
      "vaultConfig",
      "vaultConfig():(uint8,bytes4,address,address,address,address,string,string,address)",
      []
    );

    return new Vault__vaultConfigResult(
      result[0].toI32(),
      result[1].toBytes(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toString(),
      result[7].toString(),
      result[8].toAddress()
    );
  }

  try_vaultConfig(): ethereum.CallResult<Vault__vaultConfigResult> {
    let result = super.tryCall(
      "vaultConfig",
      "vaultConfig():(uint8,bytes4,address,address,address,address,string,string,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Vault__vaultConfigResult(
        value[0].toI32(),
        value[1].toBytes(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toString(),
        value[7].toString(),
        value[8].toAddress()
      )
    );
  }

  withdraw(assets: BigInt, receiver: Address, owner: BigInt): BigInt {
    let result = super.call(
      "withdraw",
      "withdraw(uint256,address,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(assets),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(owner)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdraw(
    assets: BigInt,
    receiver: Address,
    owner: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(uint256,address,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(assets),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _config(): ConstructorCall_configStruct {
    return changetype<ConstructorCall_configStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall_configStruct extends ethereum.Tuple {
  get vaultType(): i32 {
    return this[0].toI32();
  }

  get strategySelector(): Bytes {
    return this[1].toBytes();
  }

  get strategy(): Address {
    return this[2].toAddress();
  }

  get registrar(): Address {
    return this[3].toAddress();
  }

  get baseToken(): Address {
    return this[4].toAddress();
  }

  get yieldToken(): Address {
    return this[5].toAddress();
  }

  get apTokenName(): string {
    return this[6].toString();
  }

  get apTokenSymbol(): string {
    return this[7].toString();
  }

  get admin(): Address {
    return this[8].toAddress();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get accountId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amt(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositERC4626Call extends ethereum.Call {
  get inputs(): DepositERC4626Call__Inputs {
    return new DepositERC4626Call__Inputs(this);
  }

  get outputs(): DepositERC4626Call__Outputs {
    return new DepositERC4626Call__Outputs(this);
  }
}

export class DepositERC4626Call__Inputs {
  _call: DepositERC4626Call;

  constructor(call: DepositERC4626Call) {
    this._call = call;
  }

  get strategy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assets(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get receiver(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositERC4626Call__Outputs {
  _call: DepositERC4626Call;

  constructor(call: DepositERC4626Call) {
    this._call = call;
  }

  get shares(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class HarvestCall extends ethereum.Call {
  get inputs(): HarvestCall__Inputs {
    return new HarvestCall__Inputs(this);
  }

  get outputs(): HarvestCall__Outputs {
    return new HarvestCall__Outputs(this);
  }
}

export class HarvestCall__Inputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }

  get accountIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class HarvestCall__Outputs {
  _call: HarvestCall;

  constructor(call: HarvestCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get shares(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiver(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get assets(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get accountId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get shares(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get value0(): RedeemCallValue0Struct {
    return changetype<RedeemCallValue0Struct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class RedeemCallValue0Struct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get status(): i32 {
    return this[2].toI32();
  }
}

export class RedeemAllCall extends ethereum.Call {
  get inputs(): RedeemAllCall__Inputs {
    return new RedeemAllCall__Inputs(this);
  }

  get outputs(): RedeemAllCall__Outputs {
    return new RedeemAllCall__Outputs(this);
  }
}

export class RedeemAllCall__Inputs {
  _call: RedeemAllCall;

  constructor(call: RedeemAllCall) {
    this._call = call;
  }

  get accountId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemAllCall__Outputs {
  _call: RedeemAllCall;

  constructor(call: RedeemAllCall) {
    this._call = call;
  }

  get value0(): RedeemAllCallValue0Struct {
    return changetype<RedeemAllCallValue0Struct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class RedeemAllCallValue0Struct extends ethereum.Tuple {
  get token(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get status(): i32 {
    return this[2].toI32();
  }
}

export class RedeemERC4626Call extends ethereum.Call {
  get inputs(): RedeemERC4626Call__Inputs {
    return new RedeemERC4626Call__Inputs(this);
  }

  get outputs(): RedeemERC4626Call__Outputs {
    return new RedeemERC4626Call__Outputs(this);
  }
}

export class RedeemERC4626Call__Inputs {
  _call: RedeemERC4626Call;

  constructor(call: RedeemERC4626Call) {
    this._call = call;
  }

  get shares(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get owner(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RedeemERC4626Call__Outputs {
  _call: RedeemERC4626Call;

  constructor(call: RedeemERC4626Call) {
    this._call = call;
  }

  get assets(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetVaultConfigCall extends ethereum.Call {
  get inputs(): SetVaultConfigCall__Inputs {
    return new SetVaultConfigCall__Inputs(this);
  }

  get outputs(): SetVaultConfigCall__Outputs {
    return new SetVaultConfigCall__Outputs(this);
  }
}

export class SetVaultConfigCall__Inputs {
  _call: SetVaultConfigCall;

  constructor(call: SetVaultConfigCall) {
    this._call = call;
  }

  get _newConfig(): SetVaultConfigCall_newConfigStruct {
    return changetype<SetVaultConfigCall_newConfigStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SetVaultConfigCall__Outputs {
  _call: SetVaultConfigCall;

  constructor(call: SetVaultConfigCall) {
    this._call = call;
  }
}

export class SetVaultConfigCall_newConfigStruct extends ethereum.Tuple {
  get vaultType(): i32 {
    return this[0].toI32();
  }

  get strategySelector(): Bytes {
    return this[1].toBytes();
  }

  get strategy(): Address {
    return this[2].toAddress();
  }

  get registrar(): Address {
    return this[3].toAddress();
  }

  get baseToken(): Address {
    return this[4].toAddress();
  }

  get yieldToken(): Address {
    return this[5].toAddress();
  }

  get apTokenName(): string {
    return this[6].toString();
  }

  get apTokenSymbol(): string {
    return this[7].toString();
  }

  get admin(): Address {
    return this[8].toAddress();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get value1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get assets(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get owner(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get shares(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
