import { createSelector } from 'reselect'
import property from 'lodash/property'

const getBusinesses = property('businesses')

export const mstpList = createSelector(getBusinesses, businesses => {
  const categories = businesses.data.map(item => item.category)
  categories.sort()
  return {
    businesses,
    categories
  }
})

const getBusinessStatus = property('businesses.loading')
const getReviewStatus = property('reviews.loading')
const getBusinessError = property('businesses.error')
const getReviewError = property('reviews.error')
const getBusiness = (state, ownProps) =>
  property(`businesses.dataById.${ownProps.match.params.id}`)(state)
const getScore = (state, ownProps) =>
  property(`reviews.data.${ownProps.match.params.id}.score`)(state)

export const mstpDetails = createSelector(
  getBusiness,
  getBusinessStatus,
  getReviewStatus,
  getBusinessError,
  getReviewError,
  getScore,
  (business, businessStatus, reviewStatus, businessError, reviewError, scoreVal) => {
    const loading = businessStatus || reviewStatus || false
    const error = businessError || reviewError || null
    const score = scoreVal == undefined ? 'No Reviews' : `${scoreVal}/5`
    return { loading, business: { ...business, score }, error }
  }
)
