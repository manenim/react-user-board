import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

const UserDetail = ({ user }) => {
  
  if(!user) return <h1>...loading</h1>
  
  return (
      <div className="flex flex-col md:flex-row mt-6">
         <div className="user-img w-48 h-48 rounded-full bg-greenish border-greenish border-[6px]">
            <img src={user?.picture?.large} alt="" className="w-full h-full rounded-full object-cover" />
        </div>
          <div className="details ml-8 mt-4">
        <h3 className="font-bold text-[1.5rem]">{`${user ?user.name.title + " " + user.name.first + " " + user.name.last : ""}` } <span className="font-normal">55</span></h3>
        <p className="mt-2 mb-1">{user && `${user.location.postcode}, ${user.location.city}, ${user.location.state}`}</p>
              <div className="email flex items-center bg-[#d9d9e0] justify-center rounded-full py-1 my-4">
                <HiOutlineMail className="text-[1.8rem] mr-1"/>
                <p className="text-[14px]">{user && user.email}</p>
              </div>
              <p className="joined flex items-center bg-[#f7d9f2] justify-center rounded-full py-1 px-4 mb-8">
                  Joined: 2018-10-18T04:05:51.990z
              </p>

              <div className="phone flex items-center">
                <FiPhoneCall className="text-[1.2rem] mr-2"/>
                <p className="text-[14px] ">031-623-5211</p>
              </div>
              
              <p className="mt-6">031-623-5211</p>
          </div>
    </div>
  )
}

export default UserDetail