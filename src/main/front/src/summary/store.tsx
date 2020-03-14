
import * as React from 'react';
import { reducer, ReducerAction } from './reducer';

type StoreWithAction = {
    state: StoreState,
    dispatch: React.Dispatch<ReducerAction>
};


export interface StoreState {
    open: boolean;
};

export const initialStore: StoreState = {
    open: false,
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

export default { Store, StoreProvider };