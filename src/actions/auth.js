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

    const { data } = await api.fetchUser( id )
    
    console.log( data )
    
    try {

        dispatch( { type: START_LOADING} )
        dispatch( { type: FETCH_USER, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log( error.message )
    }
}


export const addDrink = () => async ( dispatch ) => {
    const { data } = await api.plusDrink( data )
    //console.log( data )
    try {

    } catch (error) {
        console.log( error.message )
    }
}