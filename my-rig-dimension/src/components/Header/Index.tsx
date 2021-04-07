import {useState} from 'react'

import {Header} from './styles'
import {useContext} from 'react'
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

interface ISwitcherTheme{
    toggleTheme() : void,
    isDark: boolean;
}

const Index : React.FC<ISwitcherTheme> = ({toggleTheme, isDark}) => {

    const {title} = useContext(ThemeContext)


    return (
        <Header>
            <h3>My Rig Dimension</h3>
         <div>
             <span
             style={{margin: 12}}
             >{title === 'light' ? '🌙' : '🌞'}</span>
         <Switch
           checked={title === 'dark' ? true : false}
           checkedIcon={false}
           onColor='#272727'
           uncheckedIcon={false}
           onChange={toggleTheme}
           height={15}
           handleDiameter={20}
           width={35}
           />
         </div>
        </Header>
    )
}

export default Index
