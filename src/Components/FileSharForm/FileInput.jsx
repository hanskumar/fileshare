import React from 'react'
import Dropzone from "react-dropzone";
import { MdFileUpload } from "react-icons/md";
import axios from 'axios'

const FileInput = () => {

   const handleDrop = (files) => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file)
      formData.append("upload_preset", "insta-clone")
      formData.append("cloud_name","harsh-cloud-bucket");
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/harsh-cloud-bucket/image/upload", formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log(data);
      })
    });
  }
    const maxSize = 1048576;
    return (
      <Dropzone>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          )}
      </Dropzone>
    )
}

export default FileInput
