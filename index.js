const express = require("express")
const PORT = process.env.PORT || 4000
const { Server } = require("socket.io")
const { createServer } = require("http")
const controllers = require("./controllers")
const actions = require("./actions")
const app = express()
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
    }
})



io.on("connection", socket => {
    console.log("socket connected")
    socket.on(actions.onLogin, d => controllers.handleLogin(socket, d))
    socket.on(actions.onSignup, d => controllers.handleSignup(socket, d))
    socket.on(actions.onCart, d => controllers.handleCart(socket, d))
    socket.on(actions.onOrders, d => controllers.handleOrders(socket, d))
    socket.on(actions.onProfile, d => controllers.handleProfile(socket, d))
    socket.on(actions.onCheckout, d => controllers.handleCheckout(socket, d))
    socket.on(actions.onAddToCart, d => controllers.handleAddToCart(socket, d))
    socket.on(actions.onRemoveFromCart, d => controllers.handleRemoveFromCart(socket, d))
    socket.on(actions.onUpdateCart, d => controllers.handleUpdateCart(socket, d))
    socket.on(actions.onProductsUpload, d => controllers.handleProductsUpload(socket, d))
    socket.on(actions.onLogout, d => controllers.handleLogout(socket, d))
})


app.get("/", (req, res) => {
    res.json({ msg: "working" })
})

app.listen(PORT, () => console.log("server started on port " + PORT))