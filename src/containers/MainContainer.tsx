import React from 'react'
import NavigationPanel from '../components/NavigationPanel';
import { Routes, Route, useNavigate } from "react-router-dom";
import OverviewContainer from './OverviewContainer';
import ProducersContainer from './ProducersContainer';
import ConsumersContainer from './ConsumersContainer';
import TopicsContainer from './TopicsContainer';
import ZookeeperContainer from './ZookeeperContainer';
import EntriesTable from '../components/EntriesTable';
import Footer from '../components/Footer';

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
              <Route path='all_topics' element={<EntriesTable topicSelected={false} />} />
              <Route path=':topicName' element={<EntriesTable topicSelected={true} />} />
            </Route>
            <Route path='zookeeper' element={<ZookeeperContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default MainContainer;