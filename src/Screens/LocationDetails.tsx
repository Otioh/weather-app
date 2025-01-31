import React, { useEffect, useState } from 'react'
import { Geocode, LocationData } from '../extras/types'
import { API_KEY, BASE_URL } from '../extras/constants'
import axios from 'axios'


function LocationDetails({geodata}:{geodata:Geocode|null}) {

   const [result, setResult] = useState<LocationData|null>(null)
  
    const [loading, setloading] = useState(false)
  


    const searchLocationData=()=>{
        if(loading) return;
    setloading(true)
    axios.get(`${BASE_URL}/data/3.0/onecall?lat=${geodata?.lat}&lon=${geodata?.lon}&exclude=hourly,daily&appid=${API_KEY}`).then((response)=>{
    setResult(response.data)
    console.log('response', response.data)
  
    }).catch((error)=>{
    alert('Error occured, please try again')
    console.log('details error', error)
    }).finally(()=>{
        setloading(false)
    })
    
    }


useEffect(()=>{
searchLocationData()
}, [geodata])

  return (
    <div>
      <div className="card text-center">
  <div className="card-header">
    {geodata?.name}, {geodata?.state}
  </div>
  <div className="card-body">
    <h5 className="card-title">Weather :{result?.current.weather[0].main}</h5>
    <p className="card-text">{result?.current.weather[0].description}</p>
    
  </div>
  <div className="card-body">
    <h5 className="card-title">Temperature :{result?.current.temp}</h5>
    <p className="card-text">Feels like: {result?.current.feels_like}</p>
    
  </div>
  <div className="card-footer text-body-secondary">
  Forcast: 
  <div>
    {
      result?.daily.map((day)=>{
        return <div>
          {day.summary}, {day.temp.day}: {day.temp.min}-{day.temp.max}
        </div>
      })
    }
  </div>
  </div>
</div>
    </div>
  )
}

export default LocationDetails
