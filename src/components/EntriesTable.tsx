import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import CSVUploader from './CSVUploader';
import MessageRowEntry from './MessageRowEntry';
import TopicRowEntry from './TopicRowEntry';

const EntriesTable = (): JSX.Element => {
  // true || false hinges on what value is passed into component. ex: if user selected a topic then props.topicSelected === true
  // const tableEntries: Array<JSX.Element> = []; // array to hold tableEntries, whether messages or topics
  const [entryRows, setEntryRows] = useState([]);

  // if a user has not selected a topic to view messages from... run this block of code
  // if (!topicSelected) {
  let navigate = useNavigate();

  const navigateFunc = (path) => {
    return navigate(path);
  }

  const getAllMessagesUrl: string = '/topics';

  // axios.get(getAllMessagesUrl)
  //   .then(res => {
  //     res.data.forEach(entry => {
  //       tableEntries.push(
  //         <TopicRowEntry
  //           topic={entry.topic}
  //           partitions={entry.partitions}
  //           replicated={entry.replicated}
  //           navigateFunc={navigateFunc}
  //         />
  //       );
  //     });
  //   });

  // block of HTML to be returned if a topic has NOT been selected
  return (
    <div id='entriesTable' className='col-span-3 row-span-1 h-full w-full rounded-lg'>
      <h2 className='text-3xl font-semibold mb-[20px]'>All Topics</h2>

      {/* {tableEntries} */}
      {/* For testing the onclick function */}
      <div id='table' className='bg-white rounded-2xl border-[1px] text-black'>
        <div id='tableHeadings' className='grid grid-cols-3 mb-[3px] border-b-2 bg-slate-700 text-white px-[50px] py-[30px] rounded-2xl'>
          <p>Name of Topic</p>
          <p>Amount of Partitions</p>
          <p>Times Replicated</p>
        </div>

        <TopicRowEntry topic={'JSON Topic'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
        <TopicRowEntry topic={'HTTP Topic'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
        <TopicRowEntry topic={'API Topic'} partitions={1} replicated={5} navigateFunc={navigateFunc} />
      </div>

    </div>
  )
}


//  ----------- TWO RENDER LOGICS FOR THIS COMPONENT: either is a topic or is looking to fill table with messages ----------- 



// // if a user HAS selected a topic from the table... run this block of code
// if (topicSelected) {
//   const { topicName } = useParams<string>(); // URL param that is the topic name needed for request to backend
//   const getTopicMessagesUrl: string = `/topics/topic_messages`;

//   axios.get(getTopicMessagesUrl)
//     .then(res => {
//       console.log(typeof res.data.rows);
//       const newData = res.data.rows.map(({ timestamp, message }) => <MessageRowEntry key={timestamp} timestamp={timestamp} message={message} />);
//       // for (const row of res.data.rows) {
//       //   tableEntries.push(<MessageRowEntry key={row.timestamp} timestamp={row.timestamp} message={row.message} />)
//       // }

//       setEntryRows(() => newData);
//     });

//   // block of HTML to return if a topic has been selected 
//   return (
//     <div id='entriesTable' className='col-span-3 row-span-1 h-full w-full rounded-lg'>
//       <h1 className='text-3xl font-semibold mb-[20px]'>{topicName} Messages</h1>

//       <div className='flex'>

//         <div className='bg-white p-[30px] min-w-2/3'>
//           <h3 className='text-2xl mb-[20px] font-medium'>All Messages in Topic</h3>

//           <div id='table' className='bg-white rounded-2xl border-[1px] text-black min-w-[800px]'>
//             <div id='tableHeadings' className='grid grid-cols-2 mb-[3px] border-b-2 bg-slate-700 text-white px-[50px] py-[30px]'>
//               <p>Timestamp</p>
//               <p>Message</p>
//             </div>

//             {entryRows}
//             {/* For testing the onclick function */}
//             {/* <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} />
//             <MessageRowEntry message={'I am a message'} /> */}

//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }
// }


export default EntriesTable;