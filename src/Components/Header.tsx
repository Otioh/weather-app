import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  const navigate=useNavigate()
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <div className="geodata navbar-brand text-primary" onClick={()=>navigate('/')}>
      <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      Weather App
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
