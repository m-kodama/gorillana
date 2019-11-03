import { reducer, IAction } from './reducer';
import * as React from 'react';

type StoreWithAction = {
    state: IState,
    dispatch: React.Dispatch<IAction>
};

type IState = {
    isShowDialog: boolean
};

const initialStore: IState = {
    isShowDialog: false
}

export const Store = React.createContext({} as StoreWithAction)
 
export const StoreProvider: React.FC<React.Props<{}>> = props => {
    const [state, dispatch] = React.useReducer(reducer, initialStore);
    return (
        <Store.Provider value={{state: state, dispatch: dispatch}}>
            {props.children}
        </Store.Provider>
    );
};

export default {Store, StoreProvider};
