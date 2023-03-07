import React from 'react'

export default function Footer() {
  return (
    <div className='lg:mb-2'>
      
      <div className='flex justify-center items-center h-screen mx-28'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6'>
        <div class="items-start justify-start">
          <div className='item-start m-2'>
          <p className='font-extralight text-3xl mb-5'>Get in touch</p>
            <p className='font-light text-lg mb-5'>
            We would love to hear from you! share your thoughts, questions, and comments here and we will reach out to you as soon as possible.
            </p>
          </div>
          <div className='item-start mt-8'>
            <form>
              <div class="">
                <div class="flex items-center justify-center">
                  <input type='text' className='form-control m-2 w-60 font-extralight relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#CA7F27] focus:outline-none' placeholder='First Name'></input>
                  <input type='text' className='form-control m-2 w-60 font-extralight relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#CA7F27] focus:outline-none' placeholder='Last Name'></input>
                </div>
                <div class="flex items-center justify-center">
                  <input type='text' className='form-control m-2 w-60 font-extralight relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#CA7F27] focus:outline-none' placeholder='Email'></input>
                  <input type='text' className='form-control m-2 w-60 font-extralight relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#CA7F27] focus:outline-none' placeholder='Subject'></input>
                </div>
                <div class="flex items-center justify-center">
                  <textarea placeholder='Write a message' class="resize-x form-control m-2 w-60 font-extralight relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#CA7F27] focus:outline-none">
                  </textarea>
                </div>
                <div class="m-2 mt-4">
                <button type="submit" className='border border-gray-300 lg:p-1 lg:w-44 p-1 px-2 font-light text-base lg:text-xl bg-[#F29F05] hover:bg-[#F2A649] text-white'>
                  SUBMIT
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="lg:items-end lg:justify-end items-center justify-center mt-6 lg:mt-0">
          <div className='lg:text-end text-start'>
          <p className='font-extralight text-3xl mb-5'>Our location</p>
          <div className='flex lg:items-end lg:justify-end items-start justify-start'>
            <div className='grid grid-cols-2'>
                <div className='item-start'>
                  <img src='/location.png' className='w-20'></img>
                </div>
                <div className='text-start'>
                  <p className='font-extralight text-start text-xl'> 
                    Mollie De Meza
                    <br />
                    23 Walter walk
                    <br />
                    London
                    <br />
                    Middlesex
                    <br />
                    GB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

    <div className='flex justify-center items-center'>
      <div className='w-full'>
        {/* <div className='content_img_footer h-36 bg-no-repeat content_bg justify-center items-center bg-center bg-cover bg-fixed'>
         
        </div> */}
      </div>
    </div>
    {/* <div className='flex justify-center items-center my-5'>
      <div className='w-3/6'>
        <div class="text-center my-6">
          <p className='font-extralight text-2xl mb-5'>SUBSCRIBE FOR LATEST NEWS</p>
          <div class="flex">
            <input type='text' placeholder='Your Email address..' className='form-control font-extralight relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-700 focus:outline-none'></input>
              <button
                type="submit" 
                className='border border-gray-300 lg:p-1 lg:w-44 p-1 px-3 font-light text-base lg:text-xl bg-[#CA7F27] hover:bg-[#F2A649] text-white'>
                  SUBSCRIBE
              </button>
            </div>
        </div>
      </div>
    </div> */}
    <div id='contact' className='text-white flex justify-center items-center my-2 py-2 bg-[#042D25]'>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10 p-2'>
        <div className=' items-center justify-center flex mt-4 lg:mt-0'><p>© 2023 Nipun All Rights Reserved.</p></div>
        <div className=' items-center justify-center flex mt-4 lg:mt-0'>
          <a href="/#" className='hover:text-[#CA7F27] mx-2'>Facebook</a>
          <a href="/#" className='hover:text-[#CA7F27] mx-2'>Twitter</a>
          <a href="/#" className='hover:text-[#CA7F27] mx-2'>Instagram</a>
        </div>
        <div className=' items-center justify-center flex mt-4 lg:mt-0'>
        <img className=''src='/payment.png.webp'></img>
        </div>
      </div>
    </div>
    </div>
  )
}
