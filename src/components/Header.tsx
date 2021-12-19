import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { getAuth, signOut } from 'firebase/auth'
import { headerProps } from '../types/type'

const Header: React.FC<headerProps> = (prop) => {
  const signout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        prop.setIsLogin(false)
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
              React ToDo App!!
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              style={{
                textTransform: 'none',
                display: prop.isLogin ? '' : 'none',
              }}
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
