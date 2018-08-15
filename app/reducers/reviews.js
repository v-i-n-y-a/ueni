import { config } from '../pages/actions.js'
import { normalize, schema } from 'normalizr'

const initialState = {
  data: {},
  error: null,
  loading: false
}

const types = config.reviews.types

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS: {
      const review = new schema.Entity(
        'review',
        {},
        {
          idAttribute: 'business_id',
          mergeStrategy: (entityA, entityB) => ({
            score: (entityA.score + entityB.score) / 2
          })
        }
      )
      const reviewList = new schema.Array(review)
      const reviews = normalize(action.payload, reviewList)
      return {
        ...state,
        data: { ...state.data, ...reviews.entities.review },
        loading: false,
        error: null
      }
    }
    case types.FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case types.FETCH:
      return {
        ...state,
        error: null,
        loading: true
      }
    default:
      return state
  }
}

export default reviewsReducer
