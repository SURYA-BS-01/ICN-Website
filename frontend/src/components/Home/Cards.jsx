import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

const Cards = ({home}) => {
  const data = [
    {
      title: "HACk MIT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "01/02/2024",
      link: "https://hackmit.org/",
      gform: "https://www.google.com/",
      status: "Ongoing"
    },
    {
        title: "HACk MIT",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "01/02/2024",
        link: "https://hackmit.org/",
        gform: "https://www.google.com/",
        status: "Completed"
    },
    {
        title: "HACk MIT",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "01/02/2024",
        link: "https://hackmit.org/",
        gform: "https://www.google.com/",
        status: "Upcoming"
    },
    {
        title: "HACk MIT",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "01/02/2024",
        link: "https://hackmit.org/",
        gform: "https://www.google.com/",
        status: "Ongoing"
    }
  ];

  const [Ongoing, setOngoing] = useState("Ongoing")

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {data.map((item, i) => (
        <section key={i} className='bg-white container mx-auto p-5 max-sm:py-3 shadow-xl
          transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 rounded-md'>
          <div className='pt-3 text-black'>
            <div className="flex  justify-between font-bold text-sm pb-5">
              <p>{item.title}</p>
              <p className="text-white-400">{item.date}</p>
            </div>
            <p>{item.description}</p>
            <div className='flex flex-col items-start gap-2'>
              <div className="flex flex-row mt-8 w-full items-center justify-start gap-6">
                <button className={`${item.status === 'Ongoing' ? "bg-green-700": item.status === 'Completed'? "bg-red-700": "bg-blue-700"} uppercase py-1 px-2 whitespace-nowrap rounded-lg border-2 border-transparent text-white text-md hover:bg-slate-400 transition-all duration-300`}>
                  {item.status}
                </button>
                <FaEdit className='text-xl' />
                <MdDelete className='text-xl'/>
              </div>
              <div className='flex flex-row gap-2'>
                <a href={item.link} className="whitespace-nowrap text-md text-gray-700">
                    Event
                  </a> |
                <a href={item.gform} className="whitespace-nowrap text-md text-gray-700">
                    Google Form
                  </a>
              </div>
            </div>
          </div>
        </section>
      ))}
      {home === "true" && (
        <section className='flex flex-col justify-center items-center bg-white rounded-md p-4 shadow-xl
                          text-black hover:scale-105 hover:cursor-pointer transition-all duration-300'>
        <IoAddCircleSharp className='text-xl'/>
        <h2 className='text-2xl mt-4'>Add Event</h2>
        </section>
      )}
    </section>
  );
};

export default Cards;
