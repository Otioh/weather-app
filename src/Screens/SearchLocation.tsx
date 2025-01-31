import React, { useState } from 'react'
import { Geocode } from '../extras/types';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../extras/constants';

interface Props {
    addLocation:(geocode: Geocode)=>void;
}

function SearchLocation({addLocation}:Props) {
    const [results, setResults] = useState<Geocode[]>([])
    const [search_term, setSearch_term] = useState('')
    const [loading, setloading] = useState(false)
    const [notFoundError, setNotFoundError] = useState(false)

const searchLocationData=(search_term:string)=>{
    if(loading) return;
if(!search_term)  return;
setloading(true)
axios.get(`${BASE_URL}/geo/1.0/direct?q=${search_term},${search_term},${search_term}&appid=${API_KEY}`).then((response)=>{
setResults(response.data)
console.log('response', response.data)
if(response.data.length===0){
    setNotFoundError(true)
}else{
    setNotFoundError(false)
}
}).catch((error)=>{
alert('Error occured, please try again')
console.log('search error', error)
}).finally(()=>{
    setloading(false)
})

}




  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    
    <form className="d-flex" role="search" onSubmit={(e)=>{
        e.preventDefault();
        searchLocationData(search_term)
    }}>
      <input onChange={(e)=>{setSearch_term(e.target.value)
        if(e.target.value.length>3){
            searchLocationData(e.target.value)
        }
      }} className="form-control me-2" type="search" placeholder="Search location" aria-label="Search"/>
      {loading?<span>Searching, please wait....</span>:<button disabled={loading} className="btn btn-outline-primary" type="submit">Search</button>}
    </form>
  </div>
</nav>

<div className='row'>
    
<div className='col-12'>
{notFoundError &&<div className="alert alert-danger w-50 m-3" role="alert">
No result found for your search
</div>}

      <ol className="list-group list-group-numbered p-3">
        {
            results?.map((data)=>{
                return   <li className="list-group-item d-flex justify-content-between align-items-start">
                <div  className="ms-2 me-auto ">
                  <div className="fw-bold">{data.name}</div>
                 {data.state}
                </div>
                 <button className="btn btn-outline-primary" onClick={()=>addLocation(data)}>Save to History</button>
              </li>
            })
        }

 
</ol>
</div>
      </div>
    </div>
  )
}

export default SearchLocation
