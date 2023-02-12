
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
      <div className="flex justify-between items-center w-36">
        {/*   Switch Container */}

        <div
          className="md:w-14 md:h-8 w-14 h-6 flex items-center bg-[#b8e4e7] rounded-full p-1 cursor-pointer"
          onClick={handleToggle}
        >
          {/* Switch */}
          <div
            className={
              "bg-[#30bbb5] md:w-6 md:h-6 h-6 w-6  md:my-auto rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
        <p className="ml-2">Show Country</p>
      </div>
    </>
  );
}

export default Switch;
