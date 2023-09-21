import {
    StrategyApprovalUpdated as StrategyApprovalUpdatedEvent,
    StrategyParamsUpdated as StrategyParamsUpdatedEvent,
} from "../generated/LocalRegistrar/LocalRegistrar"
import { Strategy } from "../generated/schema"
import { StrategyApprovalState } from "./helpers"

/**
 * We register a new strategy being created the first time it is set in the LocalRegistrar contract.
 * As long as it's not registered in there, we can ignore it.
 * 
 * IMPORTANT: This assumes the following flow:
 * 1. Strategy contract deployed
 * 2. Strategy registered with LocalRegistrar.setStratParams (vaults' addresses set to address(0))
 * 3. Vaults created
 * 4. Strategy updated with LocalRegistrar.setStratParams (includes new vaults)
 * @param event StrategyParamsUpdated event data
 */
export function handleStrategyParamsUpdated(
    event: StrategyParamsUpdatedEvent
): void {
    let strategy = Strategy.load(event.params._strategyId)
    if (strategy == null) {
        strategy = new Strategy(event.params._strategyId)
    }
    strategy.network = event.params._network
    strategy.state = getStrategyApprovalState(event.params._approvalState)
    strategy.vaultLiquid = event.params._liqAddr
    strategy.vaultLocked = event.params._lockAddr
    strategy.save()
}

export function handleStrategyApprovalUpdated(
    event: StrategyApprovalUpdatedEvent
): void {
    const strategy = Strategy.load(event.params._strategyId)
    if (strategy != null) {
        strategy.state = getStrategyApprovalState(event.params._approvalState)
        strategy.save()
    }
}

function getStrategyApprovalState(value: number): string {
    return value == StrategyApprovalState.NOT_APPROVED
        ? "NOT_APPROVED"
        : value == StrategyApprovalState.APPROVED
            ? "APPROVED"
            : value == StrategyApprovalState.WITHDRAW_ONLY
                ? "WITHDRAW_ONLY"
                : "DEPRECATED"
}
