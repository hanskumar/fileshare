import React from 'react'

const FileDetails = () => {
    return (
        <>
            <div className="swipgle-app" id="app">
                <div className="container-xl">
                    <div className="swipgle-pages">
                        <div className="page-header d-print-none">
                            <div className="row align-items-center">
                            <div className="col">
                                <div className="page-pretitle">Account</div>
                                <h2 className="page-title">View transfer #H1EYBEGVDUQIBAS</h2>
                            </div>
                            <div className="col-auto ms-auto d-none d-lg-flex">
                                <div className="btn-list">
                                    <a href="https://demo.vironeer.com/swipgle/user/dashboard" className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                       
                                        </svg>
                                        Back to dashboard
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="card mb-3">
                                <div className="card-header bg-swipgle-primary text-white">Transfer information</div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex"><strong>Transfer ID :</strong> <span className="m-0 ms-auto">H1EYBEGVDUQIBAS</span></li>
                                    <li className="list-group-item d-flex"><strong>Email from :</strong> <span className="m-0 ms-auto">
                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__">Dummy Text</a>
                                        </span></li>
                                    <li className="list-group-item d-flex"><strong>Expiry date :</strong> <span className="m-0 ms-auto text-success">06/09/2021 07:22 AM</span></li>
                                    <li className="list-group-item d-flex"><strong>Protected by password :</strong> <span className="m-0 ms-auto">No</span></li>
                                    <li className="list-group-item d-flex"><strong>Total files :</strong> <span className="m-0 ms-auto">1</span></li>
                                    <li className="list-group-item d-flex"><strong>Transfer method :</strong> <span className="m-0 ms-auto">Generate link</span></li>
                                    <li className="list-group-item d-flex"><strong>Spend Space :</strong> <span className="m-0 ms-auto text-danger">- 858.78 KB</span></li>
                                    <li className="list-group-item d-flex"><strong>Status :</strong> <span className="m-0 ms-auto"/><span className='badge bg-success me-1'></span> Generated</li>
                                    <li className="list-group-item d-flex"><strong>Transfer date :</strong> <span className="m-0 ms-auto">06/09/2021 06:22 AM</span></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="card mb-3">
                                <div className="card-header bg-swipgle-primary text-white">Transfered files</div>
                                <div className="card-body">
                                    <li className="mb-2">UJl1e97aNZb8gpa.jpg</li>
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

export default FileDetails
