require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.DB)

const users = new mongoose.model("users", new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
}))
const products = new mongoose.model("products", new mongoose.Schema({
    title: String,
    price: Number,
    tags: String,
    image: String,
}))
const cart = new mongoose.model("cart", new mongoose.Schema({
    uid: String,
    pid: String,
    qty: Number,
}))
const orders = new mongoose.model("orders", new mongoose.Schema({
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