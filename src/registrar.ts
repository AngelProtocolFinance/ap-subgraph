import {
    StrategyApprovalUpdated as StrategyApprovalUpdatedEvent,
    StrategyParamsUpdated as StrategyParamsUpdatedEvent,
} from "../generated/Registrar/Registrar"
import { Strategy } from "../generated/schema"
import { StrategyApprovalState } from "./helpers"

export function handleStrategyParamsUpdated(
    event: StrategyParamsUpdatedEvent
): void {
    const strategy = new Strategy(event.params._strategyId)
    strategy.network = event.params._network
    strategy.state = getStrategyApprovalState(event.params._approvalState)
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
