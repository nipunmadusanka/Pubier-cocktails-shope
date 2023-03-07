import React from 'react'
import Image from 'next/image'

export default function Box({title:title, thumb:thumb, type:type, tags:tags, idDrink:idDrink }) {
  return (
    <div className='m-2 bg-white lg:h-full lg:w-full border border-spacing-10 max-w-[400px]'>
        <div className='item-center justify-center flex bg-fixed bg-cover w-full'>
        <img
            className=''
            src={thumb}
            // alt="Product Image"
            // width={250}
            // height={360}
          ></img>
        </div>
        <div className='mx-2 my-1'>
        <div className='item-center justify-center text-center'>
          <a href={'/view/'+idDrink}><p className='text-lg font-light hover:text-[#F29F05]'>{title}</p></a>
          {/* <p className='font-thin text-sm'>{type}</p> */}
        </div>
        <div className='item-center justify-center text-center'>
        {/* <p className=' font-light text-base text-red-700'>$100.00</p> */}
        </div>
        </div>
      </div>
  )
}
