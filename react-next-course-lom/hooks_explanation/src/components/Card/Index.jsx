import './styles.css'
import {useContext} from 'react'
import {GlobalContext} from '../../context/globalContext'
import Button from '../Button/Index'

export default function Card (props) {

    const { status, counter } = useContext(GlobalContext)

    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <p>{status}</p>
            <strong>{counter}</strong>
            <Button title='Click-me'/>
        </div>
    )
}
