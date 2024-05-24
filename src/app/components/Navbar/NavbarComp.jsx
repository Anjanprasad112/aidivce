import React from 'react'
import Link from 'next/link'

const NavbarComp = () => {
  return (
    <div className='d-flex justify-content-center m-2'>
        <nav className="navbar navbar-expand-lg  py-2 ">
  <div className="container-fluid rounded shadow">
    {/* <a className="navbar-brand" href="#">AiDvice</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarComp