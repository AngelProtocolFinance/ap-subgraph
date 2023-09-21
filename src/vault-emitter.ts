import { BigInt } from "@graphprotocol/graph-ts"
import {
    VaultCreated as VaultCreatedEvent,
    Deposit as DepositEvent,
    Redeem as RedeemEvent,
} from "../generated/VaultEmitter/VaultEmitter"
import { Vault, VaultShare } from "../generated/schema"
import { VaultType } from "./helpers"

export function handleVaultCreated(event: VaultCreatedEvent): void {
    const vault = new Vault(event.params.vault)
    vault.totalShares = BigInt.zero()
    vault.type = event.params.config.vaultType == VaultType.Locked ? "Locked" : "Liquid"
    vault.strategyId = event.params.config.strategyId
    vault.address = event.params.vault
    vault.baseToken = event.params.config.baseToken
    vault.yieldToken = event.params.config.yieldToken
    vault.save()
}

export function handleDeposit(event: DepositEvent): void {
    const vault = Vault.load(event.params.vault)
    if (vault == null) return

    const endowId = event.params.endowId.toString()
    let vaultShare = VaultShare.load(vault.id.toHex() + endowId)
    if (vaultShare == null) {
        vaultShare = new VaultShare(vault.id.toHex() + endowId)
        vaultShare.vault = vault.id
        vaultShare.endowmentId = endowId
        vaultShare.deposited = BigInt.zero()
        vaultShare.shares = BigInt.zero()
    }
    vaultShare.deposited = vaultShare.deposited.plus(event.params.amount)
    vaultShare.shares = vaultShare.shares.plus(event.params.sharesReceived)
    vaultShare.save()

    vault.totalShares = vault.totalShares.plus(event.params.sharesReceived)
    vault.save()
}

export function handleRedeem(event: RedeemEvent): void {
    const vault = Vault.load(event.params.vault)
    if (vault == null) {
        return
    }
    const vaultShare = VaultShare.load(
        vault.id.toHex() + event.params.endowId.toString()
    )
    if (vaultShare == null) {
        return
    }
    vaultShare.deposited = vaultShare.deposited.minus(
        event.params.amountRedeemed
    )
    vaultShare.shares = vaultShare.shares.minus(event.params.shares)
    vaultShare.save()

    vault.totalShares = vault.totalShares.minus(event.params.shares)
    vault.save()
}
