import React from 'react'
import { Sidebar } from '../components/Home/Sidebar'
import Cards from '../components/Home/Cards'

export const Ongoing = () => {
  return (
    <div className='flex gap-2'>
        <div className='w-1/6'> <Sidebar/> </div>
        <div className='w-5/6 border overflow-y-auto border-gray-500 rounded-xl p-4'>
          <Cards home={"false"}/>
        </div>
    </div>
    
  )
}
