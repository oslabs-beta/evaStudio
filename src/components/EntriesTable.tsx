import React from 'react'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import CSVUploader from './CSVUploader';
import MessageRowEntry from './MessageRowEntry';
import TopicRowEntry from './TopicRowEntry';

const EntriesTable = (props: { topicSelected: boolean }): JSX.Element => {
  // true || false hinges on what value is passed into component. ex: if user selected a topic then props.topicSelected === true
  const { topicSelected } = props;
  const tableEntries: Array<JSX.Element> = []; // array to hold tableEntries, whether messages or topics

  // if a user has not selected a topic to view messages from... run this block of code
  if (!topicSelected) {
    const getAllMessagesUrl: string = '/topics';
    let navigate = useNavigate();

    const navigateFunc = (path) => {
      return navigate(path);
    }

    axios.get(getAllMessagesUrl)
      .then(res => {
        res.data.forEach(entry => {
          tableEntries.push(
            <TopicRowEntry
              topic={entry.topic}
              navigateFunc={navigateFunc}
            />
          );
        });
      });


    // block of HTML to be returned if a topic has NOT been selected
    return (
      <div id='entriesTable'>
        <h1>Entries Table</h1>
        {tableEntries}
      </div>
    )
  }


  //  ----------- TWO RENDER LOGICS FOR THIS COMPONENT: either is a topic or is looking to fill table with messages ----------- 



  // if a user HAS selected a topic from the table... run this block of code
  if (topicSelected) {
    const { topicName } = useParams<string>(); // URL param that is the topic name needed for request to backend
    const getTopicMessagesUrl: string = `/topics/${topicName}`;

    axios.get(getTopicMessagesUrl)
      .then(res => {
        res.data.forEach(entry => {
          tableEntries.push(
            <MessageRowEntry
              message={entry.message}
            />
          );
        });
      });


    // block of HTML to return if a topic has been selected 
    return (
      <div id='entriesTable'>
        <h1>Entries Table</h1>
        <div id='addMessagePanelWrapper' className='mr-[40px] bg-white p-[30px]'>
          <h3 className='text-2xl mb-[20px] font-medium'>Add Messages from CSV</h3>
          <CSVUploader />
        </div>
        <div id='addMessagePanelWrapper' className='bg-white p-[30px]'>
          <h3 className='text-2xl mb-[20px] font-medium'>All Messages in Topic</h3>
          {tableEntries}
        </div>
      </div>
    )
  }
}

export default EntriesTable;