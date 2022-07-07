import React from 'react';
import { useNavigate } from "react-router-dom";
import { connectCluster, createClustersContainer } from '../routes/reactRoutes';
// import  ReactLogo  from "../assets/logo.svg";
// import LogoIcon from '../assets/logo.svg' ;


const GetStartedContainer = () => {
  let navigate = useNavigate();

  const getStartedNavigation = (path) => {
    navigate(path);
  }

  return (
    <div className='bg-slate-700 rounded-md mx-auto text-white px-8 py-16'>
      <div className="w-12">
        {/* <svg></svg> */}
              {/* <ReactLogo className="fill-white" /> */}
            </div>
      <div className='max-w-xl grid grid-cols-1 gap-8' id='gettingStartedWrapper'>
        <h3 className='text-6xl font-bold'>Let's Get Started</h3>
        <p className='text-lg'>Connect your remote cluster to monitor their health metrics, or create new clusters locally to fast-track your development process.</p>
        <div className='flex justify-start items-center gap-5'  id='startBtnsWrapper'>
          <button className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2' onClick={() => getStartedNavigation(connectCluster)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
    
            <span>Connect</span> 
          </button>
          <button className='bg-gradient-to-r from-slate-600 to-blue-400 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2'  onClick={() => getStartedNavigation(createClustersContainer)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
            <span className='whitespace-nowrap'>
              Create Clusters
            </span>
           </button>
        </div>
      </div>
      {/* <img className='md:w-2/5' id='brandImg' src='https://static.vecteezy.com/system/resources/previews/004/745/458/non_2x/modern-flat-design-3d-isometric-concept-of-big-data-analysis-for-banner-and-website-isometric-landing-page-template-digital-information-chart-and-statistic-financial-budget-illustration-free-vector.jpg' /> */}
    </div>
  )
}

export default GetStartedContainer;