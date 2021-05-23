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

import {useDebugValue} from 'react'

const App = () => {

    function test (){
        console.log('ok')
    }

    useDebugValue('anything', test)


    return (
        <PostsProvider>
            <CounterProvider>
                <ClapsProvider>
                    <div>
                        <ErrorBoundry/>
                    </div>
                </ClapsProvider>
            </CounterProvider>
        </PostsProvider>
    )
}

export default App
