import { config } from '../actions/' 
import { keyBy } from 'lodash/keyBy'

const initialState = {
  data: [],
  dataById: {},
  error: null,
  loading: false
};

const listTypes = config.businesses.types
const objectTypes = config.business.types

function businessReducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
        case listTypes.FETCH:
            return {
                ...state,
                data: {
                    ...action.reviews
                },
                dataById: keyBy(action.businesses, 'id'),
                loading: true,
                error: null
            };
        case listTypes.FETCH_FAILURE:
        case objectTypes.FETCH_FAILURE: {
            const error = action.payload.data || { message: action.payload.message };
            return {
                ...state,
                error:  error,
                loading: false
            };
        }
        case listTypes.FETCH_SUCCESS:
        case objectTypes.FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            };
        case objectTypes.FETCH:
            return {
              ...state,
              dataById: {
                ...state.dataById,
                [action.id]: {...action}
              }, 
              loading: true,
              error: null
            }
        default:
            return state;
    }

}

export default businessReducer 
