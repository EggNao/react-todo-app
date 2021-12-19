export type todo = {
  count: number
  id: string
  text: string
  done: boolean
}

export type todoListProps = {
  todoArray: todo[]
}

export type signProps = {
  setIsLogin: Function
}

export type headerProps = {
  setIsLogin: Function
  isLogin: boolean
}
