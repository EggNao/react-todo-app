import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { signProps } from '../types/type'

const Login: React.FC<signProps> = (prop) => {
  const signup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        prop.setIsLogin(true)
        console.log('success Login')
      })
      .catch((error) => {
        console.log('error Login')
      })
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="280"
          image="/img/study_night_boy.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React × Material UI × Firebase
            Authenticationでチュートリアル。google認証で簡単にログインできます。
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={signup}
            style={{ textTransform: 'none' }}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login
