import React from 'react'
import { topicMessages } from '../routes/reactRoutes';

const TopicRowEntry = (props: { topic: string, navigateFunc: Function }) => {
  const { topic, navigateFunc } = props;

  return (
    <div>
      <p onClick={() => navigateFunc(`${topicMessages}/${topic}`)}>{topic}</p>
    </div>
  )
}

export default TopicRowEntry;