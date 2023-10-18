import { type Location } from '../../types.d'

const apiKey = import.meta.env.VITE_API_KEY
const baseUrlApi = 'https://api.weatherbit.io/v2.0/current'

const getCurrentWeather = async(url: string) => {
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

export const getCurrentWeatherByLocation = async ({latitude, longitude}: Location) => {
    const url = `${baseUrlApi}?lat=${latitude}&lon=${longitude}&key=${apiKey}&include=minutely`
    return await getCurrentWeather(url)
}

export const getCurrentWeatherByCity = async (name: string, city_id: number) => {
    const parsedName = name.split(' ').join('+')
    const url = `${baseUrlApi}?city=${parsedName}&city_id=${city_id}&key=${apiKey}`
    return await getCurrentWeather(url)
}