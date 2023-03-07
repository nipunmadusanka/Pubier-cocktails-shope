import React,{ useState } from 'react'
import Router, { useRouter } from 'next/router'


export const Navbar = () => {
    const [searchtext, setsearchtext] = useState("");
    const router = useRouter();

    function handleSearch (e) {
        console.log(searchtext)
        if (e.keycode === 13) {
            Router.push("/view/" + searchtext);
            }
    }
  return (
    <div className='fixed top-0 left-0 w-full z-10 ease-in duration-300 bg-white'>
          <div className='max-w-[1240px] m-auto flex items-center justify-between py-4 text-black'>
              <a href="/">
                  <h1 className='font-bold text-2xl text-[#F29F05]'>Pubier</h1>
              </a>
          <div class="flex justify-center">
          <div class="xl:w-96">
              <div class="input-group relative flex justify-center items-center w-full rounded">
              <input 
                type="search" 
                onChange={({ target }) => {
                    setsearchtext(target.value)
                }}
                onKeyDown={(event) => handleSearch(event) }
                class="form-control font-extralight relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
            </input>
              <span type="submit" class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
              </span>
              </div>
          </div>
          </div>
              <ul className='md:flex lg:flex hidden font-light'>
                  <li className='p-4'>
                      <a href="/" className='hover:text-[#CA7F27]'>Home</a>
                  </li>
                  <li className='p-4'>
                      <a href="/#story" className='hover:text-[#CA7F27]'>Our Story</a>
                  </li>
                  <li className='p-4'>
                      <a href="/#product" className='hover:text-[#CA7F27]'>Product</a>
                  </li>
                  <li className='p-4'>
                      <a href="/#contact" className='hover:text-[#CA7F27]'>Contact</a>
                  </li>
              </ul>
          </div>
      
      </div>
  )
}
