import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { cardWeatherFormatDate } from "../../helpers/formatingDates"
import { WeatherData } from "../../types"


const CardWeather = ( { city_name, datetime, sunrise, sunset, temp, weather }: WeatherData ) => {
    return (
        <>
            <Container className="flex justify-space items-center w-full pb-10 lg:px-20 lg:pb-20">
                <Container className="hidden w-24 h-24 lg:flex flex-col items-center justify-center">
                    <img className="w-24 h-24" src={`/icons/sunrise.png`} alt='Icon'/>
                    <Typography className='w-full text-lg text-gray-400 font-bold'>
                        {sunrise}
                    </Typography>
                </Container>
                <Container className="flex flex-col w-1/2">
                    <img src={`/icons/${weather.icon}.png`} alt='Icon'/>
                    <Container className="flex items-center px-0 max-w-xs lg:items-baseline">
                        <Typography className='w-full text-sm text-black font-bold pr-2 md:text-xl md:pr-0 lg:text-3xl' variant='h2'>
                        {cardWeatherFormatDate(datetime)}
                        </Typography>
                        <Typography className="text-black pl-2 lg:text-5xl" variant="h2">
                            {`${temp}°`}
                        </Typography>
                    </Container>
                </Container>
                <Container className="hidden w-24 h-24 lg:flex flex-col items-center justify-center">
                    <img className="w-24 h-24" src={`/icons/sunset.png`} alt='Icon'/>
                    <Typography className='w-full text-lg text-gray-400 font-bold'>
                        {sunset}
                    </Typography>
                </Container>
            </Container>
        </>
    )
}

export default CardWeather