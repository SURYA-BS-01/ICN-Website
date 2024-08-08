import React, { useState } from 'react'
import { Sidebar } from '../components/Home/Sidebar'
import Cards from '../components/Home/Cards'
import InputData from '../components/Home/InputData'

export const AllTasks = () => {
  const [InputDiv, setInputDev] = useState("hidden");
  return (
    <>
      <div className='m-0 flex gap-2'>
          <div className='sm:w-1/6'> <Sidebar/> </div>
          <div className='sm:w-5/6 overflow-y-auto p-4'>
            <Cards home={"true"} />
          </div>
      </div>
      <InputData />
    </>
  )
}

{/* <div className='flex gap-2 h-screen'>
        <div className='w-1/6 justify-between border border-gray-500 rounded-xl p-4 
        flex flex-col max-md:hidden'> <Sidebar/> </div>
        <div className='w-5/6 border overflow-y-auto border-gray-500 rounded-xl p-4'>
          <Cards/>
        </div>
    </div> */}
