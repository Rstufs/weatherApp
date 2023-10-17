import './App.css'
import { Container, Typography, Button } from '@mui/material'
import UserWeather from './components/userWeather/UserWeather'
import SearchBox from './components/searchBox/SearchBox'
import { useState } from 'react'
import CityWeather from './components/cityWeather/CityWeather'
import { CityType } from './components/searchBox/types'

function App() {
  const [location, setLocation] = useState<CityType | null>(null)

  const handleLocation = ( city: CityType ) => {
    setLocation(city)
  }

  return (
    <>
      <Container className="font-bold">
        <Typography className='py-4 text-lg' variant='h1' color='secondary'>
          Amazing Weather App!
        </Typography>
        <Button variant="contained">Let's coding</Button>
        <Container className="">
          <SearchBox handleLocation={handleLocation}/>
        </Container>
        {!location ? 
          <UserWeather/>
        : <CityWeather name={location.name} country={location.country} subcountry={location.subcountry} geonameid={location.geonameid}></CityWeather>}
      </Container>
    </>
  )
}

export default App
