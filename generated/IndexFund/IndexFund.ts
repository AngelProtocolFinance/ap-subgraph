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

export class ConfigUpdated extends ethereum.Event {
  get params(): ConfigUpdated__Params {
    return new ConfigUpdated__Params(this);
  }
}

export class ConfigUpdated__Params {
  _event: ConfigUpdated;

  constructor(event: ConfigUpdated) {
    this._event = event;
  }

  get config(): ConfigUpdatedConfigStruct {
    return changetype<ConfigUpdatedConfigStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class ConfigUpdatedConfigStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get registrarContract(): Address {
    return this[1].toAddress();
  }

  get fundRotation(): BigInt {
    return this[2].toBigInt();
  }

  get fundMemberLimit(): BigInt {
    return this[3].toBigInt();
  }

  get fundingGoal(): BigInt {
    return this[4].toBigInt();
  }
}

export class DonationMessagesUpdated extends ethereum.Event {
  get params(): DonationMessagesUpdated__Params {
    return new DonationMessagesUpdated__Params(this);
  }
}

export class DonationMessagesUpdated__Params {
  _event: DonationMessagesUpdated;

  constructor(event: DonationMessagesUpdated) {
    this._event = event;
  }

  get messages(): DonationMessagesUpdatedMessagesStruct {
    return changetype<DonationMessagesUpdatedMessagesStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class DonationMessagesUpdatedMessagesStruct extends ethereum.Tuple {
  get member_ids(): Array<BigInt> {
    return this[0].toBigIntArray();
  }

  get locked_donation_amount(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get liquid_donation_amount(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get lockedSplit(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get liquidSplit(): Array<BigInt> {
    return this[4].toBigIntArray();
  }
}

export class IndexFundCreated extends ethereum.Event {
  get params(): IndexFundCreated__Params {
    return new IndexFundCreated__Params(this);
  }
}

export class IndexFundCreated__Params {
  _event: IndexFundCreated;

  constructor(event: IndexFundCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fund(): IndexFundCreatedFundStruct {
    return changetype<IndexFundCreatedFundStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class IndexFundCreatedFundStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get members(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get splitToLiquid(): BigInt {
    return this[4].toBigInt();
  }

  get expiryTime(): BigInt {
    return this[5].toBigInt();
  }
}

export class IndexFundRemoved extends ethereum.Event {
  get params(): IndexFundRemoved__Params {
    return new IndexFundRemoved__Params(this);
  }
}

export class IndexFundRemoved__Params {
  _event: IndexFundRemoved;

  constructor(event: IndexFundRemoved) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class MemberAdded extends ethereum.Event {
  get params(): MemberAdded__Params {
    return new MemberAdded__Params(this);
  }
}

export class MemberAdded__Params {
  _event: MemberAdded;

  constructor(event: MemberAdded) {
    this._event = event;
  }

  get fundId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get memberId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MemberRemoved extends ethereum.Event {
  get params(): MemberRemoved__Params {
    return new MemberRemoved__Params(this);
  }
}

export class MemberRemoved__Params {
  _event: MemberRemoved;

  constructor(event: MemberRemoved) {
    this._event = event;
  }

  get fundId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get memberId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnerUpdated extends ethereum.Event {
  get params(): OwnerUpdated__Params {
    return new OwnerUpdated__Params(this);
  }
}

export class OwnerUpdated__Params {
  _event: OwnerUpdated;

  constructor(event: OwnerUpdated) {
    this._event = event;
  }

  get newOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RegistrarUpdated extends ethereum.Event {
  get params(): RegistrarUpdated__Params {
    return new RegistrarUpdated__Params(this);
  }
}

export class RegistrarUpdated__Params {
  _event: RegistrarUpdated;

  constructor(event: RegistrarUpdated) {
    this._event = event;
  }

  get newRegistrar(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UpdateActiveFund extends ethereum.Event {
  get params(): UpdateActiveFund__Params {
    return new UpdateActiveFund__Params(this);
  }
}

export class UpdateActiveFund__Params {
  _event: UpdateActiveFund;

  constructor(event: UpdateActiveFund) {
    this._event = event;
  }

  get fundId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class UpdateIndexFundState extends ethereum.Event {
  get params(): UpdateIndexFundState__Params {
    return new UpdateIndexFundState__Params(this);
  }
}

export class UpdateIndexFundState__Params {
  _event: UpdateIndexFundState;

  constructor(event: UpdateIndexFundState) {
    this._event = event;
  }

  get state(): UpdateIndexFundStateStateStruct {
    return changetype<UpdateIndexFundStateStateStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class UpdateIndexFundStateStateStruct extends ethereum.Tuple {
  get totalFunds(): BigInt {
    return this[0].toBigInt();
  }

  get activeFund(): BigInt {
    return this[1].toBigInt();
  }

  get roundDonations(): BigInt {
    return this[2].toBigInt();
  }

  get nextRotationBlock(): BigInt {
    return this[3].toBigInt();
  }

  get nextFundId(): BigInt {
    return this[4].toBigInt();
  }
}

export class IndexFund__queryActiveFundDetailsResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get members(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get splitToLiquid(): BigInt {
    return this[4].toBigInt();
  }

  get expiryTime(): BigInt {
    return this[5].toBigInt();
  }
}

export class IndexFund__queryConfigResultValue0Struct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get registrarContract(): Address {
    return this[1].toAddress();
  }

  get fundRotation(): BigInt {
    return this[2].toBigInt();
  }

  get fundMemberLimit(): BigInt {
    return this[3].toBigInt();
  }

  get fundingGoal(): BigInt {
    return this[4].toBigInt();
  }
}

export class IndexFund__queryFundDetailsResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get members(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get splitToLiquid(): BigInt {
    return this[4].toBigInt();
  }

  get expiryTime(): BigInt {
    return this[5].toBigInt();
  }
}

export class IndexFund__queryInvolvedFundsResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get members(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get splitToLiquid(): BigInt {
    return this[4].toBigInt();
  }

  get expiryTime(): BigInt {
    return this[5].toBigInt();
  }
}

export class IndexFund__queryStateResultValue0Struct extends ethereum.Tuple {
  get totalFunds(): BigInt {
    return this[0].toBigInt();
  }

  get activeFund(): BigInt {
    return this[1].toBigInt();
  }

  get roundDonations(): BigInt {
    return this[2].toBigInt();
  }

  get nextRotationBlock(): BigInt {
    return this[3].toBigInt();
  }
}

export class IndexFund__updateConfigInputDetailsStruct extends ethereum.Tuple {
  get fundRotation(): BigInt {
    return this[0].toBigInt();
  }

  get fundMemberLimit(): BigInt {
    return this[1].toBigInt();
  }

  get fundingGoal(): BigInt {
    return this[2].toBigInt();
  }
}

export class IndexFund extends ethereum.SmartContract {
  static bind(address: Address): IndexFund {
    return new IndexFund("IndexFund", address);
  }

  createIndexFund(
    name: string,
    description: string,
    members: Array<BigInt>,
    rotatingFund: boolean,
    splitToLiquid: BigInt,
    expiryTime: BigInt
  ): boolean {
    let result = super.call(
      "createIndexFund",
      "createIndexFund(string,string,uint32[],bool,uint256,uint256):(bool)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromUnsignedBigIntArray(members),
        ethereum.Value.fromBoolean(rotatingFund),
        ethereum.Value.fromUnsignedBigInt(splitToLiquid),
        ethereum.Value.fromUnsignedBigInt(expiryTime)
      ]
    );

    return result[0].toBoolean();
  }

  try_createIndexFund(
    name: string,
    description: string,
    members: Array<BigInt>,
    rotatingFund: boolean,
    splitToLiquid: BigInt,
    expiryTime: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createIndexFund",
      "createIndexFund(string,string,uint32[],bool,uint256,uint256):(bool)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromUnsignedBigIntArray(members),
        ethereum.Value.fromBoolean(rotatingFund),
        ethereum.Value.fromUnsignedBigInt(splitToLiquid),
        ethereum.Value.fromUnsignedBigInt(expiryTime)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  queryActiveFundDetails(): IndexFund__queryActiveFundDetailsResultValue0Struct {
    let result = super.call(
      "queryActiveFundDetails",
      "queryActiveFundDetails():((uint256,string,string,uint32[],uint256,uint256))",
      []
    );

    return changetype<IndexFund__queryActiveFundDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_queryActiveFundDetails(): ethereum.CallResult<
    IndexFund__queryActiveFundDetailsResultValue0Struct
  > {
    let result = super.tryCall(
      "queryActiveFundDetails",
      "queryActiveFundDetails():((uint256,string,string,uint32[],uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<IndexFund__queryActiveFundDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  queryConfig(): IndexFund__queryConfigResultValue0Struct {
    let result = super.call(
      "queryConfig",
      "queryConfig():((address,address,uint256,uint256,uint256))",
      []
    );

    return changetype<IndexFund__queryConfigResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_queryConfig(): ethereum.CallResult<
    IndexFund__queryConfigResultValue0Struct
  > {
    let result = super.tryCall(
      "queryConfig",
      "queryConfig():((address,address,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<IndexFund__queryConfigResultValue0Struct>(value[0].toTuple())
    );
  }

  queryFundDetails(
    fundId: BigInt
  ): IndexFund__queryFundDetailsResultValue0Struct {
    let result = super.call(
      "queryFundDetails",
      "queryFundDetails(uint256):((uint256,string,string,uint32[],uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(fundId)]
    );

    return changetype<IndexFund__queryFundDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_queryFundDetails(
    fundId: BigInt
  ): ethereum.CallResult<IndexFund__queryFundDetailsResultValue0Struct> {
    let result = super.tryCall(
      "queryFundDetails",
      "queryFundDetails(uint256):((uint256,string,string,uint32[],uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(fundId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<IndexFund__queryFundDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  queryInvolvedFunds(
    endowmentId: BigInt
  ): Array<IndexFund__queryInvolvedFundsResultValue0Struct> {
    let result = super.call(
      "queryInvolvedFunds",
      "queryInvolvedFunds(uint32):((uint256,string,string,uint32[],uint256,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(endowmentId)]
    );

    return result[0].toTupleArray<
      IndexFund__queryInvolvedFundsResultValue0Struct
    >();
  }

  try_queryInvolvedFunds(
    endowmentId: BigInt
  ): ethereum.CallResult<
    Array<IndexFund__queryInvolvedFundsResultValue0Struct>
  > {
    let result = super.tryCall(
      "queryInvolvedFunds",
      "queryInvolvedFunds(uint32):((uint256,string,string,uint32[],uint256,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(endowmentId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<IndexFund__queryInvolvedFundsResultValue0Struct>()
    );
  }

  queryState(): IndexFund__queryStateResultValue0Struct {
    let result = super.call(
      "queryState",
      "queryState():((uint256,uint256,uint256,uint256))",
      []
    );

    return changetype<IndexFund__queryStateResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_queryState(): ethereum.CallResult<
    IndexFund__queryStateResultValue0Struct
  > {
    let result = super.tryCall(
      "queryState",
      "queryState():((uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<IndexFund__queryStateResultValue0Struct>(value[0].toTuple())
    );
  }

  removeIndexFund(fundId: BigInt): boolean {
    let result = super.call(
      "removeIndexFund",
      "removeIndexFund(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(fundId)]
    );

    return result[0].toBoolean();
  }

  try_removeIndexFund(fundId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "removeIndexFund",
      "removeIndexFund(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(fundId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  removeMember(member: BigInt): boolean {
    let result = super.call("removeMember", "removeMember(uint32):(bool)", [
      ethereum.Value.fromUnsignedBigInt(member)
    ]);

    return result[0].toBoolean();
  }

  try_removeMember(member: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("removeMember", "removeMember(uint32):(bool)", [
      ethereum.Value.fromUnsignedBigInt(member)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updateConfig(details: IndexFund__updateConfigInputDetailsStruct): boolean {
    let result = super.call(
      "updateConfig",
      "updateConfig((uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(details)]
    );

    return result[0].toBoolean();
  }

  try_updateConfig(
    details: IndexFund__updateConfigInputDetailsStruct
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateConfig",
      "updateConfig((uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(details)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updateFundMembers(fundId: BigInt, members: Array<BigInt>): boolean {
    let result = super.call(
      "updateFundMembers",
      "updateFundMembers(uint256,uint32[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(fundId),
        ethereum.Value.fromUnsignedBigIntArray(members)
      ]
    );

    return result[0].toBoolean();
  }

  try_updateFundMembers(
    fundId: BigInt,
    members: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateFundMembers",
      "updateFundMembers(uint256,uint32[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(fundId),
        ethereum.Value.fromUnsignedBigIntArray(members)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updateOwner(newOwner: Address): boolean {
    let result = super.call("updateOwner", "updateOwner(address):(bool)", [
      ethereum.Value.fromAddress(newOwner)
    ]);

    return result[0].toBoolean();
  }

  try_updateOwner(newOwner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("updateOwner", "updateOwner(address):(bool)", [
      ethereum.Value.fromAddress(newOwner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updateRegistrar(newRegistrar: Address): boolean {
    let result = super.call(
      "updateRegistrar",
      "updateRegistrar(address):(bool)",
      [ethereum.Value.fromAddress(newRegistrar)]
    );

    return result[0].toBoolean();
  }

  try_updateRegistrar(newRegistrar: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateRegistrar",
      "updateRegistrar(address):(bool)",
      [ethereum.Value.fromAddress(newRegistrar)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class CreateIndexFundCall extends ethereum.Call {
  get inputs(): CreateIndexFundCall__Inputs {
    return new CreateIndexFundCall__Inputs(this);
  }

  get outputs(): CreateIndexFundCall__Outputs {
    return new CreateIndexFundCall__Outputs(this);
  }
}

export class CreateIndexFundCall__Inputs {
  _call: CreateIndexFundCall;

  constructor(call: CreateIndexFundCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get members(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get rotatingFund(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get splitToLiquid(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get expiryTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CreateIndexFundCall__Outputs {
  _call: CreateIndexFundCall;

  constructor(call: CreateIndexFundCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositERC20Call extends ethereum.Call {
  get inputs(): DepositERC20Call__Inputs {
    return new DepositERC20Call__Inputs(this);
  }

  get outputs(): DepositERC20Call__Outputs {
    return new DepositERC20Call__Outputs(this);
  }
}

export class DepositERC20Call__Inputs {
  _call: DepositERC20Call;

  constructor(call: DepositERC20Call) {
    this._call = call;
  }

  get fundId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get splitToLiquid(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class DepositERC20Call__Outputs {
  _call: DepositERC20Call;

  constructor(call: DepositERC20Call) {
    this._call = call;
  }
}

export class InitIndexFundCall extends ethereum.Call {
  get inputs(): InitIndexFundCall__Inputs {
    return new InitIndexFundCall__Inputs(this);
  }

  get outputs(): InitIndexFundCall__Outputs {
    return new InitIndexFundCall__Outputs(this);
  }
}

export class InitIndexFundCall__Inputs {
  _call: InitIndexFundCall;

  constructor(call: InitIndexFundCall) {
    this._call = call;
  }

  get details(): InitIndexFundCallDetailsStruct {
    return changetype<InitIndexFundCallDetailsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class InitIndexFundCall__Outputs {
  _call: InitIndexFundCall;

  constructor(call: InitIndexFundCall) {
    this._call = call;
  }
}

export class InitIndexFundCallDetailsStruct extends ethereum.Tuple {
  get registrarContract(): Address {
    return this[0].toAddress();
  }

  get fundRotation(): BigInt {
    return this[1].toBigInt();
  }

  get fundMemberLimit(): BigInt {
    return this[2].toBigInt();
  }

  get fundingGoal(): BigInt {
    return this[3].toBigInt();
  }
}

export class RemoveIndexFundCall extends ethereum.Call {
  get inputs(): RemoveIndexFundCall__Inputs {
    return new RemoveIndexFundCall__Inputs(this);
  }

  get outputs(): RemoveIndexFundCall__Outputs {
    return new RemoveIndexFundCall__Outputs(this);
  }
}

export class RemoveIndexFundCall__Inputs {
  _call: RemoveIndexFundCall;

  constructor(call: RemoveIndexFundCall) {
    this._call = call;
  }

  get fundId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveIndexFundCall__Outputs {
  _call: RemoveIndexFundCall;

  constructor(call: RemoveIndexFundCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RemoveMemberCall extends ethereum.Call {
  get inputs(): RemoveMemberCall__Inputs {
    return new RemoveMemberCall__Inputs(this);
  }

  get outputs(): RemoveMemberCall__Outputs {
    return new RemoveMemberCall__Outputs(this);
  }
}

export class RemoveMemberCall__Inputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }

  get member(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveMemberCall__Outputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateConfigCall extends ethereum.Call {
  get inputs(): UpdateConfigCall__Inputs {
    return new UpdateConfigCall__Inputs(this);
  }

  get outputs(): UpdateConfigCall__Outputs {
    return new UpdateConfigCall__Outputs(this);
  }
}

export class UpdateConfigCall__Inputs {
  _call: UpdateConfigCall;

  constructor(call: UpdateConfigCall) {
    this._call = call;
  }

  get details(): UpdateConfigCallDetailsStruct {
    return changetype<UpdateConfigCallDetailsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class UpdateConfigCall__Outputs {
  _call: UpdateConfigCall;

  constructor(call: UpdateConfigCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateConfigCallDetailsStruct extends ethereum.Tuple {
  get fundRotation(): BigInt {
    return this[0].toBigInt();
  }

  get fundMemberLimit(): BigInt {
    return this[1].toBigInt();
  }

  get fundingGoal(): BigInt {
    return this[2].toBigInt();
  }
}

export class UpdateFundMembersCall extends ethereum.Call {
  get inputs(): UpdateFundMembersCall__Inputs {
    return new UpdateFundMembersCall__Inputs(this);
  }

  get outputs(): UpdateFundMembersCall__Outputs {
    return new UpdateFundMembersCall__Outputs(this);
  }
}

export class UpdateFundMembersCall__Inputs {
  _call: UpdateFundMembersCall;

  constructor(call: UpdateFundMembersCall) {
    this._call = call;
  }

  get fundId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get members(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class UpdateFundMembersCall__Outputs {
  _call: UpdateFundMembersCall;

  constructor(call: UpdateFundMembersCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateOwnerCall extends ethereum.Call {
  get inputs(): UpdateOwnerCall__Inputs {
    return new UpdateOwnerCall__Inputs(this);
  }

  get outputs(): UpdateOwnerCall__Outputs {
    return new UpdateOwnerCall__Outputs(this);
  }
}

export class UpdateOwnerCall__Inputs {
  _call: UpdateOwnerCall;

  constructor(call: UpdateOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateOwnerCall__Outputs {
  _call: UpdateOwnerCall;

  constructor(call: UpdateOwnerCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateRegistrarCall extends ethereum.Call {
  get inputs(): UpdateRegistrarCall__Inputs {
    return new UpdateRegistrarCall__Inputs(this);
  }

  get outputs(): UpdateRegistrarCall__Outputs {
    return new UpdateRegistrarCall__Outputs(this);
  }
}

export class UpdateRegistrarCall__Inputs {
  _call: UpdateRegistrarCall;

  constructor(call: UpdateRegistrarCall) {
    this._call = call;
  }

  get newRegistrar(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateRegistrarCall__Outputs {
  _call: UpdateRegistrarCall;

  constructor(call: UpdateRegistrarCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
