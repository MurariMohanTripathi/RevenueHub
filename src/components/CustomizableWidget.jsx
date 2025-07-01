import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResponsiveGridLayout = WidthProvider(Responsive);

const CustomizableWidget = () => {
  const [chartType, setChartType] = useState('line');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Performance',
        data: [10, 20, 30, 25, 40, 35, 50],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        tension: 0.4,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#374151', // Tailwind gray-700
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#6b7280' }, // gray-500
        grid: { display: false },
      },
      y: {
        ticks: { color: '#6b7280' },
        grid: { color: '#e5e7eb' }, // gray-200
      },
    },
  };

  const renderChart = () =>
    chartType === 'line' ? (
      <Line data={data} options={commonOptions} />
    ) : (
      <Bar data={data} options={commonOptions} />
    );

  return (
    <div className="w-full">
      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        rowHeight={100}
        isResizable={true}
        isDraggable={true}
        margin={[20, 20]}
      >
        <div
          key="chart1"
          data-grid={{ x: 0, y: 0, w: 6, h: 5, minW: 3, minH: 3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col justify-between"
        >
          <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 md:mb-0">
              📉 Customizable Chart
            </h2>
            <select
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-sm md:text-base text-gray-800 dark:text-white"
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
            </select>
          </div>

          <div className="relative h-full">
            {renderChart()}
          </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default CustomizableWidget;
