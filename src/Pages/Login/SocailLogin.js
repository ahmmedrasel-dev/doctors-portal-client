import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SocailLogin = () => {
  const [
    signInWithGoogle,
    googleUser,
    googleLoading,
    googleError
  ] = useSignInWithGoogle(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (googleError) {
      toast.error(googleError.message);
    }
  }, [googleError])

  if (googleLoading) {
    return <Loading></Loading>
  }

  if (googleUser) {
    toast.success('User Login Successfully.');
    navigate('/')
  }
  return (
    <button
      className="btn btn-outline"
      onClick={() => signInWithGoogle()}
    ><FcGoogle className='mx-2 text-xl' /> Signin With Google</button>
  );
};

export default SocailLogin;