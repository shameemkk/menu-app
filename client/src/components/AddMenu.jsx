// AddMenu.js
import React, { useState } from 'react';
import axios from 'axios';

const AddMenu = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    setError(null);
    setSuccess(null);
    event.preventDefault();
    const menu = {name:name,description:description};
    axios.post('http://localhost:3000/addMenu', menu)
      .then((response) => {
        setSuccess('Menu item added successfully!');
        setName('');
        setDescription('');
      })
      .catch((error) => {
        setError('Failed to add menu item. Please try again.');
      });
  };

  return (
    <div className="container mx-auto p-4 mt-4">
    <div className="max-w-md mx-auto border border-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Add Menu</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add Menu Item
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
      {success && (
        <p className="text-green-500 text-sm mt-2">{success}</p>
      )}
    </div>
    </div>
  );
};

export default AddMenu;