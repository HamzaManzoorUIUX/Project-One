import React, { createContext, useReducer } from "react";
import globalReducer from "./globalReducer";
const initialState = {
    transections: [

    ]
}
export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer,initialState);
    const addTransection = (obj) => {
        dispatch({
            type: 'ADD_Transection',
            payload: obj
        })
    }
    const delTransection = (id) => {
        dispatch({
            type: 'Del_Transection',
            payload: id
        })
    }
    return (
        <GlobalContext.Provider value={
           { transections:state.transections,
            addTransection,
            delTransection}
        }>
            {children}
        </GlobalContext.Provider>
    )
}