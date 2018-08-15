import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mstpList} from './selectors'
import { mdtpList } from './actions'

import Filter from '../components/Filter.jsx'
import Sort from '../components/Sort.jsx'
import Card from '../components/Card.jsx'
import Header from '../components/Header.jsx'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 10,
  },

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20
  },

  toolBar: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center'
  },

  tool: {
    display: 'flex',
    marginLeft: 15
  }
};

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
    const { businesses: { loading, data, error }, categories, classes } = this.props
    const { list, order } = this.state
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} className={classes.nav}>
          <Header title="SELECT YOUR BUSINESS" logo="1" />
          <div className={classes.toolBar}>
            <div className={classes.tool}>
              <Sort onChange={this.sortList} order={order} />
            </div>
            <div className={classes.tool}>
              <Filter title="Category" data={categories} onChange={this.filterList(data)} placeholder="All"/>
            </div>
          </div>
        </Grid>
        {list.map(item => 
          <Grid item xs={6}>
            <Card key={item.id} item={item}/>
          </Grid>
          )}
        { error && <Grid item xs={12} className="error">{error.message}</Grid> }
        { loading && <Grid item xs={12}>loading...</Grid> }
      </Grid>
    )
    
  }
}

export default connect(mstpList, mdtpList)(withStyles(styles)(List))
