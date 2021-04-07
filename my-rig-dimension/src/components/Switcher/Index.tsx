import {useContext} from 'react'

import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

interface ISwitcherTheme{
    toggleTheme() : void
}

const Switcher : React.FC<ISwitcherTheme> = ({toggleTheme}) => {

    const {title} = useContext(ThemeContext)

    return(
        <>
           <Switch
           checked={title === 'dark' ? true : false}
           checkedIcon={false}
           onColor='#FF4D00'
           uncheckedIcon={false}
           onChange={toggleTheme}
           height={15}
           handleDiameter={20}
           width={35}

           />
        </>
    )
}

export default Switcher