import React from 'react'
import NavigationPanel from '../components/NavigationPanel';
import { Routes, Route, useNavigate } from "react-router-dom";
import OverviewContainer from './OverviewContainer';
import ProducersContainer from './ProducersContainer';
import ConsumersContainer from './ConsumersContainer';
import TopicsContainer from './TopicsContainer';
import ZookeeperContainer from './ZookeeperContainer';

const MainContainer = () => {
  let navigate = useNavigate();

  const navigateFunc = (path) => {
    return navigate(path);
  }

  return (
    <div id='mainContainer'>
      <div id='mainContainerWrapper'>
        <NavigationPanel navigateFunc={navigateFunc} />
        <div id='componentContainer'>
          <Routes>
            <Route path='overview' element={<OverviewContainer />} />
            <Route path='producers' element={<ProducersContainer />} />
            <Route path='consumers' element={<ConsumersContainer />} />
            <Route path='topics' element={<TopicsContainer />} />
            <Route path='zookeeper' element={<ZookeeperContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default MainContainer;