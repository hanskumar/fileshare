import axiosApi from "../Helpers/axios";
import { updateProfileConstant ,profileInfoConstant } from '../Constant'

export const UpdateProfileInfo = (formData)=>{

    return async(dispatch) =>{

        dispatch({
            type:updateProfileConstant.UPDATE_PROFILE_REQUIEST,
            payload:{formData}
        })

        // API CAll
        const {data}  = await axiosApi.post('/update-profile',{...formData});

        console.log("API REsponse",data);
        
        try {

            console.log("API REsponse1",data.status);

            data.status === true ? 
            dispatch({
                type:updateProfileConstant.UPDATE_PROFILE_SUCCESS,
                payload:{user:data.data,isAuth:true}
            })
            : 
            dispatch({
                type:updateProfileConstant.UPDATE_PROFILE_FAILURE,
                payload:{error:data.error}
            })
 
        } catch(err){
            console.log(err);
            //Dispatch Faild Case
            dispatch({
                type:updateProfileConstant.UPDATE_PROFILE_FAILURE,
                payload:{error:err}
            })
        }
    }
}

export const GetUserProfileInfo = ()=>{

    return async(dispatch) =>{

        dispatch({
            type:profileInfoConstant.GET_PROFILE_REQUIEST,
            payload:{}
        })

        // API CAll
        const {data}  = await axiosApi.get('/get-profile');

        console.log("API REsponse",data);
        
        try {

            console.log("API REsponse1",data.status);

            data.status === true ? 
            dispatch({
                type:profileInfoConstant.GET_PROFILE_SUCCESS,
                payload:{user:data.data}
            })
            : 
            dispatch({
                type:profileInfoConstant.GET_PROFILE_FAILURE,
                payload:{error:data.error}
            })
 
        } catch(err){
            console.log(err);
            //Dispatch Faild Case
            dispatch({
                type:profileInfoConstant.GET_PROFILE_FAILURE,
                payload:{error:err}
            })
        }
    }
}