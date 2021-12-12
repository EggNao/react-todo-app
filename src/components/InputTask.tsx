import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const InputTask = () => {
  return (
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
      <TextField required id="outlined-required" label="Task" defaultValue="" />

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          style={{ textTransform: 'none', height: '30px' }}
        >
          Save
        </Button>
      </Stack>
    </Box>
  )
}
export default InputTask
