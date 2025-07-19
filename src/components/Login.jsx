import React, {use, useState } from 'react'
import Header from './Header'
import { useForm } from 'react-hook-form';

const Login = () => {
  const {register,handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (data) => console.log(data)



  const [IsSignInForm, setIsSignInForm] = useState(true);

  const handleClick = () => {
    setIsSignInForm(!IsSignInForm);

  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        {/* <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bgimg'/> */}
        <video loop autoPlay muted className='w-full h-full object-cover'>
          <source src='Bgvideooo.mp4' type='video/mp4'/>
        </video>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex py-20 flex-col w-100 text-white absolute m-32  z-12 mx-auto right-0 left-0 bg-slate-900 opacity-95 backdrop-blur-2xl p-12 shadow-xl'>
        <h1 className='text-2xl font-helonik m-2 font-semibold  text-slate-100'>
            {IsSignInForm ? "Sign In" : "Sign Up"} 
        </h1>
        {!IsSignInForm && 
        <input 
          {...register("name", { required:true})}
          type='name' 
          placeholder='Full Name' 
          className='p-4 font-helonik m-2 w-full border  border-slate-600 bg-slate-800 text-slate-400 '
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
          className='p-4 my-2 mx-2  border border-slate-600 w-full bg-slate-800 text-slate-400'
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
          className='p-4 my-2 mx-2 w-full border  border-slate-600 bg-slate-800 text-slate-400 '
        />
        {errors.password && <span className='text-[#bf0603] my-1 px-2 text-sm font-medium'>{errors.password.message ? "Invalid Password" : "Password is required"}</span>}
        
        <button className='p-3 rounded-lg mx-2 my-4 bg-[#bf0603] w-full font-helonik font-semibold cursor-pointer'>{IsSignInForm ? "Sign In" : "Sign Up"} </button>
        
        <p className='text-slate-400 mx-4 text-sm'>
          {IsSignInForm ? "New to CineGPT? " : "Already a User? " }  <span onClick={handleClick} className='text-slate-300 font-semibold cursor-pointer underline'> {IsSignInForm ? "Sign Up now." : "Sign In Now."}  </span>
        </p>
      </form>
    </div>
  )
}

export default Login
