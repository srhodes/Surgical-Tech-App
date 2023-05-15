import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import LayoutComponent from './components/LayoutComponent';
import NavBarComponent from './components/NavBarComponent';
import ToggleComponent from './components/ToggleComponent';
import CarouselComponent from './components/CarouselComponent';
import DirectoryPage from './pages/DirectoryPage';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<>  <NavBarComponent/> <h1>Sergey Karl Tech App </h1><hr/><ToggleComponent/></>}/>
        <Route path='directory' element={ <DirectoryPage/>}/>
        <Route path='contactus' element={ <> <NavBarComponent/> Contact Us <hr/> </>}/>
        <Route path='aboutus' element={ <> <NavBarComponent/> About Us <hr/></>}/>
        {/* <Route path='/data' element={
          
          
          data.map(
            (datum, i) => 
            <p key={i}>{datum}</p>
          )
          
      
      }/> */}
      </Routes>
      {/* <NavBarComponent/>
      
      <ToggleComponent/> */}
      
    </div>
  );
}

export default App;
