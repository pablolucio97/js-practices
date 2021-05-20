/* import React from 'react'
import Card from './components/Card/Index'
import BigCard from './components/BigCard/Index'
 */

import { PostsProvider } from "../context/with_reducer/PostsProvider"
import { CounterProvider } from "../context/with_reducer/CounterProvider"
import Posts from '../components/Posts'

const App = () => {
    
    return (
        <PostsProvider>
            <CounterProvider>
                <div>
                    <Posts />
                </div>
            </CounterProvider>
        </PostsProvider>
    )
}

export default App
