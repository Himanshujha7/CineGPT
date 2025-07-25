import React, { useState } from 'react'
import Header from './Header'
import { useForm } from 'react-hook-form';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {register,handleSubmit, formState:{errors}} = useForm();
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    
    const { email, password } = data;
    setAuthError('');
    if(!IsSignInForm){

      createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => 
      {
        // Signed up 
        const user = userCredential.user;

    
        // ...
        setAuthError('');
      })
      .catch((error) => 
      {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        switch (errorCode) {
          case 'auth/email-already-in-use':
            setAuthError('This email is already registered. Please sign in instead.');
            break;
          case 'auth/weak-password':
            setAuthError('Password is too weak. Please choose a stronger password.');
            break;
          case 'auth/invalid-email':
            setAuthError('Please enter a valid email address.');
            break;
          default:
            setAuthError('Failed to create account. Please try again.');
        }
        
      });

    }else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...


        setAuthError('');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        switch (errorCode) {
          case 'auth/user-not-found':
            setAuthError('No account found with this email. Please sign up first.');
            break;
          case 'auth/wrong-password':
            setAuthError('Incorrect password. Please try again.');
            break;
          case 'auth/invalid-email':
            setAuthError('Please enter a valid email address.');
            break;
          case 'auth/too-many-requests':
            setAuthError('Too many failed attempts. Please try again later.');
            break;
          default:
            setAuthError('Failed to sign in. Please check your credentials.');
        }
      });


    }
    
  }



  const [IsSignInForm, setIsSignInForm] = useState(true);



  

  const handleClick = () => {
    setIsSignInForm(!IsSignInForm);

  };
  return (
    <div>
      <Header/>
      <div className='absolute inset-0 w-full h-full'>
        {/* <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bgimg'/> */}
        <video loop autoPlay muted className='w-full h-full object-cover '>
          <source src='Bgvideooo.mp4' type='video/mp4'/>
        </video>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex py-20 flex-col rounded-md  w-100 text-white absolute m-32  z-12 mx-auto right-0 left-0 bg-gradient-to-b from-[#10002b] to-gray-900 opacity-95  p-12 shadow-[0px_0px_2px_1px_rgba(88,46,255,0.5)] shadow-3xl'>
        <h1 className='text-2xl font-helonik m-2 font-semibold  text-slate-100'>
            {IsSignInForm ? "Sign In" : "Sign Up"} 
        </h1>
        {!IsSignInForm && 
        <input 
          {...register("name", { required:true})}
          type='name' 
          placeholder='Full Name' 
          className='p-4 rounded-md flex font-helonik m-2 w-full border  border-slate-600 bg-slate-800 text-slate-400 '
        />}
        {errors.name && <span className='text-[#bf0603] my-1 px-2 text-sm font-medium'>Name is required</span>}
        <input 
          {...register("email", { required:true , 
            pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
            }
          })}
          type='email'  
          placeholder='Email Address' 
          className='flex rounded-md p-4 my-2 mx-2  border border-slate-600 w-full bg-slate-800 text-slate-400'
        />
        {errors.email && <span className='text-[#bf0603] my-1 px-2 text-sm font-medium'>{errors.email.message ? "Invalid Email Address" : "Email Address is required"}</span>}
        <input  
          {...register("password", { required:true,
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
              message: "Invalid Password"

            }
          })}
          type='password'  
          placeholder='Password' 
          className='p-4 flex rounded-md my-2 mx-2 w-full border  border-slate-600 bg-slate-800 text-slate-400 '
        />
        {errors.password && <span className='text-[#bf0603] my-1 px-2 text-sm font-medium'>{errors.password.message ? "Invalid Password" : "Password is required"}</span>}
        
        {authError && (
          <div className='text-red-500  p-3 m-2 w-full text-sm'>
            {authError}
          </div>
        )
        }
        <button className='p-3  rounded-md mx-2 my-4 bg-[#bf0603] w-full font-helonik font-semibold cursor-pointer transition duration-200 hover:bg-[#8d0801]'>{IsSignInForm ? "Sign In" : "Sign Up"} </button>
        
        <p className='text-slate-400   flex mx-4 text-sm'>
          {IsSignInForm ? "New to CineGPT? " : "Already a User? " }  <span onClick={handleClick} className='text-slate-300 font-semibold cursor-pointer underline'> {IsSignInForm ? " Sign Up now." : " Sign In Now."}  </span>
        </p>
      </form>
    </div>
  )
}


export default Login;

