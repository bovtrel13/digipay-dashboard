// RecentTransactionsFeature.jsx
import { useState, useEffect, useRef } from 'react';
import Card from '../../shared/ui/Card';

const transactions = [
  { name: 'Dribbble Subscription', category: 'Dribbble Pro Business Subscription', type: 'Freelance', amount: '-$200.00', icon: '/images/icons/dribble.svg' },
  { name: 'Spotify Subscription', category: 'Spotify Family Subscription', type: 'Family', amount: '-$200.00', icon: '/images/icons/spotify.svg' },
  { name: 'Netflix Subscription', category: 'Netflix Subscription', type: 'Family', amount: '-$200.00', icon: '/images/icons/netflix.svg' },
  { name: 'Freelance with NajwaTeam', category: 'Freelance UI Design Mobile App', type: 'Freelance', amount: '+$1,200.00', icon: '/images/icons/freelance.svg' },
  { name: 'Freelance with SabuanTeam', category: 'Freelance UI Design Websites', type: 'Freelance', amount: '+$1,500.00', icon: '/images/icons/freelance.svg' },
];

const RecentTransactionsFeature = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    <Card className="relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Recent Transactions</h2>
        <div className="flex items-center space-x-2">
          <div href="#" className="text-sm text-blue-500 hover:underline cursor-pointer">
            See all transactions
          </div>
        </div>
      </div>

      <ul className="space-y-4">
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="p-1 rounded-lg bg-gray-200 flex items-center justify-center">
              <img
                src={transaction.icon}
                alt={`${transaction.name} icon`}
                className="w-3 h-3"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-black">{transaction.name}</p>
                  <p className="text-xs text-gray-400">{transaction.category}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded w-1/5 text-center ${
                    transaction.type === 'Freelance'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {transaction.type}
                </span>
              </div>
            </div>
            <p
              className={`text-sm font-medium ${
                transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {transaction.amount}
            </p>
          </li>
        ))}
      </ul>

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

export default RecentTransactionsFeature;