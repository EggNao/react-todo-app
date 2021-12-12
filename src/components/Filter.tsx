import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

const Filter = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All" style={{ textTransform: 'none' }} />
        <Tab label="Todo" style={{ textTransform: 'none' }} />
        <Tab label="Done" style={{ textTransform: 'none' }} />
      </Tabs>
    </Box>
  )
}
export default Filter
