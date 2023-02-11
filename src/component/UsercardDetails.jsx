import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import UserDetail from './UserDetail'

const UsercardDetails = ({ showDetails, setShowDetails, user }) => {
  
  console.log('heyyyy', user)

  return (
      <div className={`wrapper absolute w-[82%] ${showDetails ? "translate-x-[0%] opacity-1" : "translate-x-[1780%] opacity-0"} ease-out duration-200 mx-[8%] -z-1 mt-20`}>
      {/* <h1 className='absolute translate-x-[1780%]'>hello</h1>     */}
      

      <h2 className="font-[600] text-[1.4rem]">All Users</h2>
              
              {/* FILTER  */}
              <h3 className="text-[.9rem]">Filter by</h3>
              <div className="filter-options mt-4 flex items-center justify-between">
                <div className='rounded-[50px] flex items-center pl-4 bg-lightInput'>
                    <AiOutlineSearch className='text-2xl mr-2 text-[rgba(0,0,0,.5)]'/>
                    <input type="text" className='w-[80%] outline-none border-none text-[rgba(0,0,0,1)] bg-transparent py-4' placeholder='Find a user' />
                </div>
                <div className='rounded-[50px] flex items-center pl-4 bg-lightInput'>
                    <input type="text" className='w-[80%] outline-none border-none text-[rgba(0,0,0,1)] bg-transparent py-4' placeholder='Find a user' />
                </div>
              </div>
      
            <div onClick = {() => setShowDetails(show => !show)} className="back inline-flex mt-6 items-center px-4 py-2 hover:bg-greyish cursor-pointer ease-out duration-300 ">
              <BiArrowBack className='mr-2 text-[1.2rem]' />
              <h3>RESULTS</h3>
            </div>
      

            <div className="detailWrapper">
        <UserDetail user ={user} />
            </div>
      </div>
  )
}

export default UsercardDetails