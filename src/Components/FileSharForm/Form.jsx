import React from 'react'

import Tabs from './Tabs';
import Tabtop from './Tabtop';
import SendfileForm from './SendfileForm';
import GenLinkForm from './GenLinkForm';
import UploadFileForm from './UploadFileForm';
import { MdCloudUpload,MdLink,MdAttachFile ,MdAddToQueue,MdStorage} from "react-icons/md";

import FileInput from './FileInput';

const Form = () => {

    return (
         <>
         <div className="swipgle-app" id="app">
         <div className="container-xl">
            <div className="swipgle-home-transfer" id="swipgle-uploader-block">
               <div className="animate__animated animate__backInLeft swipgle-transfer-section py-4" style={{display:"block"}}>
                  {/* <div className="note note-warning mb-4">
                     It seems you have not logged in yet, we invite you to log in or open a new account with us to be able to transfer files anytime and anywhere. log in now or open an account and take advantage of all the features.
                     <div className="note-btn">
                        <a href="" className="btn">Log in</a>
                        <a href="" className="btn btn-primary">Join today !!</a>
                     </div>
                  </div> */}
                  <div className="row" style={{paddingTop:"70px"}}>

                     <div className="col-lg-6">
                        <div className="card-tabs swipgle-tabs">

                           <Tabs/>

                           <div className="tab-content">
                              
                              <SendfileForm/>

                              <GenLinkForm/>
                           </div>
                        </div>
                     </div>

                    <UploadFileForm/>

                    {/* <FileInput/> */}
                  
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>   
    )
}

export default Form
