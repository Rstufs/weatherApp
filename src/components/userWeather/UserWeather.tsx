import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import useNavigatorLocation from "../../hooks/useNavigatorLocation"
import { getCurrentWeatherByLocation } from "../../services/weather/getCurrentWeather"
import { getForecastWeatherByLocation } from "../../services/weather/getForecastWeather"
import { CompleteWeatherData, DailyForecast, WeatherData } from "../../types"
import CardForecast from "../cardForecast/CardForecast"
import CardWeather from "../cardWeather/CardWeather"

const UserWeather = () => {
    const currentNavLocation = useNavigatorLocation()
    const [currentWeather, setCurrentWeather] = useState<CompleteWeatherData | null>(null)

    useEffect( () => {
        if(currentNavLocation){
            const fetchCurrentWeather = async() => {
                const currentWeather: WeatherData = await getCurrentWeatherByLocation(currentNavLocation)
                const currentForecast: DailyForecast[] = await getForecastWeatherByLocation(currentNavLocation)
                setCurrentWeather({
                    ...currentWeather,
                    forecast: currentForecast
                })
            }
            fetchCurrentWeather()
        }
    }, [currentNavLocation])

    return (
        <>
            {currentWeather ? (
            <>
                <Typography className='py-4 text-base text-black' variant='h2'>
                    Your current location
                </Typography>
                <Typography className='py-4 text-xl font-bold text-black' variant='h1'>
                    {currentWeather.city_name}
                </Typography>
                <CardWeather {...currentWeather}/>
                <Container className="grid grid-cols-7 gap-1">
                {currentWeather?.forecast ? ( 
                    currentWeather?.forecast.map( (day, idx) => (
                        <CardForecast key={idx} datetime={day.datetime} high_temp={day.high_temp} low_temp={day.low_temp} temp={day.temp} weather={day.weather}/>
                    )
                )) : null}
                </Container>
            </>
            ) : null }
        </>
    )
}

export default UserWeather