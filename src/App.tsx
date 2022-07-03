import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GetStartedContainer from './containers/GetStartedContainer';
import ConnectPanel from './components/ConnectPanel';
import CreateClustersContainer from './containers/CreateClustersContainer';
import MainContainer from './containers/MainContainer';

const App = (): JSX.Element => {
  return (
    <div id='app'>
      <NavBar />
      <div id='containersWrapper'>
        <Routes>
          <Route path='/' element={<GetStartedContainer />} />
          <Route path='/connect-cluster' element={<ConnectPanel />} />
          <Route path='/create-dev-clusters' element={<CreateClustersContainer />} />
          <Route path='/dashboard/*' element={<MainContainer />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;