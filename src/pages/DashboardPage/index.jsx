import BalanceFeature from '../../features/BalanceFeature';
import IncomeFeature from '../../features/IncomeFeature';
import ExpensesFeature from '../../features/ExpensesFeature';
import DebitCardFeature from '../../features/DebitCardFeature';
import RecentTransactionsFeature from '../../features/RecentTransactionsFeature';
import AnalyticsFeature from '../../features/AnalyticsFeature';
import QuickMenuFeature from '../../features/QuickMenuFeature';
import Header from '../../features/Header';

const DashboardPage = () => {
  return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="p-6 max-w-7xl mx-auto mt-0 relative z-10 md:-mt-35">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            <div className="md:col-span-4 space-y-6">
              <div className="shadow-xl rounded-lg bg-white">
                <IncomeFeature />
              </div>
              <div className="shadow-xl rounded-lg">
                <ExpensesFeature />
              </div>
              <div className="shadow-xl rounded-lg bg-white relative md:top-2 md:w-xl">
                <RecentTransactionsFeature />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div className="shadow-xl rounded-lg bg-white">
                <BalanceFeature />
              </div>
              <div className="shadow-xl rounded-lg bg-white relative md:left-25 md:top-1 md:w-9/10">
                <AnalyticsFeature />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div className="shadow-xl rounded-lg bg-white">
                <DebitCardFeature />
              </div>
              <div className="shadow-xl rounded-lg bg-white relative md:left-17 md:w-4/5">
                <QuickMenuFeature />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DashboardPage;