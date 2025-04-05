import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Barchart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Data for the bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55, 40], // Example data
        backgroundColor: 'rgb(51, 86, 138)',
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at zero
      },
    },
  };

  return (
    <div style={{ width: '37%', height: '304px', margin: '-22.1rem 1.1rem 1.1rem 55.1rem' }} className='Barchart'>
      <h2>Sales every month</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
