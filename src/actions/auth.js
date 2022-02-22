// import { AUTH } from '../constants/actionTypes'
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