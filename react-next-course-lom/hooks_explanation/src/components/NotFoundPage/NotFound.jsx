import {useHistory, useParams, useLocation} from 'react-router-dom'

export const NotFound = () => {

    const history = useHistory()
    const location = useLocation()

    const {returnedRoute} = useParams()

    console.log(returnedRoute)

    return (
        <>
            <strong>Page not found!</strong>
            <p>You are search for:{returnedRoute}</p>
            <span>There path: "{location.pathname}" doesn't exists.</span>
            <button onClick={() => history.goBack()}>Back</button>
        </>
    )
}
