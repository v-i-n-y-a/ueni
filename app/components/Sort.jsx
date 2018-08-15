import React, { Component } from 'react';
import { emptyFunc } from './utils'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './utils'


class Sort extends Component {
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
    const { classes } = this.props
    const { order } = this.state
    return (
      <div className={classes.tool}>
        <Typography className={classes.label}>Sort:</Typography>
        <a href="#" onClick={this.changeOrder} className={classes.link}>
          <Typography variant="subheading">{ order === 'ASC' ? 'A-Z' : 'Z-A' }</Typography>
        </a>
      </div>
    )
  }

 }

export default withStyles(styles)(Sort)
