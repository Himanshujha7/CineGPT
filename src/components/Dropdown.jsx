// import { useEffect, useRef ,useState} from "react";

// export const Dropdown = ({user, onSignOut}) => {
//   const [isOpen , setIsOpen ] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSignout = () => {
//     setIsOpen(false);
//     onSignOut();
//   }

//   return (
//     <div className="w-50 h-50 cursor-pointer ">
//       <img onClick={toggleDropdown} className="w-10 h-10 rounded-full border border-gray-100 "
//       src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>

//       {isOpen &&
//       (
//         <div className="bg-gray-900 border border-gray-200 rounded-md shadow-lg right-3/4 mt-2 w-full absolute px-16 py-8 z-10">
//           <div className="py-1">
//             <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700" 
//               onClick={handleSignout}>Sign out</button>
//           </div>
          
//         </div>
//       )}
//     </div>
//   )

// }
// export default Dropdown;

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const Dropdown = ({ onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Get user from Redux store
  const user = useSelector((store) => store.user);

  // Debug: Log user data to console
  //console.log("User from Redux store:", user);



  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignout = () => {
    setIsOpen(false);
    onSignOut();
  };

  // Get user's first letter for fallback avatar
  const getUserInitial = () => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    } else if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Picture/Avatar */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-transparent hover:border-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent group"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback Initial */}
        <span 
          className="text-white font-semibold text-sm"
          style={{ display: user?.photoURL ? 'none' : 'flex' }}
        >
          {getUserInitial()}
        </span>
        
        {/* Dropdown Arrow */}
        <svg
          className={`absolute -bottom-1 -right-1 w-5 h-5 text-white bg-gray-800 rounded-full p-0.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-xl z-50 animate-in fade-in zoom-in-95 duration-100">
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">
                    {getUserInitial()}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user?.displayName || 'CineGPT User'}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {user?.email || 'user@cinegpt.com'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {/* Profile Option */}
            {/* <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-150 group">
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              View Profile
            </button> */}

            {/* Settings Option */}
            {/* <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-150 group">
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button> */}

            {/* Help Option */}
            {/* <button className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors duration-150 group">
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-white transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help & Support
            </button> */}

            {/* Divider */}
            <div className="border-t border-gray-700/50 my-2"></div>

            {/* Sign Out */}
            <button
              onClick={handleSignout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors duration-150 group"
            >
              <svg className="w-4 h-4 mr-3 text-red-400 group-hover:text-red-300 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;