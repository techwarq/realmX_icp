 import React from 'react'
 import { useState } from "react";
 //import icons16 from '../../assets/icons16.png';
 import { Menu } from "../../constrants";
 import { HiMenuAlt3 } from "react-icons/hi";
 import { NavLink, Link } from '../../../../../node_modules/react-router-dom/dist/index';
 import Content from '../Content/content';
 import LeaderBoard from '../LeaderBoard/LeaderBoard';
 import { Routes , Route} from '../../../../../node_modules/react-router-dom/dist/index'
 
 

 
 function Dashboard() {
    const [open, setOpen] = useState(true);
    return (


      
        <div className='flex space-y-10'>



          <div className={` ${
          open ? "w-72" : "w-24 "
        } h-screen p-5 pt-8 bg-indigo-400 relative duration-300`}>


            <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
            
        <div className='flex gap-x-4 items-center'>
            <h1
            className={`text-gray-600 origin-left font-medium text-xl ml-2 duration-200 ${
              !open && "hidden"
            }`}
          >
            Dashboard
          </h1>


            </div>
            <ul className="pt-6  gap-y-20">
          {Menu.map((Menu, index) => (
            <li
              key={index}
              className={`flex  p-2 cursor-pointer  hover:bg-gray-800 rounded-md text-gray-600 text-sm items-center gap-x-6 
              ${Menu.gap ? "mt-9" : "mt-5"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link to={Menu.link}>
              <img src={`${Menu.icon}`} className=' w-6 h-6' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              </Link>
            </li>
          ))}
        </ul>
      
           
        </div>


<Content />


        
  </div>
  



     
      )
    };


    
    
 export default Dashboard
 