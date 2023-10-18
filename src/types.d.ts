export type Location = {
    longitude: number
    latitude: number
}

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

export interface CityType {
    country: string
    geonameid: number
    name: string
    subcountry: string | null
}

export interface DailyForecast {
    datetime: Date
    high_temp: number
    low_temp: number
    temp: number
    weather: Weather
}

export type ForecastData = {
    forecast: DailyForecast[]
}

export type CompleteWeatherData = WeatherData & ForecastData