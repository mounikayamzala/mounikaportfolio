import React from 'react'

export default function ForgotPinComponent() {
  return (
    <>

<div>

  
</div>



<div class="h-screen flex bg-[#1e72f8]">
        <div class="hidden lg:block relative w-0 flex-1">

          <div id="container-inside">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>
            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>

          <div className='flex justify-center items-center h-screen'>

            <div className='w-1/2'>
              <div className='mb-5'>
                <img className='h-36 m-auto text-center ' src='../images/logo-white.png' />
              </div>

              <div className='text-center'>
                <img className='rounded-sm' src='../images/2.png' />
                <div className='mt-5'>
                  <h2 className='text-lg text-white'>Connect with the world</h2>

                  <p className='text-sm text-white'>it is a long established fact that a reader will be
                    distracted by the readable content</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white mr-36">
          <div class="mx-auto w-full max-w-sm lg:w-96 ">
            <div>
              <h1 class="mt-6 text-4xl font-bold text-gray-900">Forgot Pin</h1>
              <p className='text-[#6f7f92] pt-3'>Welcome to TeacherForGood, a platform to connect with the social world</p>
            </div>

            <div class="mt-8">
              <div class="mt-6">
                <form class="space-y-6">
                  <div>
                    <label for="email" class="block font-medium text-gray-700"> Mobile Number </label>
                    <div class="mt-1 relative">
                      <input  id="mobile" name="tel" type="tel" autocomplete="mobile" required class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-9" />
                      <span className='absolute top-4 left-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  

                

                  <div>
                    <button  type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm   font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">SEND</button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>


      </div>

      
     
    </>
  )
}
