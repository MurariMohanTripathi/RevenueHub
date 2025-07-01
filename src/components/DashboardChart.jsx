import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#3b82f6', // Tailwind blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#374151', // Tailwind gray-700
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6b7280', // gray-500
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#6b7280',
        },
        grid: {
          color: '#e5e7eb', // gray-200
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 sm:p-8">
      <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 text-center">
        📈 Monthly Sales Trend
      </h2>
      <div className="relative h-[300px] sm:h-[360px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DashboardChart;
