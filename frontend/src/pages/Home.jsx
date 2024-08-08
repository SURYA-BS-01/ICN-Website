import React from 'react'
import { Sidebar } from '../components/Home/Sidebar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex gap-2 h-full'>
        <div className='w-1/6 justify-between border border-gray-500 rounded-xl p-4 
        flex flex-col'> <Sidebar/> </div>
        <div className='w-5/6 border border-gray-500 rounded-xl p-4'>Hello</div>
        <Outlet />
    </div>
  )
}
