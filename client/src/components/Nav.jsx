import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const NavItems = [{
        title: 'HOME',
        link: '/',
    },
    {
        title: 'MENU',
        link: '/admin',
    },
    {
        title: 'MAKE A RESERVATION',
        link: '#',
    },
    {
        title: 'CONTACT US',
        link: '#',
    }
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-gray-800 text-white">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={assets.logo} alt="" className="h-10 mr-3" />
                    <h1 className="text-2xl font-bold"><span className="text-blue-500">DEEP </span><span>NET</span><br /><span className="text-gray-500">SOFT</span></h1>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    {NavItems.map((item, index) => (
                        <li
                            key={index}
                            className={`cursor-pointer ${activeIndex === index ? 'text-blue-500' : 'hover:text-blue-500'}`}
                            onClick={() => handleClick(index)}
                        >
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Nav
