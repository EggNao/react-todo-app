import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'

const Filter = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <div style={{ margin: 'auto' }}>
              <Tab label="all" value="1" style={{ textTransform: 'none' }} />
              <Tab label="todo" value="2" style={{ textTransform: 'none' }} />
              <Tab label="done" value="3" style={{ textTransform: 'none' }} />
            </div>
          </TabList>
        </Box>
      </TabContext>
    </Box>
  )
}
export default Filter
