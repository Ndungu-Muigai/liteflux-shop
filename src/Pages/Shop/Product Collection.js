import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { CiDeliveryTruck } from "react-icons/ci"
import { BsCashCoin } from "react-icons/bs"
import { AiOutlineFileProtect } from "react-icons/ai"
import { useCart } from "./Context/Cart Context" 
import Footer from "../../Components/Footer"

const ProductCollection = () => {
    let { collection } = useParams()

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const { addToCart } = useCart()  // Ensure addToCart is available here
    const productsPerPage = 6

    useEffect(() => {
        fetch("https://products.litefluxent.com/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data.filter(d => d.category === collection))
                setLoading(false)
            })
    }, [collection])  // Added collection to dependency array

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const totalPages = Math.ceil(products.length / productsPerPage)

    const handlePageChange = (event, number) => {
        event.preventDefault()
        setCurrentPage(number)
    }

    const previousPages = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" }
    ]

    return (
        <>
            <div className="grid grid-cols-1 gap-3 md:gap-0 md:flex md:justify-around md:items-center bg-gray-100 py-7 rounded-lg shadow-md">
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <CiDeliveryTruck className="text-3xl mb-2" />
                    <span className="text-sm font-medium px-4">Fast Free Shipping over KES {(1500).toLocaleString()}</span>
                </div>
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <BsCashCoin className="text-3xl mb-2" />
                    <span className="text-sm font-medium px-4">Cash On Delivery</span>
                </div>
                <div className="flex md:flex-col items-center px-2 md:px-0">
                    <AiOutlineFileProtect className="text-3xl mb-2" />
                    <span className="text-sm font-medium px-4">Hassle-Free Warranty</span>
                </div>
            </div>

            <div className="border-b-2 mt-5 p-4">
                {
                    previousPages.map((page, index) => (
                        <span key={index}>
                            <Link to={page.path} className="font-bold hover:underline">{page.name}</Link>
                            {index < previousPages.length - 1 && " >> "}
                        </span>
                    ))
                }
                <span className="font-bold"> &gt;&gt; &nbsp;
                    {
                        collection === "cctv-cameras"
                            ? "CCTV Cameras"
                            : collection === "communication-devices"
                                ? "Communication Devices"
                                : collection === "solar-products"
                                    ? "Solar Products"
                                    : collection.charAt(0).toUpperCase() + collection.slice(1)
                    }
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    loading
                        ? Array.from({ length: productsPerPage }).map((_, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
                                <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>
                                <div className="mt-2 h-6 bg-gray-300 rounded"></div>
                                <div className="mt-2 h-4 bg-gray-300 rounded"></div>
                                <div className="mt-2 h-4 bg-gray-300 rounded"></div>
                            </div>
                        ))
                        : currentProducts.map(product => (
                            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                                <Link to={`/products/${product.name}`}>
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                                    <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                                    <p className="text-gray-600 mt-2">{product.description}</p>
                                    <p className="text-lg font-semibold mt-2">KES {product.price.toLocaleString()}</p>
                                </Link>
                                <div className="relative group">
                                    <div className="flex justify-between mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link to={`/products/${product.name}`} className="btn text-white">Learn more</Link>
                                        <button
                                            onClick={() => addToCart(product, 1)}
                                            className="btn bg-background text-white hover:bg-blue-600 transition duration-300"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>

            <div className="flex justify-center items-center mt-4">
                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={(event) => handlePageChange(event, index + 1)} className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-background text-white' : 'bg-gray-200'}`}>{index + 1}</button>
                    ))
                }
            </div>

            <Footer />
        </>
    )
}

export default ProductCollection
