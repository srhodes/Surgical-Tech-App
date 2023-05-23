
import React, { Component } from 'react'
import NavBarComponent from '../components/NavBarComponent'
import LayoutComponent from '../components/LayoutComponent'
import SubHeader from '../components/SubHeader'

const DirectoryPage = () => {
    return(<>
    <NavBarComponent/><SubHeader current= 'Directory' /> <LayoutComponent/>
    </>)
}

export default DirectoryPage