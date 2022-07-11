import React, { useCallback, useContext, useEffect, useState } from 'react'
import SocketContext from './SocketContext'
import ReduxContext from './ReduxContext'
import io from "socket.io-client"

function Socketio({ children }) {
    const { dispatch } = useContext(ReduxContext)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (socket === null) {
            setSocket(io("http://localhost:4000/"))
        }
        if (socket) {
            socket.emit("get-all", { token: "" })
            socket.on('get-all-done', (d) => {
                // console.log("Connected", d)
                dispatch({type:"boot",payload:d?.data})
            })  

        }
    }, [socket])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default Socketio