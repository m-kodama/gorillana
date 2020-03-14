import { StoreState } from './store';

export enum ActionType {
    'DIALOG_OPEN',
    'DIALOG_CLOSE',
}

export interface ReducerAction {
    type: ActionType,
    payload: StoreState
};

export const reducer: React.Reducer<StoreState, ReducerAction> = (state, action: ReducerAction) => {
    switch(action.type) {
        case ActionType.DIALOG_OPEN:
            return {
                ...state,
                open: true
            }
        case ActionType.DIALOG_CLOSE:
            return {
                ...state,
                open: false
            }
    }
}