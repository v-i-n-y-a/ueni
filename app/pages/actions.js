import { CALL_API } from 'redux-api-middleware';
import { bindActionCreators } from 'redux'

const API_URL = 'http://localhost:8080/api'

export const config = {
  businesses: {
    types: {
      FETCH: 'FETCH_BUSINESSES',
      FETCH_SUCCESS: 'FETCH_BUSINESSES_SUCCESS',
      FETCH_FAILURE: 'FETCH_BUSINESSES_FAILURE'
    },
    endpoint: `${API_URL}/businesses`
  },

  business: {
    types: {
      FETCH: 'FETCH_BUSINESS',
      FETCH_SUCCESS: 'FETCH_BUSINESS_SUCCESS',
      FETCH_FAILURE: 'FETCH_BUSINESS_FAILURE'
    },
    endpoint: `${API_URL}/businesses/`
  },

  reviews: {
    types: {
      FETCH: 'FETCH_REVIEWS',
      FETCH_SUCCESS: 'FETCH_REVIEWS_SUCCESS',
      FETCH_FAILURE: 'FETCH_REVIEWS_FAILURE'

    },
    endpoint:  `${API_URL}/reviews/`
  }

}

const fetchBusinesses = () => ({
  [CALL_API]: {
    types: Object.values(config.businesses.types),
    endpoint: config.businesses.endpoint,
    method: 'GET',
  }
});

const fetchBusiness = (id) => ({
  [CALL_API]: {
    types: Object.keys(config.business.types),
    endpoint: `${config.business.endpoint}/${id}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
});

const fetchReviews = (business) => ({
  [CALL_API]: {
    types: Object.keys(config.reviews.types),
    endpoint: `${config.reviews.endpoint}?business=${business}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
}); 

export const mdtpList = dispatch =>
  bindActionCreators(
    {
      fetchBusinesses
    },
    dispatch
  )

export const mdtpDetails = dispatch => 
  bindActionCreators(
    {
      fetchBusiness
    },
    dispatch
  )
