import React from 'react'
import { topicMessages } from '../routes/reactRoutes';

const TopicRowEntry = (props: { topic: string, partitions: number, replicated: number, navigateFunc: Function }) => {
  const { topic, partitions, replicated, navigateFunc } = props;

  return (
    <div
      className='px-[50px] py-[15px] grid grid-cols-3 border-b-[1px] cursor-pointer hover:underline hover:bg-slate-50'
      onClick={() => navigateFunc(`${topicMessages}/${topic}`)}
    >
      <p>{topic}</p>
      <p>{partitions}</p>
      <p>{replicated}</p>
    </div>
  )
}

export default TopicRowEntry;