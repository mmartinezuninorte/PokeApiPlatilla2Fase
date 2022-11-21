import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-navbar fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand mb-2"> 
      <img src=" https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
      className='img-logo' /></a>
    {/* <form className="d-flex">
      <input className="form-control me-2 bg-danger " type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-danger" type="submit">Search</button>
    </form> */}
  </div>
</nav>
  )
}

export default Navbar