import React from 'react'
import { MdEmojiEvents, MdOutlineEventNote } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Sidebar = () => {

    const data = [
        {
            title: "All Events",
            icon: <MdEmojiEvents />,
            link: "/"
        },
        {
            title: "Ongoing Events",
            icon: <MdOutlineEventNote />,
            link: "/ongoingEvents"
        },
        {
            title: "Completed Events",
            icon: <MdOutlineEventAvailable />,
            link: "/completedEvents"
        },
        {
            title: "Upcoming Events",
            icon: <AiFillAlert />,
            link: "/upcomingEvents"
        }
    ];
  return (
    <section className='bg-white h-screen justify-between p-4 m-0
        flex flex-col max-md:hidden'>
        <div>
            <h2 className='text-xl text-gray-800'>Team-ICN</h2>
            <h4 className='my-1 text-gray-800'>Department of CSE</h4>
            <hr />
        </div>
        <div>
            {data.map((items, i) => (
                <Link to={items.link} 
                    key={i}
                    className='my-4 flex text-gray-800 items-center gap-1 hover:bg-gray-300 p-2 rounded transition-all duration-300'
                >
                    {items.icon}{items.title}
                </Link>
            ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2 rounded'>Log out</button>
        </div>
    </section>
  )
}
