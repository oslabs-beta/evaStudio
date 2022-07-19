import React from 'react'

const MessageRowEntry = (props: { message: string }) => {
  const { message } = props;

  return (
    <div className='px-[50px] py-[15px] grid grid-cols-3 border-b-[1px] hover:bg-slate-50'>
      <p>{message}</p>
    </div>
  )
}

export default MessageRowEntry;