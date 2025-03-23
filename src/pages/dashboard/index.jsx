import Balance from '../../features/balance';
import Income from '../../features/income';
import Expenses from '../../features/expenses';
import DebitCard from '../../features/debit-card';
import RecentTransactions from '../../features/recent-transactions';
import Analytics from '../../features/analytics';
import QuickMenu from '../../features/quick-menu';
import Header from '../../features/header';

const Dashboard = () => {
  return (
      <div className="bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6 max-w-7xl mx-auto mt-0 relative z-10 md:-mt-35">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            <div className="md:col-span-4 space-y-6">
              <div className="shadow-xl rounded-lg bg-white">
                <Income />
              </div>
              <div className="shadow-xl rounded-lg">
                <Expenses />
              </div>
              <div className="shadow-xl rounded-lg bg-white relative md:top-2 md:w-xl">
                <RecentTransactions />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div className="shadow-xl rounded-lg bg-white">
                <Balance />
              </div>
              <div className="shadow-xl rounded-lg bg-white relative md:left-25 md:top-1 md:w-9/10">
                <Analytics />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div className="shadow-xl rounded-lg bg-white">
                <DebitCard />
              </div>
              <div className="shadow-xl rounded-lg bg-white relative md:left-17 md:w-4/5">
                <QuickMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;