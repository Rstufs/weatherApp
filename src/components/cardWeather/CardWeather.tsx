export interface Weather {
    description: string
    code: number
    icon: string
}

export interface WeatherData {
    city_name: string
    datetime: Date
    sunrise: string
    sunset: string
    temp: number
    weather: Weather
}

const CardWeather = ( { city_name, datetime, sunrise, sunset, temp, weather }: WeatherData ) => {
    return (
        <>
            {`Your weather in ${city_name} is: 
            On: ${datetime}
            Temperature: ${temp}ª
            ${weather.description}`}
            <div>
                <img src={`/icons/${weather.icon}.png`} alt='Icon'/>
            </div>
        </>
    )
}

export default CardWeather