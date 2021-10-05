import React from 'react'

const SequirtyInfo = () => {
    return (
        <>
            <div className="row py-5">
                <div className="col-lg-5">
                    <div className="sec__title">
                        <h1>Security information</h1>
                        <p>Here you can change your password</p>
                    </div>
                </div>
                <div className="col-lg-7">
                <div className="note note-danger print-error-msg-sec" style={{display:"none"}}><span></span></div>
                <div className="card">
                    <form id="passwordForm" method="POST" className="mt-2">
                        <div className="card-body">
                            <div className="form-group">
                            <label htmlFor="new-password" className="control-label">Current Password :</label>
                            <input id="currentpassword" type="password" className="form-control" name="current-password"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="new-password" className="control-label">New Password :</label>
                            <input id="newpassword" type="password" className="form-control" name="new-password" required/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="new-password-confirm" className="control-label">Confirm New Password :</label>
                            <input id="newpasswordconfirm" type="password" className="form-control" name="new-password_confirmation" required/>
                            </div>
                        </div>
                        <div className="card-footer text-right">
                            <button id="savePassBtn" type="submit" className="btnpass btn btn-primary">
                            <span className="spinner-border-pass spinner-border spinner-border-sm me-2 d-none" role="status" aria-hidden="true"></span>Save</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default SequirtyInfo
