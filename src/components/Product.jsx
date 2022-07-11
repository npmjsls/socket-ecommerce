import React from 'react'

export default function Product({ _id, price, title, image, tags }) {
  return (
    <div className='transition-all p-1 relative shadow-md hover:scale-125 text-right'>
      <img width={100} height={100} src={image} />
      <div>{title}</div>
      <div>{price}</div>
      <div>{tags}</div>
      <div className='absolute  top-0 right-0 w-8 h-8 flex items-center justify-center  bg-purple-800 text-white text-xs hover:bg-purple-500 cursor-pointer'>+</div>
    </div>
  )
}
