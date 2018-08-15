import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mdtpList } from './actions'
import { mstpDetails } from './selectors'
import { mdtpDetails } from './actions'
import Card from '../components/BigCard.jsx'
import Header from '../components/Header.jsx'
import Grid from '@material-ui/core/Grid'

class Details extends Component {
  componentWillMount() {
    const { match: { params: { id } }, fetchReviews, fetchBusiness } = this.props
    fetchBusiness(id)
    fetchReviews(id)
  }

  render() {
    const { loading, business, error } = this.props
    return (
      <div>
        <div style={{ margin: 20 }}>
          <Header title="Review" logo="2" />
        </div>
        {business && <Card item={business} />}
        {error && <div className="error">{error.message}</div>}
        {loading && <div>loading...</div>}
      </div>
    )
  }
}

export default connect(mstpDetails, mdtpDetails)(Details)
