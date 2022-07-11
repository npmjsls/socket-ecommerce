const { users, products, cart, orders } = require("./models")
const { _tags, _login, _auth, _transformIntoCart } = require("./utils")
const actions = require("./actions")
const handleProducts = async (socket, body) => {
    let data = products.find().then(d => d).catch(e => [])
    socket.emit(actions.Yesproducts, { data, status: true })
}
const handleTags = async (socket, body) => {
    let data = await products.find().then(d => d).catch(e => [])
    socket.emit(actions.Yestags, { data: _tags(data), status: true })
}
const handleLogin = async (socket, body) => {
    const { email, password } = body
    let data = await users.findOne({ email, password }).then(d => d).catch(e => null)
    if (data) {
        socket.emit(actions.Yeslogin, { data, token: _login(data?._id), status: true })
    }
    else {
        socket.emit(actions.Yeslogin, { data: null, token: null, status: false })
    }

}

const handleSignup = async (socket, body) => {
    const { email } = body
    let data = await users.findOne({ email }).then(d => d).catch(e => null)

    if (data === null) {
        let info = await users.create(body).then(d => d).catch(e => null)
        if (info === null) { socket.emit(actions.Yessignup, { data: null, status: false }) }
        socket.emit(actions.Yessignup, { data: info, status: true })
    }
    else {
        socket.emit(actions.Yessignup, { data: null, status: false })
    }
}
const handleCart = async (socket, body) => {
    let uid = _auth(socket, body?.token)
    let data = await cart.find({ uid }).then(d => d).catch(e => [])
    let productsData = await products.find().then(d => d).catch(e => [])
    socket.emit(actions.Yescart, { data: _transformIntoCart(data, productsData), status: true })
}
const handleOrders = async (socket, body) => {
    let uid = _auth(socket, body?.token)
    let data = await orders.find({ uid }).then(d => d).catch(e => [])
    let productsData = await products.find().then(d => d).catch(e => [])
    socket.emit(actions.Yesorders, { data: _transformIntoCart(data, productsData), status: true })
}
const handleProfile = async (socket, body) => {
    let uid = _auth(socket, body?.token)
    let data = await users.findById(uid).then(d => d).catch(e => null)
    socket.emit(actions.Yesprofile, { data, status: true })

}
const handleCheckout = async (socket, body) => {
    let uid = _auth(socket, body?.token)
}
const handleAddToCart = async (socket, body) => {
    let uid = _auth(socket, body?.token)
    let { pid } = body
    let data = await cart.findOne({ uid, pid }).then(d => d).catch(e => null)
    if (data) {
        let updatedToCart = await cart.findByIdAndUpdate(data?._id, { qty: data?.qty + 1 }).then(d => d).catch(e => null)
        socket.emit(actions.YescartAction, { data: updatedToCart, status: true, added: true })
    }
    else {

        let addedToCart = await cart.create({ uid, pid, qty: 1 }).then(d => d).catch(e => null)
        socket.emit(actions.YescartAction, { data: addedToCart, status: true, added: false })
    }
}
const handleRemoveFromCart = async (socket, body) => {
    let uid = _auth(socket, body?.token)
    let { _id } = body
    let data = await cart.findByIdAndDelete(_id).then(d => d).catch(e => null)
    socket.emit(actions.YesremovedFromCart, { data, status: true })

}
const handleUpdateCart = async (socket, body) => {
    let uid = _auth(socket, body?.token)
    let { _id, qty } = body
    let data = await cart.findByIdAndUpdate(_id, { qty }).then(d => d).catch(e => null)
    socket.emit(actions.YesupdatedCart, { data, status: true })
}
const handleLogout = async (socket, body) => {
    socket.emit(actions.YesLoggedOut, { data: null, token: null, status: true })
}



const controllers = {
    handleLogin: handleLogin,
    handleSignup: handleSignup,
    handleCart: handleCart,
    handleOrders: handleOrders,
    handleProfile: handleProfile,
    handleCheckout: handleCheckout,
    handleAddToCart: handleAddToCart,
    handleRemoveFromCart: handleRemoveFromCart,
    handleUpdateCart: handleUpdateCart,
    handleLogout: handleLogout,
    handleProducts: handleProducts,
    handleTags: handleTags,
    handleProductsUpload: handleProductsUpload,
}
module.exports = controllers