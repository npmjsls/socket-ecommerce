import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='flex p-2 bg-blue-900 items-center justify-between sticky top-0 shadow-xl z-50'>
      <div className='text-3xl'>
        <span className='text-orange-400'>Logo</span>
        <span className='text-yellow-200'>Name</span>
      </div>
      <div>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/">Home</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Login">Login</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Signup">Signup</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Cart">Cart</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Orders">Orders</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Profile">Profile</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Checkout">Checkout</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Logout">Logout</Link>
        <Link className='p-2 transition-all text-lime-100 hover:text-lime-500 ' to="/Upload">Upload</Link>
      </div>
    </header>
  )
}
