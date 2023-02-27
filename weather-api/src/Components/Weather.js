import React, { useEffect, useState } from 'react'

const Weather = (props) => {
  const {
    data,
    zip,
    setZipcode,
    convertZipToLongLat
  } = props

  const renderData = () => {
    return(
      <div>
        Today's Temp: {data.current.temp} <br/>
        Wind Gust: {data.current.wind_gust}<br/>
        Wind Speed: {data.current.speed}<br/>
        Humidity: {data.current.humidity}<br/>
        Sunrise: {data.current.sunrise}<br/>
        Sunset: {data.current.sunset}<br/>
      </div>
    )
  }

  const noData = () => {
    return(
      <div>

      </div>
    )
  }
  
  return (
    <div>
      Weather
      <form>
        <input 
          type="text"
          placeholder='Enter Zip Code'
          value={zip}
          onChange={(e) => {setZipcode(e.target.value)}}
        />
      </form>
      <div>
        <button onClick={() => {convertZipToLongLat()}}>
          Get Weather Data
        </button>
      </div>
      {
        data === '' ? noData() : renderData()
      }
    </div>
  )
}

export default Weather