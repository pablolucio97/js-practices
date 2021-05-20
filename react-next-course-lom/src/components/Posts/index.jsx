import { useContext, useEffect, useRef } from 'react'
import { loadPosts } from '../../context/with_reducer/PostsProvider/actions'
import { PostsContext } from '../../context/with_reducer/PostsProvider/context'

export default function Posts() {

    const isMounted = useRef(true)
    const {postState, postDispatch} =  useContext(PostsContext)

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
