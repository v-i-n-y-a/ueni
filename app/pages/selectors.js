import { createSelector } from 'reselect'
import property from 'lodash/property'

const getBusinesses = property('businesses');

export const mstpList = createSelector(
  getBusinesses,
  businesses => ({ businesses, categories: businesses.data.map( item =>  item.category ) })
)

const getBusiness = (state, ownProps) => property(`businesses.byId.${ownProps.id}`)
const getStatus = property('businesses.loading')
const getReviews = property('reviews.data')

export const mstpDetails = createSelector(
  getBusiness,
  getStatus,
  getReviews,
  (businesses, status, reviews) => {
    const len = reviews.length
    const score = 'No Reviews'
    if (len > 0) {
      const scores = reviews.map(r => r.score)
      
    }
  }

