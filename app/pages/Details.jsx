import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mdtpList } from './actions'
import { mstpDetails } from './selectors'
import { mdtpDetails } from './actions'
import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx'

class Details extends Component {
  
  componentWillMount() {
    const { match: { params: { id } }, fetchReviews, fetchBusiness } = this.props
    fetchBusiness(id)
    fetchReviews(id)
  }
  
  render() {
    const { score, loading, business, error } = this.props
    return (
      <div>
        <Header title="Review" logo="2" />
        { error && <div className="error">{error.message}</div> }
        { loading && <div>loading...</div> }
        { business && <Card item={business} /> }
      </div>
    )
  }
}

export default connect(mstpDetails, mdtpDetails)(Details)
