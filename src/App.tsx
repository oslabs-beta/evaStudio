import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GetStartedContainer from './containers/GetStartedContainer';
import ConnectPanel from './components/ConnectPanel';
import CreateClustersContainer from './containers/CreateClustersContainer';
import MainContainer from './containers/MainContainer';
import './styles/globals.css';

import heroImg from './assets/hero.svg';

const App = (): JSX.Element => {
  return (
    <div className='h-screen bg-indigo-50 flex flex-col md:flex-row gap-4 items-center md:justify-around' id='app'>
      <NavBar />
      <div className='md:my-auto w-fit h-fit' id='containersWrapper'>
        <Routes>
          <Route path='/' element={<GetStartedContainer />} />
          <Route path='/connect-cluster' element={<ConnectPanel />} />
          <Route path='/create-dev-clusters' element={<CreateClustersContainer />} />
          <Route path='/dashboard/*' element={<MainContainer />} />
        </Routes>
      </div>
      <img className='md:w-3/5' id='brandImg' src={heroImg} />
    </div >
    
  );
}

export default App;