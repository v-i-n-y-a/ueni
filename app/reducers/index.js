import { combineReducers } from 'redux';

const initialState = {
  data: {},
  loaded: false
};

function create_data_reducer(name) {
  name = name.toUpperCase()
  return (state = initialState, action) => {
    switch (action.type) {
        case `PUSH_${name}`:
            return {
                ...state,
                data: {
                    ...{...action[name]}
                }
            };
        case `REQUEST_${name}`:
            return {
                ...state,
                loaded: false
            };
        case `RECEIVE_${name}`:
            return {
                ...state,
                loaded: true
            };
        default:
            return state;
    }

  }
};


export default combineReducers({
    business: create_data_reducer('business'),
    review: create_data_reducer('review')
});
