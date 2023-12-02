
import React from 'react'



import  Styles from '../../style';

//import Getstarted from '../Getstarted'
//import block23 from '../../assets/block23.png';
//import { Link,NavLink } from 'react-router-dom';
//mport block5 from '../../assets/block5.png'

//import { features } from "../../constrants";









function hero() {
  return (
  <div>
     <section  id="Home" className={`flex md:flex-row flex-col ${Styles.paddingY}`}>
    <div className={`flex-1 ${Styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full '>
            <h1 className=' text-violet-300 flex-1 fontFamily-Fjalla+One font-bold text-5xl ml-3 '>
               REVOLUTIONISING SKILL DEVELOPMENT IN WEB3 WITH, <br className=' sm:block hidden '/> {" "}  
              <span className=' text-fuchsia-950'>REALMX</span> 
                
             <p className=' text-xl font-thin mt-4 text-violet-300'>Elevate Coding Skills, Earn Tokens, Land Opportunities</p>

            </h1>

           
          
            
        </div>
    </div>
    <div className=' mr-10 shadow-sm rounded-md'>
    <img
  src="https://drive.google.com/uc?export=view&id=1-oPhBO3B_evlC7i7CZQY2xbifbi7tQB3"
  alt="billing"
  className=" w-full h-full object-cover object-center rounded-lg shadow-xl "
/>

    </div>


          

   </section>

  
  </div>



  )
}

export default hero
