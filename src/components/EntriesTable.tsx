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
              partitions={entry.partitions}
              replicated={entry.replicated}
              navigateFunc={navigateFunc}
            />
          );
        });
      });


    // block of HTML to be returned if a topic has NOT been selected
    return (
      <div id='entriesTable'>
        <h2 className='text-3xl font-semibold mb-[20px]'>All Topics</h2>

        {/* {tableEntries} */}
        {/* For testing the onclick function */}
        <div id='table' className='bg-white rounded-2xl border-[1px]'>
          <div id='tableHeadings' className='grid grid-cols-3 mb-[3px] border-b-2 bg-slate-700 text-white px-[50px] py-[30px]'>
            <p>Name of Topic</p>
            <p>Amount of Partitions</p>
            <p>Times Replicated</p>
          </div>

          <TopicRowEntry topic={'Topic of Great Importance'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 2'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 3'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 4'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 5'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 6'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 7'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 8'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 9'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
          <TopicRowEntry topic={'Topic 10'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
        </div>

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
        <h1 className='text-3xl font-semibold mb-[20px]'>{topicName}</h1>

        <div className='flex'>
          <div id='addMessagePanelWrapper' className='mr-[40px] bg-white p-[30px] min-w-1/3 max-h-[300px]'>
            <h3 className='text-2xl mb-[20px] font-medium'>Add Messages from CSV</h3>
            <CSVUploader />
          </div>

          <div className='bg-white p-[30px] min-w-2/3'>
            <h3 className='text-2xl mb-[20px] font-medium'>All Messages in Topic</h3>

            <div id='table' className='bg-white rounded-2xl border-[1px]'>
              <div id='tableHeadings' className='grid grid-cols-3 mb-[3px] border-b-2 bg-slate-700 text-white px-[50px] py-[30px]'>
                <p>Name of Topic</p>
              </div>

              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />
              <MessageRowEntry message={'I am a message'} />

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default EntriesTable;