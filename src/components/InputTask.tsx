import React, { useState } from 'react'
import { Box, TextField, Stack, Button } from '@mui/material'

import { inputTaskProps } from '../types/type'

const InputTask: React.FC<inputTaskProps> = (props) => {
  const [TaskTexts, setTaskTexts] = useState<string>('')
  const onClick = () => {
    if (TaskTexts !== '') {
      props.setCount(props.count + 1)
      const Items_cp = props.Items
      Items_cp.push({
        id: new Date().getTime().toString(),
        count: props.count,
        text: TaskTexts,
        done: false,
      })
      props.setItems(Items_cp)
      console.log(props.Items)
    }
    setTaskTexts('')
  }
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTaskTexts(event.target.value)
  }

  return (
    <div>
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
    </div>
  )
}

export default InputTask
