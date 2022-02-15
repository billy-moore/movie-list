import { combineReducers } from "redux";

import posts from './posts'
import movies from './movies'
import auth from './auth'
import drinks from './cocktails'

export default combineReducers({
    posts,
    movies,
    auth,
    drinks
})