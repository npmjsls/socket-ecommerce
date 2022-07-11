import React, { useContext } from 'react'
import NetworkContext from './NetworkContext'
import ReduxContext from './ReduxContext'
export default function NetworkProvider({ children }) {

    const { state } = useContext(ReduxContext)

    const online = state?.socket

    // if(!online) return <h1>we are offline now try again some time</h1>
    // return (
    //     <NetworkContext.Provider value={online}>
    //         {children}
    //     </NetworkContext.Provider>
    // )
    return children
}
