import React from 'react';
import './App.css';
import NavBar from './Componets/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componets/Pages/Home'
import Resume from './Componets/Pages/Resume';
import Hisotry from './Componets/Pages/History';
import SignUp from './Componets/Pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/resume' Component={Resume} />
          <Route exact path='/history' Component={Hisotry} />
          <Route exact path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
