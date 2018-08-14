import { createSelector } from 'reselect'
import property from 'lodash/property'

const getBusinesses = property('businesses');

export const mstpList = createSelector(
  getBusinesses,
  businesses => ({ businesses })
)

const getReviews = property('reviews.data')

export const mstpReviews = createSelector(
  getReviews,
  reviews => ({ reviews })
)

