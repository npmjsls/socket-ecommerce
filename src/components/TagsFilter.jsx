import React, { useContext } from 'react'
import ReduxContext from '../contexts/ReduxContext'
export default function TagsFilter() {
  const { state, dispatch } = useContext(ReduxContext)
  const { tags, tagname } = state
  return (
    <div>
      <select className='p-2  px-4 rounded-xl appearance-none outline-none'>
        <option value="">Select A Tag</option>
        {tags?.map((x,i) => <option key={i} value={x.t}>{x.t} {x.c}</option>)}
      </select>
    </div>
  )
}
