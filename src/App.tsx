import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';

const App = () => {

  const [setup, setSetup] = useState(false);

  return (
    <div id='app'>
      {/* <NavBar />
      {!setup ? <LoginContainer setSetup={setSetup} /> : <MainContainer />}
      <Routes>
        <Route path='/' />
        <Route exact-path='/overview' element={<MainContainer />} />
      </Routes> */}
      <MainContainer />
    </div>
  )
}

export default App;