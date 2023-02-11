import {HiUserGroup} from 'react-icons/hi'
import {BiMale} from 'react-icons/bi'
import { FaFemale } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { useContext } from 'react'
import UserContext from '../context/UserContext'



const CardController = () => {

  const { dataa, getMaleUsers, getFemaleUsers, getAnyUsers } = useContext(UserContext)

  console.log('lol', dataa)
  
 
  return (
    <div className=' md:w-full px-6 md:px-12 lg:px-0 lg:w-[40%] mt-[14%] lg:pr-0 sm:pr-[5%] md:pr-[10%]'>
          <div className="wrapper text-white lg:ml-[6rem]">
              <h2 className='font-[100] text-[1.9rem] mb-4'>Hello, <span className='font-[600]'>Emerald</span></h2>
              <p className='font-[100] text-[12px] mb-4'>welcome to your dashboard, kindly sort through the user base.</p>

              <div className='w-full rounded-xl flex items-center pl-4 bg-input'>
                <AiOutlineSearch className='text-3xl mr-2 text-[rgba(0,0,0,.5)]'/>
                <input type="text" className='w-[80%] outline-none border-none text-[rgba(0,0,0,.5)] bg-transparent py-2 md:py-4 rounded-xl' placeholder='Find a user' />
              </div>

              {/* FILTERS  */}

              <div className="filters mt-12">
                  <h3 className='mb-8 text-[.9rem]'>Show Users</h3>

          <div className="filters flex items-center justify-between">

                      <div>
                        
                        <div onClick = {getAnyUsers} className="filter bg-pinkish text-white w-[6.5rem] flex items-center justify-center rounded-2xl h-[5.5rem]">
                            <HiUserGroup className='text-5xl'/>
                        </div>
                        <p className='text-center font-[100] text-[.8rem] mt-4'>All Users</p>

                      </div>

                      <div>
                        <div onClick = {getMaleUsers} className="filter bg-greenish text-white w-[6.5rem] flex items-center justify-center rounded-2xl h-[5.5rem]">
                            <BiMale className='text-5xl'/>
                        </div>
                        <p className='text-center font-[100] text-[.8rem] mt-4'>Male Users</p>

                      </div>
                      <div>
                        <div onClick = {getFemaleUsers} className="filter bg-purplish text-white w-[6.5rem] flex items-center justify-center rounded-2xl h-[5.5rem]">
                            <FaFemale className='text-5xl'/>
    
                         </div>
                          <p className='text-center font-[100] text-[.8rem] mt-4'>Female Users</p>
                      </div>
                  </div>
              </div>

       </div>
    </div>
  )
}

export default CardController