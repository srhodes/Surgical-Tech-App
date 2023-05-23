
import React, { Component } from 'react'
import NavBarComponent from '../components/NavBarComponent'
import ToggleComponent from '../components/ToggleComponent'
import SubHeader from '../components/SubHeader'

const HomePage = () => {
    return(<>
      <NavBarComponent/> <SubHeader current= 'Home' /> <h1>Sergey Karl Tech App </h1><hr/><ToggleComponent/>
    </>)
}

export default HomePage