import React, { createContext, useReducer} from 'react'

const initialState = {
    plans: [],
    terms: [],
    term: ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_PLANS':
            return {...state, plans: action.payload.plans}
        case 'SET_TERM':
            return {...state, term: action.payload.term}    
        case 'SET_TERMS':
            return {...state, terms: action.payload.terms}
        default :
            return state
    }    
}

export const Store = createContext ({
    globalState: initialState,
    setGlobalState: () => null
})

export const StoreProvider = ({children}) => {
    const [globalState, setGlobalState] = useReducer( reducer, initialState )

    return (
        <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
    )
}

export default StoreProvider