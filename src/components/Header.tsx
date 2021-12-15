import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'

const Header = () => {
  const signout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              To Do App!!
            </Typography>
            <Button
              color="inherit"
              style={{ textTransform: 'none' }}
              onClick={signout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
