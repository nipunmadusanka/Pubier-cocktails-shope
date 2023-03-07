import React from 'react'
import { useState } from "react";
import { useRouter } from "next/router";

export default function Afterglow({ instr:instr, instrDE:instrDE, instrIT:instrIT, imgs:imgs, title:title, type:type, tags:tags, idDrink:idDrink, category:category }) {
  const [ShowSearch, setShowSearch] = useState(false);
  const [SearchText, setSearchText] = useState("");
  const router = useRouter();

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      router.push("/view/?value=" + SearchText);
    }
  }
  return (
        <div className='justify-center items-center mt-28'>
          <div className='flex justify-center items-center mx-12'>
          <div className='w-11/12'>
          <div className='grid grid-cols-1 gap-1 lg:grid-cols-2'>
           <div className='item-center flex justify-center'>
            <img className='' src={imgs}></img>
            </div>
              <div className="p-6 lg:py-20 lg:ml-28">
                <div className=''>
                  <p className='font-light text-5xl mb-4 text-black'>{title}</p>
                  <input
        type={"search"}
        value={SearchText}
        onChange={({ target }) => {
          setSearchText(target.value);
        }}
        onKeyDown={(event) => handleKeyPress(event)}
        placeholder="Type here to Search ..."
       
      ></input>
                  {/* <p className='font-light text-3xl mb-6 text-[#CA7F27]'>$100.00</p> */}
                  <div className='overflow-auto mb-6'>
                  <p className='font-light text-black'>
                    {instr}
                  </p>
                  <div className='flex items-start justify-start'>
                  <button className='btn bg-[#F2A649] md:py-3 md:px-6 lg:py-3 lg:px-8 px-3 py-1 text-white font-bold text-sm mt-6 hover:bg-[#CA7F27]'>BUY PRODUCT</button>
                  <button className='btn bg-[#F2A649] md:py-3 md:px-6 lg:py-3 lg:px-8 px-3 py-1 mx-4 text-white font-bold text-sm mt-6 hover:bg-[#CA7F27]'>ADD TO CART</button>
                  </div>
                  <div className='mt-6'>
                    <div className='flex items-start justify-start'>
                        <p className='font-light text-black'>SKU:</p>
                        <p className='font-light text-black'>&nbsp;{idDrink}</p>
                    </div>
                    <hr></hr>
                    <div className='mt-3'>
                    <div className='flex items-start justify-start'>
                    <p className='font-light text-black'>Categories:</p>
                    <p className='font-light text-black'>&nbsp;{tags}</p>
                    </div>
                    </div>
                    <hr></hr>
                    <div className='mt-3'>
                    <div className='flex items-start justify-start'>
                    <p className='font-light text-black'>Tags:</p>
                    <p className='font-light text-black'>&nbsp;{category}</p>
                    </div>
                    </div>
                    <hr></hr>
                  </div>
                  </div>
                </div>
              </div>
            </div>
              {/* <div className='flex justify-center items-center my-10'>
                <div className='w-5/6'>
                  <div class="text-center">
                    
                    <p className='font-extralight text-2xl mt-3'>German</p>
                    <p className='font-extralight'>
                  {instrDE}
                    </p>
                    <p className='font-extralight text-2xl mt-3 '>Italian</p>
                    <p className='font-extralight'>
                  {instrIT}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
  )
}
