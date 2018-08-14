import React from 'react';
import { connect } from 'react-redux'
import { mdtpList } from './actions'
import { mstpDetails } from './selectors'
import { mdtpDetails } from './actions'
import Card from '../components/Card.jsx'

const Details = props => {
  return (
    <div>
      <Header title="Review" logo="2" />

    </div>
  )
}

export default connect(mstpDetails, mdtpDetails)(Details)
