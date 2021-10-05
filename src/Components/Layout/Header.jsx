import React from 'react'
import {Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import {useDispatch,useSelector} from 'react-redux'
import axiosApi from '../../Helpers/axios'
import {logoutConstatnt } from '../../Constant'

const Header = () => {

   const dispatch = useDispatch(); 
   const auth = useSelector(state=>state.auth);
	//console.log("Data form Redux.",auth)	

   async function logout(){

      try {
          // API CAll
          const {data}  = await axiosApi.post('/logout');
          console.log("Logout REsponse:",data);

          if(data.status === true){

              //const { user } = res.data;
              dispatch({
                  type:logoutConstatnt.USER_LOGOUT_SUCCESS,
                  payload:{user:data.user,isAuth:data.auth}
              }); 
  
          } else {
              console.log("Error");
              dispatch({
                  type:logoutConstatnt.USER_LOGOUT_FAILURE,
                  payload:{error:"error"}
              }); 
          }

      } catch (err) {
          console.log(err);
      }
  }

    return (
        <header className="navbar navbar-expand-md d-print-none  navbar-dark bg-swipgle-primary ">
            <div className=" container-xl ">
                <div className="navbar-brand">
                  <Link to="/">
                     <img src="https://demo.vironeer.com/swipgle/images/main/logo.svg" width="110" height="32" alt="Swipgle" className="navbar-brand-image"/>
                  </Link>
               </div>
               <div className="navbar-nav flex-row order-md-last">
                  { !auth.isAuth && (
                     <li className="nav-item pe-0 pe-md-2 d-none d-md-flex">
                        <Link to="/login" className="btn btn-swipgle-secondary">
                           <ExitToAppIcon/>
                           Log in
                        </Link>
                     </li>
                     )
                  }
                  {
                     auth.isAuth ? (
                  
                     <div className="nav-item dropdown ps-3">
                        <a herf="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                           <Avatar>{ auth.user.name.charAt(0)}</Avatar>
                           <div className="d-none d-xl-block ps-2">
                              <div>{ auth.user.name } </div>
                           </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                           <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
                           <Link to="/settings" className="dropdown-item">Settings</Link>
                           <div className="dropdown-divider"></div>
                           <Link to="" className="dropdown-item" onClick={logout}>Logout</Link>
                        </div>
                     </div> )
                     : ""
                  }
               </div>
            </div>
     </header> 
    )
}

export default Header
