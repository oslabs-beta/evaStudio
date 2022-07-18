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
    <div id='uploadComponent'>
      <form className='flex flex-col' enctype="multipart/form-data" onSubmit={(e) => uploadCsv(e)}>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
        <input
          type='file'
          name="uploaded_csv"
          id='uploadedCsv'
          className='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-[10px]'
          onChange={(e) => csvFileUpload = e.target.files[0]}
        />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300 ml-[3px]" id="file_input_help">(1) .csv file per upload</p>
        <button
          className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48 text-white mt-[20px]'
          type='submit'
        >
          Upload Messages
        </button>
      </form>
    </div>
  )
}

export default CSVUploader;