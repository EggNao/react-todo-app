import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ReactLoading type="spin" color="#000" />
    </div>
  )
}

export default Loading
