import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import SocailLogin from './SocailLogin';

const Login = () => {

  const [
    signInWithEmailAndPassword,
    signInUser,
    signInLoading,
    signInError,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (signInError) {
      toast.error(signInError.message);
    }
  }, [signInError])

  useEffect(() => {
    if (signInUser) {
      navigate(from, { replace: true });
      toast.success('User Login Successfully.');
    }
  }, [signInUser, from, navigate])

  if (signInLoading) {
    return <Loading></Loading>
  }

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  };



  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: 'Invalid Email!'
                  },
                  required: {
                    value: true,
                    message: 'Email Required!'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                autoComplete='off'
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: 'At least 8 characters!'
                  },
                  required: {
                    value: true,
                    message: 'Password is Required!'
                  }
                })}
              />
              <label className="label">
                <Link className="label-text" to='reset-password'>Forgot Password?</Link>
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-accent uppercase w-full"
              value="Login"
            />

          </form>
          <span
            className='text-center label-text'>New to Doctors Portal? <Link
              to="/signup"
              className='text-primary'
            >Create new account</Link></span>

          <div className="divider">OR</div>
          <SocailLogin></SocailLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;