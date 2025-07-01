import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Spent', 'Profit', 'Investments', 'Customers', 'Acquisition', 'Misc'],
    datasets: [
      {
        label: 'Category Distribution',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#f87171', // red
          '#60a5fa', // blue
          '#facc15', // yellow
          '#34d399', // green
          '#a78bfa', // purple
          '#fb923c', // orange
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
          color: '#374151', // Tailwind gray-700
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
        💹 Sales Distribution
      </h2>
      <div className="relative w-full h-[300px] sm:h-[400px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
