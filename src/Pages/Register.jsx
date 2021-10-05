import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import { Signup } from '../Actions';

const Register = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit,getValues ,formState: { errors } } = useForm();

    const submitLogin = async(data)=> {
		console.log(data);
        //setIsLoading(true); 
        
        dispatch(Signup(data));
    }
    
    return (
        <>
            <div className="swipgle-app" id="app">
                <div className="container-xl">
                    <div className="flex-fill d-flex flex-column justify-content-center py-5">
                        <div className="container-tight py-6">
                            <form className="card card-md" autoComplete="off" onSubmit={handleSubmit(submitLogin)}>
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Create new account</h2>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control " placeholder="Enter your full name" 
                                    {...register("name",{ 
                                        required: true 
                                    })}  />

                                    {errors.name?.type === 'required' && (<span className="invalid-feedback"><strong>Name is required.</strong></span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    
                                    <input id="email" type="email" className="form-control " placeholder="Enter your email address" 
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
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input  type="password" className="form-control " placeholder="Enter password" autoComplete="new-password"
                                        {...register("password",{
                                            required: true,
                                        })}/>

                                    {errors.password?.type === 'required' && (<span className="invalid-feedback"><strong> Password is required.</strong></span>)}
                                    
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm password</label>
                                    <input type="password" className="form-control" name="password_confirmation" placeholder="Confirm password"  
                                     {...register("password_repeat",{
                                        required: true,
                                        validate: {
                                            passwordEqual: value => (value === getValues().password),
                                        }
                                    })}
                                    />
                                    {errors.password_repeat?.type === 'required' && (<span className="invalid-feedback"><strong> Confirm Password is required.</strong></span>)}
                                    
                                    {errors.password_repeat?.type === 'passwordEqual' && (<span className="invalid-feedback"><strong>Confirm Password is not match.</strong></span>)}
                                </div>
                                <div className="mb-3">
                                    <label className="form-check">
                                    <input type="checkbox" name="agree" className="form-check-input " />
                                    <span className="form-check-label">I agree with terms and policy.</span>
                                    </label>
                                </div>
                                
                                <button type="submit" className="btn btn-primary w-100 btn-pd">Create new account</button>
                            </div>
                            <div className="hr-text">Or</div>
                            <div className="card-body">
                                <Link to="/login" className="btn w-100 btn-pd">Log in</Link>
                            </div>
                            </form>
                            <div className="text-center text-muted mt-3">
                            Already have account? <Link to="/login" tabIndex="-1">Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
