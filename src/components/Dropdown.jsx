import { useEffect, useRef ,useState} from "react";

export const Dropdown = ({user, onSignOut}) => {
  const [isOpen , setIsOpen ] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignout = () => {
    setIsOpen(false);
    onSignOut();
  }

  return (
    <div className="w-50 h-50 cursor-pointer ">
      <img onClick={toggleDropdown} className="w-10 h-10 rounded-full border border-gray-100 "
      src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>

      {isOpen &&
      (
        <div className="bg-gray-900 border border-gray-200 rounded-md shadow-lg right-3/4 mt-2 w-full absolute px-16 py-8 z-10">
          <div className="py-1">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700" 
              onClick={handleSignout}>Sign out</button>
          </div>
          
        </div>
      )}
    </div>
  )

}
export default Dropdown;