import React, { useState } from 'react';


const NavBarComponent = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">SKTA</a> */}
  <img style={{width:50, height: 60}}src="https://cdn1.iconfinder.com/data/icons/surgery/450/surgery_doctor-512.png"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="/directory">Directory</a>
      <a class="nav-link" href="/aboutus">About Us</a>
      <a class="nav-link" href="/contactus">Contact Us</a>
      <a class="nav-link disabled">Disabled</a>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavBarComponent;