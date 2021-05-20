/* import React from 'react'
import Card from './components/Card/Index'
import BigCard from './components/BigCard/Index'
 */

import { PostsProvider } from "../context/with_reducer/PostsProvider"
import Posts from '../components/Posts'

const App = () => {


    return (
        <PostsProvider>
            <div>
                <Posts/>
            </div>
        </PostsProvider>
    )
}

export default App
