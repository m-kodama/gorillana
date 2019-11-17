import { reducer, IAction } from './reducer';
import * as React from 'react';
import { StudentProperties } from './const';

type StoreWithAction = {
    state: IStore;
    dispatch: React.Dispatch<IAction>;
};

export interface IStore {
    isShowDialog: boolean;
    students: StudentProperties[];
};

export const initialStore: IStore = {
    isShowDialog: false,
    students: []
};

export const Store = React.createContext<StoreWithAction>({
    state: initialStore,
    dispatch: () => {}
});
 
export const StoreProvider: React.FC<React.Props<{}>> = props => {
    const [state, dispatch] = React.useReducer(reducer, initialStore);
    return (
        <Store.Provider value={{state: state, dispatch: dispatch}}>
            {props.children}
        </Store.Provider>
    );
};

export default {Store, StoreProvider};
