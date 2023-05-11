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

export class IndexfundInitialized extends ethereum.Event {
  get params(): IndexfundInitialized__Params {
    return new IndexfundInitialized__Params(this);
  }
}

export class IndexfundInitialized__Params {
  _event: IndexfundInitialized;

  constructor(event: IndexfundInitialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class allianceMemberAdded extends ethereum.Event {
  get params(): allianceMemberAdded__Params {
    return new allianceMemberAdded__Params(this);
  }
}

export class allianceMemberAdded__Params {
  _event: allianceMemberAdded;

  constructor(event: allianceMemberAdded) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class allianceMemberRemoved extends ethereum.Event {
  get params(): allianceMemberRemoved__Params {
    return new allianceMemberRemoved__Params(this);
  }
}

export class allianceMemberRemoved__Params {
  _event: allianceMemberRemoved;

  constructor(event: allianceMemberRemoved) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class configUpdated extends ethereum.Event {
  get params(): configUpdated__Params {
    return new configUpdated__Params(this);
  }
}

export class configUpdated__Params {
  _event: configUpdated;

  constructor(event: configUpdated) {
    this._event = event;
  }

  get config(): configUpdatedConfigStruct {
    return changetype<configUpdatedConfigStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class configUpdatedConfigStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get registrar_contract(): Address {
    return this[1].toAddress();
  }

  get fund_rotation(): BigInt {
    return this[2].toBigInt();
  }

  get fund_member_limit(): BigInt {
    return this[3].toBigInt();
  }

  get funding_goal(): BigInt {
    return this[4].toBigInt();
  }

  get alliance_members(): Array<Address> {
    return this[5].toAddressArray();
  }
}

export class donationMessagesUpdated extends ethereum.Event {
  get params(): donationMessagesUpdated__Params {
    return new donationMessagesUpdated__Params(this);
  }
}

export class donationMessagesUpdated__Params {
  _event: donationMessagesUpdated;

  constructor(event: donationMessagesUpdated) {
    this._event = event;
  }

  get messages(): donationMessagesUpdatedMessagesStruct {
    return changetype<donationMessagesUpdatedMessagesStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class donationMessagesUpdatedMessagesStruct extends ethereum.Tuple {
  get member_ids(): Array<BigInt> {
    return this[0].toBigIntArray();
  }

  get locked_donation_amount(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get liquid_donation_amount(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get locked_split(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get liquid_split(): Array<BigInt> {
    return this[4].toBigIntArray();
  }
}

export class indexFundCreated extends ethereum.Event {
  get params(): indexFundCreated__Params {
    return new indexFundCreated__Params(this);
  }
}

export class indexFundCreated__Params {
  _event: indexFundCreated;

  constructor(event: indexFundCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get fund(): indexFundCreatedFundStruct {
    return changetype<indexFundCreatedFundStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class indexFundCreatedFundStruct extends ethereum.Tuple {
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

  get rotating_fund(): boolean {
    return this[4].toBoolean();
  }

  get split_to_liquid(): BigInt {
    return this[5].toBigInt();
  }

  get expiry_time(): BigInt {
    return this[6].toBigInt();
  }

  get expiry_height(): BigInt {
    return this[7].toBigInt();
  }
}

export class indexFundRemoved extends ethereum.Event {
  get params(): indexFundRemoved__Params {
    return new indexFundRemoved__Params(this);
  }
}

export class indexFundRemoved__Params {
  _event: indexFundRemoved;

  constructor(event: indexFundRemoved) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class memberAdded extends ethereum.Event {
  get params(): memberAdded__Params {
    return new memberAdded__Params(this);
  }
}

export class memberAdded__Params {
  _event: memberAdded;

  constructor(event: memberAdded) {
    this._event = event;
  }

  get fund_id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get member_id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class memberRemoved extends ethereum.Event {
  get params(): memberRemoved__Params {
    return new memberRemoved__Params(this);
  }
}

export class memberRemoved__Params {
  _event: memberRemoved;

  constructor(event: memberRemoved) {
    this._event = event;
  }

  get fund_id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get member_id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ownerUpdated extends ethereum.Event {
  get params(): ownerUpdated__Params {
    return new ownerUpdated__Params(this);
  }
}

export class ownerUpdated__Params {
  _event: ownerUpdated;

  constructor(event: ownerUpdated) {
    this._event = event;
  }

  get newOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class registrarUpdated extends ethereum.Event {
  get params(): registrarUpdated__Params {
    return new registrarUpdated__Params(this);
  }
}

export class registrarUpdated__Params {
  _event: registrarUpdated;

  constructor(event: registrarUpdated) {
    this._event = event;
  }

  get newRegistrar(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class updateActiveFund extends ethereum.Event {
  get params(): updateActiveFund__Params {
    return new updateActiveFund__Params(this);
  }
}

export class updateActiveFund__Params {
  _event: updateActiveFund;

  constructor(event: updateActiveFund) {
    this._event = event;
  }

  get fund_id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class updateIndexFundState extends ethereum.Event {
  get params(): updateIndexFundState__Params {
    return new updateIndexFundState__Params(this);
  }
}

export class updateIndexFundState__Params {
  _event: updateIndexFundState;

  constructor(event: updateIndexFundState) {
    this._event = event;
  }

  get state(): updateIndexFundStateStateStruct {
    return changetype<updateIndexFundStateStateStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class updateIndexFundStateStateStruct extends ethereum.Tuple {
  get total_funds(): BigInt {
    return this[0].toBigInt();
  }

  get active_fund(): BigInt {
    return this[1].toBigInt();
  }

  get round_donations(): BigInt {
    return this[2].toBigInt();
  }

  get next_rotation_block(): BigInt {
    return this[3].toBigInt();
  }

  get next_fund_id(): BigInt {
    return this[4].toBigInt();
  }
}

export class Indexfund__depositInput_detailsStruct extends ethereum.Tuple {
  get fund_id(): BigInt {
    return this[0].toBigInt();
  }

  get split(): BigInt {
    return this[1].toBigInt();
  }
}

export class Indexfund__depositInputFundStruct extends ethereum.Tuple {
  get info(): i32 {
    return this[0].toI32();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get addr(): Address {
    return this[2].toAddress();
  }

  get name(): string {
    return this[3].toString();
  }
}

export class Indexfund__query_active_fund_detailsResultValue0Struct extends ethereum.Tuple {
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

  get rotating_fund(): boolean {
    return this[4].toBoolean();
  }

  get split_to_liquid(): BigInt {
    return this[5].toBigInt();
  }

  get expiry_time(): BigInt {
    return this[6].toBigInt();
  }

  get expiry_height(): BigInt {
    return this[7].toBigInt();
  }
}

export class Indexfund__query_configResultValue0Struct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get registrar_contract(): Address {
    return this[1].toAddress();
  }

  get fund_rotation(): BigInt {
    return this[2].toBigInt();
  }

  get fund_member_limit(): BigInt {
    return this[3].toBigInt();
  }

  get funding_goal(): BigInt {
    return this[4].toBigInt();
  }

  get alliance_members(): Array<Address> {
    return this[5].toAddressArray();
  }
}

export class Indexfund__query_fund_detailsResultValue0Struct extends ethereum.Tuple {
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

  get rotating_fund(): boolean {
    return this[4].toBoolean();
  }

  get split_to_liquid(): BigInt {
    return this[5].toBigInt();
  }

  get expiry_time(): BigInt {
    return this[6].toBigInt();
  }

  get expiry_height(): BigInt {
    return this[7].toBigInt();
  }
}

export class Indexfund__query_funds_listResultValue0Struct extends ethereum.Tuple {
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

  get rotating_fund(): boolean {
    return this[4].toBoolean();
  }

  get split_to_liquid(): BigInt {
    return this[5].toBigInt();
  }

  get expiry_time(): BigInt {
    return this[6].toBigInt();
  }

  get expiry_height(): BigInt {
    return this[7].toBigInt();
  }
}

export class Indexfund__query_involved_fundsResultValue0Struct extends ethereum.Tuple {
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

  get rotating_fund(): boolean {
    return this[4].toBoolean();
  }

  get split_to_liquid(): BigInt {
    return this[5].toBigInt();
  }

  get expiry_time(): BigInt {
    return this[6].toBigInt();
  }

  get expiry_height(): BigInt {
    return this[7].toBigInt();
  }
}

export class Indexfund__query_stateResultValue0Struct extends ethereum.Tuple {
  get total_funds(): BigInt {
    return this[0].toBigInt();
  }

  get active_fund(): BigInt {
    return this[1].toBigInt();
  }

  get round_donations(): BigInt {
    return this[2].toBigInt();
  }

  get next_rotation_block(): BigInt {
    return this[3].toBigInt();
  }
}

export class Indexfund__update_configInput_detailsStruct extends ethereum.Tuple {
  get fund_rotation(): BigInt {
    return this[0].toBigInt();
  }

  get fund_member_limit(): BigInt {
    return this[1].toBigInt();
  }

  get funding_goal(): BigInt {
    return this[2].toBigInt();
  }
}

export class Indexfund extends ethereum.SmartContract {
  static bind(address: Address): Indexfund {
    return new Indexfund("Indexfund", address);
  }

  create_index_fund(
    name: string,
    description: string,
    members: Array<BigInt>,
    rotating_fund: boolean,
    split_to_liquid: BigInt,
    expiry_time: BigInt,
    expiry_height: BigInt
  ): boolean {
    let result = super.call(
      "create_index_fund",
      "create_index_fund(string,string,uint256[],bool,uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromUnsignedBigIntArray(members),
        ethereum.Value.fromBoolean(rotating_fund),
        ethereum.Value.fromUnsignedBigInt(split_to_liquid),
        ethereum.Value.fromUnsignedBigInt(expiry_time),
        ethereum.Value.fromUnsignedBigInt(expiry_height)
      ]
    );

    return result[0].toBoolean();
  }

  try_create_index_fund(
    name: string,
    description: string,
    members: Array<BigInt>,
    rotating_fund: boolean,
    split_to_liquid: BigInt,
    expiry_time: BigInt,
    expiry_height: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "create_index_fund",
      "create_index_fund(string,string,uint256[],bool,uint256,uint256,uint256):(bool)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(description),
        ethereum.Value.fromUnsignedBigIntArray(members),
        ethereum.Value.fromBoolean(rotating_fund),
        ethereum.Value.fromUnsignedBigInt(split_to_liquid),
        ethereum.Value.fromUnsignedBigInt(expiry_time),
        ethereum.Value.fromUnsignedBigInt(expiry_height)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  deposit(
    sender_addr: Address,
    _details: Indexfund__depositInput_detailsStruct,
    fund: Indexfund__depositInputFundStruct
  ): boolean {
    let result = super.call(
      "deposit",
      "deposit(address,(uint256,uint256),(uint8,uint256,address,string)):(bool)",
      [
        ethereum.Value.fromAddress(sender_addr),
        ethereum.Value.fromTuple(_details),
        ethereum.Value.fromTuple(fund)
      ]
    );

    return result[0].toBoolean();
  }

  try_deposit(
    sender_addr: Address,
    _details: Indexfund__depositInput_detailsStruct,
    fund: Indexfund__depositInputFundStruct
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "deposit",
      "deposit(address,(uint256,uint256),(uint8,uint256,address,string)):(bool)",
      [
        ethereum.Value.fromAddress(sender_addr),
        ethereum.Value.fromTuple(_details),
        ethereum.Value.fromTuple(fund)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  query_active_fund_details(): Indexfund__query_active_fund_detailsResultValue0Struct {
    let result = super.call(
      "query_active_fund_details",
      "query_active_fund_details():((uint256,string,string,uint256[],bool,uint256,uint256,uint256))",
      []
    );

    return changetype<Indexfund__query_active_fund_detailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_query_active_fund_details(): ethereum.CallResult<
    Indexfund__query_active_fund_detailsResultValue0Struct
  > {
    let result = super.tryCall(
      "query_active_fund_details",
      "query_active_fund_details():((uint256,string,string,uint256[],bool,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Indexfund__query_active_fund_detailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  query_alliance_members(start_after: BigInt, limit: BigInt): Array<Address> {
    let result = super.call(
      "query_alliance_members",
      "query_alliance_members(uint256,uint256):(address[])",
      [
        ethereum.Value.fromUnsignedBigInt(start_after),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );

    return result[0].toAddressArray();
  }

  try_query_alliance_members(
    start_after: BigInt,
    limit: BigInt
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "query_alliance_members",
      "query_alliance_members(uint256,uint256):(address[])",
      [
        ethereum.Value.fromUnsignedBigInt(start_after),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  query_config(): Indexfund__query_configResultValue0Struct {
    let result = super.call(
      "query_config",
      "query_config():((address,address,uint256,uint256,uint256,address[]))",
      []
    );

    return changetype<Indexfund__query_configResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_query_config(): ethereum.CallResult<
    Indexfund__query_configResultValue0Struct
  > {
    let result = super.tryCall(
      "query_config",
      "query_config():((address,address,uint256,uint256,uint256,address[]))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Indexfund__query_configResultValue0Struct>(value[0].toTuple())
    );
  }

  query_fund_details(
    fund_id: BigInt
  ): Indexfund__query_fund_detailsResultValue0Struct {
    let result = super.call(
      "query_fund_details",
      "query_fund_details(uint256):((uint256,string,string,uint256[],bool,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(fund_id)]
    );

    return changetype<Indexfund__query_fund_detailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_query_fund_details(
    fund_id: BigInt
  ): ethereum.CallResult<Indexfund__query_fund_detailsResultValue0Struct> {
    let result = super.tryCall(
      "query_fund_details",
      "query_fund_details(uint256):((uint256,string,string,uint256[],bool,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(fund_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Indexfund__query_fund_detailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  query_funds_list(
    start_after: BigInt,
    limit: BigInt
  ): Array<Indexfund__query_funds_listResultValue0Struct> {
    let result = super.call(
      "query_funds_list",
      "query_funds_list(uint256,uint256):((uint256,string,string,uint256[],bool,uint256,uint256,uint256)[])",
      [
        ethereum.Value.fromUnsignedBigInt(start_after),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );

    return result[0].toTupleArray<
      Indexfund__query_funds_listResultValue0Struct
    >();
  }

  try_query_funds_list(
    start_after: BigInt,
    limit: BigInt
  ): ethereum.CallResult<Array<Indexfund__query_funds_listResultValue0Struct>> {
    let result = super.tryCall(
      "query_funds_list",
      "query_funds_list(uint256,uint256):((uint256,string,string,uint256[],bool,uint256,uint256,uint256)[])",
      [
        ethereum.Value.fromUnsignedBigInt(start_after),
        ethereum.Value.fromUnsignedBigInt(limit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Indexfund__query_funds_listResultValue0Struct>()
    );
  }

  query_involved_funds(
    endowment_id: BigInt
  ): Array<Indexfund__query_involved_fundsResultValue0Struct> {
    let result = super.call(
      "query_involved_funds",
      "query_involved_funds(uint256):((uint256,string,string,uint256[],bool,uint256,uint256,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(endowment_id)]
    );

    return result[0].toTupleArray<
      Indexfund__query_involved_fundsResultValue0Struct
    >();
  }

  try_query_involved_funds(
    endowment_id: BigInt
  ): ethereum.CallResult<
    Array<Indexfund__query_involved_fundsResultValue0Struct>
  > {
    let result = super.tryCall(
      "query_involved_funds",
      "query_involved_funds(uint256):((uint256,string,string,uint256[],bool,uint256,uint256,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(endowment_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Indexfund__query_involved_fundsResultValue0Struct>()
    );
  }

  query_state(): Indexfund__query_stateResultValue0Struct {
    let result = super.call(
      "query_state",
      "query_state():((uint256,uint256,uint256,uint256))",
      []
    );

    return changetype<Indexfund__query_stateResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_query_state(): ethereum.CallResult<
    Indexfund__query_stateResultValue0Struct
  > {
    let result = super.tryCall(
      "query_state",
      "query_state():((uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Indexfund__query_stateResultValue0Struct>(value[0].toTuple())
    );
  }

  remove_index_fund(fund_id: BigInt): boolean {
    let result = super.call(
      "remove_index_fund",
      "remove_index_fund(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(fund_id)]
    );

    return result[0].toBoolean();
  }

  try_remove_index_fund(fund_id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "remove_index_fund",
      "remove_index_fund(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(fund_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  remove_member(member: BigInt): boolean {
    let result = super.call("remove_member", "remove_member(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(member)
    ]);

    return result[0].toBoolean();
  }

  try_remove_member(member: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "remove_member",
      "remove_member(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(member)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  update_alliance_member_list(addr: Address, action: string): boolean {
    let result = super.call(
      "update_alliance_member_list",
      "update_alliance_member_list(address,string):(bool)",
      [ethereum.Value.fromAddress(addr), ethereum.Value.fromString(action)]
    );

    return result[0].toBoolean();
  }

  try_update_alliance_member_list(
    addr: Address,
    action: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "update_alliance_member_list",
      "update_alliance_member_list(address,string):(bool)",
      [ethereum.Value.fromAddress(addr), ethereum.Value.fromString(action)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  update_config(
    _details: Indexfund__update_configInput_detailsStruct
  ): boolean {
    let result = super.call(
      "update_config",
      "update_config((uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(_details)]
    );

    return result[0].toBoolean();
  }

  try_update_config(
    _details: Indexfund__update_configInput_detailsStruct
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "update_config",
      "update_config((uint256,uint256,uint256)):(bool)",
      [ethereum.Value.fromTuple(_details)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  update_fund_members(
    fund_id: BigInt,
    add: Array<BigInt>,
    remove: Array<BigInt>
  ): boolean {
    let result = super.call(
      "update_fund_members",
      "update_fund_members(uint256,uint256[],uint256[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(fund_id),
        ethereum.Value.fromUnsignedBigIntArray(add),
        ethereum.Value.fromUnsignedBigIntArray(remove)
      ]
    );

    return result[0].toBoolean();
  }

  try_update_fund_members(
    fund_id: BigInt,
    add: Array<BigInt>,
    remove: Array<BigInt>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "update_fund_members",
      "update_fund_members(uint256,uint256[],uint256[]):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(fund_id),
        ethereum.Value.fromUnsignedBigIntArray(add),
        ethereum.Value.fromUnsignedBigIntArray(remove)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  update_owner(new_owner: Address): boolean {
    let result = super.call("update_owner", "update_owner(address):(bool)", [
      ethereum.Value.fromAddress(new_owner)
    ]);

    return result[0].toBoolean();
  }

  try_update_owner(new_owner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("update_owner", "update_owner(address):(bool)", [
      ethereum.Value.fromAddress(new_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  update_registrar(new_registrar: Address): boolean {
    let result = super.call(
      "update_registrar",
      "update_registrar(address):(bool)",
      [ethereum.Value.fromAddress(new_registrar)]
    );

    return result[0].toBoolean();
  }

  try_update_registrar(new_registrar: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "update_registrar",
      "update_registrar(address):(bool)",
      [ethereum.Value.fromAddress(new_registrar)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class Create_index_fundCall extends ethereum.Call {
  get inputs(): Create_index_fundCall__Inputs {
    return new Create_index_fundCall__Inputs(this);
  }

  get outputs(): Create_index_fundCall__Outputs {
    return new Create_index_fundCall__Outputs(this);
  }
}

export class Create_index_fundCall__Inputs {
  _call: Create_index_fundCall;

  constructor(call: Create_index_fundCall) {
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

  get rotating_fund(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get split_to_liquid(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get expiry_time(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get expiry_height(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class Create_index_fundCall__Outputs {
  _call: Create_index_fundCall;

  constructor(call: Create_index_fundCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

  get sender_addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _details(): DepositCall_detailsStruct {
    return changetype<DepositCall_detailsStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get fund(): DepositCallFundStruct {
    return changetype<DepositCallFundStruct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositCall_detailsStruct extends ethereum.Tuple {
  get fund_id(): BigInt {
    return this[0].toBigInt();
  }

  get split(): BigInt {
    return this[1].toBigInt();
  }
}

export class DepositCallFundStruct extends ethereum.Tuple {
  get info(): i32 {
    return this[0].toI32();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get addr(): Address {
    return this[2].toAddress();
  }

  get name(): string {
    return this[3].toString();
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

  get _details(): InitIndexFundCall_detailsStruct {
    return changetype<InitIndexFundCall_detailsStruct>(
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

export class InitIndexFundCall_detailsStruct extends ethereum.Tuple {
  get registrar_contract(): Address {
    return this[0].toAddress();
  }

  get fund_rotation(): BigInt {
    return this[1].toBigInt();
  }

  get fund_member_limit(): BigInt {
    return this[2].toBigInt();
  }

  get funding_goal(): BigInt {
    return this[3].toBigInt();
  }
}

export class Remove_index_fundCall extends ethereum.Call {
  get inputs(): Remove_index_fundCall__Inputs {
    return new Remove_index_fundCall__Inputs(this);
  }

  get outputs(): Remove_index_fundCall__Outputs {
    return new Remove_index_fundCall__Outputs(this);
  }
}

export class Remove_index_fundCall__Inputs {
  _call: Remove_index_fundCall;

  constructor(call: Remove_index_fundCall) {
    this._call = call;
  }

  get fund_id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Remove_index_fundCall__Outputs {
  _call: Remove_index_fundCall;

  constructor(call: Remove_index_fundCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Remove_memberCall extends ethereum.Call {
  get inputs(): Remove_memberCall__Inputs {
    return new Remove_memberCall__Inputs(this);
  }

  get outputs(): Remove_memberCall__Outputs {
    return new Remove_memberCall__Outputs(this);
  }
}

export class Remove_memberCall__Inputs {
  _call: Remove_memberCall;

  constructor(call: Remove_memberCall) {
    this._call = call;
  }

  get member(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Remove_memberCall__Outputs {
  _call: Remove_memberCall;

  constructor(call: Remove_memberCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Update_alliance_member_listCall extends ethereum.Call {
  get inputs(): Update_alliance_member_listCall__Inputs {
    return new Update_alliance_member_listCall__Inputs(this);
  }

  get outputs(): Update_alliance_member_listCall__Outputs {
    return new Update_alliance_member_listCall__Outputs(this);
  }
}

export class Update_alliance_member_listCall__Inputs {
  _call: Update_alliance_member_listCall;

  constructor(call: Update_alliance_member_listCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get action(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class Update_alliance_member_listCall__Outputs {
  _call: Update_alliance_member_listCall;

  constructor(call: Update_alliance_member_listCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Update_configCall extends ethereum.Call {
  get inputs(): Update_configCall__Inputs {
    return new Update_configCall__Inputs(this);
  }

  get outputs(): Update_configCall__Outputs {
    return new Update_configCall__Outputs(this);
  }
}

export class Update_configCall__Inputs {
  _call: Update_configCall;

  constructor(call: Update_configCall) {
    this._call = call;
  }

  get _details(): Update_configCall_detailsStruct {
    return changetype<Update_configCall_detailsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class Update_configCall__Outputs {
  _call: Update_configCall;

  constructor(call: Update_configCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Update_configCall_detailsStruct extends ethereum.Tuple {
  get fund_rotation(): BigInt {
    return this[0].toBigInt();
  }

  get fund_member_limit(): BigInt {
    return this[1].toBigInt();
  }

  get funding_goal(): BigInt {
    return this[2].toBigInt();
  }
}

export class Update_fund_membersCall extends ethereum.Call {
  get inputs(): Update_fund_membersCall__Inputs {
    return new Update_fund_membersCall__Inputs(this);
  }

  get outputs(): Update_fund_membersCall__Outputs {
    return new Update_fund_membersCall__Outputs(this);
  }
}

export class Update_fund_membersCall__Inputs {
  _call: Update_fund_membersCall;

  constructor(call: Update_fund_membersCall) {
    this._call = call;
  }

  get fund_id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get add(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get remove(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class Update_fund_membersCall__Outputs {
  _call: Update_fund_membersCall;

  constructor(call: Update_fund_membersCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Update_ownerCall extends ethereum.Call {
  get inputs(): Update_ownerCall__Inputs {
    return new Update_ownerCall__Inputs(this);
  }

  get outputs(): Update_ownerCall__Outputs {
    return new Update_ownerCall__Outputs(this);
  }
}

export class Update_ownerCall__Inputs {
  _call: Update_ownerCall;

  constructor(call: Update_ownerCall) {
    this._call = call;
  }

  get new_owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Update_ownerCall__Outputs {
  _call: Update_ownerCall;

  constructor(call: Update_ownerCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class Update_registrarCall extends ethereum.Call {
  get inputs(): Update_registrarCall__Inputs {
    return new Update_registrarCall__Inputs(this);
  }

  get outputs(): Update_registrarCall__Outputs {
    return new Update_registrarCall__Outputs(this);
  }
}

export class Update_registrarCall__Inputs {
  _call: Update_registrarCall;

  constructor(call: Update_registrarCall) {
    this._call = call;
  }

  get new_registrar(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Update_registrarCall__Outputs {
  _call: Update_registrarCall;

  constructor(call: Update_registrarCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
