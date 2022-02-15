import { FETCH_DRINKS,  FETCH_DRINK_LETTER, FETCH_BY_SEARCH, FETCH_SINGLE, START_LOADING, END_LOADING, LIKE, DELETE_DRINKS } from '../constants/actionTypes'

const reducer = (state = { isLoading: true, type: 'DRINK', list: [] }, action) => {
    switch ( action.type ) {
        case START_LOADING:
                        return {
                                ...state, isLoading: true
                        }

                case END_LOADING:
                        return {
                                ...state, isLoading: false
                        }
        case FETCH_DRINKS:
                return {
                    ...state,
                    list: [...action.payload]
                }
        case  FETCH_DRINK_LETTER:
                return {
                    ...state,
                    list: action.payload
                }
        case FETCH_BY_SEARCH:
            return state;

        case  FETCH_SINGLE:
            return {
                ...state,
                currentDrink: action.payload
            }
        case LIKE:
            return state;
        case DELETE_DRINKS:
            return {
                ...state,
                list: []
            }   
        default:
            return state;
    }
}

export default reducer