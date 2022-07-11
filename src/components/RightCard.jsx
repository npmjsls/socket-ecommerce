import React from 'react'
import SearchBar from './SearchBar'
import SortFilter from './SortFilter'
import TagsFilter from './TagsFilter'
import Products from './Products'
export default function RightCard() {
  return (
    <div>
      <div className='p-2 text-center flex items-center justify-evenly transition-all sticky top-16 bg-white z-40'>
        <SearchBar />
        <SortFilter />
        <TagsFilter />
      </div>
      <Products />
    </div>
  )
}
