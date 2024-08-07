import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { useCart } from './Context/Cart Context';

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([]);
  const { addToCart } = useCart();

  const navigate=useNavigate()
  // Mock data, replace this with your actual data fetching logic
  useEffect(() => {
    const mockData = [
      { id: 1, name: 'Product 1', description: 'Description of product 1', image: 'https://via.placeholder.com/150', price="1500" },
      { id: 2, name: 'Product 2', description: 'Description of product 2', image: 'https://via.placeholder.com/150', price="1500" },
      // Add more products as needed
    ];
    setSavedItems(mockData);
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item, 1);
  };

  const handleBuyNow = (item) => {
    addToCart(item, 1);
    // Redirect to checkout page
    navigate('/checkout')
  };

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
              <div className="flex flex-col mt-2 space-y-2">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Buy Now
                </button>
                <Link
                  to={`/products/${item.id}`}
                  className="px-4 py-2 bg-blue-500 text-white text-center rounded hover:bg-blue-600"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedItems;
