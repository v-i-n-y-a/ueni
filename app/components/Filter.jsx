import React from 'react';
import { SimpleSelect } from 'react-selectize'
import { emptyFunc, styles } from './utils'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


const Filter = ({ title, data, placeholder, onChange = emptyFunc, classes }) => (
  <div className={classes.tool}>
    <Typography className={classes.label}>{title}</Typography>
    <SimpleSelect 
      placeholder="All"
      style={{width: 250}}
      theme="material"
      onValueChange={ onChange } 
      options={data.map(item => ({label: item, value: item }))} 
    />
  </div>
)

export default withStyles(styles)(Filter)
