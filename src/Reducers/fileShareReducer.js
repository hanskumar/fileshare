import { uploadFileConstant ,GenLinkFileConstant } from "../Constant";

const intialState = {
    files:'',
    error:{},
    isloading:false,
    fileshare:false
}

export default (state=intialState,action)=>{

    switch(action.type){

        case uploadFileConstant.UPLOAD_FILE_REQUIEST:
                state = {
                    ...state,
                    isloading:true
                }
            break

        case uploadFileConstant.UPLOAD_FILE_SUCCESS:
                state = {
                    ...state,
                    isloading:false,
                    files:action.payload.file,
                    //files: [...state.files, action.payload.file]
                }
            break

        case uploadFileConstant.UPLOAD_FILE_FAILURE:
                state = {
                    ...state,
                    isloading:false,
                    error:action.payload.error
                }
            break

            
        case GenLinkFileConstant.GENlINK_FILE_REQUIEST:
            state = {
                ...state,
                isloading:true
            }
        break

        case GenLinkFileConstant.GENlINK_FILE_SUCCESS:
            state = {
                ...state,
                isloading:false,
                fileshare:true,
                files: action.payload.file
                //files: [...state.files, action.payload.file]
            }
        break

        case GenLinkFileConstant.GENlINK_FILE_FAILURE:
            state = {
                ...state,
                isloading:false,
                error:action.payload.error
            }
        break
    }
    return state;
}