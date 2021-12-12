import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              To Do App!!
            </Typography>
            <Button color="inherit" style={{ textTransform: 'none' }}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
