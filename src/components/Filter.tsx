import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import {filterProps } from '../types/type'

const Filter :React.FC<filterProps>= (props) => {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={props.value} onChange={handleChange} centered>
        <Tab label="All" style={{ textTransform: 'none' }} />
        <Tab label="Todo" style={{ textTransform: 'none' }} />
        <Tab label="Done" style={{ textTransform: 'none' }} />
      </Tabs>
    </Box>
  )
}
export default Filter
