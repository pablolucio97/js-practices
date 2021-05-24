/* import React from 'react'
import Card from './components/Card/Index'
import BigCard from './components/BigCard/Index'
 */

import { PostsProvider } from "../context/with_reducer/PostsProvider"
import { CounterProvider } from "../context/with_reducer/CounterProvider"
import { ClapsProvider } from "../context/with_reducer/ClapsProvider"
import {UsingFetch} from '../hooks/useFetch'
import {ErrorBoundry} from '../components/ErrorBoundary'
import Posts from '../components/Posts'
import {Button} from '../ComponentsForTest/Button/Button'
import {Form} from '../components/Form/Form'
import {NotFound} from '../components/NotFoundPage/NotFound'
import {Nav} from '../components/Nav/Nav'
import {useDebugValue} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {

    function test (){
        console.log('ok')
    }

    useDebugValue('anything', test)


    return (
        <PostsProvider>
            <CounterProvider>
                <ClapsProvider>
                    <BrowserRouter>
                    <Nav/>
                        <Switch>
                            <Route component={Posts} path='/' exact/>
                            <Route component={NotFound} path='/:returnedRoute'/>
                        </Switch>
                    </BrowserRouter>
                </ClapsProvider>
            </CounterProvider>
        </PostsProvider>
    )
}

export default App
