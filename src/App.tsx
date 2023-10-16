import './App.css'
import { Container, Typography, Button } from '@mui/material'

function App() {

  return (
    <>
      <Container className="font-bold">
        <Typography className='py-4 text-lg' variant='h1' color='secondary'>
          Amazing Weather App!
        </Typography>
        <Button variant="contained">Let's coding</Button>
      </Container>
    </>
  )
}

export default App
