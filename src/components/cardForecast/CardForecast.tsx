import { Typography } from "@mui/material"
import Container from "@mui/material/Container"
import { DailyForecast } from "../../types"


const CardForecast = ( { datetime, high_temp, low_temp, temp, weather }: DailyForecast ) => {
    
    return (
        <>
            <Container className="flex flex-col w-full px-0">
                <Typography className='w-full text-sm text-gray-400 font-bold lg:text-base' variant='h2'>
                    {datetime.getDate()}
                </Typography>
                <Container className="flex flex-col w-full px-0 lg:flex-row lg:items-center">
                    <img className="w-full lg:w-2/3" src={`icons/${weather.icon}.png`} alt='Icon'/>
                    <Typography className='text-base font-bold text-black lg:w-1/3 lg:text-lg lg:justify-self-start' variant='h2'>
                        {`${temp}°`}
                    </Typography>
                </Container>
                <Container className="hidden lg:flex w-full px-0 mx-0 justify-center">
                    <Typography className='text-sm font-base px-1' variant='h2' color='secondary'>
                        {`${low_temp}°`}
                    </Typography>
                    <Typography className='text-sm font-base px-1' variant='h2' color='primary'>
                        {`${high_temp}°`}
                    </Typography>
                </Container>
            </Container>
        </>
    )
}

export default CardForecast