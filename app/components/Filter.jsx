import React from 'react';
import { SimpleSelect } from 'react-selectize'

const emptyFunc = () => {}
const Filter = ({ data, placeholder, onChange = emptyFunc }) =>
  <SimpleSelect 
    placeholder="All" 
    onValueChange={ onChange } 
    options={data.map(item => ({label: item, value: item }))} 
  /> 

export default Filter
