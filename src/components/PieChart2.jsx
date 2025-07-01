import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart2 = () => {
  const data = {
    labels: ['Spent', 'Profit', 'Investments', 'Customers', 'Acquisition', 'Misc'],
    datasets: [
      {
        label: 'Category Distribution',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#f87171', // red-400
          '#60a5fa', // blue-400
          '#facc15', // yellow-400
          '#34d399', // green-400
          '#a78bfa', // purple-400
          '#fb923c', // orange-400
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#4b5563', // Tailwind gray-600
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[550px] transition-all duration-300">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-100">
        📊 Category Distribution
      </h2>
      <div className="relative h-full w-full">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart2;
