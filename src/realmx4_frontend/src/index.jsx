import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx'
import Hero from './components/Hero/Hero.jsx'
import Features from './components/Features/Features'
import Tokens from './components/Tokens/Token'
import Dashboard from './components/Dashboard/Dashboard'
import Challenges from './components/Challenges/Challenges'
import Post from './components/Post/Post'
import MyTokens from './components/MyTokens/MyTokens.jsx';




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path="Features" element={<Features />} />
      <Route path="Tokens" element={<Tokens />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Challenges" element={<Challenges />} />
      <Route path="post" element={<Post />} />
      <Route path="/dashboard/mytokens" component={<MyTokens />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById('Root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </React.StrictMode>
);

