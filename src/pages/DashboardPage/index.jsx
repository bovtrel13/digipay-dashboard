// DashboardPage.jsx
import BalanceFeature from '../../features/BalanceFeature';
import IncomeFeature from '../../features/IncomeFeature';
import ExpensesFeature from '../../features/ExpensesFeature';
import DebitCardFeature from '../../features/DebitCardFeature';
import RecentTransactionsFeature from '../../features/RecentTransactionsFeature';
import AnalyticsFeature from '../../features/AnalyticsFeature';
import QuickMenuFeature from '../../features/QuickMenuFeature';
import Header from '../../features/Header';
import App from '../../app/App';

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        {/* Левая колонка (RecentTransactionsFeature) */}
        <div className="md:col-span-4 space-y-6">
          <IncomeFeature />
          <ExpensesFeature />
          <RecentTransactionsFeature />
        </div>
        {/* Центральная колонка (AnalyticsFeature) */}
        <div className="md:col-span-3 space-y-6">
          <BalanceFeature />
          <AnalyticsFeature />
        </div>
        {/* Правая колонка (QuickMenuFeature) */}
        <div className="md:col-span-3 space-y-6">
          <DebitCardFeature />
          <QuickMenuFeature />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;