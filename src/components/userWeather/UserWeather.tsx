import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import CardWeather from "../cardWeather/CardWeather"
import type { WeatherData } from '../cardWeather/CardWeather'
interface Location {
    longitude: number
    latitude: number
}

const UserWeather = () => {
    const [currentNavLocation, setCurrentNavLocation] = useState<Location | null>(null)
    const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null)

    const getWeather = async ({latitude, longitude}: Location) => {
        const apiKey = import.meta.env.VITE_API_KEY
        const url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&include=minutely`
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
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              setCurrentNavLocation({
                longitude,
                latitude
               })
            }, function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            });
          } else {
            console.log("Geolocation is not supported in this browser.");
          }
    }, [])

    useEffect( () => {
        if(currentNavLocation){
            const fetchCurrentWeather = async() => {
                const currentWeather = await getWeather(currentNavLocation)
                setCurrentWeather(currentWeather)
            }
            fetchCurrentWeather()
        }
    }, [currentNavLocation])

    return (
        <>
            <Typography className='py-4 text-base text-black' variant='h2'>
            Your current location
            </Typography>
            {currentNavLocation ? (
                `Your coords location are: 
                Longitude: ${currentNavLocation.longitude}
                Latitude: ${currentNavLocation.latitude}`
            ) : null }
            {currentWeather ? (
                <CardWeather city_name={currentWeather.city_name} datetime={currentWeather.datetime} sunrise={currentWeather.sunrise} sunset={currentWeather.sunset} temp={currentWeather.temp} weather={currentWeather.weather}/>
            ) : null }
        </>
    )
}

export default UserWeather