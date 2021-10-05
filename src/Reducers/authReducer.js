import { signupConstant,loginConstant,logoutConstatnt,autoLoginConstant } from '../Constant'


const intialState = {
    user:null,
    isAuth:false,
    error:'',
    isloading:false
}

export default (state=intialState,action)=>{

        switch(action.type){

            case signupConstant.SIGNUP_REQUIEST:
                state = {
                    ...state,
                    isloading:true
                }
            break

            case signupConstant.SIGNUP_SUCCESS:
                state = {
                    ...state,
                    isloading:false,
                    isAuth:true,
                    user:action.payload.user
                }
            break

            case signupConstant.SIGNUP_FAILURE:
                state = {
                    ...state,
                    isloading:false
                }
            break

            /* { Login } */    
            case loginConstant.LOGIN_REQUIEST:
                state = {
                    ...state,
                    isloading:true
                }
            break

            case loginConstant.LOGIN_SUCCESS:
                state = {
                    ...state,
                    isloading:false,
                    isAuth:true,
                    user:action.payload.user
                }
            break

            case loginConstant.LOGIN_FAILURE:
                state = {
                    ...state,
                    isloading:false,
                    error:action.payload.error
                }
            break

            case logoutConstatnt.USER_LOGOUT_SUCCESS:
                state = {
                    ...state,
                    user:null,
                    isAuth:false, 
                    error:''              
                 }
            break 
            
            case logoutConstatnt.USER_LOGOUT_FAILURE:
                state = {
                    ...state,
                    error:action.payload.error
                }
            break  

            case autoLoginConstant.AUTO_AUTH_SUCCESS:
                state = {
                    ...state,
                    user:action.payload.user,
                    isAuth:action.payload.isAuth
                }
                break  
        }
        return state;
}