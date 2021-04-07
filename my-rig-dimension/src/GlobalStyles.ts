import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }

    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    ul, li{
        list-style: none;
    }

    table{
        border: 1px solid ${props => props.theme.colors.text};
    }


    button{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none
    }

`

export default GlobalStyles