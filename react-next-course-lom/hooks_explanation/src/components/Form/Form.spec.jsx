import { render, screen } from '@testing-library/react';
import { Form } from './Form';


describe('<Form/>', () => {
    it('Should render the whole component', () => {
        render(<Form/>).debug()
    })
})
