import React,{ useEffect,useRef,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import axiosApi from '../Helpers/axios';
import { DashboardConstant } from '../Constant'

const Dashboard = () => {

   const  dispatch = useDispatch();

   const { dashboardData } = useSelector(state => state.userInfo);


   useEffect(async() => {

      const { data }  = await axiosApi.get('/dashboard');

      console.log("Dashboard Data",data.files);

      data.status === true ? 
            dispatch({
                type:DashboardConstant.DASHBOARD_SUCCESS,
                payload:{files:data.files}
            })
            : 
            dispatch({
                type:DashboardConstant.DASHBOARD_FAILURE,
                payload:{error:data.error}
            })
      
  }, []);


    return (
        <>
            <div className="swipgle-app" id="app">
                <div className="container-xl">
                  <div className="swipgle-pages">
         <div className="page-header d-print-none">
            <div className="row align-items-center">
               <div className="col">
                  <div className="page-pretitle">Overview</div>
                  <h2 className="page-title">Dashboard</h2>
               </div>
               <div className="col-auto ms-auto">
                  <div className="btn-list">
                     <span className="d-none d-sm-inline">
                        <a href="/" className="btn btn-white">
                           
                           Start transfer
                        </a>
                     </span>
                     
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-4">
               <div className="box">
                  <h1 className="text-primary ">29.16 MB</h1>
                  <h4>Remaining space</h4>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="box">
                  <h1>{ dashboardData.length }</h1>
                  <h4>Total Transferred Action</h4>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="box">
                  <h1>0</h1>
                  <h4>Transactions</h4>
               </div>
            </div>
         </div>
         <div className="transferred-table mt-4">
            <h2 className="mb-3">Transferred files activity</h2>
            {
               //JSON.stringify(dashboardData) 
            (dashboardData.length > 0) ? (

            <div className="card" >
               <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                     <thead>
                        <tr>
                           <th>Transfer ID</th>
                           <th className="text-center">Total files</th>
                           <th className="text-center">Transfer method</th>
                           <th className="text-center">Password Protected</th>
                           <th className="text-center">Expiry Time</th>
                           <th className="text-center">Transfer date</th>
                           <th className="text-center">Expiry date</th>
                           <th className="text-center">Status</th>
                           <th className="text-center">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                     {dashboardData.map(item => (  

                        <tr>
                           <td>{ item._id}</td>
                           <td className="text-center">{ item.file.length }</td>
                           <td className="text-center">{ item.form_type}</td>

                           <td className="text-center">{ item.password_protected ? 'Yes' : 'No'}</td>
                           <td className="text-center">{ item.is_set_expiry ? '1 Day' : item.expirytime}</td>

                           <td className="text-center">{item.createdAt}</td>
                           <td className="text-center text-success">06/09/2021 07:22 AM</td>
                           <td className="text-center"><span className='badge bg-success me-1'></span> Generated</td>
                           
                           <td className="text-center"><a href="https://demo.vironeer.com/swipgle/user/transfers/view/h1EYBEGVDUqiBAS" className="btn btn-sm">View</a></td>
                        </tr>
                     ))}
                     </tbody>
                  </table>
               </div>
            </div> ) : ( 
               <div className="empty">
                  <div className="empty-img"><img src="https://demo.vironeer.com/swipgle/images/sections/empty.svg" height="128" alt="Empty"/>
                  </div>
                  <p className="empty-title">No activity found</p>
                  <p className="empty-subtitle text-muted">It seems that you do not have any activities yet.</p>
               </div>
            )
         }
         </div>
      </div>
               </div>
            </div>
        </>
    )
}

export default Dashboard
