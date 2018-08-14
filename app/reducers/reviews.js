import { config } from '../actions/' 

const initialState = {
  data: {},
  error: null,
  loading: false
};

const types = config.reviews.type

function reviewsReducer (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case types.FETCH:
            return {
                ...state,
                data: {
                    ...action.reviews
                },
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
