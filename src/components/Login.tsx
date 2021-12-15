import React from 'react'
import { Stack, Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
  const signup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('success Login')
      })
      .catch((error) => {
        console.log('error Login')
      })
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={signup}>
        Login
      </Button>
    </Stack>
  )
}

export default Login
