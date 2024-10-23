import React, { useState } from 'react';
import './Reports.css'; // Import your CSS for styling
// import { Bar } from 'react-chartjs-2'; // Example chart

const Reports = () => {
  // Sample data for the chart
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Sales Report',
//         data: [12, 19, 3, 5, 2], // Example data
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   };

  // Example filter state
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='reports-container' id='Reports-section'>
      <h1 className='reports-heading'>Reports</h1>

      {/* Search Bar */}
      <div className='filter-section'>
        <input 
          type='text' 
          placeholder='Search Reports...' 
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      {/* Display the report chart */}
      {/* <div className='chart-container'>
        <h2>Sales Overview</h2>
        <Bar data={data} options={{ responsive: true }} />
      </div> */}

      {/* Example table for report data */}
      <div className='reports-table'>
        <h2>Report Data</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Sales</th>
              <th>Profit</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this with dynamic data */}
            <tr>
              <td>January 2024</td>
              <td>$1000</td>
              <td>$300</td>
              <td>Good month</td>
            </tr>
            <tr>
              <td>February 2024</td>
              <td>$1200</td>
              <td>$400</td>
              <td>Steady growth</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
