import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../page/Cart/Cart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeFromCart } from '../Redux/cartSlice';
const Navbar = () => {
  // عدد العناصر في السلة (يمكن ربطها بالحالة الفعلية لاحقًا)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.length; // كمثال، يمكنك استبدالها بحالة فعلية لاحقًا

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* شعار الموقع */}
        <div className="flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1250078577219600477/1282784975699181588/userImg.png?ex=66e2985b&is=66e146db&hm=19a6fb80c8a76885700d9c72607d069f049110ab181c9c0057c4425d2ebe15c9&"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold text-blue-900 ml-3">My Shop</span>
        </div>

        {/* الروابط */}
        <div className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-900 font-semibold transition"
          >
            Home
          </a>
          <a
            href="/store"
            className="text-gray-700 hover:text-blue-900 font-semibold transition"
          >
            Store
          </a>
        </div>

        {/* أيقونة السلة */}
        <Link to="/Cart" className="relative cursor-pointer">
          <FaShoppingCart className="text-gray-700 hover:text-blue-900 text-2xl transition" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
