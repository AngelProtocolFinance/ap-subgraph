import {
  Initialized as InitializedEvent,
  ApprovalsRequiredChanged as ApprovalsRequiredChangedEvent,
  RequireExecutionChanged as RequireExecutionChangedEvent,
  ExpiryChanged as ExpiryChangedEvent,
  OwnerAdded as OwnerAddedEvent,
  OwnerRemoved as OwnerRemovedEvent,
  TransactionSubmitted as TransactionSubmittedEvent
  TransactionConfirmed as TransactionConfirmedEvent,
  TransactionConfirmationRevoked as TransactionConfirmationRevokedEvent,
  TransactionExecuted as TransactionExecutedEvent,
} from "../generated/EndowmentMultiSig/EndowmentMultiSig"
import {
  MultiSig,
  MultiSigOwner,
  MultiSigType,
  MultiSigTransaction,
  TransactionConfirmation,
  User,
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let ms = new MultiSig(event.params.msAddress);
  event.params.owners.forEach(owner => {
    // look up User or create a new one if dne
    let user = User.load(owner);
    if (user == null) {
      user = new User(owner);
      user.save();
    }
    let mso = new MultiSigOwner(ms.id.concatI32(user.id.toI32()))
    mso.multiSig = ms;
    mso.owner = user;
    mso.save();
  }
  ms.transactionExpiry = event.params.transactionExpiry;
  ms.requireExecution = event.params.requireExecution;
  ms.approvalsRequired = event.params.approvalsRequired;
  ms.multiSigType = MultiSigType.Generic;
  ms.save();
}

export function handleApprovalsRequiredChanged(
  event: ApprovalsRequiredChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress);
  ms.approvalsRequired = event.params.approvalsRequired;
  ms.save();
}

export function handleRequireExecutionChanged(
  event: RequireExecutionChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress);
  ms.requireExecution = event.params.requireExecution;
  ms.save();
}

export function handleExpiryChanged(
  event: ExpiryChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress);
  ms.transactionExpiry = event.params.transactionExpiry;
  ms.save();
}

export function handleOwnerAdded(event: OwnerAddedEvent): void {
  let ms = MultiSig.load(event.params.msAddress);
  let msoId = ms.id.concatI32(event.params.owner.toI32();
  let mso = MultiSigOwner.load(msoId);
  if (mso) {
    // throw error
  }
  let mso = new MultiSigOwner(msoId)
  mso.multiSig = ms;
  mso.owner = event.params.owner;
  mso.save();
}

export function handleOwnerRemoved(event: OwnerRemovedEvent): void {
  store.remove("MultiSigOwner", event.params.msAddress.concatI32(event.params.owner.toI32());
}

export function handleTransactionSubmitted(
  event: TransactionSubmittedEvent
): void {
  let tx = new MultiSigTransaction(event.params.msAddress.concatI32(event.params.transactionId.toI32()));
  tx.transactionId = event.params.transactionId;
  tx.proposer = event.params.sender;
  tx.executed: event.params.executed;
  tx.expiry: event.params.expiry;
  tx.blockTimestamp = event.block.timestamp;
  tx.save();
}

export function handleTransactionConfirmed(
  event: TransactionConfirmedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.concatI32(event.params.transactionId.toI32()));
  let txConf = TransactionConfirmation.load(tx.id.concatI32(event.params.owner.toI32()));
  if (!txConf) {
    txConf = new TransactionConfirmed(tx.id.concatI32(event.params.owner.toI32()));
    txConf.transaction = tx;
    txConf.owner = User.load(event.params.owner);
  }
  txConf.confirmed = true;
  txConf.save();
}

export function handleTransactionConfirmationRevoked(
  event: ConfirmationRevokedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.concatI32(event.params.transactionId.toI32()));
  let txConf = TransactionConfirmation.load(tx.id.concatI32(event.params.owner.toI32()));
  txConf.confirmed = false;
  txConf.save();
}

export function handleTransactionExecuted(
  event: TransactionExecutedEvent
): void {
  let tx = MultiSigTransaction.load(event.params.msAddress.concatI32(event.params.transactionId.toI32()));
  tx.executed: event.params.executed;
  tx.save();
}
