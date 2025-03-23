import { useState, useEffect, useRef } from 'react';
import Card from '../../shared/ui/card';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Food', value: 400 },
  { name: 'Family', value: 300 },
  { name: 'Freelance', value: 300 },
  { name: 'Business', value: 200 },
  { name: 'Transfer', value: 150 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#EBEEFF', '#D7DDFE', '#BBC6FB', '#92A3F6', '#778AED', '#566CD9'];

const renderCustomLegend = (props) => {
  const { payload } = props;

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-gray-500">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const Analytics = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Card className="relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold text-black">Analytics</h2>
          <p className="text-sm text-gray-400">View and evaluate your financial goals</p>
        </div>
      </div>

      <div className="flex justify-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend content={renderCustomLegend} />
        </PieChart>
      </div>
    </Card>
  );
};

export default Analytics;