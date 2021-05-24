import React, {useContext} from 'react'
import {GlobalContext} from '../../context/globalContext'
import './styles.css'
import Button from '../Button/Index'

export default function BigCard(props) {

    const {status} = useContext(GlobalContext)

    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <p>{status}</p>
            <Button title='Click-me'/>
        </div>
    )
}
