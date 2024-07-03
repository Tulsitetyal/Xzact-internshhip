import React from "react";


const Headerbottom = () => {
  return (
    <nav className="relative bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between p-4">
        {/* All Categories Button */}
        <div className="flex items-center bg-customGreen text-white py-2 px-4 rounded-md">
          <i className="fas fa-th-large mr-2"></i>
          <span>All Categories</span>
          <i className="fas fa-chevron-down ml-2"></i>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-6 text-gray-700">
          <li className="relative group">
            <button className="flex items-center">
              Home
              <i className="fas fa-chevron-down ml-1"></i>
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Grocery</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Vegetables</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Packages</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center">
              Categories
              <i className="fas fa-chevron-down ml-1"></i>
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Submenu 1</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center">
              Products
              <i className="fas fa-chevron-down ml-1"></i>
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Product Page</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Product Prices</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Product Rating</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Product Review</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">New Product</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Mostly Purchased Product</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center">
              Blog
              <i className="fas fa-chevron-down ml-1"></i>
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Organic</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Fruits</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Vegetables</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Fast Food</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">New Snacks</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Drinks</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center">
              Others
              <i className="fas fa-chevron-down ml-1"></i>
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">About Us</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Contact Us</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Cart</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Checkout</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">New Snacks</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Drinks</a>
              </li>
            </ul>
          </li>
          <li>
            <button className="flex items-center">
              <i className="fas fa-clock mr-1"></i>
              Offers
            </button>
          </li>
        </ul>

        {/* Location Button */}
        <div className="flex items-center bg-customGreen text-white py-2 px-4 rounded-md">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>New York</span>
          <i className="fas fa-chevron-down ml-2"></i>
        </div>
      </div>
    </nav>
  );
};

export default Headerbottom;
