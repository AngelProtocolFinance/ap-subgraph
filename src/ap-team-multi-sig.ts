import { BigInt } from "@graphprotocol/graph-ts"
import {
  InitializedMultiSig as InitializedMultiSigEvent,
  ApprovalsRequiredChanged as ApprovalsRequiredChangedEvent,
  RequireExecutionChanged as RequireExecutionChangedEvent,
  ExpiryChanged as ExpiryChangedEvent,
  OwnersAdded as OwnersAddedEvent,
  OwnersRemoved as OwnersRemovedEvent,
  OwnerReplaced as OwnerReplacedEvent,
  TransactionSubmitted as TransactionSubmittedEvent,
  TransactionConfirmed as TransactionConfirmedEvent,
  TransactionConfirmationRevoked as TransactionConfirmationRevokedEvent,
  TransactionExecuted as TransactionExecutedEvent,
} from "../generated/APTeamMultiSig/APTeamMultiSig"
import {
  MultiSig,
  MultiSigOwner,
  MultiSigTransaction,
  TransactionConfirmation,
  User,
} from "../generated/schema"

export function handleInitializedMultiSig(event: InitializedMultiSigEvent): void {
  let ms = new MultiSig(event.params.msAddress.toString())
  if (ms != null) {
    ms.transactionExpiry = event.params.transactionExpiry
    ms.requireExecution = event.params.requireExecution
    ms.approvalsRequired = event.params.approvalsRequired
    ms.save()
    for (let i = 0; i < event.params.owners.length - 1; i++) {
      // look up User or create a new one if dne
      const owner = event.params.owners[i].toString()
      let user = User.load(owner)
      if (user == null) {
        user = new User(owner)
        user.save()
      }
      let msoId = event.params.msAddress.toString() + owner
      let mso = new MultiSigOwner(msoId)
      mso.multiSig = ms.id
      mso.owner = user.id
      mso.active = true
      mso.save()
    }
  }
}

export function handleApprovalsRequiredChanged(
  event: ApprovalsRequiredChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    ms.approvalsRequired = event.params.approvalsRequired
    ms.save()
  }
}

export function handleRequireExecutionChanged(
  event: RequireExecutionChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    ms.requireExecution = event.params.requireExecution
    ms.save()
  }
}

export function handleExpiryChanged(
  event: ExpiryChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    ms.transactionExpiry = event.params.transactionExpiry
    ms.save()
  }
}

export function handleOwnersAdded(event: OwnersAddedEvent): void {
  let ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    for (let i = 0; i < event.params.owners.length - 1; i++) {
      const owner = event.params.owners[i].toHex()
      const msoId = event.params.msAddress.toString() + owner
      let mso = MultiSigOwner.load(msoId)
      if (mso == null) {
        mso = new MultiSigOwner(msoId)
        mso.multiSig = ms.id
        mso.owner = owner
      }
      mso.active = true
      mso.save()
    }
  }
}

export function handleOwnersRemoved(event: OwnersRemovedEvent): void {
  let ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    for (let i = 0; i < event.params.owners.length - 1; i++) {
      const owner = event.params.owners[i].toHex()
      const msoId = event.params.msAddress.toString() + owner
      let mso = MultiSigOwner.load(msoId)
      if (mso != null) {
        mso.active = false
        mso.save()
      }
    }
  }
}

export function handleOwnerReplaced(event: OwnerReplacedEvent): void {
  let ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    const oldMsoId = event.params.msAddress.toString() + event.params.currOwner.toHex()
    const newMsoId = event.params.msAddress.toString() + event.params.newOwner.toHex()
    let oldOwner = MultiSigOwner.load(oldMsoId)
    if (oldOwner != null) {
      oldOwner.active = false
      oldOwner.save()
      let newOwner = MultiSigOwner.load(newMsoId)
      if (newOwner == null) {
        newOwner = new MultiSigOwner(newMsoId)
        newOwner.multiSig = ms.id
        newOwner.owner = newOwner.id
      }
      newOwner.active = true
      newOwner.save()
    }
  }
}

export function handleTransactionSubmitted(
  event: TransactionSubmittedEvent
): void {
  const ms = MultiSig.load(event.params.msAddress.toString())
  if (ms != null) {
    let tx = new MultiSigTransaction(event.params.msAddress.toString() + event.params.transactionId.toString())
    if (tx != null) {
      tx.transactionId = event.params.transactionId
      tx.proposer = event.params.sender.toHex()
      tx.executed = (ms.approvalsRequired < BigInt.fromI32(1) || ms.requireExecution) ? false : true
      tx.expiry = event.block.timestamp.plus(ms.transactionExpiry)
      tx.blockTimestamp = event.block.timestamp
      tx.save()
    }
  }
}

export function handleTransactionConfirmed(
  event: TransactionConfirmedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.toString() + event.params.transactionId.toString())
  const user = User.load(event.params.sender.toHex())
  if (tx != null && user != null) {
    let txConf = TransactionConfirmation.load(event.params.msAddress.toString() + event.params.transactionId.toString() + event.params.sender.toHex())
    if (txConf != null) {
      txConf = new TransactionConfirmation(event.params.msAddress.toString() + event.params.transactionId.toString() + event.params.sender.toHex())
      txConf.transaction = tx.id
      txConf.owner = user.id
      txConf.confirmed = true
      txConf.save()
    }
  }
}

export function handleTransactionConfirmationRevoked(
  event: TransactionConfirmationRevokedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.toString() + event.params.transactionId.toString())
  if (tx != null) {
    let txConf = TransactionConfirmation.load(event.params.msAddress.toString() + event.params.transactionId.toString() + event.params.sender.toHex())
    if (txConf != null) {
      txConf.confirmed = false
      txConf.save()
    }
  }
}

export function handleTransactionExecuted(
  event: TransactionExecutedEvent
): void {
  let tx = MultiSigTransaction.load(event.params.msAddress.toString() + event.params.transactionId.toString())
  if (tx != null) {
    tx.executed = true
    tx.save()
  }
}
