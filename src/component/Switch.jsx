
import { useState } from "react";

function Switch({ setShowCountry, showCountry }) {
  const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-6";
    
    const handleToggle = () => { 
        setToggle(!toggle)
        setShowCountry(!showCountry)

    }
  return (
    <>
      <div className="">
        {/*   Switch Container */}

        <div
          className="md:w-14 md:h-8 w-14 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={handleToggle}
        >
          {/* Switch */}
          <div
            className={
              "bg-black md:w-6 md:h-6 h-6 w-6 my-auto rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default Switch;
