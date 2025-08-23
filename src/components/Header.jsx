import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {  signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import Dropdown from './Dropdown';
import { FaMagic } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate('/');
      

    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed - user:", user); // Debug log
      if (user) {
        const {uid, email, displayName } = user;
        console.log("Extracted user data:", { uid, email, displayName }); // Debug log
          // updating the store

        dispatch(addUser({
          uid:uid, email:email, displayName:displayName

        }));
        navigate('/browse');

      } 
      else 
      {
        // User is signed out
        console.log("User signed out"); // Debug log
        dispatch(removeUser());
        navigate('/')
      }
    });

    // Cleanup function to unsubscribe
    return () => unsubscribe();
  }, [])
  return (
    <div className='w-full flex justify-between absolute h-40 px-16 py-8 bg-gradient-to-b from-black z-10'>
        <h1 className='font-helonik text-[#bf0603] font-black text-4xl cursor-pointer transition-all duration-200  hover:text-red-800'>CineGPT</h1>

        {user && (
          
          <div className='flex absolute right-16 top-8 px-8 gap-8'>

            <button onClick={handleSignout} className='cursor-pointer bg-gray-700 px-4 py-4 rounded-full hover:bg-gray-500 hover:text-gray-200 transition duration-300 text-gray-400 text-xl'><FaMagic/></button>
            <Dropdown className='cursor-pointer' onSignOut={handleSignout}/>
          </div>
        )}
        
    </div>
  )
}

export default Header
