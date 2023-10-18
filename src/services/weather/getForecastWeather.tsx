import { type Location } from '../../types.d'

const baseUrlApi = 'https://api.weatherbit.io/v2.0/forecast/daily'
const apiKey = import.meta.env.VITE_API_KEY

const getForecastWeather = async(url: string) => {
    let dataWeather = null
    try {
        const response = await fetch(url);
        const { data } = await response.json();
        dataWeather = data
    } catch (error) {
        console.error(error);
    }
    return dataWeather
}

export const getForecastWeatherByLocation = async ({latitude, longitude}: Location) => {
    const url = `${baseUrlApi}?lat=${latitude}&lon=${longitude}&key=${apiKey}&include=minutely`
    return await getForecastWeather(url)
}

export const getForecastWeatherByCity = async (name: string, city_id: number) => {
    const url = `${baseUrlApi}?city=${name}&city_id=${city_id}&key=${apiKey}`
    return await getForecastWeather(url)
}