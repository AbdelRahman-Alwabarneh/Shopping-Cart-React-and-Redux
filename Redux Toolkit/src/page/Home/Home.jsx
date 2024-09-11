// Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/NavBar";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // جلب البيانات من الـ API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8 mt-[72px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Product Showcase
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-blue-900">
                    ${product.price}
                  </span>
                  <div className="text-yellow-500 flex items-center">
                    <span className="mr-1">{product.rating.rate}</span>
                    <span className="text-sm text-gray-600">
                      ({product.rating.count})
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md shadow-md hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg transition transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
