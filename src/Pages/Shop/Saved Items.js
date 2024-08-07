import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import { useCart } from './Context/Cart Context';
import { useSavedItems } from './Context/Saved Items Context';

const SavedItems = () => 
{
  const { savedItems } = useSavedItems();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => 
  {
    // Simulate fetching data with a timeout
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleAddToCart = item => addToCart(item, 1)

  const handleBuyNow = item => 
  {
    addToCart(item, 1);
    navigate('/checkout');
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Saved Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {
            isLoading 
            ? 
              (
                // Placeholder cards while loading
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="border p-4 rounded shadow animate-pulse">
                    <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div>
                    <div className="h-6 bg-gray-200 mb-2"></div>
                    <div className="h-4 bg-gray-200 mb-2"></div>
                    <div className="h-4 bg-gray-200 mb-2"></div>
                    <div className="flex flex-row mt-2 gap-4">
                      <div className="w-24 h-10 bg-gray-200 rounded"></div>
                      <div className="w-24 h-10 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-32 h-10 mt-5 bg-gray-200 rounded"></div>
                  </div>
                ))
              ) 
            : 
              savedItems.length === 0 
              ? (
                  // Display when there are no saved items
                  <div className="col-span-full text-center text-gray-500">
                    No saved items found.
                  </div>
                ) 
              : 
              (
              // Display saved items
              savedItems.map((item) => 
              (
                <div key={item.id} className="border p-4 rounded shadow">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded"/>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="flex flex-row mt-2 gap-4">
                    <button onClick={() => handleAddToCart(item)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add to Cart</button>
                    <button onClick={() => handleBuyNow(item)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Buy Now</button>
                  </div>
                  <Link to={`/products/${item.id}`} className="px-4 py-2 mt-5 bg-blue-500 text-white text-center rounded hover:bg-blue-600">View Product</Link>
                </div>
              ))
            )
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedItems;
