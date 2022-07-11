import React, { useReducer } from 'react'
import ReduxContext from './ReduxContext'
import reducer from '../contexts/reducer'
import intialState from './intialState'

export default function ReduxProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState)
  const value = { state, dispatch }
  return (
    <ReduxContext.Provider value={value}>
      {children}
    </ReduxContext.Provider>
  )
}
