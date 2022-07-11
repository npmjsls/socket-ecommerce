import React, { useContext } from 'react'
import ReduxContext from '../contexts/ReduxContext'
export default function SearchBar() {
  const { state, dispatch } = useContext(ReduxContext)
  return (
    <div>
      <input
        className='transition-all bg-white border p-2 px-4 rounded-full outline-none focus:bg-gray-400'
        placeholder='search'
      />
    </div>
  )
}
