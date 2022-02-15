import * as api from '../api'

import { FETCH_DRINKS,  FETCH_DRINK_LETTER, FETCH_ALL, START_LOADING, END_LOADING, FETCH_BY_SEARCH, FETCH_SINGLE } from '../constants/actionTypes'


//* TEMPORARY - this function grabs random drinks and populates the DRINKS array in state. 
//* this is fine, but it's not specific to the MOVIE, and it's just pulling from API, not a specific MOVIE
export const getMovieDrinks = ( id ) => async ( dispatch ) => {
    try {
        const { data } = await api.fetchMovieDrinks( id )
        //console.log( data )
        dispatch( { type: START_LOADING} )

        dispatch( { type: FETCH_DRINKS, payload: data } )

        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log( 'actions getMovieDrinks')
    }
}


//! This will replace the function above and pull drinks LINKED to a specific MOVIE
// export const getMovieDrinksList = ( id ) => async ( dispatch ) => {

//     try {
//         const { data } = await api.fetchMovieDrinks( id )
//         console.log(data)
//         dispatch( { type: START_LOADING} )
//         //console.log('actions', data)
//         dispatch( { type: FETCH_MOVIE_DRINKS , payload: data } )
        
//         dispatch( { type: END_LOADING } )
//     } catch (error) {
//         console.log(error.message)
//     }
// }

//* This populates the DRINK LIST page by calling cocktail api and updates state w/ drinks A-Z

export const getDrinksList = ( letter ) => async ( dispatch ) => {
    //console.log( letter )
    try {
        const { data } = await api.fetchDrinksList( letter )

        dispatch( { type: START_LOADING} )
        //console.log('actions', data)
        dispatch( { type: FETCH_DRINK_LETTER, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log( 'actions getDrinksList') //error.message
    }
}

export const fetchDrinkDetails = ( id ) => async ( dispatch ) => {
    try {
        const { data } = await api.fetchDrink( id )

        dispatch( { type: START_LOADING} )
        console.log( data )
        dispatch( { type: FETCH_SINGLE, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log( 'actions fetchDrinkDetails') //error.message
    }
}

export const getDrinks = ( id ) => async ( dispatch ) => {
    try {
        const { data } = await api.fetchDrink( id )

        dispatch( { type: START_LOADING} )
        //console.log( data )
        dispatch( { type: FETCH_ALL, payload: data } )
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log('actions getDrinks')
    }
}

export const getCocktailsBySearch = ( searchQuery ) => async ( dispatch ) => {
    try {
        dispatch( { type: START_LOADING} )
        const { data } = await api.fetchCocktailsBySearch( searchQuery ) //THIS works gives console logged info
         // console.log( data )
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        
        dispatch( { type: END_LOADING } )
    } catch (error) {
        console.log('actions getCocktailsBySearch') //error.message
    }
}
