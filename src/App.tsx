import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import CityWeather from './components/cityWeather/CityWeather'
import CountrySelect from './components/countrySelect/CountrySelect'
import UserWeather from './components/userWeather/UserWeather'
import { CityType } from './types'

function App() {
  const [location, setLocation] = useState<CityType | null>(null)

  const handleLocation = ( city: CityType ) => {
    setLocation(city)
  }

  return (
    <>
      <Container className="font-bold px-0">
        <Typography className='mb-4 py-4 text-lg' variant='h1' color='secondary'>
          Amazing Weather App!
        </Typography>
        <Container className="px-0">
          <CountrySelect handleLocation={handleLocation}/>
        </Container>
        {!location ? 
          <UserWeather/>
        : <CityWeather {...location}></CityWeather>}
      </Container>
    </>
  )
}

export default App
