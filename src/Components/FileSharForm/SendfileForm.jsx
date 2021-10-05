import React from 'react'
import { MdAddBox } from "react-icons/md";
import {useDispatch,useSelector } from 'react-redux'
import { useForm } from "react-hook-form";


const SendfileForm = () => {

    const auth = useSelector(state => state.auth);
    const { register, handleSubmit ,watch,formState: { errors }} = useForm();

    const submit = async(data)=> {

    }

    return (
        <>
            <div id="send" className="card-information card tab-pane show active">
                <div className="card-body swipgle-form-send">
                <div className="swipgle-transfer-box">
                    <div className="note note-danger print-error-msg-send" style={{display:"none"}}><span></span></div>
                    <form className="swipgle-form-files" autoComplete="off" onSubmit={handleSubmit(submit)}>
                        <input type="hidden" name="_token" value="UntjcwGvcEroWGpnKizvQVBpR608CVj0DL53Thys"/>                              
                        <div className="form-group input-group send_emails">
                            <input type="text" id="email_to" className="form-control" placeholder="Email to send to"
                                {...register("email_to",{ 
                                    required: true 
                                })}
                            />
                            {errors.email_to?.type === 'required' && (<span className="invalid-feedback"><strong>Email to is required.</strong></span>)}
                        </div>
                        <div id="dynamic_field" className="form-group"></div>
                        
                        <div className="form-group">
                            <input className="form-control" id="subject" type="subject" placeholder="Subject"
                            {...register("subject",{ 
                                required: true 
                            })}
                            />
                            {errors.subject?.type === 'required' && (<span className="invalid-feedback"><strong>Subject is required.</strong></span>)}
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="message" rows="3" className="form-control" placeholder="Message (optional)"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-check form-switch" >
                                    <input className="form-check-input" type="checkbox" name="addingPassword" value="1" id="addingPassword" {...register("pass_protected")} />
                                    <span className="form-check-label">Protect with password</span>
                                </label>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" name="addingDate" value="1" id="addingDate"  {...register("expirytime")} />
                                <span className="form-check-label">Extend expiry time</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="form-group password_input d-none">
                            <input className="form-control" id="password" type="password" name="password" placeholder="Password (optional)"/>
                            <small className="text-muted">Leave empty to disable password</small>
                        </div>
                        <div className="form-group date_input d-none">
                            <small className="text-warning">Expiry time is 1 hour by default</small>
                            <select className="form-control form-select mt-2" id="expiry_time" name="expiry_time">
                            <option value="" selected disabled>choose expiry time</option>
                            <option value="1">1 Hour</option>
                            <option value="2">1 Day</option>
                            <option value="3">7 Days</option>
                            <option value="4">30 Days</option>
                            </select>
                        </div>
                        <button className="sendFilesBtn btn btn-swipgle-secondary w-100" id="sendFilesBtn">Send</button>
                    </form>
                </div>
                <div className="swipgle-transfer-success d-none text-center">
                    <div className="fade-in">
                        <img src="https://demo.vironeer.com/swipgle/images/sections/success.svg" width="100" height="100" alt="success"/> 
                        <h2>Transfered successfully</h2>
                        <h3 className="transfered_success_mesage"></h3>
                        <button id="transfer_more_files" className="btn btn-primary w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="10" y1="14" x2="21" y2="3" />
                            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>
                            Transfer more files
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default SendfileForm
