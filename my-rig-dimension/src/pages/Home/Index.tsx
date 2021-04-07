import {useState} from 'react'

import Switcher from '../../components/Switcher/Index'
import light from '../../themes/light'
import dark from '../../themes/dark'
import usePersistState from '../../utils/usePersistState'


export default function Home() {
    
    const [theme, setTheme] = usePersistState('theme', dark)

    function handleTheme(){
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <div>

        </div>
    )
}
