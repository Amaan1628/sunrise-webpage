import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const API = 'https://api.sunrise-sunset.org/json'

  const [lat,setLat] = useState('')
  const [long,setLong] = useState('')

  const handleLatitude = (event) => {
    setLat(event.target.value);
  }
  const handleLongitude = (event) => {
    setLong(event.target.value);
  }

  const getTime = async() => {
    const res = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
    console.log(res);
    console.log(res.data.results)
    console.log(res.data.results.sunrise)
    console.log(res.data.results.sunset)
    
    const sunrise = res.data.results.sunrise;
    const sunset = res.data.results.sunset;
  }

  return (
    <div className='flex flex-col'>
      <h1>Sunset and Sunrise</h1>
      <div>
        <input onChange={handleLatitude} type="text">Whats the latitude? </input>
        <input onChange={handleLongitude} type="text">Whats the longitude? </input>
        <h2> {sunrise} </h2>
        <h2> {sunset} </h2>
      </div>
      <button onClick={getTime}>GET Time</button>
    </div>
  );
}

export default App;
