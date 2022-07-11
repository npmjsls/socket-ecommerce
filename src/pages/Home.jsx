import React from 'react'
import { LeftCard, RightCard } from '../components'
export default function Home() {
  return (
    <main className='flex gap-1 max-h-[85vh]	'>
      <div className=' w-60 bg-trueGray-300 shadow-md'><LeftCard /></div>
      <div className='flex-1 '><RightCard /></div>
    </main>
  )
}
