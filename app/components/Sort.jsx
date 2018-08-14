import React, { Component } from 'react';
import { emptyFunc } from './utils'

export default class Sort extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: this.props.order
    }
  }

  changeOrder = e => {
    e.preventDefault();
    const { onChange } = this.props
    this.setState((prevState, props) => {
      const newOrder = prevState.order === 'ASC' ? 'DESC' : 'ASC';
      onChange(newOrder);
      return { order: newOrder }
    });
  }

  render () {
    const { order } = this.state
    return (
      <div className="sort">
        <strong>Sort</strong>
        <a href="#" onClick={this.changeOrder} >
          { order === 'ASC' ? 'A-Z' : 'Z-A' }
        </a>
      </div>
    )
  }

 }

