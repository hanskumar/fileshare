import React,{ useEffect,useRef,useState} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import DisabledButton from '../../Components/Shared/DisableButton'
import { Link,useHistory } from 'react-router-dom';
import { UpdateProfileInfo,GetUserProfileInfo } from '../../Actions/UserAction'


const ProfileInformation = ({userstate}) => {

    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo);

    const history = useHistory();
    
    const { register, handleSubmit,formState: { errors } } = useForm();

    const submit = async(data)=> {
        console.log(data);

        await dispatch(UpdateProfileInfo(data));
     
       /*  if(auth.error){
            //toast.error(auth.error)
        } */

       //toast.success("Login Successfully Done")
    }

    useEffect(async() => {

        console.log("Use Effect Chala..")

        await dispatch(GetUserProfileInfo());

    }, [userInfo.successUpdate]);

    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
    };

    
    return (
        <>
            <div className="row">
                <div className="col-lg-5">
                    <div className="sec__title">
                        <h1>Profile information</h1>
                        <p>Here you can update your profile information</p>
                    </div>
                </div>
                <div className="col-lg-7">
                <div className="note note-danger print-error-msg" style={{display:"none"}}><span></span></div>
                <div className="card">
                    <form id="informationForm" autoComplete="off" onSubmit={handleSubmit(submit)} enctype="multipart/form-data">
                        <div className="card-body">
                            <div className="rounded-circle avatar avatar-xl mb-3">
                                <img className="rounded-circle" id="preview_avatar" src={image.preview ? image.preview : "https://demo.vironeer.com/swipgle/cdn/avatars/default.png "} width="100" height="100"/>

                            </div>
                            <div className="form-group mb-2">
        
                                <input type="file" 
                                name="avatar" 
                                id="upload-button"
                                onChange={handleChange}
                                  
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="name">Name :</label>
                                <input className="form-control" type="text" placeholder="Enter your name"  
                                defaultValue={ userstate.user.name}
                                //value={ userstate.user.name } 
                                    {...register("name",{ 
                                        required: true 
                                    })} 
                                />
                                {errors.name?.type === 'required' && (<span className="invalid-feedback"><strong>name is required.</strong></span>)}
                            </div>
                            <div className="form-group">
                            <label htmlFor="phone">Phone :</label>
                                <input className="form-control"  type="text" placeholder="Enter your Phone" 
                                defaultValue={ userstate.user.phone}
                                    {...register("phone",{ 
                                        required: false 
                                    })} 
                                />
                            </div>
                        </div>
                        <div className="card-footer text-right">
                        { 
                            userInfo.isloading 
                            ? ( <DisabledButton/> )
                            : ( <button type="submit" id="saveInfoBtn" className="btninfo btn btn-primary">
                                <span className="spinner-border-info spinner-border spinner-border-sm me-2 d-none" role="status" aria-hidden="true"></span>Save 
                                </button> 
                            )
                        }                                       
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInformation
