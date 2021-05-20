import { useContext, useEffect, useRef } from 'react'
import { CounterContext } from '../../context/with_reducer/CounterProvider/context'
import { loadPosts } from '../../context/with_reducer/PostsProvider/actions'
import { PostsContext } from '../../context/with_reducer/PostsProvider/context'
import {incrementCounter, decrementCounter} from '../../context/with_reducer/CounterProvider/actions'


export default function Posts() {

    const isMounted = useRef(true)

    const {postState, postDispatch} =  useContext(PostsContext)
    const {counterState, counterDispatch} = useContext(CounterContext)



    useEffect(() => {
        loadPosts(postDispatch).then(dispatch => {
            if(isMounted.current){
                dispatch()
            }
        })

        return () => {
            isMounted.current = false
        }

    }, [postDispatch])

    console.log(postState.loading)


    return (
        <div>
            <button onClick={() => incrementCounter(counterDispatch)} >Increment + 1</button>
            <button onClick={() => decrementCounter(counterDispatch)} >Decrement - 1</button>
            <strong>{counterState.counter}</strong>
            {
                postState.loading ?

                <p>Loading</p>

                :

                postState.posts.map((post) => (
                    <p key={post.id} >{post.title}</p>
                ))

            }
        </div>
    )
}
