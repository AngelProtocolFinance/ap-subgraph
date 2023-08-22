import { BigInt } from "@graphprotocol/graph-ts"
import {
    VaultConfigUpdated as VaultConfigUpdatedEvent,
    Deposit as DepositEvent,
    Redeem as RedeemEvent,
} from "../generated/Vault/Vault"
import { Endowment, Strategy, Vault, VaultShare } from "../generated/schema"
import { VaultType } from "./helpers"

export function handleVaultConfigUpdated(event: VaultConfigUpdatedEvent): void {
    const strategy = Strategy.load(event.params.config.strategyId)
    if (strategy == null) {
        return
    }

    let vault = Vault.load(event.params.vault)
    if (vault == null) {
        vault = new Vault(event.params.vault)
        vault.totalShares = BigInt.zero()
    }

    vault.type =
        event.params.config.vaultType == VaultType.Locked ? "Locked" : "Liquid"
    vault.strategy = strategy.id
    vault.address = event.params.config.strategy
    vault.baseToken = event.params.config.baseToken
    vault.yieldToken = event.params.config.yieldToken
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
        const endowment = Endowment.load(endowId)
        if (endowment != null) {
            vaultShare.endowment = endowId
        }
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
