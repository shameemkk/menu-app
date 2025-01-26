import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../config/api';

const MenuItems = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [menu, setMenu] = useState('');
    const [menus, setMenus] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/getMenu`)
            .then(response => {
                setMenus(response.data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const itemData={
            "name": name,
            "description": description,
            "price": price,
            "menu": menu,
        }
        try {
            const response = await axios.post(`${API_URL}/addMenuItem`, itemData);
            setSuccess('Menu item added successfully!');
            setError(null);
            setName('');
            setDescription('');
            setPrice('');
            setMenu('');
        } catch (error) {
            setError(error.message);
            setSuccess(null);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 mt-10 border border-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Add Menu Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-lg font-medium">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-medium">Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-medium">Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg font-medium">Menu:</label>
                    <select
                        value={menu}
                        onChange={(e) => setMenu(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option className='bg-black hover:bg-blue-700' value="">Select a menu</option>
                        {menus.map((menu) => (
                            <option key={menu._id} value={menu._id} className='bg-black hover:bg-blue-700'>{menu.name}</option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Add Menu Item
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>
        </div>
    );
};

export default MenuItems;
