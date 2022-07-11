import intialState from '../contexts/intialState'
const reducer = (state = intialState, action) => {
    console.log(action)
    switch (action?.type) {
        case "socket-success": return { ...state, socket: true }
        case "socket-failed": return { ...state, socket: false }
        case "boot": return { ...state, ...action?.payload }
        case "tagname": return { ...state, tagname: action?.payload }
        default: return state
    }
}


export default reducer