import {createContext, useState} from 'react'

import {PureContext} from '../data/pureContext'

export const GlobalContext = createContext(PureContext)

export const GlobalContextProvider = ({children}) => {

    const [contextState, setContextState] = useState(GlobalContext)

    return (
        <GlobalContext.Provider value={{contextState, setContextState}}>
            {children}
        </GlobalContext.Provider>
    )
}

