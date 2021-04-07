import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FF4D00;
    color: ${props => props.theme.colors.text};
    padding: 16px;
`