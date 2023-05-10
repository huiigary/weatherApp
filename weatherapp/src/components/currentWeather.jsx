import { useState, useEffect } from 'react'
import { getWeather } from '@/pages/api/weatherAPI'
import { Grid, Typography } from '@mui/material'

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState()
  let weatherObj = {}
  useEffect(() => {
    // define async/await function to do
    const weather = async () => {
      setWeatherData(await getWeather())
      console.log({ weatherObj }, `hi there${''}`)
    }
    // /run it
    weather()
    // this gets called when component unmounts
    return () => {}
  }, [])

  let sunrise = new Date(weatherData?.sys.sunrise * 1000).toLocaleTimeString()
  let sunset = new Date(weatherData?.sys.sunset * 1000).toLocaleTimeString()

  return weatherData ? (
    <Grid
      container
      direction={'column'}
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography variant='h3'>{weatherData.name}</Typography>
      <Typography variant='h4'>{Math.round(weatherData.main.temp)}</Typography>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        ></img>
      </div>

      {/* description */}
      <div>{weatherData.weather[0].description}</div>

      {/* Day high and low */}
      <div>
        H: {weatherData.main.temp_max} L:{weatherData.main.temp_min}
      </div>

      {/* Sunrise/sunset */}
      <div>
        Sunrise/Sunset:{sunrise},{sunset}
      </div>
      <div> Hourly Forecast:</div>
    </Grid>
  ) : (
    <div> no weather data</div>
  )
}
