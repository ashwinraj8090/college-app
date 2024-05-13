import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/AboutProfile">Profile</a></li>
                <li><a class="dropdown-item" href="/AboutVision">Vision and Mission</a></li>
                <li><a class="dropdown-item" href="/AboutDepartments">Departments</a></li>
                <li><a class="dropdown-item" href="/AboutFacilities">Facilities</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ContactUs">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
