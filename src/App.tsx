import React, { useState } from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Filter from './components/Filter'
import InputTask from './components/InputTask'
import Loading from './components/Loading'
import Login from './components/Login'
import { todo } from './types/type'

function App() {
  const [Items, setItems] = useState<todo[]>([])
  const [id, setId] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const page = () => {
    if (isLogin) {
      return (
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
      )
    } else {
      return <Login setIsLogin={setIsLogin} />
    }
  }
  return (
    <div>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {page()}
    </div>
  )
}

export default App
