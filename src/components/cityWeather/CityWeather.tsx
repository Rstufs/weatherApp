import { Typography } from "@mui/material"
import CardWeather from "../cardWeather/CardWeather"
import { useEffect, useState } from "react"
import { CityType } from "../searchBox/types"
import type { WeatherData } from '../cardWeather/CardWeather'

const CityWeather = ( {name, country, subcountry, geonameid}: CityType ) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
    const getWeather = async (name: string, city_id: number) => {
        const apiKey = import.meta.env.VITE_API_KEY
        const url = `https://api.weatherbit.io/v2.0/current?city=${name}&city_id=${city_id}&key=${apiKey}`
        let dataWeather = null
        try {
            const response = await fetch(url);
            const { data } = await response.json();
            dataWeather = data[0]
        } catch (error) {
            console.error(error);
        }
        return dataWeather
    }

    useEffect( () => {
        const fetchWeather = async() => {
            const data = await getWeather(name, geonameid)
            setWeatherData(data)
        }
        fetchWeather()
    }, [name, country])

    return (
        <>
            <Typography className='py-4 text-base text-black' variant='h2'>
                {name}
            </Typography>
            {weatherData ? (
                <CardWeather city_name={weatherData.city_name} datetime={weatherData.datetime} sunrise={weatherData.sunrise} sunset={weatherData.sunset} temp={weatherData.temp} weather={weatherData.weather}/>
            ) : null }
        </>
    )
}

export default CityWeather