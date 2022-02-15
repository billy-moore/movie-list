import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_SINGLE, START_LOADING, END_LOADING, MOVIE } from '../constants/actionTypes'

//* action.payload package = page, results, total_pages, total_results
const reducer = (state = { isLoading: true, type: MOVIE, drinks:[] }, action) => {
        switch ( action.type ) {
                case START_LOADING:
                        return {
                                ...state, isLoading: true
                        }

                case END_LOADING:
                        return {
                                ...state, isLoading: false
                        }
                case FETCH_ALL: 
                        return {
                                ...state,
                                page: action.payload.page,
                                movies: action.payload.results,
                                total_pages: action.payload.total_pages,
                                total_results: action.payload.total_results
                        }                 
                case FETCH_SINGLE:
                        return {
                                ...state,
                                currentMovie: action.payload
                        }
                case FETCH_BY_SEARCH:
                        return {
                                ...state,
                                movies: action.payload.results
                        }
                // case FETCH_VIDEO:
                //         return{
                //                 ...state,
                //                 video: action.payload.results[0]
                //         }
                default:
                        return state;
        }
}

export default reducer