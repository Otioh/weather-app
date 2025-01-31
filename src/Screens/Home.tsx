import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Geocode } from '../extras/types'

interface Props {
    savedLocations: Geocode[];
    setCurrentLocation: (geodata:Geocode)=>void;
    removedLocation:(index: number)=>void;
}

function Home({savedLocations, setCurrentLocation, removedLocation}:Props) {
const navigate=useNavigate()

  return (
    <div>

      <Link className='btn btn-primary m-3' to={'/add-location'}>
        Add Location
      </Link>
      <div className='row'>
<div className='col-12'>


      <ol className="list-group list-group-numbered p-3">
        {
            savedLocations.map((data, index)=>{
                return   <li className=" list-group-item d-flex justify-content-between align-items-start">
                <div onClick={()=>{navigate('location-details')
                    setCurrentLocation(data)
                }} className="geodata ms-2 me-auto ">
                  <div className="fw-bold">{data.name}</div>
                  {data.state}
                </div>
                <div>

                <span className="badge text-bg-primary rounded-pill">{data.country}</span>
                <button className='btn btn-light' onClick={()=>removedLocation(index)}>Remove</button>
                </div>
              </li>
            })
        }

  
</ol>
</div>
      </div>
    </div>
  )
}

export default Home
