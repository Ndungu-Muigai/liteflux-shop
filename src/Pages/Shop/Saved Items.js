import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';
import {Link} from "react-router-dom"

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([]);

  // Mock data, replace this with your actual data fetching logic
  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Product 1', description: 'Description of product 1', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', description: 'Description of product 2', image: 'https://via.placeholder.com/150' },
      // Add more products as needed
    ];
    setSavedItems(mockData);
  }, []);

  return (
    <>
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Saved Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {savedItems.map((item) => (
                <div key={item.id} className="border p-4 rounded shadow">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p>{item.description}</p>
                    <Link to={`/products/${item.name}`} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View</Link>
                </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default SavedItems;
