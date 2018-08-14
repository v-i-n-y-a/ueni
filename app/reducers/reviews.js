import { config } from '../pages/actions.js' 

const initialState = {
  data: {},
  error: null,
  loading: false
};

const types = config.reviews.types

function reviewsReducer (state = initialState, action) {
    console.log('action', action)
    switch (action.type) {
        case types.FETCH:
            return {
                ...state,
                data: action.payload.slice(),
                loading: true,
                error: null
            };
        case types.FETCH_FAILURE: {
            const error = action.payload.data || { message: action.payload.message };
            return {
                ...state,
                error:  error,
                loading: false
            };
        }
        case types.FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            };
        default:
            return state;
    }
}

export default reviewsReducer
