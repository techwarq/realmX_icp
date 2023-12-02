 import React from 'react'
 import '../../styles.css'
 
 function content() {
   return (
    
   <div className=' flex flex-col top-0 w-full h-screen '>
    
     <div className='flex space-y-8 space-x-4'>
      
      <div class="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200 h-96 ml-10 mt-5">
        <div class="flex items-center mb-6">
          <svg class="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h4 class="font-semibold ml-3 text-lg">Challenges Timeline</h4>
        </div>
        <div>
          <input class="hidden" type="checkbox" id="task_6" checked />
          <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_6">
            <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="ml-4 text-sm">Make a Card component</span>
          </label>	
        </div>
        <div>
          <input class="hidden" type="checkbox" id="task_7" checked />
          <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_7">
            <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="ml-4 text-sm">Tailwind Dashboard</span>
          </label>	
        </div>
        <div>
          <input class="hidden" type="checkbox" id="task_8" />
          <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_8">
            <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="ml-4 text-sm">Responsive Navbar</span>
          </label>	
        </div>
        <div>
          <input class="hidden" type="checkbox" id="task_9" />
          <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_9">
            <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="ml-4 text-sm">Respontive Flutter App</span>
          </label>	
        </div>
        <div>
          <input class="hidden" type="checkbox" id="task_10" />
          <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" for="task_10">
            <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
            <span class="ml-4 text-sm">React router Component</span>
          </label>	
        </div>
        <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
          <svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task" />
        </button>
      </div>
  
  
      <div class="relative mt-8 w-full overflow-hidden rounded-xl bg-gray-800 p-4 text-gray-400 shadow-lg md:ml-2 md:w-6/12 md:h-72">
        <a href="#" class="block h-full w-full">
          <div class="w-full">
            <p class="mb-4 text-2xl font-light text-white">Task Progress</p>
            <div class="flex items-center justify-between text-sm text-gray-400">
              <p>Design</p>
              <p>3/8</p>
              </div>
              <div class="mb-4 h-2 w-full rounded-full bg-green-100">
                <div class="h-full w-1/3 rounded-full bg-green-400 text-center text-xs text-white">
                  </div>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <p>Development</p>
                  <p>6/10</p></div><div class="mb-4 h-2 w-full rounded-full bg-indigo-100"><div class="h-full w-2/3 rounded-full bg-indigo-400 text-center text-xs text-white"></div></div><div class="flex items-center justify-between text-sm text-gray-400"><p>DevOps</p><p>2/8</p></div><div class="mb-4 h-2 w-full rounded-full bg-blue-100"><div class="h-full w-1/4 rounded-full bg-blue-400 text-center text-xs text-white"></div></div><div class="flex items-center justify-between text-sm text-gray-400"><p>Marketing</p><p>8/8</p></div><div class="h-2 w-full rounded-full bg-pink-100"><div class="h-full w-full rounded-full bg-pink-400 text-center text-xs text-white"></div></div></div></a></div>
                  <div className='w-80 h-40 bg-gray-800 rounded-lg shadow-lg text-white ml-5 text-sm '>
                  <div class='mt-2 border-b-2 border-gray-300'>
          <h1 class=" ml-2">Tokens</h1>
          <p class=' text-white text-sm   ml-2'>1</p>
        </div>
  <img src='https://drive.google.com/uc?export=view&id=1-YjbRI5pVCVFyfeZIShqrYRvN_eIXfSR' className=' w-24'/> 
  
  
       </div>
      </div> 
      <div class="relative mt-4 ml-4 overflow-x-auto">
    <table class=" w-96 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    #Rank
                </th>
                <th scope="col" class="px-6 py-3">
                    Tokens
                </th>
                <th scope="col" class="px-6 py-3">
                    Tech Stack
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rahul Das
                </th>
                <td class="px-6 py-4">
                    #1
                </td>
                <td class="px-6 py-4">
                <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Token1</span>
                </td>
                <td class="px-6 py-4">
                    Reactjs
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rohini samal
                </th>
                <td class="px-6 py-4">
                    #2
                </td>
                <td class="px-6 py-4">
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Token2</span>
                </td>
                <td class="px-6 py-4">
                    Motoko
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    xyz
                </th>
                <td class="px-6 py-4">
                    #3
                </td>
                <td class="px-6 py-4">
                <span class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Token3</span>
                </td>
                <td class="px-6 py-4">
                    Mern
                </td>
            </tr>
        </tbody>
    </table>
</div>
      
   </div>
    
   )
 }
 
 export default content
 