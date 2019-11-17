import { IStore } from './store';

export enum ActionType {
    "DIALOG_UPDATE",
    "STUDENT_UPDATE"
}

export interface IAction {
    type: ActionType;
    payload: IStore;
};

export const reducer: React.Reducer<IStore, IAction> = (state, action: IAction) => {
    switch(action.type) {
        case ActionType.DIALOG_UPDATE: return { ...state, isShowDialog: action.payload.isShowDialog }
        case ActionType.STUDENT_UPDATE: return { ...state, students: action.payload.students }
        default: throw new Error("不正な状態です");
    }
};