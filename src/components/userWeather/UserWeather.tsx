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
                const { city_name, datetime, sunrise, sunset, temp, weather}: WeatherData = await getCurrentWeatherByLocation(currentNavLocation)
                const currentForecast: DailyForecast[] = await getForecastWeatherByLocation(currentNavLocation)
                setCurrentWeather({
                    city_name,
                    datetime: new Date(datetime),
                    sunrise,
                    sunset,
                    temp,
                    weather,
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
                <CardWeather city_name={currentWeather.city_name} datetime={currentWeather.datetime} sunrise={currentWeather.sunrise} sunset={currentWeather.sunset} temp={currentWeather.temp} weather={currentWeather.weather}/>
                <Container className="grid grid-cols-7 gap-1">
                {currentWeather?.forecast ? ( 
                    currentWeather?.forecast.map( (day, idx) => (
                        <CardForecast key={idx} datetime={new Date(day.datetime)} high_temp={day.high_temp} low_temp={day.low_temp} temp={day.temp} weather={day.weather}/>
                    )
                )) : null}
                </Container>
            </>
            ) : null }
        </>
    )
}

export default UserWeather