import { updateProfileConstant ,profileInfoConstant ,DashboardConstant} from "../Constant";

const intialState = {
    user:null,
    error:{},
    isloading:false,
    profileupdate:false,
    dashboardData:[]
}

export default (state=intialState,action)=>{

    switch(action.type){

        case updateProfileConstant.UPDATE_PROFILE_REQUIEST:
                state = {
                    ...state,
                    isloading:true
                }
            break

        case updateProfileConstant.UPDATE_PROFILE_SUCCESS:
                state = {
                    ...state,
                    isloading:false,
                    user:action.payload.user,
                    profileupdate:true,
                }
            break

        case updateProfileConstant.UPDATE_PROFILE_FAILURE:
                state = {
                    ...state,
                    isloading:false,
                    user:action.payload.user
                }
            break


        /* {USER Profile Info} */    
        case profileInfoConstant.GET_PROFILE_REQUIEST:
                state = {
                    ...state,
                    isloading:false
                }
            break

        case profileInfoConstant.GET_PROFILE_SUCCESS:
                state = {
                    ...state,
                    isloading:false,
                    user:action.payload.user
                }
            break

        case profileInfoConstant.GET_PROFILE_FAILURE:
                state = {
                    ...state,
                    isloading:false,
                    user:action.payload.user
                }
            break
            
        /* {USER Dashboard data} */    
        case DashboardConstant.DASHBOARD_REQUIEST:
                state = {
                    ...state,
                    isloading:true
                }
            break

        case DashboardConstant.DASHBOARD_SUCCESS:
                state = {
                    ...state,
                    isloading:false,
                    dashboardData:action.payload.files
                }
            break

        case DashboardConstant.DASHBOARD_FAILURE:
                state = {
                    ...state,
                    isloading:false
                }
            break    
    }
    return state;
}