import { config } from '../pages/actions.js' 
import keyBy from 'lodash/keyBy'

const initialState = {
  data: [],
  dataById: {},
  error: null,
  loading: false
};

const listTypes = config.businesses.types
const objectTypes = config.business.types

function businessReducer (state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
        case listTypes.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload.slice(),
                dataById: keyBy(action.businesses, 'id'),
                loading: false,
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
        case listTypes.FETCH:
        case objectTypes.FETCH:
            return {
                ...state,
                error: null,
                loading: true
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
