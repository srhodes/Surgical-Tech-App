
import React, { Component } from 'react'
import NavBarComponent from '../components/NavBarComponent'
import ToggleComponent from '../components/ToggleComponent'
import SubHeader from '../components/SubHeader'

const AboutUsPage = () => {
    return(<>
       <NavBarComponent/><SubHeader current= 'About Us' /> About Us <hr/>
    </>)
}

export default AboutUsPage