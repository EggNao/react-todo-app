import React, { useState } from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Filter from './components/Filter'
import Loading from './components/Loading'
import Login from './components/Login'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { todo } from './types/type'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [Items, setItems] = useState<todo[]>([])
  const [TaskTexts, setTaskTexts] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        setIsLogin(true)
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
  }

  const onClick = () => {
    if (TaskTexts !== '') {
      setCount(count + 1)
      const Items_cp = Items
      Items_cp.push({ count: count, text: TaskTexts, done: false })
      setItems(Items_cp)
      console.log(Items)
    }

    setTaskTexts('')
  }
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTaskTexts(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Task"
          defaultValue=""
          onChange={handleChange}
          value={TaskTexts}
        />

        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{ textTransform: 'none', height: '30px' }}
            onClick={onClick}
          >
            Save
          </Button>
        </Stack>
      </Box>
      <Filter />
      <TodoList todoArray={Items} />
      <Loading />
      <Login />
    </div>
  )
}

export default App
