import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import ProfileInformation from '../Components/UserSettings/ProfileInformation'
import SequirtyInfo from '../Components/UserSettings/SequirtyInfo'

const Setting = () => {

    const dispatch = useDispatch(); 
    const auth = useSelector(state=>state.auth);
	console.log("Data form Redux.",auth) 

    return (
        <>
            <div className="swipgle-app" id="app">
            <div className="container-xl">
                <div className="swipgle-pages">
                    <div className="page-header d-print-none">
                        <div className="row align-items-center">
                        <div className="col">
                            <div className="page-pretitle">Account</div>
                            <h2 className="page-title">Settings</h2>
                        </div>
                        <div className="col-auto ms-auto">
                            <div className="btn-list">
                                <Link to="/dashboard" className="btn">

                                    Back to dashboard
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>

                    <ProfileInformation userstate={auth}/>
                    <SequirtyInfo/>

                    <div className="row py-5">
                        <div className="col-lg-5">
                        <div className="sec__title">
                            <h1>Account cache</h1>
                            <p>Here you can delete your account cache</p>
                        </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="card">
                            <div className="card-body">
                                <p>When you upload files and do not complete the transfer steps, your files are moved to the account cache and you can delete them at any time to increase your space.</p>
                                <form className="mb-1" id="cacheForm" action="https://demo.vironeer.com/swipgle/user/settings/cache/delete" method="POST" className="mt-2">
                                    <input type="hidden" name="_token" value="IGeRewTBfN3qLpoduEKSezcUUrk0bPd01oPozroO"/> 
                                    <button id="deleteCacheBtn" type="submit" className="btn btn-danger">
                                    
                                    Delete cache (0 bytes)
                                    </button>
                                </form>
                                <div className="text-right">
                                    <i className="text-muted"><small>Cache updated every 30 minutes</small></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Setting
