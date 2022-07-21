import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const CreateClustersPanel = (): JSX.Element => {
  const clusterInfo = useSelector((state: any) => state.pipelineConfig);

  const createClusters = () => {
    console.log('!!!!!!!!!!!!!CREATING A CLUSTER!!!!!!!!!!');

    // request to backend for Andres goes in here
    axios.post('/create-clusters', clusterInfo, {
      responseType: 'blob'
    })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        console.log(url);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'docker-compose.yml');
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }

  const throttle = (f, t) => {
    let ready = true;
    let asked = false;

    const receiveData = () => {
      ready = false;

      asked = false;

      setTimeout(() => {
        if (asked) receiveData();
        else ready = true;
      }, t);

      f();
    }

    return () => {
      if (ready) receiveData();
      else asked = true;
    }
  }

  const throttledCreateCluster = throttle(createClusters, 30000)

  return (
    <div className='w-full bg-slate-700 rounded-lg mx-auto px-10 py-16 max-w-xl text-white' id='CreateClusters'>
      <h1 className='text-3xl font-bold'>Create a Data Pipeline</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='flex flex-col m-0 mt-[15px]'>

          <h3 className='mt-[15px] mb-[5px] font-semibold text-lg'>Step 1 - Open Docker</h3>
          <p className='ml-[10px]'>If you don't have it installed, please download and open <a className='font-semibold text-orange-500' href='https://www.docker.com/products/docker-desktop/'>Docker's Desktop application</a>.</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold text-lg'>Step 2 - Select Data Source</h3>
          <p className='ml-[10px]'>Choose your preferred data source from the drop down memu.</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold text-lg'>Step 3 - Number Kafka Clusters</h3>
          <p className='ml-[10px]'>Select the number of Kafka brokers you would like to generate. This will also automatically create a Zookeeper and, a JMX exporter for each broker.</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold text-lg'>Step 4 - Choose Your Data Sink</h3>
          <p className='ml-[10px]'>From the drop down list, choose your preferred data sink.</p>

          <h3 className='mt-[15px] mb-[5px] font-semibold text-lg'>Final Step - Create Pipeline</h3>
          <p className='ml-[10px]'>Click create pipeline and our application will automatically docker compose up your environment.</p>

          <button
            className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 flex items-center justify-center gap-2 mt-[35px]'
            onClick={throttledCreateCluster}>
            Create Pipeline
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateClustersPanel;