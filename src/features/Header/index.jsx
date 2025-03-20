// Header.jsx
import { useState } from 'react';

const currencies = [
  { code: 'AUD', rate: '9,929.95', icon: '/images/flags/aud.svg' },
  { code: 'BND', rate: '11,230.87', icon: '/images/flags/bnd.png' },
  { code: 'CAD', rate: '11,347.18', icon: '/images/flags/cad.png' },
  { code: 'CHF', rate: '17,145.85', icon: '/images/flags/chf.png' },
  { code: 'CNY', rate: '2,116.14', icon: '/images/flags/cny.png' },
  { code: 'DKK', rate: '2,219.65', icon: '/images/flags/dkk.png' },
  { code: 'EUR', rate: '16,551.97', icon: '/images/flags/eur.png' },
];

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white -mt-6 p-4 mb-5 w-screen -mx-6">
      <div className="flex flex-col gap-3 justify-between items-center max-w-screen-xl mx-auto">
        {/* Бургер-меню для мобильных */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Навигационное меню */}
        <nav className={`md:flex gap-5 space-x-5 items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="block text-white hover:text-gray-300 py-2">Dashboard</a>
          <a href="#" className="block text-white hover:text-gray-300 py-2">Analytics</a>
          <div className="relative group">
            <a href="#" className="block text-white hover:text-gray-300 flex items-center py-2">
              Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-32">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Product 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Product 2</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="block text-white hover:text-gray-300 flex items-center py-2">
              Order
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-32">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Order 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Order 2</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="block text-white hover:text-gray-300 flex items-center py-2">
              Report
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-32">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Report 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-black">Report 2</a>
            </div>
          </div>
          <a href="#" className="block text-white hover:text-gray-300 py-2">Store info</a>
          <a href="#" className="block text-white hover:text-gray-300 py-2">Help</a>

          {/* Профиль пользователя */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 bg-stone-900 p-2 rounded"
            >
              <img
                src="/images/avatars/Avatar.svg"
                alt="Eva Bond"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-medium">Eva Bond</p>
                <p className="text-xs text-gray-400">eva.bond@gmail.com</p>
              </div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </nav>

        {/* Курсы валют */}
        <div className="hidden md:flex items-center space-x-4 -ml-10">
          {currencies.map((currency) => (
            <div key={currency.code} className="flex items-center space-x-2">
              <img
                src={currency.icon}
                alt={`${currency.code} flag`}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm text-gray-400">{currency.code}</span>
              <span className="text-sm text-gray-400">{currency.rate}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;