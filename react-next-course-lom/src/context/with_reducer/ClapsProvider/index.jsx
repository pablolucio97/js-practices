import {ClapsContext} from './context'
import { useReducer } from 'react'
import {data} from './data'
import {reducer} from './reducer'

export const ClapsProvider = ({children}) => {

    const [clapsState, clapsDispatch] = useReducer(reducer, data)

    return (
        <ClapsContext.Provider value={{clapsState, clapsDispatch}}>
            {children}
        </ClapsContext.Provider>
    )
}
