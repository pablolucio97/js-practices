import {Button} from './Button'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Button/>', () => {
    it('Should render the button', () => {
        render(<Button/>)
        const hasButton = screen.getByRole("button")
        expect(hasButton).toBeInTheDocument()
    })
})

