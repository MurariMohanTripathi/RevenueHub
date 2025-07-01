import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#6b7280', // Tailwind gray-500
        },
        grid: {
          color: '#e5e7eb', // Tailwind gray-200
        },
      },
      x: {
        ticks: {
          color: '#6b7280',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#374151', // Tailwind gray-700
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
