import React from 'react'

const MessageRowEntry = (props: { timestamp: string, message: string }) => {
  const { timestamp, message } = props;

  return (
    <div className='px-[50px] py-[15px] grid grid-cols-2 border-b-[1px] hover:bg-slate-50'>
      <p>{timestamp}</p>
      <p>{message}</p>
    </div>
  )
}

export default MessageRowEntry;