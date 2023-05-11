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

export class ApplicationMultisigConfirmation extends ethereum.Event {
  get params(): ApplicationMultisigConfirmation__Params {
    return new ApplicationMultisigConfirmation__Params(this);
  }
}

export class ApplicationMultisigConfirmation__Params {
  _event: ApplicationMultisigConfirmation;

  constructor(event: ApplicationMultisigConfirmation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get transactionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

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

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Execution extends ethereum.Event {
  get params(): Execution__Params {
    return new Execution__Params(this);
  }
}

export class Execution__Params {
  _event: Execution;

  constructor(event: Execution) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ExecutionFailure extends ethereum.Event {
  get params(): ExecutionFailure__Params {
    return new ExecutionFailure__Params(this);
  }
}

export class ExecutionFailure__Params {
  _event: ExecutionFailure;

  constructor(event: ExecutionFailure) {
    this._event = event;
  }

  get transactionId(): BigInt {
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

export class OwnerAddition extends ethereum.Event {
  get params(): OwnerAddition__Params {
    return new OwnerAddition__Params(this);
  }
}

export class OwnerAddition__Params {
  _event: OwnerAddition;

  constructor(event: OwnerAddition) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnerRemoval extends ethereum.Event {
  get params(): OwnerRemoval__Params {
    return new OwnerRemoval__Params(this);
  }
}

export class OwnerRemoval__Params {
  _event: OwnerRemoval;

  constructor(event: OwnerRemoval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RequirementChange extends ethereum.Event {
  get params(): RequirementChange__Params {
    return new RequirementChange__Params(this);
  }
}

export class RequirementChange__Params {
  _event: RequirementChange;

  constructor(event: RequirementChange) {
    this._event = event;
  }

  get required(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Revocation extends ethereum.Event {
  get params(): Revocation__Params {
    return new Revocation__Params(this);
  }
}

export class Revocation__Params {
  _event: Revocation;

  constructor(event: Revocation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get transactionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Submission extends ethereum.Event {
  get params(): Submission__Params {
    return new Submission__Params(this);
  }
}

export class Submission__Params {
  _event: Submission;

  constructor(event: Submission) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get transaction(): SubmissionTransactionStruct {
    return changetype<SubmissionTransactionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class SubmissionTransactionStruct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get destination(): Address {
    return this[2].toAddress();
  }

  get value(): BigInt {
    return this[3].toBigInt();
  }

  get data(): Bytes {
    return this[4].toBytes();
  }

  get executed(): boolean {
    return this[5].toBoolean();
  }
}

export class ApplicationMultisig__transactionsResult {
  value0: string;
  value1: string;
  value2: Address;
  value3: BigInt;
  value4: Bytes;
  value5: boolean;

  constructor(
    value0: string,
    value1: string,
    value2: Address,
    value3: BigInt,
    value4: Bytes,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBytes(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }

  getTitle(): string {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }

  getDestination(): Address {
    return this.value2;
  }

  getValue(): BigInt {
    return this.value3;
  }

  getData(): Bytes {
    return this.value4;
  }

  getExecuted(): boolean {
    return this.value5;
  }
}

export class ApplicationMultisig extends ethereum.SmartContract {
  static bind(address: Address): ApplicationMultisig {
    return new ApplicationMultisig("ApplicationMultisig", address);
  }

  MAX_OWNER_COUNT(): BigInt {
    let result = super.call(
      "MAX_OWNER_COUNT",
      "MAX_OWNER_COUNT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_OWNER_COUNT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_OWNER_COUNT",
      "MAX_OWNER_COUNT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  confirmations(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "confirmations",
      "confirmations(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_confirmations(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "confirmations",
      "confirmations(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getConfirmationCount(transactionId: BigInt): BigInt {
    let result = super.call(
      "getConfirmationCount",
      "getConfirmationCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );

    return result[0].toBigInt();
  }

  try_getConfirmationCount(transactionId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getConfirmationCount",
      "getConfirmationCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getConfirmations(transactionId: BigInt): Array<Address> {
    let result = super.call(
      "getConfirmations",
      "getConfirmations(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );

    return result[0].toAddressArray();
  }

  try_getConfirmations(
    transactionId: BigInt
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getConfirmations",
      "getConfirmations(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getOwners(): Array<Address> {
    let result = super.call("getOwners", "getOwners():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getOwners(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getOwners", "getOwners():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTransactionCount(pending: boolean, executed: boolean): BigInt {
    let result = super.call(
      "getTransactionCount",
      "getTransactionCount(bool,bool):(uint256)",
      [
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );

    return result[0].toBigInt();
  }

  try_getTransactionCount(
    pending: boolean,
    executed: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTransactionCount",
      "getTransactionCount(bool,bool):(uint256)",
      [
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTransactionIds(
    from: BigInt,
    to: BigInt,
    pending: boolean,
    executed: boolean
  ): Array<BigInt> {
    let result = super.call(
      "getTransactionIds",
      "getTransactionIds(uint256,uint256,bool,bool):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to),
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getTransactionIds(
    from: BigInt,
    to: BigInt,
    pending: boolean,
    executed: boolean
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTransactionIds",
      "getTransactionIds(uint256,uint256,bool,bool):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to),
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isConfirmed(transactionId: BigInt): boolean {
    let result = super.call("isConfirmed", "isConfirmed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(transactionId)
    ]);

    return result[0].toBoolean();
  }

  try_isConfirmed(transactionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isConfirmed", "isConfirmed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(transactionId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(param0: Address): boolean {
    let result = super.call("isOwner", "isOwner(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isOwner(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owners(param0: BigInt): Address {
    let result = super.call("owners", "owners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_owners(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("owners", "owners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requireExecution(): boolean {
    let result = super.call(
      "requireExecution",
      "requireExecution():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_requireExecution(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "requireExecution",
      "requireExecution():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  required(): BigInt {
    let result = super.call("required", "required():(uint256)", []);

    return result[0].toBigInt();
  }

  try_required(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("required", "required():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  submitTransaction(
    title: string,
    description: string,
    destination: Address,
    value: BigInt,
    data: Bytes
  ): BigInt {
    let result = super.call(
      "submitTransaction",
      "submitTransaction(string,string,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromString(title),
        ethereum.Value.fromString(description),
        ethereum.Value.fromAddress(destination),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_submitTransaction(
    title: string,
    description: string,
    destination: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "submitTransaction",
      "submitTransaction(string,string,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromString(title),
        ethereum.Value.fromString(description),
        ethereum.Value.fromAddress(destination),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transactionCount(): BigInt {
    let result = super.call(
      "transactionCount",
      "transactionCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_transactionCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "transactionCount",
      "transactionCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transactions(param0: BigInt): ApplicationMultisig__transactionsResult {
    let result = super.call(
      "transactions",
      "transactions(uint256):(string,string,address,uint256,bytes,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ApplicationMultisig__transactionsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBytes(),
      result[5].toBoolean()
    );
  }

  try_transactions(
    param0: BigInt
  ): ethereum.CallResult<ApplicationMultisig__transactionsResult> {
    let result = super.tryCall(
      "transactions",
      "transactions(uint256):(string,string,address,uint256,bytes,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ApplicationMultisig__transactionsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBytes(),
        value[5].toBoolean()
      )
    );
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddOwnerCall extends ethereum.Call {
  get inputs(): AddOwnerCall__Inputs {
    return new AddOwnerCall__Inputs(this);
  }

  get outputs(): AddOwnerCall__Outputs {
    return new AddOwnerCall__Outputs(this);
  }
}

export class AddOwnerCall__Inputs {
  _call: AddOwnerCall;

  constructor(call: AddOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddOwnerCall__Outputs {
  _call: AddOwnerCall;

  constructor(call: AddOwnerCall) {
    this._call = call;
  }
}

export class ChangeRequirementCall extends ethereum.Call {
  get inputs(): ChangeRequirementCall__Inputs {
    return new ChangeRequirementCall__Inputs(this);
  }

  get outputs(): ChangeRequirementCall__Outputs {
    return new ChangeRequirementCall__Outputs(this);
  }
}

export class ChangeRequirementCall__Inputs {
  _call: ChangeRequirementCall;

  constructor(call: ChangeRequirementCall) {
    this._call = call;
  }

  get _required(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeRequirementCall__Outputs {
  _call: ChangeRequirementCall;

  constructor(call: ChangeRequirementCall) {
    this._call = call;
  }
}

export class ConfirmTransactionCall extends ethereum.Call {
  get inputs(): ConfirmTransactionCall__Inputs {
    return new ConfirmTransactionCall__Inputs(this);
  }

  get outputs(): ConfirmTransactionCall__Outputs {
    return new ConfirmTransactionCall__Outputs(this);
  }
}

export class ConfirmTransactionCall__Inputs {
  _call: ConfirmTransactionCall;

  constructor(call: ConfirmTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConfirmTransactionCall__Outputs {
  _call: ConfirmTransactionCall;

  constructor(call: ConfirmTransactionCall) {
    this._call = call;
  }
}

export class ExecuteTransactionCall extends ethereum.Call {
  get inputs(): ExecuteTransactionCall__Inputs {
    return new ExecuteTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteTransactionCall__Outputs {
    return new ExecuteTransactionCall__Outputs(this);
  }
}

export class ExecuteTransactionCall__Inputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteTransactionCall__Outputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owners(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _required(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _requireExecution(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemoveOwnerCall extends ethereum.Call {
  get inputs(): RemoveOwnerCall__Inputs {
    return new RemoveOwnerCall__Inputs(this);
  }

  get outputs(): RemoveOwnerCall__Outputs {
    return new RemoveOwnerCall__Outputs(this);
  }
}

export class RemoveOwnerCall__Inputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOwnerCall__Outputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }
}

export class ReplaceOwnerCall extends ethereum.Call {
  get inputs(): ReplaceOwnerCall__Inputs {
    return new ReplaceOwnerCall__Inputs(this);
  }

  get outputs(): ReplaceOwnerCall__Outputs {
    return new ReplaceOwnerCall__Outputs(this);
  }
}

export class ReplaceOwnerCall__Inputs {
  _call: ReplaceOwnerCall;

  constructor(call: ReplaceOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ReplaceOwnerCall__Outputs {
  _call: ReplaceOwnerCall;

  constructor(call: ReplaceOwnerCall) {
    this._call = call;
  }
}

export class RevokeConfirmationCall extends ethereum.Call {
  get inputs(): RevokeConfirmationCall__Inputs {
    return new RevokeConfirmationCall__Inputs(this);
  }

  get outputs(): RevokeConfirmationCall__Outputs {
    return new RevokeConfirmationCall__Outputs(this);
  }
}

export class RevokeConfirmationCall__Inputs {
  _call: RevokeConfirmationCall;

  constructor(call: RevokeConfirmationCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevokeConfirmationCall__Outputs {
  _call: RevokeConfirmationCall;

  constructor(call: RevokeConfirmationCall) {
    this._call = call;
  }
}

export class SubmitTransactionCall extends ethereum.Call {
  get inputs(): SubmitTransactionCall__Inputs {
    return new SubmitTransactionCall__Inputs(this);
  }

  get outputs(): SubmitTransactionCall__Outputs {
    return new SubmitTransactionCall__Outputs(this);
  }
}

export class SubmitTransactionCall__Inputs {
  _call: SubmitTransactionCall;

  constructor(call: SubmitTransactionCall) {
    this._call = call;
  }

  get title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get destination(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SubmitTransactionCall__Outputs {
  _call: SubmitTransactionCall;

  constructor(call: SubmitTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
