import React from 'react'

export default function SortFilter() {
  return (
    <div>
        <button className='transition-all bg-blue-100 focus:bg-blue-400  p-2 px-4 mr-1 rounded-full'>low to high</button>
        <button className='transition-all bg-blue-100 focus:bg-blue-400  p-2 px-4 mr-1 rounded-full'>high to low</button>
    </div>
  )
}
