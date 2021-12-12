import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'
import Filter from './components/Filter'
import InputTask from './components/InputTask'

function App() {
  return (
    <div className="App">
      <Header />
      <InputTask />
      <Filter />
      <TodoList />
    </div>
  )
}

export default App
