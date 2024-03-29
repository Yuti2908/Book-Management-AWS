import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar1() {

  return (
    <><nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="https://img.icons8.com/color/48/story-book.png" alt="Logo" width="48" height="48" className="d-inline-block align-text-top me-2"/>
    </a>
    <a className="navbar-brand" href="/">BookByte</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success me-2" type="submit">Search</button>
          <Link to="/">
          <button className="btn btn-danger" type="button">Logout</button>
          </Link>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}
