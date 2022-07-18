import React from 'react'
import NavigationPanel from '../components/NavigationPanel';
import { Routes, Route, useNavigate } from "react-router-dom";
import OverviewContainer from './OverviewContainer';
import ProducersContainer from './ProducersContainer';
import ConsumersContainer from './ConsumersContainer';
import TopicsContainer from './TopicsContainer';
import ZookeeperContainer from './ZookeeperContainer';
import TopicsTable from '../components/TopicsTable';
import MessagesTable from '../components/MessagesTable';

const MainContainer = () => {
  let navigate = useNavigate();

  const navigateFunc = (path) => {
    return navigate(path);
  }

  return (
    <div className='w-full' id='mainContainer'>
      <div className='flex w-full' id='mainContainerWrapper' >
        <NavigationPanel navigateFunc={navigateFunc} />
        <div className='w-3/4' id='componentContainer'>
          <Routes>
            <Route path='overview' element={<OverviewContainer />} />
            <Route path='producers' element={<ProducersContainer />} />
            <Route path='consumers' element={<ConsumersContainer />} />
            <Route path='topics' element={<TopicsContainer />}>
              <Route path='all-topics' element={<TopicsTable />} />
              <Route path=':topicName' element={<MessagesTable />} />
            </Route>
            <Route path='zookeeper' element={<ZookeeperContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default MainContainer;