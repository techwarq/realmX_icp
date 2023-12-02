import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { Outlet } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import { Routes , Route} from '../../../node_modules/react-router-dom/dist/index'
import MyTokens from './components/MyTokens/MyTokens'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'







function Layout() {
  return (
    <>
    <div className='bg-gradient-to-r from-indigo-600 to-indigo-900 w-full h-screen overflow-hidden text-amber-200'>
    <Routes>
        <Route path="/" element={<Navbar />} />
          
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/mytokens" element={<MyTokens />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        
       
        
      </Routes>
      <Outlet />
      
   
    
   
    </div>
    
   
    </>
  )
}

export default Layout