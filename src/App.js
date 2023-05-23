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
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<> <HomePage/></>}/>
        <Route path='directory' element={ <> <DirectoryPage/> </>}/>
        <Route path='contactus' element={ <> <ContactUsPage/> </>}/>
        <Route path='aboutus' element={ <> <AboutUsPage/> </>}/>
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
