const DaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/**
 * Pretty format Date: 
 * Abbreviation name of the day of week & number of the day of the month.
 *
 * @param {Date} datetime - A date param
 * @return {string} pretty string date. Sample: Mon 18
 *
 */

export const cardWeatherFormatDate = ( datetime: Date ): string => {
    const today = !isNaN(datetime.getTime()) ? datetime : new Date()
    const day = today.getDay()
    const dayOfMonth = today.getDate()

    return `${DaysOfWeek[day]} ${dayOfMonth}`
}