import * as api from '../api'

import { FETCH_USER, START_LOADING, END_LOADING, AUTH } from '../constants/actionTypes'

// import * as api from '../api'

export const signIn = ( formData ) => async (dispatch) => {
    
    try {
        const { data } = await api.signIn( formData )
        dispatch( { type: AUTH, data })

    } catch (error) {
        console.log( error.message)
    }
}

export const signUp = ( formData ) => async ( dispatch ) => {
    //console.log( formData )
    const { data } = await api.signUp( formData )

    try {
        
        dispatch( { type: AUTH, data })

    } catch (error) {
        console.log( error.message)
    }
}

export const getUser = ( userId, drinkId ) => async ( dispatch ) => {

    const { data } = await api.fetchUser( userId, drinkId )
    
    try {

        dispatch( { type: START_LOADING} )
        dispatch( { type: FETCH_USER, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log( error.message )
    }
}

//! bunk code, get it working

export const addDrink = ( userId, email, drinkId ) => async ( dispatch ) => {

    const { data } = await api.addDrink( userId, email, drinkId )
    
    try {
        
       console.log( data )
        
    } catch (error) {
        console.log( error.message )
    }
}