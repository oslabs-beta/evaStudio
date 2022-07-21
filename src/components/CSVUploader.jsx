import React from 'react'
import axios from 'axios';

const CSVUploader = () => {
  let csvFileUpload = null;

  const uploadCsv = async (e) => {
    e.preventDefault();

    const addMessagesUrl = '/topics/add-messages'
    const formData = new FormData();
    formData.append('uploaded_csv', csvFileUpload);

    axios.post(addMessagesUrl, formData)
      .then(res => console.log(res));
  }

  return (
    <div className='bg-white p-[30px] max-w-[400px] w-full rounded-lg bg-opacity-80 shadow-xl' id='uploadComponent'>
      <h3 className='text-2xl text-black mb-[20px] font-medium'>Stream Data from CSV</h3>

      <form className='flex flex-col' enctype="multipart/form-data" onSubmit={(e) => uploadCsv(e)}>
        <label className="block mb-2 text-sm font-medium text-black" for="file_input">Upload file</label>
        <input type='file' name="uploaded_csv" className='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-[10px]'
          onChange={(e) => csvFileUpload = e.target.files[0]}
        />
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 ml-[3px]" id="file_input_help">(1) .csv file per upload</p>

        <h4 className='text-black mt-[10px]'>Choose topic</h4>
        <select className='text-black border-[2px] rounded-md p-[5px] my-[10px]'>
          <option value={'json'}>JSON</option>
          <option value={'http'}>HTTP</option>
          <option value={'API'}>API</option>
        </select>

        <button
          className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 text-white mt-[15px]'
          type='submit'
        >
          Upload Messages
        </button>
      </form>
    </div>
  )
}

export default CSVUploader;