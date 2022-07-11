require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.DB)

const users = new mongoose.model("users", new mongoose.Schem({
    name: String,
    email: String,
    phone: String,
    password: String,
}))
const products = new mongoose.model("products", new mongoose.Schem({
    title: String,
    price: Number,
    tags: String,
    image: String,
}))
const cart = new mongoose.model("cart", new mongoose.Schem({
    uid: String,
    pid: String,
    qty: Number,
}))
const orders = new mongoose.model("orders", new mongoose.Schem({
    uid: String,
    pid: String,
    qty: String,
}))


module.exports = {
    users,
    cart,
    orders,
    products
}