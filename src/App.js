import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components/index'
import {
    Home,
    Login,
    Signup,
    Cart,
    Orders,
    Profile,
    Checkout,
    Upload,
    ErrorPage
} from './pages'
export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className=''>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Signup" element={<Signup />} />
                    <Route path="Cart" element={<Cart />} />
                    <Route path="Orders" element={<Orders />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="Checkout" element={<Checkout />} />
                    <Route path="Upload" element={<Upload />} />
                    <Route path="ErrorPage" element={<ErrorPage />} />
                </Routes></div>
            <Footer />
        </BrowserRouter>
    )
}
