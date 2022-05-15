import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data)
  };

  useEffect(() => {
    if (googleError) {
      toast.error(googleError);
    }
  }, [googleError])

  if (loading) {
    return <div className='flex justify-center items-center'>
      <button type="button" class="bg-indigo-500" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Processing...
      </button>
    </div>
  }

  if (user) {
    toast.success('User Login Successfully.');
    navigate('/')
  }




  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'Invalid Email!'
                  },
                  required: {
                    value: true,
                    message: 'Email Required!'
                  }
                })}
              />
              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
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
              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-accent uppercase w-full"
              value="Login"
            />
          </form>

          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          ><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;