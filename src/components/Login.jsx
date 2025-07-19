import React, {useState } from 'react'
import Header from './Header'

const Login = () => {

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
      <form className='flex gap-5 flex-col w-100 text-white absolute m-32 z-12 mx-auto right-0 left-0 bg-slate-900 opacity-90 backdrop-blur-2xl p-12 shadow-xl'>
        <h1 className='text-2xl font-helonik m-2 font-semibold  text-slate-200'>
            {IsSignInForm ? "Sign In" : "Sign Up"} 
        </h1>
        {!IsSignInForm && <input 
        type='name' 
        placeholder='Full Name' 
        className='p-4 font-helonik m-2 w-full border  border-slate-600 bg-slate-800 text-slate-400 '/>}
        <input type='email' placeholder='Email Address' className='p-4 mx-2 font-helonik border border-slate-600 w-full bg-slate-800 text-slate-400'/>
        <input type='password' placeholder='Password' className='p-4 font-helonik m-2 w-full border  border-slate-600 bg-slate-800 text-slate-400 '/>
        
        
        <button className='p-3 mx-2 my-4 bg-[#bf0603] w-full font-helonik font-semibold cursor-pointer'>{IsSignInForm ? "Sign In" : "Sign Up"} </button>
        
        <p className='text-slate-400 mx-4 text-sm'>
          {IsSignInForm ? "New to CineGPT? " : "Already a User? " }  <span onClick={handleClick} className='text-slate-300 font-semibold cursor-pointer underline'> {IsSignInForm ? "Sign Up now." : "Sign In Now."}  </span>
        </p>
      </form>
    </div>
  )
}

export default Login
