import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent';
import { createActor, realmx4_backend } from '../../../../declarations/realmx4_backend/index';


function navbar() {

    const [authClient, setAuthClient] = useState(null);
    const [principal, setPrincipal] = useState(null);

useEffect(() => {
  const initializeAuth = async () => {
    const client = await AuthClient.create();
    setAuthClient(client);

    const identity = await client.getIdentity();
    const userPrincipal = await identity.getPrincipal();
    setPrincipal(userPrincipal);
  };

  initializeAuth();
}, []);

const handleSignIn = async () => {
  if (authClient) {
    await authClient.login({
      // Add your login configuration here
      onSuccess: async () => {
        const identity = await authClient.getIdentity();
        const userPrincipal = await identity.getPrincipal();
        setPrincipal(userPrincipal);
      },
    });
  }
};

const handleSignOut = async () => {
  if (authClient) {
    await authClient.logout();
    setPrincipal(null);
  }
};

  return (
    <nav className= "gap-10 flex justify-between text-violet-300">
    <h1 className='gap-1 font-bold text-4xl p-6'>REAL<span className=' text-gray-800'>MX</span></h1>
    <ul className="flex flex-row p-7 justify-end gap-10 mr-10 cursor-pointer ">
      <li>
        <NavLink to="/" className={({isActive}) => `block duration-200 ${isActive ? "text-black" : "text-gray-400"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover: text-gray-800 lg:p-0 `}>
          Home
          </NavLink>
      </li>
      <li>
      <NavLink
                                to="/Features"
                                    className={({isActive}) =>
                                        `block  duration-200 ${isActive ? "text-white" : "text-violet-300"} border-transperent border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Features
                                </NavLink>
      </li>
      <li>
      <NavLink
                                to="/Dashboard"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-white" : "text-violet-300"} border-transparent border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Dashboard
                                </NavLink>
      </li>
      <li>
      <NavLink
                                to="/challenges"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-white" : "text-violet-300"} border-transparent border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Challenges
            </NavLink>
      </li>
      <li>
      <NavLink
                                to="/Tokens"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-white" : "text-violet-300"} border-transparent border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Tokens
            </NavLink>
      </li>



      <li>
      <NavLink
                                to="/Post"
                                    className={({isActive}) =>
                                        `block duration-200 ${isActive ? "text-white" : "text-violet-300"} border-transparent border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Post
            </NavLink>
      </li>
      
      <button type="button" className="py-2.5 px-5  mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-violet-300 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleSignIn}>Get Started</button>
    </ul>
   
    </nav>
  );

                                }

export default navbar
