import { BigInt } from "@graphprotocol/graph-ts";
import { VaultConfigUpdated as VaultConfigUpdatedEvent } from "../generated/Vault/Vault";
import { Strategy, Vault } from "../generated/schema";
import { AccountType } from "./helpers";

export function handleVaultConfigUpdated(event: VaultConfigUpdatedEvent): void {
    const strategy = Strategy.load(event.params.config.strategySelector);
    if (strategy == null) {
        return;
    }

    const vaultType = AccountType[event.params.config.vaultType];
    const vaultId = strategy.id.toHex() + vaultType;

    let vault = Vault.load(vaultId);
    if (vault == null) {
        vault = new Vault(vaultId);
        vault.totalShares = BigInt.zero();
    }

    vault.type = vaultType;
    vault.strategy = strategy.id;
    vault.address = event.params.config.strategy;
    vault.baseToken = event.params.config.baseToken;
    vault.yieldToken = event.params.config.yieldToken;
}
