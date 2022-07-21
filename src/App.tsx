import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GetStartedContainer from './containers/GetStartedContainer';
import ConnectPanel from './components/ConnectPanel';
import CreateClustersContainer from './containers/CreateClustersContainer';
import MainContainer from './containers/MainContainer';
import Footer from './components/Footer';


const App = (): JSX.Element => {
  return (
    <div className='h-screen bg-gray-900 bg-cover text-white relative' id='app'>
      <NavBar />
      <div className='flex items-center'>
        <div className='d:my-auto w-fit h-fit' id='containersWrapper'>
          <Routes>
            <Route path='/' element={<GetStartedContainer />} />
            <Route path='/connect-cluster' element={<ConnectPanel />} />
            <Route path='/create-dev-clusters' element={<CreateClustersContainer />} />
            <Route path='/dashboard/*' element={<MainContainer />} />
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;