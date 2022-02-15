import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    
    return (
        <Fragment>
            <h1>Posts</h1>
            <Post />
            <Post />
        </Fragment>
    )
}

export default Posts
