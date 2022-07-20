import React from 'react'
import NavigationPanel from '../components/NavigationPanel';
import { Routes, Route, useNavigate } from "react-router-dom";
import OverviewContainer from './OverviewContainer';
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
    <div className='w-full flex' id='mainContainer'>
      <NavigationPanel navigateFunc={navigateFunc} />

      <div className='flex flex-col justify-center items-center' id='mainContainerWrapper' >

        <Routes>
          <Route path='overview' element={<OverviewContainer />} />
          <Route path='topics' element={<TopicsContainer />}>
            <Route path='all_topics' element={<EntriesTable topicSelected={false} />} />
            <Route path=':topicName' element={<EntriesTable topicSelected={true} />} />
          </Route>
          <Route path='zookeeper' element={<ZookeeperContainer />} />
        </Routes>

      </div>

    </div>
  )
}


export default MainContainer;