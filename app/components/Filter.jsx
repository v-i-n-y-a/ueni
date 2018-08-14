import React from 'react';
import { SimpleSelect } from 'react-selectize'
import { emptyFunc } from './utils'

const Filter = ({ data, placeholder, onChange = emptyFunc }) =>
  <SimpleSelect 
    placeholder="All" 
    onValueChange={ onChange } 
    options={data.map(item => ({label: item, value: item }))} 
  /> 

export default Filter
