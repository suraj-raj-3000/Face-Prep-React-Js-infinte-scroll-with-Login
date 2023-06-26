// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarHeader() {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <span class="navbar-text">
      <Link to="/">
               <button className="btn btn-danger">Log out</button>
           </Link>
      </span>
    </div>
  </div>
</nav>
        
    )
}
