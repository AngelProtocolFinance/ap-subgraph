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
  ApplicationConfirmationRevoked as ApplicationConfirmationRevokedEvent,
  ApplicationConfirmed as ApplicationConfirmedEvent,
  ApplicationExecuted as ApplicationExecutedEvent,
  ApplicationProposed as ApplicationProposedEvent,
} from "../generated/CharityApplications/CharityApplications"
import {
  ApplicationConfirmation,
  ApplicationProposal,
  MultiSig,
  MultiSigOwner,
  MultiSigTransaction,
  TransactionConfirmation,
  User,
} from "../generated/schema"
import { loadUser } from "./helpers"

export function handleInitializedMultiSig(event: InitializedMultiSigEvent): void {
  let ms = new MultiSig(event.params.msAddress.toHex())
  ms.address = event.params.msAddress
  ms.transactionExpiry = event.params.transactionExpiry
  ms.requireExecution = event.params.requireExecution
  ms.approvalsRequired = event.params.approvalsRequired
  ms.save()

  for (let i = 0; i < event.params.owners.length - 1; i++) {
    // look up User or create a new one if dne
    const user = loadUser(event.params.owners[i])
    let mso = new MultiSigOwner(ms.id + user.id.toHex())
    mso.multiSig = ms.id
    mso.owner = user.id
    mso.active = true
    mso.save()
  }
}

export function handleApprovalsRequiredChanged(
  event: ApprovalsRequiredChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    ms.approvalsRequired = event.params.approvalsRequired
    ms.save()
  }
}

export function handleRequireExecutionChanged(
  event: RequireExecutionChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    ms.requireExecution = event.params.requireExecution
    ms.save()
  }
}

export function handleExpiryChanged(
  event: ExpiryChangedEvent
): void {
  let ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    ms.transactionExpiry = event.params.transactionExpiry
    ms.save()
  }
}

export function handleOwnersAdded(event: OwnersAddedEvent): void {
  let ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    for (let i = 0; i < event.params.owners.length - 1; i++) {
      const user = loadUser(event.params.owners[i])
      const msoId = ms.id + user.id.toHex()
      let mso = MultiSigOwner.load(msoId)
      if (mso == null) {
        mso = new MultiSigOwner(msoId)
        mso.multiSig = ms.id
        mso.owner = user.id
      }
      mso.active = true
      mso.save()
    }
  }
}

export function handleOwnersRemoved(event: OwnersRemovedEvent): void {
  let ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    for (let i = 0; i < event.params.owners.length - 1; i++) {
      const owner = event.params.owners[i]
      let mso = MultiSigOwner.load(ms.id + owner.toHex())
      if (mso != null) {
        mso.active = false
        mso.save()
      }
    }
  }
}

export function handleOwnerReplaced(event: OwnerReplacedEvent): void {
  let ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    let oldOwner = MultiSigOwner.load(ms.id + event.params.currOwner.toHex())
    if (oldOwner != null) {
      oldOwner.active = false
      oldOwner.save()

      const user = loadUser(event.params.newOwner)
      const newMsoId = ms.id + user.id.toHex()
      let newOwner = MultiSigOwner.load(newMsoId)
      if (newOwner == null) {
        newOwner = new MultiSigOwner(newMsoId)
        newOwner.multiSig = ms.id
        newOwner.owner = user.id
      }
      newOwner.active = true
      newOwner.save()
    }
  }
}

export function handleTransactionSubmitted(
  event: TransactionSubmittedEvent
): void {
  const ms = MultiSig.load(event.params.msAddress.toHex())
  if (ms != null) {
    let tx = new MultiSigTransaction(ms.id + event.params.transactionId.toString())
    tx.transactionId = event.params.transactionId
    tx.multiSig = ms.id
    tx.proposer = event.params.sender // only owner can submit Tx
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
  const tx = MultiSigTransaction.load(event.params.msAddress.toHex() + event.params.transactionId.toString())
  if (tx != null) {
    const txConfId = tx.id + event.params.sender.toHex()
    let txConf = TransactionConfirmation.load(txConfId)
    if (txConf == null) {
      txConf = new TransactionConfirmation(txConfId)
      txConf.transaction = tx.id
      txConf.owner = event.params.sender
    }
    txConf.confirmed = true
    txConf.save()
  }
}

export function handleTransactionConfirmationRevoked(
  event: TransactionConfirmationRevokedEvent
): void {
  const tx = MultiSigTransaction.load(event.params.msAddress.toHex() + event.params.transactionId.toString())
  if (tx != null) {
    let txConf = TransactionConfirmation.load(tx.id + event.params.sender.toHex())
    if (txConf != null) {
      txConf.confirmed = false
      txConf.save()
    }
  }
}

export function handleTransactionExecuted(
  event: TransactionExecutedEvent
): void {
  let tx = MultiSigTransaction.load(event.params.msAddress.toHex() + event.params.transactionId.toString())
  if (tx != null) {
    tx.executed = true
    tx.save()
  }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~ APPLICATIONS HANDLERS ~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
export function handleApplicationProposed(
  event: ApplicationProposedEvent
): void {
    let proposal = new ApplicationProposal(event.params.proposalId.toString())
    proposal.charityName = event.params.charityName
    const user = loadUser(event.params.proposer)
    proposal.proposer = user.id
    proposal.executed = false
    proposal.expiry = event.params.expiry
    proposal.metadata = event.params.metadata
    proposal.blockTimestamp = event.block.timestamp
    proposal.save()
}

export function handleApplicationConfirmed(
  event: ApplicationConfirmedEvent
): void {
  let proposal = ApplicationProposal.load(event.params.proposalId.toString())
  if (proposal != null) {
    let confId = proposal.id + event.params.owner.toHex()
    let conf = ApplicationConfirmation.load(confId)
    if (conf == null) {
      conf = new ApplicationConfirmation(confId)
      conf.proposal = proposal.id
      conf.owner = event.params.owner
    }
    conf.confirmed = true
    conf.save()
  }
}

export function handleApplicationConfirmationRevoked(
  event: ApplicationConfirmationRevokedEvent
): void {
  let txConf = ApplicationConfirmation.load(event.params.proposalId.toString() + event.params.owner.toHex())
  if (txConf != null) {
    txConf.confirmed = false
    txConf.save()
  }
}

export function handleApplicationExecuted(
  event: ApplicationExecutedEvent
): void {
  let proposal = ApplicationProposal.load(event.params.proposalId.toString())
  if (proposal != null) {
    proposal.executed = true
    proposal.save()
  }
}
