import axiosApi from '../Helpers/axios'
import { signupConstant,loginConstant } from '../Constant'

export const Signup = (formData)=>{

    return async(dispatch) =>{

        // API CAll
        const {data}  = await axiosApi.post('/register',{...formData});

        console.log("API REsponse",data);
        
        try {

            console.log("API REsponse1",data.status);

            data.status === true ? 
            dispatch({
                type:signupConstant.SIGNUP_SUCCESS,
                payload:{user:data.data,isAuth:true}
            })
            : 
            dispatch({
                type:signupConstant.SIGNUP_FAILURE,
                payload:{error:data.error}
            })
 
        } catch(err){
            console.log(err);
            //Dispatch Faild Case
            dispatch({
                type:signupConstant.SIGNUP_FAILURE,
                payload:{error:err}
            })
        }
    }
}



export const LoginAction = (formData)=>{

    return async(dispatch) =>{

        // API CAll
        dispatch({type:loginConstant.LOGIN_REQUIEST,payload:{
            ...formData
        }});

        const {data}  = await axiosApi.post('/login',{...formData});

        //console.log("API REsponse",data);
        
        try {

            //console.log("API REsponse1",data.message);

            data.status === true ? 
            dispatch({
                type:loginConstant.LOGIN_SUCCESS,
                payload:{user:data.data,isAuth:true}
            })
            : 
            dispatch({
                type:loginConstant.LOGIN_FAILURE,
                payload:{error:data.message}
            })
 
        } catch(err){
            console.log(err);
            //Dispatch Faild Case
            dispatch({
                type:loginConstant.LOGIN_FAILURE,
                payload:{error:err}
            })
        }
    }
}