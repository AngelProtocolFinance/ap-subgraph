import {
    StrategyParamsUpdated as StrategyParamsUpdatedEvent,
    StrategyApprovalUpdated as StrategyApprovalUpdatedEvent,
} from "../generated/Registrar/Registrar";
import { Strategy } from "../generated/schema";

enum StrategyApprovalState {
    NOT_APPROVED,
    APPROVED,
    WITHDRAW_ONLY,
    DEPRECATED,
}

export function handleStrategyParamsUpdated(
    event: StrategyParamsUpdatedEvent
): void {
    const strategy = new Strategy(event.params._strategyId);
    strategy.network = event.params._network;
    strategy.state = StrategyApprovalState[event.params._approvalState];
    strategy.save();
}

export function handleStrategyApprovalUpdated(
    event: StrategyApprovalUpdatedEvent
): void {
    const strategy = Strategy.load(event.params._strategyId);
    if (strategy != null) {
        strategy.state = StrategyApprovalState[event.params._approvalState];
        strategy.save();
    }
}
