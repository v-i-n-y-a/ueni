import { createSelector } from 'reselect'
import property from 'lodash/property'

const getBusinesses = property('businesses');

export const mstpList = createSelector(
  getBusinesses,
  businesses => ({ businesses, categories: businesses.data.map( item =>  item.category ) })
)

const getReviews = property('reviews.data')

export const mstpReviews = createSelector(
  getReviews,
  reviews => ({ reviews })
)

