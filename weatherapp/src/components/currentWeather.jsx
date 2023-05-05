import { useState, useEffect } from 'react'
import { getWeather } from '@/pages/api/weatherAPI'

export default function CurrentWeather() {
  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div>
      <h1>Current Weather</h1>

      <img src='https://openweathermap.org/img/wn/13d@2x.png'></img>
    </div>
  )
}
