import React,{useState} from 'react'
import { MdCloudUpload,MdLink,MdAttachFile ,MdAddToQueue,MdStorage} from "react-icons/md";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import axiosApi from '../../Helpers/axios';
import { UploadFile } from '../../Actions'
import { useDispatch,useSelector } from 'react-redux'


const UploadFileForm = () => {

   const[image, setImage] = useState();

   const dispatch = useDispatch();

   // specify upload params and url for your files
   const getUploadParams = async ({ file ,meta }) => { 
       //return { url: 'https://httpbin.org/post' } 

       const formData = new FormData()
       formData.append("file", file)
       formData.append("upload_preset", "insta-clone")
       formData.append("cloud_name","harsh-cloud-bucket");

       return { url: 'https://api.cloudinary.com/v1_1/harsh-cloud-bucket/image/upload',body: formData }
    }

   // called every time a file's `status` changes
   const handleChangeStatus = ({ meta, file,xhr}, status) => { 
       console.log("handleStatus",status, meta, file)

       if (xhr) {
         xhr.onreadystatechange = () => {
            console.log("XHR::",xhr.readyState);
           if (xhr.readyState === 4) {
             const result = JSON.parse(xhr.response);
              console.log(result);

               setImage(result);
               dispatch(UploadFile({files:result}))
           }
         }
      }
       
     /*  if(status == "done") { 
         var json = JSON.parse(xhr.response)
         console.log("id added",json.blob.id)
      } else if(status == "removed") {
         var json = JSON.parse(xhr.response)
         console.log("id removed",json.blob.id)  
      } else if(status == "exception_upload "){

      } */    
    }

   // Return array of uploaded files after submit button is clicked
   const handleSubmit =  (files, allFiles) => {
      console.log(files.map(f => f.meta))       
      allFiles.forEach(f => f.remove())
   }

    
    return (
        <>
            <div className="col-lg-6">
                  <div className="card card-upload" id="swipgle_upload_box">
                     <div className="card-header">
                        <MdCloudUpload/> Upload Files
                     </div>
                     <div className="card-body p-0">
                       

                        {/* Dropzone */}

                           <Dropzone
                              getUploadParams={getUploadParams}
                              onChangeStatus={handleChangeStatus}
                              //onSubmit={handleSubmit}
                              submitButtonDisabled={true}
                              maxFiles={1}
                              //multiple={true}
                              inputContent="Drop 3 Files"
                              accept="image/*,audio/*,video/*"
                              inputContent={(files, extra) => (extra.reject ? 'Only Image, audio and video files allowed!' : 'Select and Drop Files')}
                              styles={{
                                    dropzoneReject: { borderColor: '#F19373', backgroundColor: '#F1BDAB' },
                                    dropzone:{overflow: 'hidden', border: 'none', cursor: 'pointer'},
                                    inputLabel: (files, extra) => (extra.reject ? { color: '#A02800' } : {}),
                              }}
                           />

                        {/* <Progressbar/> */}

                     </div>
                  </div>
               </div>
            
        </>
    )
}

export default UploadFileForm
