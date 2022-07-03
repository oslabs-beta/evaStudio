import React from 'react';
import { useNavigate } from "react-router-dom";
import { connectCluster, createClustersContainer } from '../routes/reactRoutes';

const GetStartedContainer = () => {
  let navigate = useNavigate();

  const getStartedNavigation = (path) => {
    navigate(path);
  }

  return (
    <div id='getStartedContainer'>
      <div id='gettingStartedWrapper'>
        <h3>Get Started:</h3>
        <p>To get started, connect a remote cluster(s) to monitor their health metrics, or create new clusters locally to fast-track development.</p>
        <div id='startBtnsWrapper'>
          <button className='primaryButton' onClick={() => getStartedNavigation(connectCluster)}>Connect</button>
          <button className='secondaryButton' onClick={() => getStartedNavigation(createClustersContainer)}>Create Clusters</button>
        </div>
      </div>
    </div>
  )
}

export default GetStartedContainer;