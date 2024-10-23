import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['spent', 'profit', 'investments', 'no.of customer', 'aquisition', 'Orange'],
    datasets: [
      {
        label: 'ratio',
        data: [12, 19, 3, 5, 2, 3], // Example data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '67%', height: '386px', margin: '11.1rem 1.1rem 3.1rem 12.7rem' }}>
      <h2>Sales Reports</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
