import { CircularProgress } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Fragment, useEffect, useState } from 'react'
import type { CityType } from '../../types'
import allCities from './data/cities.json'

type Props = { handleLocation: (city: CityType) => void }

const CountrySelect = ({handleLocation}: Props) => {
    const [options, setOptions] = useState<CityType[]>([])
    const [city, setCity] = useState<CityType | null>(null)
    const [inputCity, setInputCity] = useState<string | undefined>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isLoading = isOpen && options.length === 0

    useEffect(() => {
        let active = true;
    
        if(!isLoading) return undefined
    
        if(active) setOptions([...allCities])
    
        return () => {
          active = false
        }
      }, [isLoading]);
    
      useEffect(() => {
        if(city){
            handleLocation(city)
        }
      }, [city])

    return (
        <Autocomplete
        className="mx-auto w-full md:max-w-sm"
        id="country-select-demo"
        sx={{ width: 300 }}
        open={isOpen}
        onOpen={() => {
            setIsOpen(true);
        }}
        onClose={() => {
            setIsOpen(false);
            setOptions([])
        }}
        options={options}
        value={city}
        onChange={(event: any, newValue: CityType | null) => {
            if(newValue) {
                setOptions([])
                setCity(newValue)
            }
        }}
        inputValue={inputCity}
        onInputChange={(event, newInputValue) => {
            setInputCity(newInputValue)
        }}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0, alignItems: 'flex-start' } }} {...props} key={option.geonameid}>
            {option.name}, {option.country}
            </Box>
        )}
        loading={isLoading}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Choose a city"
            InputProps={{
                ...params.InputProps,
                endAdornment: (
                    <Fragment>
                        {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                    </Fragment>
                ),
            }}
            />
        )}
        />
    )
}

export default CountrySelect