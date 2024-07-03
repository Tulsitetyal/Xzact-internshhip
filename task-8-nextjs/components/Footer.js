export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo and Description */}
        <div className="col-span-1">
          <img src="./images/logo.png" alt="logo" />
          <p className="mt-4 text-gray-600">
            Grabit is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="mt-6">
            <a href="#" className="block mb-2">
              <img src="./images/android.png" alt="Google Play" className="w-32" />
            </a>
            <a href="#">
              <img src="./images/apple.png" alt="App Store" className="w-32" />
            </a>
          </div>
        </div>
        {/* Category */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Dairy & Milk</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Snack & Spice</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Fast Food</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Juice & Drinks</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Bakery</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Seafood</a>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">About us</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Delivery</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Legal Notice</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Terms & conditions</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Secure payment</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Contact us</a>
            </li>
          </ul>
        </div>
        {/* Account */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Sign In</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">View Cart</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Return Policy</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Become a Vendor</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Affiliate Program</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-600">Payments</a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <i className="fas fa-map-marker-alt mr-2"></i> 2548
              Broaddus Maple Court, Madisonville KY 4783, USA.
            </li>
            <li className="text-gray-600">
              <i className="fas fa-phone-alt mr-2"></i> +00
              9876543210
            </li>
            <li className="text-gray-600">
              <i className="fas fa-envelope mr-2"></i>
              example@email.com
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
