import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${assets.header_bg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl font-bold mb-2">MENU</h1>
        <p className="max-w-lg">Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
      </div>
    </div>
  )
}

export default Header
