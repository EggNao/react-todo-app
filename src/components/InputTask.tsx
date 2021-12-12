import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const InputTask = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ margin: 'auto' }}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Task"
          defaultValue=""
        />
      </div>
    </Box>
  )
}

export default InputTask
