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
      list: [],
      category: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { businesses: { data } } = nextProps
    const { category } = this.state
    if (data !== this.props.businesses.data) {
      //filter list again if data has been changed
      if (category)
        this.setState({ list: this.filterList(data)({ value: category}) })
      else
        this.setState({ list: data })
  }}

  componentWillMount() {
    //console.log(this.props)
    const { businesses: { data, loading }, fetchBusinesses, categories } = this.props
    if (!loading) fetchBusinesses()
    this.setState({ list: data })
  }

  filterList = data => ({ value }) => {
    const newList = data.filter( ({ category }) => category === value )
    console.log('filterList')
    this.setState({ list: newList, category: value })
  }

  render() {
    const { businesses: { loading, data, error }, categories } = this.props
    const { list } = this.state
    return (
      <div>
        <header>
          <div className="logo">1</div>
          SELECT YOUR BUSINESS
        </header>
        <nav>
          <div>Sort: A-Z</div>
          <div>
            Category: <Filter data={categories} onChange={this.filterList(data)} placeholder="All"/>
          </div>
        </nav>
        <section>
          {list.map(item => 
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
