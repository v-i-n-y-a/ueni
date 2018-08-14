import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mstpList} from './selectors'
import { mdtpList } from './actions'

import { Link } from 'react-router-dom'
import Filter from '../components/Filter.jsx'

class List extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories !== this.props.categories) 
      this.setState({ categories: nextProps.categories })
  }

  componentWillMount() {
    //console.log(this.props)
    const { businesses: { loading }, fetchBusinesses, categories } = this.props
    if (!loading) fetchBusinesses()
    this.setState({ categories })
  }

  render() {
    const { businesses: { loading, data, error } } = this.props
    const { categories } = this.state
    return (
      <div>
        <header>
          <div className="logo">1</div>
          SELECT YOUR BUSINESS
        </header>
        <nav>
          <div>Sort: A-Z</div>
          <div>
            Category: <Filter data={categories} onChange={this.filterList} placeholder="All"/>
          </div>
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
