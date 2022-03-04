import axios from 'axios'

const API = axios.create({ baseURL: 'http:localhost:5000' })
//const postUrl = 'http://localhost:5000/posts'
//const movieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=cb59aff70d4a64fc72648cdb2c85dbaa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate'
//const movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=cb59aff70d4a64fc72648cdb2c85dbaa&language=en-US&'
//const drinkUrl = ''

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})

export const fetchPosts = () => axios.get()

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

export const fetchUser = ( id ) => axios.get(`/user/${id}`)

export const plusDrink = ( newDrink ) => axios.get( newDrink )