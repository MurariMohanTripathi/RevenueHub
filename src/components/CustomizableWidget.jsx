import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // Import Bar element
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './CustomizableWidget.css';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // Register the Bar element
  Title,
  Tooltip,
  Legend
);

const ResponsiveGridLayout = WidthProvider(Responsive);

const CustomizableWidget = () => {
  const [chartType, setChartType] = useState('line');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset',
        data: [10, 20, 30, 25, 40, 35, 50],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const renderChart = () => {
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false, // Ensure it fills the container
    };

    if (chartType === 'line') {
      return <Line data={data} options={commonOptions} />;
    } else if (chartType === 'bar') {
      return <Bar data={data} options={commonOptions} />;
    }
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6 }}
      rowHeight={100}
      isResizable={true}
      isDraggable={true}
    >
      <div key="chart1" data-grid={{ x: 0, y: 0, w: 4, h: 4, minW: 3, minH: 2 }}>
        <div className="widget-chart" style={{ padding: '10px', background: '#f9f9f9', borderRadius: '8px', height: '100%' }}>
          <h4>Data Chart</h4>
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
          </select>
          <div style={{ height: '100%', position: 'relative' }}>
            {renderChart()}
          </div>
        </div>
      </div>
    </ResponsiveGridLayout>
  );
};

export default CustomizableWidget;
