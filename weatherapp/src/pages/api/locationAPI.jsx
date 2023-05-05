import { OPEN_WEATHER_API_KEY } from './API_KEY'

// TODO: create a search bar for inputting City!
export const getGeographicalCoordinates = async () => {
  const city = 'Vancouver'
  const stateCode = ''
  const countryCode = '124' // 124 is canada
  const limit = 2

  let geoLocations = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=${limit}&appid=${OPEN_WEATHER_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log({ data })
      return data
    })

  console.log({ geoLocations })

  if (geoLocations.length > 0) {
    let firstLocation = geoLocations[0]
    let latlon = {
      name: firstLocation?.name,
      state: firstLocation.state,
      lat: firstLocation?.lat,
      lon: firstLocation?.lon,
    }

    // console.log({ latlon })
    return latlon
  } else return null
}

// get the latlon of the current user
// TODO: ....cannot save latlon outside the navigator.geolocation fx
export const getLocation = async () => {
  let lat = 0
  let lon = 0
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude
    lon = position.coords.longitude
    console.log('lat lon is:', lat, lon)
    return { lat, lon }
  })
  console.log('final lat lon is:', lat, lon)
  return { lat, lon }
}
