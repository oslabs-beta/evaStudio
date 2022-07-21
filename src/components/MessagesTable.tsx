import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import CSVUploader from './CSVUploader';
import MessageRowEntry from './MessageRowEntry';
import TopicRowEntry from './TopicRowEntry';

const MessagesTable = () => {
  const { topicName } = useParams<string>(); // URL param that is the topic name needed for request to backend
  const getTopicMessagesUrl: string = `/topics/topic_messages`;
  const [entryRows, setEntryRows] = useState([]);

  axios.get(getTopicMessagesUrl)
    .then(res => {
      console.log(typeof res.data.rows);
      const newData = res.data.rows.map(({ timestamp, message }) => <MessageRowEntry key={timestamp} timestamp={timestamp} message={message} />);
      setEntryRows(() => newData);
    });

  // block of HTML to return if a topic has been selected 
  return (
    <div>
      <div id='entriesTable' className='col-span-3 row-span-1 h-full w-full rounded-lg'>
        <h1 className='text-3xl font-semibold mb-[20px]'>{topicName} Messages</h1>

        <div className='flex'>

          <div className='bg-white pt-[10px] p-[30px] min-w-2/3'>
            <h3 className='text-2xl font-medium'>All Messages in Topic</h3>

            <div id='table' className='bg-white rounded-2xl border-[1px] text-black min-w-[800px] max-h-[70vh] overflow-y-auto'>
              <div id='tableHeadings' className='grid grid-cols-2 mb-[3px] border-b-2 bg-slate-700 text-white px-[50px] py-[30px]'>
                <p>Timestamp</p>
                <p>Message</p>
              </div>

            <div className='h-[60vh] overflow-auto'>
              {entryRows}
            </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MessagesTable;
