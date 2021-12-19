import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Filter from './components/Filter'
import InputTask from './components/InputTask'
import Login from './components/Login'
import { todo } from './types/type'
import { getAuth, signOut } from 'firebase/auth'

function App() {
  const [Items, setItems] = useState<todo[]>([])
  const [id, setId] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setIsLogin(false)
        })
        .catch((error) => {
          // An error happened.
        })
    }
  }, [])

  return (
    <div>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin === false && (
        <div>
          <InputTask
            setId={setId}
            id={id}
            setCount={setCount}
            count={count}
            Items={Items}
            setItems={setItems}
          />
          <Filter />
          <TodoList todoArray={Items} />
        </div>
      )}
      {isLogin === true && (
        <div>
          <Login setIsLogin={setIsLogin} />
        </div>
      )}
    </div>
  )
}

export default App
