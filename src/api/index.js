import axios from 'axios'

const API = axios.create({ baseURL: 'http:localhost:3000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

//export const fetchPosts = () => axios.get()

//export const fetchMovies = () => axios.get('/movies')

//? Movies 
//* the /movies/ is required **
export const fetchMovies = ( page ) => axios.get(`/movies?page=${ page }`)

export const fetchMoviesBySearch = ( searchQuery ) => axios.get(`/search/?searchQuery=${ searchQuery }` || 'none') // searchQuery = all you need. anything else = Undefined

export const fetchMovie = ( id ) => axios.get(`/movie/${ id }`)

export const fetchVideo = ( id ) => axios.get(`movies/video?${id}`)

//? Cocktails
// export const fetchCocktails = ( page ) => axios.get(`/cocktails?page=${ page }`)
//! To display DRINKS on MOVIE PAGE
export const fetchMovieDrinks = ( id ) => axios.get(`/movie/${id}/drinkList` ) 

//! Replaces fetchMovieDrink (will be named that when replaced)
export const pullMovieList = ( id ) => axios.get(`/movie/${ id }`, { id })
//! display single DRINK page
export const fetchDrink = ( id ) => axios.get(`/drink/${ id }`) 

//! Search Cocktail (change search TAG)
export const fetchCocktailsBySearch = ( searchQuery ) => axios.get(`search/?searchQuery=${ searchQuery }` || 'none') // searchQuery = all you need. anything else = Undefined

export const fetchDrinksList = ( letter ) => axios.get(`/drinks/letter=${ letter }`)

export const fetchDrinkDetails = ( id ) => axios.get(`/drink/${ id }`)

//? USER

export const signIn = ( formData ) => axios.post('/user/signIn', formData )

export const signUp = ( formData ) => axios.post('/user/signUp', formData )

export const fetchUser = ( id ) => axios.get(`/user/${id}`)

//! implement update route, this is incorrect and needs fixed.

//* Treat Drinks Like Posts
export const addDrink = ( userId, newDrink ) => axios.patch(`user/${  userId }/drinkList`, newDrink )

//export const deleteDrink = ( user, drinkId ) => axios.delete(`user/${ user.resutl._id }/drinkList`,  drinkId )