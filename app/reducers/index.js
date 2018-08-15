import { combineReducers } from 'redux'
import businessReducer from './business.js'
import reviewsReducer from './reviews.js'

export default combineReducers({
  businesses: businessReducer,
  reviews: reviewsReducer
})
