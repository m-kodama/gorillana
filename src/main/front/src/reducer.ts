import { IStore } from './store';
import { Gorillana } from './messageResource';

export enum ActionType {
    "DIALOG_UPDATE",
    "STUDENT_UPDATE",
    "CHANGE_MENU_GROUP_VALUE",
}

export interface IAction {
    type: ActionType;
    payload: IStore;
};

export const reducer: React.Reducer<IStore, IAction> = (state, action: IAction) => {
    switch(action.type) {
        case ActionType.DIALOG_UPDATE: return { ...state, isShowDialog: action.payload.isShowDialog }
        case ActionType.STUDENT_UPDATE: return { ...state, students: action.payload.students }
        case ActionType.CHANGE_MENU_GROUP_VALUE: return { ...state, menuGroupValue: action.payload.menuGroupValue }
        default: throw new Error(`${Gorillana.ERROR.INVALID_STATUS}`);
    }
};