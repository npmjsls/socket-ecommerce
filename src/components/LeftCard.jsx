import React, { useContext } from 'react'
import ReduxContext from '../contexts/ReduxContext'
export default function LeftCard() {
  const { state, dispatch } = useContext(ReduxContext)
  const { tags, tagname } = state

  const active = x => x === tagname

  const handleClick = payload => dispatch({ type: "tagname", payload })

  return (
    <div className='transition-all sticky top-16 flex flex-col gap-3 p-3'>
      {tags?.map((x, i) => <div
        key={i}
        className={`${active(x?.t) ? 'bg-black text-white  shadow-md' : 'bg-gray-200 text-black'} p-2 px-4 rounded-full flex justify-between cursor-pointer transition-all hover:bg-gray-600 hover:text-white`}
        onClick={() => handleClick(x.t)}
      >
        {x.t}
        <span className='px-2 bg-white text-black rounded-full'>{x.c}</span>
      </div>)}
    </div>
  )
}
