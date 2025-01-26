import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {API_URL} from '../config/api'

const Menu = () => {
    const [activeButton, setActiveButton] = useState();
    const [menu, setMenu] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    const handleButtonClick = (id) => {
        setMenuItems([]);
        setActiveButton(id);

    };

    useEffect(() => {
        axios.get(`${API_URL}/getMenu`)
            .then(response => {
                console.log(response.data);
                setMenu(response.data);
                setActiveButton(response.data[0]._id);
            })
            .catch(error => {
                console.log(error.message);
            });

    }, []);

    useEffect(() => {
        if (activeButton) {
            axios.get(`${API_URL}/getMenuItems/${activeButton}`)
                .then(response => {
                    console.log(response.data);
                    setMenuItems(response.data);
                })
                .catch(error => {
                    console.log(error.message);
                });
        }
    }, [activeButton]);

    return (
        <div>
            <div className="flex justify-center space-x-4 mb-4 mt-8">
                {menu.map((item) => (
                    <button
                        key={item.id}
                        className={`font-bold px-4 py-2 rounded ${activeButton === item._id ? 'bg-blue-500 text-white' : 'bg-black text-blue-500 border border-blue-500'}`}
                        onClick={() => handleButtonClick(item._id)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="max-w-4xl mx-auto py-8 px-4 border border-white rounded-lg">
                <h1 className="text-center text-3xl font-bold text-red-500 mb-4">{menu.length > 0 && menu.find((item) => item._id === activeButton)?.name} Items</h1>
                <p className="text-center text-gray-500">{menu.find((item) => item._id === activeButton)?.description} </p>
                <hr className='my-2' />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto max-h-96">
                    {menuItems.map((item) => (
                        <div key={item.id} className="w-full">
                            <div className="flex sm:flex-row justify-between py-4 px-4 mb-2">
                                <div>
                                    <h2 className="text-lg font-bold">{item.name}</h2>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                                <p className="text-lg font-bold sm:mt-0 mt-2">₹{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
