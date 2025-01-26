import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className="mt-10 bg-gray-900 text-white">
            <div className="container mx-auto py-4 px-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center border border-white p-4 rounded-lg">
                    <h3 className="text-xl text-center text-blue-500 font-bold mb-2">Connect with Us</h3>
                    <p className="mb-1">
                        <span role="img" aria-label="phone">📞</span> +91 9567843340
                    </p>
                    <p>
                        <span role="img" aria-label="email">📧</span> info@deepnetsoft.com
                    </p>
                </div>
                <div className="border border-white p-4 rounded-lg relative text-center">
                    <img src={assets.logo} alt="" className="mx-auto mb-2 relative w-10 h-10" />
                    <h1 className="text-3xl font-bold mb-2">DEEP NET SOFT</h1>
                    <img src={assets.social_media} alt="" className="mx-auto w-32 h-6" />
                </div>

                <div className="flex flex-col items-center justify-center border border-white p-4 rounded-lg">
                    <h3 className="text-xl text-center text-blue-500 font-bold mb-2">FIND US</h3>
                    <p>
                        <span role="img" aria-label="location">L</span>First floor, Geo infopark,<br />Infopark EXPY, Kakkanad
                    </p>
                </div>
            </div>
            <div className="p-4 border-t border-gray-700 mt-8 text-center md:flex md:justify-between">
                <p className="text-sm">© 2024 Deepnetsoft Solutions. All rights reserved.</p>
                <div className="flex justify-center gap-4 text-sm mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
