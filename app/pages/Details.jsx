import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mdtpList } from './actions'
import { mstpDetails } from './selectors'
import { mdtpDetails } from './actions'
import Card from '../components/BigCard.jsx'
import Header from '../components/Header.jsx'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { Link } from 'react-router-dom'

class Details extends Component {
  componentWillMount() {
    const { match: { params: { id } }, fetchReviews, fetchBusiness } = this.props
    fetchBusiness(id)
    fetchReviews(id)
  }

  render() {
    const { loading, business, error, classes } = this.props
    return (
      <div>
        <div className={classes.nav}>
          <Header title="Review" logo="2" />
          <div className={classes.toolBar}>
            <div className={classes.tool}>
              <Link className={classes.link} to={`/`}>Home</Link>
            </div>
          </div>
        </div>
        {business && <Card item={business} />}
        {error && <div className="error">{error.message}</div>}
        {loading && <div>loading...</div>}
      </div>
    )
  }
}

export default connect(mstpDetails, mdtpDetails)(withStyles(styles)(Details))
