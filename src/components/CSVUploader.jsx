import React from 'react'
import axios from 'axios';

const CSVUploader = () => {
  let csvFileUpload = null;

  const uploadCsv = async (e) => {
    e.preventDefault();

    const url = '/topics/add-messages'
    const formData = new FormData();
    formData.append('uploaded_csv', csvFileUpload);

    axios.post(url, formData)
      .then(res => console.log(res));
  }

  return (
    <div id='uploadComponent'>
      <form enctype="multipart/form-data" onSubmit={(e) => uploadCsv(e)}>
        <h3>Upload a CSV</h3>
        <input type='file' name="uploaded_csv" id='uploadedCsv' onChange={(e) => csvFileUpload = e.target.files[0]} />
        <button type='submit'>Upload Messages</button>
      </form>
    </div>
  )
}

export default CSVUploader;