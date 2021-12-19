export type todo = {
  count: number
  id: string
  text: string
  done: boolean
}

export type todoListProps = {
  Items: todo[]
  setItems: Function
}

export type signProps = {
  setIsLogin: Function
}

export type headerProps = {
  setIsLogin: Function
  isLogin: boolean
}

export type inputTaskProps = {
  setId: Function
  id: string
  setCount: Function
  count: number
  Items: todo[]
  setItems: Function
}
export type filterProps = {
  value: number
  setValue: Function
}
