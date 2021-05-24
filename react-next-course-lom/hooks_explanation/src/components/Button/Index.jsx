import React from 'react'
import {useContext} from 'react'
import {GlobalContext} from '../../context/globalContext'

export default function Button(props) {

    const usingGlobalContext = useContext(GlobalContext)

    function changeCounter(n){
        usingGlobalContext.setContextState({
            ...usingGlobalContext.state, counter : n
        })
    }


    return (
        <button onClick={() => {}}>{props.title}</button>
    )
}
