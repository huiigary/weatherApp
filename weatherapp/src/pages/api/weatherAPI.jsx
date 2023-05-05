import { OPEN_WEATHER_API_KEY } from './API_KEY'
import { getGeographicalCoordinates } from './locationAPI'

export const getWeather = async () => {
  // let latlon = await getLocation()
  let latlon = await getGeographicalCoordinates()
  let lat = latlon.lat
  let lon = latlon.lon
  const units = 'metric'
  let weatherData = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      console.log({ weatherData })
      return weatherData
    })

  let coord = weatherData.coord
  let weather = weatherData.weather
  let main = weatherData.main
  let visibility = weatherData.visibility
  let wind = weatherData.wind
  let clouds = weatherData.clouds
  let rain = weatherData.rain
  let snow = weatherData.clouds
  let sys = weatherData.sys
  let timezone = weatherData.timezone

  let response = { weather, coord, main, visibility }
  // console.log({ response })

  return weatherData
}
