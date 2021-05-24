import {Link} from 'react-router-dom'

export const Nav = () => {
    return(
        <nav>
            <Link to='/'>
                Posts
            </Link>
            <hr/>
            <Link to='/*'>
                Not Found
            </Link>
        </nav>
    )
}
