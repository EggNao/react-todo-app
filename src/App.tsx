import React, { useState } from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Filter from './components/Filter'
import Loading from './components/Loading'
import Login from './components/Login'
import { Box, TextField, Stack, Button } from '@mui/material'
import { todo } from './types/type'

function App() {
  const [Items, setItems] = useState<todo[]>([])
  const [TaskTexts, setTaskTexts] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [isLogin, setIsLogin] = useState<boolean>(false)

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

  const page = () => {
    if (isLogin) {
      console.log('Login')

      return (
        <div>
          <Header setIsLogin={setIsLogin} isLogin={isLogin} />

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
        </div>
      )
    } else {
      console.log('not Login')

      return (
        <div>
          <Header setIsLogin={setIsLogin} isLogin={isLogin} />
          <Login setIsLogin={setIsLogin} />
        </div>
      )
    }
  }

  return <div className="App">{page()}</div>
}

export default App
