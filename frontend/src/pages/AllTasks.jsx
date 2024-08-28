// pages/AllTasks.jsx
import React, { useState } from 'react';
import { Sidebar } from '../components/Home/Sidebar'; // Make sure the path is correct
import Cards from '../components/Home/Cards';
import InputData from '../components/Home/InputData';

export const AllTasks = () => {
  const [filter, setFilter] = useState('All'); // State for managing filter

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className='flex gap-2 m-0'>
        <div className='sm:w-1/6'>
          <Sidebar setFilter={handleFilterChange} />
        </div>
        <div className='sm:w-5/6 overflow-y-auto p-4'>
          <Cards filter={filter} home={"true"} />
        </div>
      </div>
      <InputData />
    </>
  );
}
