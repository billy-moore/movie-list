import * as api from '../api'
import { FETCH_USER, START_LOADING, END_LOADING } from '../constants/actionTypes'

// import * as api from '../api'
import { Navigate } from 'react-router-dom'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        // log in the user
        Navigate('/')
    } catch (error) {
        console.log( error.message)
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        // sign up the user
        
        Navigate('/')
    } catch (error) {
        console.log( error.message)
    }
}

export const getUser = ( id ) => async ( dispatch ) => {
    
    try {
        const { data } = await api.fetchUser( id )

        dispatch( { type: START_LOADING} )
        console.log( data )
        dispatch( { type: FETCH_USER, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log(error.message)
    }
}