import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../hooks/useToken';

const SocailLogin = () => {
  const [
    signInWithGoogle,
    googleUser,
    googleLoading,
    googleError
  ] = useSignInWithGoogle(auth);
  const [token] = useToken(googleUser)
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (googleError) {
      toast.error(googleError.message);
    }
  }, [googleError])


  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
      toast.success('User Login Successfully.');
    }
  }, [googleUser, from, navigate])

  if (token) {
    navigate('/appoinment')
  }
  if (googleLoading) {
    return <Loading></Loading>
  }


  return (
    <button
      className="btn btn-outline"
      onClick={() => signInWithGoogle()}
    ><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
  );
};

export default SocailLogin;