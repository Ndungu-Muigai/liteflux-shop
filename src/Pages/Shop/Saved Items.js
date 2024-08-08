import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import { useCart } from './Context/Cart Context'
import { useSavedItems } from './Context/Saved Items Context'

const SavedItems = () => {
  const { savedItems, removeItemFromSaved } = useSavedItems()
  const { addToCart } = useCart()
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemToRemove, setItemToRemove] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate fetching data with a timeout
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  // const handleAddToCart = item => addToCart(item, 1)

  const handleBuyNow = item => 
  {
    addToCart(item, 1)
    navigate('/checkout')
  }

  const handleRemoveClick = item => 
  {
    setItemToRemove(item)
    setIsModalOpen(true)
  }

  const handleConfirmRemove = () => 
  {
    if (itemToRemove) 
    {
      removeItemFromSaved(itemToRemove.id)
    }
    setIsModalOpen(false)
    setItemToRemove(null)
  }

  const handleCancelRemove = () => 
  {
    setIsModalOpen(false)
    setItemToRemove(null)
  }

  return (
    <>
      <div className="p-3">
        <h2 className="text-2xl font-bold mb-4">Saved Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {isLoading ? (
            // Placeholder cards while loading
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="border p-4 rounded shadow animate-pulse max-w-xs">
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
          ) : savedItems.length === 0 ? (
            // Display when there are no saved items
            <div className="col-span-full text-center text-gray-500">
              No saved items found.
            </div>
          ) : (
            // Display saved items
            savedItems.map((item) => 
            (
              <div key={item.id} className="border p-3 rounded shadow w-full flex flex-col">
                <Link to={`/products/${item.name}`} className="flex-grow">
                  <img src={item.image} alt={item.name} className="w-full h-52 object-cover mb-4 rounded" />
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className='text-2xl mb-2'>{item.description}</p>
                </Link>
                <div className="flex flex-row justify-between mt-3 gap-4">
                  <button onClick={() => handleBuyNow(item)} className="px-2 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Buy Now</button>
                  <button onClick={() => handleRemoveClick(item)} className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600">Remove from wishlist</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {
        isModalOpen && 
          (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Confirm Removal</h3>
                <p>
                  Are you sure you want to remove <strong>{itemToRemove?.name}</strong> from your wishlist?
                </p>
                <div className="flex justify-end mt-4 gap-2">
                  <button onClick={handleCancelRemove} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                  <button onClick={handleConfirmRemove} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Confirm</button>
                </div>
              </div>
            </div>
          )
      }

      <Footer />
    </>
  )
}

export default SavedItems
