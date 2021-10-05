import React from 'react'
import { useForm } from "react-hook-form";
import { Link,useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import DisabledButton from '../Components/Shared/DisableButton'
import {LoginAction } from '../Actions'; 
// toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const history = useHistory();
    
    const { register, handleSubmit,formState: { errors } } = useForm();

    const submit = async(data)=> {
        //setIsLoading(true);
        await dispatch(LoginAction(data));
     
       if(auth.error){
            //toast.error(auth.error)
       }

       //toast.success("Login Successfully Done")
       history.push("/dashboard");
    }

     

    return (
        <>
            <div className="swipgle-app" id="app">
            <div className="container-xl">
                <div className="flex-fill d-flex flex-column justify-content-center py-5">
                    <div className="container-tight py-6">
                        <form className="card card-md" autoComplete="off" onSubmit={handleSubmit(submit)}>
                       
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login to your account</h2>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Enter your email address"
                                    {...register("email",{ 
                                        required: true ,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}                            
                                />

                                {errors.email?.type === 'required' && (<span className="invalid-feedback"><strong>Email is required.</strong></span>)}

                                {errors?.email?.type === "pattern" && (
                                        <p className="invalid-feedback">Invalid email address </p>
                                )} 
                            </div>
                            <div className="mb-2">
                                <label className="form-label">
                                Password
                                <span className="form-label-description">
                                <a href="password/reset.html">
                                Forgot Your Password?
                                </a>
                                </span>
                                </label>
                                <div className="mb-3">
                                    <input type="password" className="form-control " autoComplete="current-password" placeholder="Enter password" 
                                    {...register("password",{
                                        required: true,
                                    })}/>

                                    {errors.password?.type === 'required' && (<span className="invalid-feedback"><strong> Password is required.</strong></span>)}

                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-check">
                                <input className="form-check-input" type="checkbox" 
                                   name="password"
                                   placeholder="password"
                                   
                                />
                                
                                <span className="form-check-label">Remember me on this device</span>
                                </label>
                            </div>
                            { 
                                auth.isloading 
                                ? ( <DisabledButton/> )
                                : ( <button type="submit" className="btn btn-primary w-100 btn-pd">Log in</button> )
                            }
                            
                        </div>
                        <div className="hr-text">Or</div>
                        <div className="card-body">
                            <Link to="/register" className="btn w-100 btn-pd">Create new account</Link>
                        </div>
                        </form>
                        <div className="text-center text-muted mt-3">
                        Dont have account yet? <Link to="/register" tabIndex="-1">Register now</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login
