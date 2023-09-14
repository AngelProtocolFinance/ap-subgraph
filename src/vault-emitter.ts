import { BigInt } from "@graphprotocol/graph-ts"
import {
    VaultConfigUpdated as VaultConfigUpdatedEvent,
    VaultCreated as VaultCreatedEvent,
    Deposit as DepositEvent,
    Redeem as RedeemEvent,
} from "../generated/VaultEmitter/VaultEmitter"
import { Strategy, Vault, VaultShare } from "../generated/schema"
import { VaultType } from "./helpers"

export function handleVaultCreated(event: VaultCreatedEvent): void {
    let strategy = Strategy.load(event.params.config.strategyId)
    if (strategy == null) {
        return
    }
    strategy.address = event.params.config.strategy
    strategy.save()

    const vault = new Vault(event.params.vault)
    vault.totalShares = BigInt.zero()

    vault.type =
        event.params.config.vaultType == VaultType.Locked ? "Locked" : "Liquid"
    vault.strategy = strategy.id
    vault.address = event.params.vault
    vault.baseToken = event.params.config.baseToken
    vault.yieldToken = event.params.config.yieldToken
    vault.save()
}

export function handleVaultConfigUpdated(event: VaultConfigUpdatedEvent): void {
    let vault = Vault.load(event.params.vault)
    if (vault == null) {
        return
    }
    const strategy = Strategy.load(vault.strategy)
    if (strategy == null) {
        return
    }
    strategy.address = event.params.config.strategy
    strategy.save()
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
}

export function handleRedeem(event: RedeemEvent): void {
    const vault = Vault.load(event.params.vault)
    if (vault == null) return
    const vaultShare = VaultShare.load(
        vault.id.toHex() + event.params.endowId.toString()
    )
    if (vaultShare == null) return
    vaultShare.deposited = vaultShare.deposited.minus(
        event.params.amountRedeemed
    )
    vaultShare.shares = vaultShare.shares.minus(event.params.shares)
    vaultShare.save()
}
