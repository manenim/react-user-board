import { HiOutlineMail } from "react-icons/hi"
import { FiPhoneCall } from "react-icons/fi"
import { HiArrowRight } from "react-icons/hi"


const User = ({ handleDetails, user, setUser, showCountry }) => {
  console.log('suu', user)

  const handleClick = () => { 
    handleDetails()
    setUser(user)
  }

  return (
    <div className="user-info flex justify-center md:justify-start flex-col md:flex-row shadow-shad pl-6 pt-4 pb-3 rounded-xl my-10 w-[90%] mx-auto">
      {/* AVATAR  */}
      <div className="user-img mx-auto md:mx-0 w-28 h-28 rounded-full bg-greenish border-greenish border-[6px]">
        <img src={user ? user.picture.medium : ""} alt="" className="w-full h-full rounded-full object-cover" />
      </div>

                        
      {/* CARD TEXT  */}
      <div className="user-name ml-0 md:ml-4 pt-2 w-[100%] md:w-[76%]">
        <h3 className="font-[600] text-center md:text-left text-[1.3rem]">{`${user.name.first} ${user.name.last}`}</h3>
        <p className="text-[1rem] text-center md:text-left mb-8 italic text-[rgba(0,0,0,.5)]">
          {`${user.location.postcode}, ${user.location.city}, ${user.location.state}, ${showCountry ? user.location.country : ""}`}
        </p>

        {/* CONTACT  */}
        <div className="contact flex flex-col md:flex-row justify-between items-center">
          <div className="email flex items-center">
            <HiOutlineMail className="text-[1.8rem] text-greyish mr-1" />
            <p className="text-[12px] text-greyish">{user.email}</p>
          </div>
          <div className="phone flex items-center">
            <FiPhoneCall className="text-[1.6rem] text-greyish mr-2" />
            <p className="text-[12px] text-greyish">{user.phone}</p>

          </div>
          <div className="buttonn shadow-2xl mt-4 md:mt-0">
            <button onClick={handleClick} className="bg-[#75d6d1] text-[#ffffff] py-[1.1rem] px-[1.6rem] rounded-[10px] shadow-2xl"><HiArrowRight /></button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default User