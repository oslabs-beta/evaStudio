import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const OverviewContainer = () => {
  const { httpLink, dateNow } = useSelector((state: any) => state.credentials);

  const style = {
    borderStyle: 'none',
    verticalAlign: 'bottom',
    marginWidth: "0",
    marginHeight: "0"
  }

  return (
    <div id='overviewContainer'>
      <h1>Overview Container</h1>
      <div className='flex flex-wrap'>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=647&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} style={style} className='w-1/4' frameBorder={0}></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=233&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} style={style} className='w-1/4' frameBorder={0}></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=625&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" style={style} className='w-1/4' frameBorder={0}></iframe>
        <iframe src={`http://${httpLink}/d-solo/5nhADrDWk/kafka-metrics?refresh=1m&orgId=1&panelId=40&from=${dateNow - 900000}&to=${dateNow}&var-job=kafka&var-broker=All&var-topic=All&var-online_broker=3&theme=light`} width="450" height="200" style={style} className='w-1/4' frameBorder={0}></iframe>
        <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?orgId=1&refresh=1m&from=${dateNow - 900000}&to=${dateNow}&panelId=1&theme=light`} width="450" height="300" style={style} className='w-1/2' frameBorder={0}></iframe>
        <iframe src={`http://${httpLink}/d-solo/-2xxKk67k/kafka-overview?panelId=2&orgId=1&from=${dateNow - 900000}&to=${dateNow}&theme=light`} width="450" height="300" style={style} className='w-1/2' frameBorder={0}></iframe>
      </div>
    </div>
  )
}


export default OverviewContainer;