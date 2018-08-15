import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mstpList} from './selectors'
import { mdtpList } from './actions'

import Filter from '../components/Filter.jsx'
import Sort from '../components/Sort.jsx'
import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx'

class List extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      category: null,
      order: 'ASC'
    }
  }

  componentWillReceiveProps(nextProps) {
    const { businesses: { data } } = nextProps
    const { category, order } = this.state
    if (data !== this.props.businesses.data) {
      //filter list again if data has been changed
      const filter = category ? { value: category } : null
      this.filterList(data)(filter)
      this.sortList(order)
    }
  }

  componentWillMount() {
    //console.log(this.props)
    const { businesses: { data, loading }, fetchBusinesses, categories } = this.props
    if (!loading) fetchBusinesses()
    this.setState({ list: data })
  }

  filterList = data => option => {
    if (!option) {
      this.setState({ list: data, category: null })
      return
    }
    const newList = data.filter( ({ category }) => category === option.value )
    this.setState({ list: newList, category: option.value })
  }

  sortList = order => {
    if (!order) return 

    const { list } = this.state
    if (list.length === 0) return
    
    const sortMethod = {
      ASC: { lover: -1, higher: 1 },
      DESC: { lover: 1, higher: -1 }
    }
    const method = sortMethod[order]
    const newList = list.slice().sort((prev, next) => {
      if (prev.name < next.name) return method.lover
      if (prev.name > next.name) return method.higher
      return 0
    })
    this.setState({ list: newList, order })
  }

  render() {
    const { businesses: { loading, data, error }, categories } = this.props
    const { list, order } = this.state
    return (
      <div>
        <Header title="SELECT YOUR BUSINESS" logo="1" />
        { error && <div className="error">{error.message}</div> }
        { loading && <div>loading...</div> }
        <nav>
          <Sort onChange={this.sortList} order={order} />
          <div>
            Category: <Filter data={categories} onChange={this.filterList(data)} placeholder="All"/>
          </div>
        </nav>
        <section>
          {list.map(item => 
            <Card key={item.id} item={item}/>
          )}
        </section>
      </div>
    )
    
  }
}

export default connect(mstpList, mdtpList)(List)
