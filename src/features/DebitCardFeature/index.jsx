import { useState, useEffect, useRef } from 'react';
import Card from '../../shared/ui/Card';

const DebitCardFeature = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Закрытие меню при клике вне области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Card className="relative">
      {/* Заголовок и иконка меню */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Debit Card</h2>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>

      {/* Карточка */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-6 pt-6">
        {/* Логотип (два круга) */}
        <div className="flex space-x-2 mb-6">
          <div className="w-8 h-8 bg-blue-300 opacity-50 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-200 opacity-50 rounded-full -ml-4"></div>
        </div>

        {/* Номер карты */}
        <p className={`text-xl font-normal tracking-wider ${window.innerWidth < 768 ? 'text-lg' : ''}`}>
          3455 4562 7710 3507
        </p>

        {/* Дата, имя и чип */}
        <div className="bg-black flex justify-between items-center mt-4 -mx-6 h-20 rounded-b-lg px-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-normal">02/30</p>
            <p className="text-sm font-normal">JOHN CARTER</p>
          </div>
          <img
            src="images/Chip.svg"
            alt="Card Chip"
            className="w-10 h-7"
          />
        </div>
      </div>

      {/* Прогресс-бар и лимит */}
      <div className="mt-4">
        <div className='flex items-center justify-between'>
          <p className="text-sm font-semibold text-black">Debit Card payment limit</p>
          <p className="text-sm text-black mt-1">$500 / <span className='text-gray-400'>1500</span></p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-5 mt-2">
          <div className="bg-gradient-to-l from-blue-800 to-blue-400 h-5 rounded-full" style={{ width: '33.33%' }}></div>
        </div>
      </div>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-10 right-4 bg-white text-black shadow-lg rounded-lg py-2 w-32 z-10"
        >
          <div
            className="block px-4 py-2 text-sm text-black hover:text-stone-600 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Обновить
          </div>
        </div>
      )}
    </Card>
  );
};

export default DebitCardFeature;