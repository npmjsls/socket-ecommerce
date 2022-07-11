require("dotenv").config()
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken")
const _tags = a => {
    let b = Array.from(new Set(a?.map(x => x.tags)))
    b = b.map(x => ({ t: x, c: _count(b, x) }))
}
const _count = (a, name) => {
    return a.filter(x => x === name)?.length || 0
}
const _transformIntoCart = (a, b) => {
    // a is cart
    // b is products
    let temp = []

    for (let item of cart) {
        temp = {
            ...item,
            cid: item?._id.toString(),
            ...b.find(x => x?._id?.toString() === item?.pid) || {},
            _id: item?._id?.toString()
        }
    }
    return temp
}

const _login = (id) => {
    jwt.sign({ id }, SECRET, (err, token) => {
        if (err) return null
        return token
    })
}
const _auth = (socket, token) => {
    jwt.verify(token, SECRET, (err, data) => {
        if (err) {
            socket.emit("auth", { data: null, status: false })
            return null
        }
        return data?.id
    })
}



module.exports = {
    _tags,
    _login,
    _auth,
    _transformIntoCart,
}