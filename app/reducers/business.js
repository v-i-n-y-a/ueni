import { config } from '../pages/actions.js'
import keyBy from 'lodash/keyBy'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  data: [],
  dataById: {},
  error: null,
  loading: false
}

const listTypes = config.businesses.types
const objectTypes = config.business.types

function businessReducer(state = initialState, action) {
  switch (action.type) {
    case listTypes.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload.slice(),
        dataById: keyBy(action.businesses, 'id'),
        loading: false,
        error: null
      }
    case listTypes.FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case objectTypes.FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    case listTypes.FETCH:
    case objectTypes.FETCH:
      return {
        ...state,
        error: null,
        loading: true
      }
    case objectTypes.FETCH_SUCCESS: {
      const id = action.meta.id
      const dataById = { ...state.dataById }
      if (isEmpty(action.payload)) {
        if (id in state.dataById) {
          delete dataById[id]
        }
      } else {
        dataById[id] = action.payload
      }
      return {
        ...state,
        dataById,
        loading: false,
        error: null
      }
    }
    default:
      return state
  }
}

export default businessReducer
