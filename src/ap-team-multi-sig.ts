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
  ms.address = event.params.msAddress
  ms.transactionExpiry = event.params.transactionExpiry
  ms.requireExecution = event.params.requireExecution
  ms.approvalsRequired = event.params.approvalsRequired
  ms.save()
  for (let i = 0; i < event.params.owners.length - 1; i++) {
    // look up User or create a new one if dne
    const owner = event.params.owners[i]
    let user = User.load(owner)
    if (user == null) {
      user = new User(owner)
      user.save()
    }
    let mso = new MultiSigOwner(ms.id + owner.toString())
    mso.multiSig = ms.id
    mso.owner = user.id
    mso.active = true
    mso.save()
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
      const owner = event.params.owners[i]
      const msoId = ms.id + owner.toString()
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
      const owner = event.params.owners[i]
      let mso = MultiSigOwner.load(ms.id + owner.toString())
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
    const oldMsoId = ms.id + event.params.currOwner.toString()
    const newMsoId = ms.id + event.params.newOwner.toString()
    let oldOwner = MultiSigOwner.load(oldMsoId)
    if (oldOwner != null) {
      oldOwner.active = false
      oldOwner.save()
      let newOwner = MultiSigOwner.load(newMsoId)
      if (newOwner == null) {
        newOwner = new MultiSigOwner(newMsoId)
        newOwner.multiSig = ms.id
        newOwner.owner = event.params.newOwner
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
    let tx = new MultiSigTransaction(ms.id + event.params.transactionId.toString())
    tx.transactionId = event.params.transactionId
    tx.multiSig = ms.id
    tx.proposer = event.params.sender
    tx.executed = (ms.approvalsRequired < BigInt.fromI32(1) || ms.requireExecution) ? false : true
    tx.expiry = event.block.timestamp.plus(ms.transactionExpiry)
    tx.metadata = event.params.metadata
    tx.blockTimestamp = event.block.timestamp
    tx.save()
  }
}

export function handleTransactionConfirmed(
  event: TransactionConfirmedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.toString() + event.params.transactionId.toString())
  const user = User.load(event.params.sender)
  if (tx != null && user != null) {
    const txConfId = tx.id + event.params.sender.toString()
    let txConf = TransactionConfirmation.load(txConfId)
    if (txConf == null) {
      txConf = new TransactionConfirmation(txConfId)
      txConf.transaction = tx.id
      txConf.owner = user.id
    }
    txConf.confirmed = true
    txConf.save()
  }
}

export function handleTransactionConfirmationRevoked(
  event: TransactionConfirmationRevokedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.toString() + event.params.transactionId.toString())
  if (tx != null) {
    let txConf = TransactionConfirmation.load(tx.id + event.params.sender.toString())
    if (txConf != null) {
      txConf.confirmed = false
      txConf.save()
    }
  }
}

export function handleTransactionExecuted(
  event: TransactionExecutedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.toString() + event.params.transactionId.toString())
  if (tx != null) {
    tx.executed = true
    tx.save()
  }
}
