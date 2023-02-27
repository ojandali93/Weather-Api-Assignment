import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

import Weather from './Components/Weather';

function App() {

  const apiKey = "9040ef43483308a3e9ced80425665e1b"

  const [data, setDate] = useState('')
  const [zipcode, setZipcode] = useState('90210')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  const getWeather = () => {
    let url = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + 
      lat + '&lon=' + 
      long + '&appid=' + 
      apiKey
    try {
      axios.get(url)
        .then((data) => {
          console.log(data)
          setDate(data.data)
        })
        .catch((error) => {
          console.error(error)
        })
    } catch(error){
      console.error(error)
    }
  }

  const convertZipToLongLat = () => {
    let url = "http://api.openweathermap.org/geo/1.0/zip?zip=" + zipcode + "&appid=" + apiKey
    try {
      axios.get(url)
        .then((data) => {
          console.log(data.data)
          setLat(data.data.lat)
          setLong(data.data.lon)
        })
        .catch((error) => {
          console.error(error)
        })
    } catch(error){
      console.error(error)
    }
    console.log('sent request')
  }

  useEffect(() => {
    long === '' ? console.log('no long') : getWeather()
  }, [long])

  return (
    <div className="App">
      <Weather 
        data={data} 
        zip={zipcode} 
        setZipcode={setZipcode}
        convertZipToLongLat={convertZipToLongLat}/>
    </div>  
  );
}

export default App;
