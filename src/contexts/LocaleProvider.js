import React, { useState } from 'react'
import LocaleContext from './LocaleContext'
import Lang from '../lang'
export default function LocaleProvider({ children }) {
  const [lang, setLang] = useState("en")
  const useCode = key => {
    return Lang[lang][key] || ''
  }
  const value = {
    lang,
    setLang,
    useCode
  }
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}
