export enum ActionType {
    "DIALOG_OPEN",
    "DIALOG_CLOSE"
}

export type IAction = {
    type: ActionType
};

export const reducer = (state = {}, action: IAction) => {
    switch(action.type) {
        case ActionType.DIALOG_OPEN: return {...state, isShowDialog: true}
        case ActionType.DIALOG_CLOSE: return {...state, isShowDialog: false}
        default: throw new Error("不正な状態です");
    }
};