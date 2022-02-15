import { FETCH_POSTS, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'

const reducer = (state = [], action) => {
    switch ( action.type ) {
        case FETCH_POSTS:
                return {
                    ...state,
                    ...action.payload
                }
        case CREATE:
            return state;
        case  UPDATE:
            return state;
        case DELETE:
            return state;
        case LIKE:
            return state;   
        default:
            return state;
    }
}

export default reducer