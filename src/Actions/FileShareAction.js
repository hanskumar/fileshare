import axiosApi from "../Helpers/axios";
import { uploadFileConstant ,GenLinkFileConstant } from '../Constant'

export const UploadFile = (fileUrl)=>{

    return async(dispatch) =>{

        dispatch({
            type:uploadFileConstant.UPLOAD_FILE_REQUIEST,
            payload:{fileUrl}
        })

        // API CAll
        const {data}  = await axiosApi.post('/uploadFiles',{...fileUrl});

        //console.log("API REsponse",data);
        
        try {

            //console.log("API REsponse1",data.data);

            data.status === true ? 
            dispatch({
                type:uploadFileConstant.UPLOAD_FILE_SUCCESS,
                payload:{file:data.data,fileUpload:true}
            })
            : 
            dispatch({
                type:uploadFileConstant.UPLOAD_FILE_FAILURE,
                payload:{error:data.error}
            })
 
        } catch(err){
            console.log(err);
            //Dispatch Faild Case
            dispatch({
                type:uploadFileConstant.UPLOAD_FILE_FAILURE,
                payload:{error:err}
            })
        }
    }
}


export const shareFileAction = (formData)=>{

    return async(dispatch) =>{

        dispatch({
            type:GenLinkFileConstant.GENlINK_FILE_REQUIEST,
            payload:{formData}
        })

        // API CAll
        const {data}  = await axiosApi.post('/shareFile',{...formData});

        console.log("API  shareFileAction REsponse",data);
        
        try {

            console.log("API REsponse1",data.data.file);

            data.status === true ? 
            dispatch({
                type:GenLinkFileConstant.GENlINK_FILE_SUCCESS,
                payload:{file:data.data.file,fileshare:true}
            })
            : 
            dispatch({
                type:GenLinkFileConstant.GENlINK_FILE_FAILURE,
                payload:{error:data.error}
            })
 
        } catch(err){
            console.log(err);
            //Dispatch Faild Case
            dispatch({
                type:GenLinkFileConstant.GENlINK_FILE_FAILURE,
                payload:{error:err}
            })
        }
    }
}
