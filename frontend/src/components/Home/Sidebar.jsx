// components/Home/Sidebar.jsx
import React from 'react';
import { MdEmojiEvents, MdOutlineEventNote, MdOutlineEventAvailable } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Sidebar = ({ setFilter }) => {
  const data = [
    {
      title: "All Events",
      icon: <MdEmojiEvents />,
      filter: "All"
    },
    {
      title: "Ongoing Events",
      icon: <MdOutlineEventNote />,
      filter: "Ongoing"
    },
    {
      title: "Completed Events",
      icon: <MdOutlineEventAvailable />,
      filter: "Completed"
    },
    {
      title: "Upcoming Events",
      icon: <AiFillAlert />,
      filter: "Upcoming"
    }
  ];

  return (
    <section className='bg-violet-600 h-screen justify-between p-4 m-0 flex flex-col max-md:hidden'>
      <div>
        <h2 className='text-xl font-bold text-white'>Team-ICN</h2>
        <h4 className='my-1 text-white'>Department of CSE</h4>
        <hr className='border-white' />
      </div>
      <div>
        {data.map((item, i) => (
          <button
            key={i}
            onClick={() => setFilter(item.filter)}
            className='my-4 sm:text-sm md:text-md lg:text-xl flex text-white items-center gap-1 hover:bg-gray-300 p-2 rounded transition-all duration-300'
          >
            {item.icon}{item.title}
          </button>
        ))}
      </div>
      <div>
        <button className='bg-gradient-to-r from-purple-600 to-indigo-600 w-full p-2 rounded shadow-lg hover:shadow-xl transition-shadow duration-300'>
          Log out
        </button>
      </div>
    </section>
  );
}
