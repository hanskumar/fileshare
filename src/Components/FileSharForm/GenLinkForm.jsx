import React from 'react'
import { MdLink } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux'
import { shareFileAction } from '../../Actions'


const GenLinkForm = () => {

    const { register, handleSubmit ,watch,formState: { errors }} = useForm();
    const fileInfo = useSelector(state => state.uploadedFileInfo);
    console.log(fileInfo.files);

   /*  const uuid = fileInfo.files.map(el => {
       const url=  el.uuid;
       return url;
    });

    console.log("IIUU",uuid); */
    
    const dispatch = useDispatch();

    const onSubmit = async(data)=> {
        //setIsLoading(true)

        data.file = fileInfo.files;
        data.form_type = 'shared_by_link';

        console.log("final::",data);

        await dispatch(shareFileAction(data));
       //toast.success("Login Successfully Done")

    }

    const pass_protected = watch("pass_protected");
    const expirytime = watch("expirytime");

    return (
        <>
            <div id="link" className="card-information card tab-pane">
                <div className="card-body swipgle-form-send">
                { !fileInfo.fileshare && (    
                <div className="swipgle-form-box">
                    {/* <div className="note note-danger print-error-msg" style={{display:"block"}}><span></span></div> */}
                    
                    <form className="swipgle-form-files" onSubmit={handleSubmit(onSubmit)}>
                                                     
                        <div className="form-group">
                            <input className="form-control"  type="email"  placeholder="Email from" 
                            {...register("link_from_email")}  />
                        </div>
                        <div className="form-group">
                            <input className="form-control" 
                                type="text" 
                                placeholder="Subject (optional)"
                                {...register("link_subject")} 
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox"  value="1" 
                                    {...register("pass_protected")} 
                                    />
                                    <span className="form-check-label">Protect with password</span>
                                </label>
                            </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-check form-switch">
                                    <input className="form-check-input" 
                                        type="checkbox"  
                                        value="1" 
                                        {...register("expirytime")} 
                                    />
                                    <span className="form-check-label">Extend expiry time</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        { pass_protected && (
                            <div className="form-group link_password_input">
                                <input className="form-control" id="link_password" type="password" name="link_password" placeholder="Password (optional)"
                                  {...register("link_password")} 
                                />
                                <small className="text-muted">Leave empty to disable password</small>
                            </div>
                            )
                        }

                        { expirytime && (
                            <div className="form-group link_date_input">
                                
                                <select className="form-control form-select mt-2" 
                                 {...register("link_expiry_time")} >
                                    <option value="" selected disabled>choose expiry time</option>
                                    <option value="1H">1 Hour</option>
                                    <option value="1D">1 Day</option>
                                    <option value="7D">7 Days</option>
                                    <option value="30D">30 Days</option>
                                </select>
                            </div>
                        ) }


                        <button className="linkMethodBtn btn btn-swipgle-secondary w-100" id="linkMethodBtn">Generate</button>
                    </form>
                </div>
                )}

                {
                    fileInfo.fileshare && (
                
                        <div className="swipgle-success-generate  text-center">
                            <div className="fade-in">
                                <img src="https://demo.vironeer.com/swipgle/images/sections/success.svg" width="100" height="100" alt="success"/> 
                                <h2>Link generated</h2>
                                The link was successfully generated


                                <h4 className="generated_success_mesage"></h4>
                                <div className="input-group"> 
                                    <input type="text" className="form-control" name="generated_link" id="generated_link" value={fileInfo.files.map(el => ( el.uuid))} readOnly/> 
                                    <button id="copy" className="btn btn-swipgle-primary">Copy</button> 
                                </div>
                                <button id="generate_new_link" className="btn btn-primary btn-sm w-100 mt-3">
                                    <MdLink/>
                                    Generate new link
                                </button>
                            </div>
                        </div> 
                    )
                }
                </div>
            </div>
        </>
    )
}

export default GenLinkForm
