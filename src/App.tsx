
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Screens/Home'
import SearchLocation from './Screens/SearchLocation'
import LocationDetails from './Screens/LocationDetails'
import { useState } from 'react'
import { Geocode } from './extras/types'

function App() {


  const [locations, setLocations] = useState<Geocode[]>([])
  const [currentLocation, setCurrentLocation] = useState<Geocode|null>(null)

  const addLocation=(geocode: Geocode)=>{
setLocations([...locations, geocode])
alert('Added!')
  }

  const removedLocation =(indexToRemove:number)=>{
    let newlocations=locations
    newlocations.splice(indexToRemove, 1);
    setLocations([...newlocations])
  }

  return (
    <>
 
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home removedLocation={removedLocation} setCurrentLocation={setCurrentLocation} savedLocations={locations}/>} />
      <Route path="/add-location" element={<SearchLocation addLocation={addLocation} />}/>
      <Route path="/location-details" element={<LocationDetails geodata={currentLocation} />}/>
        
    </Routes>
  </BrowserRouter>
  

    </>
  )
}

export default App
