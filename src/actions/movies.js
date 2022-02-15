import * as api from '../api'

import { FETCH_ALL, START_LOADING, END_LOADING, FETCH_BY_SEARCH, FETCH_SINGLE, } from '../constants/actionTypes'

// Action Creators - functions that return actions

export const getMovies = ( page ) => async ( dispatch ) => {
    try {
        const { data } = await api.fetchMovies( page )

        dispatch( { type: START_LOADING} )
        //console.log( data )
        dispatch( { type: FETCH_ALL, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log(error.message)
    }
}

export const getMovie = ( id ) => async ( dispatch ) => {
    try {
        const { data } = await api.fetchMovie( id )

        dispatch( { type: START_LOADING} )
        //console.log( data )
        dispatch( { type: FETCH_SINGLE, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log(error.message)
    }
}


export const getMoviesBySearch = ( searchQuery ) => async ( dispatch ) => {
    try {
        dispatch( { type: START_LOADING} )
        const { data } = await api.fetchMoviesBySearch( searchQuery ) //THIS works gives console logged info
        
        //console.log(data)
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log(error.message)
    }
}


// export const getMovieVideo = ( id ) => async ( dispatch ) => {
//     try {
//         dispatch( { type: START_LOADING} )
//         const { data } = await api.fetchMoviesBySearch( id )
//         console.log( data )
//         dispatch({ type: FETCH_VIDEO, payload: data })
        
//         dispatch( { type: END_LOADING } )
//     } catch (error) {
//         console.log(error.message)
//     }
// }