import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getCurrentWeatherByCity } from "../../services/weather/getCurrentWeather"
import { getForecastWeatherByCity } from "../../services/weather/getForecastWeather"
import { CityType, CompleteWeatherData, DailyForecast, WeatherData } from "../../types"
import CardForecast from "../cardForecast/CardForecast"
import CardWeather from "../cardWeather/CardWeather"

const CityWeather = ( {name, country, subcountry, geonameid}: CityType ) => {
    const [weatherData, setWeatherData] = useState<CompleteWeatherData | null>(null)

    useEffect( () => {
        const fetchWeather = async() => {
            const { city_name, datetime, sunrise, sunset, temp, weather}: WeatherData = await getCurrentWeatherByCity(name, geonameid)
            const forecast: DailyForecast[] = await getForecastWeatherByCity(name, geonameid)
            setWeatherData({
                city_name,
                datetime: new Date(datetime),
                sunrise,
                sunset,
                temp,
                weather,
                forecast
            })
        }
        fetchWeather()
    }, [name, country])

    return (
        <>
            <Typography className='py-4 text-xl text-black font-bold md:text-3xl md:pt-6' variant='h1'>
                {name}
            </Typography>
            {weatherData ? (
                <CardWeather {...weatherData}/>
            ) : null}
            <Container className="grid grid-cols-7 gap-1">
            {weatherData?.forecast ? ( 
                weatherData?.forecast.map( (day, idx) => (
                    <CardForecast key={idx} datetime={new Date(day.datetime)} high_temp={day.high_temp} low_temp={day.low_temp} temp={day.temp} weather={day.weather}/>
                )
            )) : null}
            </Container>
        </>
    )
}

export default CityWeather