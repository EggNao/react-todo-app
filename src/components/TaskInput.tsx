import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const TaskInput = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField required id="outlined-required" label="Task" />
      </Box>
    </div>
  )
}
export default TaskInput
