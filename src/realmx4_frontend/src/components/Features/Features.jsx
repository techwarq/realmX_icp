import React from 'react'
import Styles, { layout } from '../../style'
import { features } from "../../constrants";



function FeatureCard({ icon, title, content, index }){
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
  <div className={`w-[64px] h-[64px] rounded-full ${Styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="star" className="w-25 h-25 object-contain" />
  </div>
  <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-violet-400 text-[18px] leading-[23.4px] mb-1">
      {title}
    </h4>
    <p className="font-poppins font-normal  text-violet-600 dark:text-violet-400 text-[16px] leading-[24px]">
      {content}
    </p>
  </div>
</div>
  )
}
function Features() {
  return (
    <section id='features' className={`${layout.section} mt-11`}>
       <div className={layout.sectionInfo}>
       <h2 className=" text-6xl text-fuchsia-600 mt-4 ml-4 mb-6">
          Features
        </h2>
       <h1 className= "text-6xl text-violet-300 w-full ml-4 ">
       Coding excellence: <br className="sm:block hidden" /> earn, showcase, <span className=' text-fuchsia-800'> and Standout</span>
      </h1>
       
        
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>

   

    </section>
   
  )
}



export default Features

