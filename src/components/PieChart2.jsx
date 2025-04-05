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

const PieChart2 = () => {
  // Data for the pie chart
  const data = {
    labels: ['spent', 'profit', 'investments', 'no.of customer', 'aquisition', 'Orange'],
    datasets: [
      {
        label: 'Fruit Distribution',
        data: [12, 19, 3, 5, 2, 3],
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
    <div style={{ width: '67%', height: '400px', margin: '9.1rem 1.1rem 1.1rem -5.9rem' }}>
      <h2>Analysis for upcomming year</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart2;
