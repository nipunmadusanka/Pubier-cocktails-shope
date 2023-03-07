import React from 'react'

export default function Box2({title:title, thumb:thumb, des:des, type:type, tags:tags, idDrink:idDrink}) {
  return (
    <div className='flex justify-center items-center'>
     <div className='flex m-2 bg-white p-1 w-10/12 border border-spacing-10'>
     <div className='w-1/3'>
        <div className=' item-center justify-center flex bg-cover w-full h-64'>
        <img
         className=''
            src={thumb}
            // alt="Product Image"
            // width={250}
            // height={360}
          ></img>
        </div>
      </div>
      <div className='w-2/3'>
        <div className='mx-2 my-2'>
        <div className='item-center justify-center text-left'>
        <a href={'/view/'+idDrink}><p className='text-lg font-light hover:text-red-700'>{title}</p></a>
        <div className='item-start justify-start text-start mt-4'>
        <p className='font-light text-base text-red-700'>$100.00</p>
        </div>
          <div class="bg-fixed mt-4">
                  <p class="font-thin text-[16px] text-slate-400">{des}</p>  
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
  )
}
