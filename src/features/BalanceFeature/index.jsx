// BalanceFeature.jsx
import { useState, useEffect, useRef } from 'react';
import Card from '../../shared/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', balance: 100 },
  { day: 'Tue', balance: 70 },
  { day: 'Wed', balance: 75 },
  { day: 'Thu', balance: 90 },
  { day: 'Fri', balance: 80 },
  { day: 'Sat', balance: 60 },
  { day: 'Sun', balance: 95 },
];

const BalanceFeature = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Закрытие меню при клике вне области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Добавляем слушатель события на документ
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Card className="relative">
      {/* Заголовок и иконка меню */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg text-black font-semibold">Total Balance</h2>
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

      {/* Основное содержимое */}
      <p className="text-3xl text-black mb-3 font-semibold">$36,254</p>
      <p className="text-sm text-gray-500">$328.28 Today, 11 Oct</p>
      <div className="mt-4">
        <LineChart width={300} height={190} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3B82F6" dot={false} />
        </LineChart>
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

export default BalanceFeature;