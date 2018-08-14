import React from 'react';
import { connect } from 'react-redux'
import { mdtpList } from './actions'
import { mstpDetails } from './selectors'
import { mdtpDetails } from './actions'

const Details = props => {
  return (<div>Details</div>)
}

export default connect(mstpDetails, mdtpDetails)(Details)
