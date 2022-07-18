import React from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

const MessagesTable = () => {
  const { topicName } = useParams<string>(); // URL param that is the topic name needed for request to backend
  const getAllMessagesUrl: string = `/topics/${topicName}`;

  axios.get(getAllMessagesUrl)
    .then(res => console.log(res));

  return (
    <div id='MessagesTable'>
      <h1>Messages Table</h1>
    </div>
  )
}

export default MessagesTable;