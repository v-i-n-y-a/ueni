import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { mstpList} from './selectors'
import { mdtpList } from './actions'

class List extends Component {

  componentWillMount() {
    //console.log(this.props)
    const { businesses: { loading }, fetchBusinesses } = this.props
    if (!loading) fetchBusinesses()
  }

  render() {
    const { businesses: { loading, data, error } } = this.props
    return (
      <div>
        <header>
          <div className="logo">1</div>
          SELECT YOUR BUSINESS
        </header>
        <nav>
          <div>Sort: A-Z</div>
          <div>Category: <select></select></div>
        </nav>
        <section>
          {data.map(item => 
            <div key={item.id}>
              <div className="card-image" >
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="card-body">
                <h2>{item.name}</h2>
                <div className="card-address">
                    {item.city}, {item.country}
                </div>
                <div className="card-description">
                    {item.description}
                </div>
                <div className="card-details-link">
                  <Link to={`/details/${item.id}`}>Continue</Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    )
    
  }
}

export default connect(mstpList, mdtpList)(List)
