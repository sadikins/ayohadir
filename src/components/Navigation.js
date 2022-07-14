import React from 'react'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">
                <Logo/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Karyawan</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Absen</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</>
  )
}

export default Navigation