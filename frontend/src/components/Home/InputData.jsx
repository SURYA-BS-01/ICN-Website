import React from 'react'
import { RxCross2 } from "react-icons/rx";

const InputData = ({InputDiv}) => {
  return (
    <>
        <div className={`${InputDiv} top-0 left-0 bg-gray-500 opacity-80 h-screen w-full`}>

        </div>
        <div 
            className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
            <div className='fixed w-3/6 bg-gray-900 p-4 rounded'>
                <div className='flex justify-end'>
                    <button className='text-2xl'><RxCross2 /></button>
                    
                </div>
                <input 
                    type="text"
                    placeholder='Event name'
                    name='name'
                    className='px-3 py-2 rounded w-full bg-gray-700 my-3'
                />
                <textarea
                    name="description"
                    cols='30'
                    rows='10'
                    placeholder='description'
                    className='px-3 py-2 rounded w-full bg-gray-700 my-3'
                ></textarea>
                <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default InputData