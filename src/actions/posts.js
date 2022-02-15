import * as api from '../api'

import { FETCH_POSTS } from '../constants/actionTypes'

// Action Creators - functions that return actions

export const getPosts = () => async ( dispatch ) => {

    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_POSTS, payload: data }) 
    } catch (error) {
        console.log(error.message)
    }
}

// export const getPostsBySearch = ( searchQuery ) => async ( dispatch ) => {
//     try {
//         dispatch( { type: START_LOADING } )
//         const { data: { data } } = await api.fetchPostBySearch(searchQuery)
//         dispatch ( { type: FETCH_BY_SEARCH, payload: data } )

//     } catch (error) {
//         console.log(error)
//     }
// }