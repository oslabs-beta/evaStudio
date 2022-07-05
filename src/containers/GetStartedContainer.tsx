import React from 'react';
import { useNavigate } from "react-router-dom";
import { connectCluster, createClustersContainer } from '../routes/reactRoutes';

const GetStartedContainer = () => {
  let navigate = useNavigate();

  const getStartedNavigation = (path) => {
    navigate(path);
  }

  return (
    <div className='bg-amber-400'>
      <div id='gettingStartedWrapper'>
        <h3>Let's Get Started</h3>
        <p>Connect your remote cluster to monitor their health metrics, or create new clusters locally to fast-track your development process.</p>
        <div id='startBtnsWrapper'>
          <button className='primaryButton' onClick={() => getStartedNavigation(connectCluster)}>Connect</button>
          <button className='secondaryButton' onClick={() => getStartedNavigation(createClustersContainer)}>Create Clusters</button>
        </div>
      </div>
      <img id='brandImg' src='https://static.vecteezy.com/system/resources/previews/004/745/458/non_2x/modern-flat-design-3d-isometric-concept-of-big-data-analysis-for-banner-and-website-isometric-landing-page-template-digital-information-chart-and-statistic-financial-budget-illustration-free-vector.jpg' />
    </div>
  )
}

export default GetStartedContainer;