import React, { useState } from 'react';

const Reports = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const reportsData = [
    { date: 'January 2024', sales: '$1000', profit: '$300', comment: 'Good month' },
    { date: 'February 2024', sales: '$1200', profit: '$400', comment: 'Steady growth' },
    { date: 'March 2024', sales: '$1500', profit: '$500', comment: 'Excellent performance' },
    { date: 'April 2024', sales: '$1100', profit: '$350', comment: 'Slight dip' },
    { date: 'May 2024', sales: '$1700', profit: '$600', comment: 'Best so far' },
  ];

  const filteredData = reportsData.filter((report) =>
    report.date.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-10 pb-20 transition-colors duration-300">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-700 dark:text-purple-400">
          🧾 Reports Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg lg:text-xl">
          Analyze your monthly financial performance
        </p>
      </header>

      {/* Filter Section */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search Reports by Month..."
          value={filter}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Report Table */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">📅 Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">💰 Sales</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">📈 Profit</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">🗒️ Comments</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
              {filteredData.length > 0 ? (
                filteredData.map((report, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{report.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{report.sales}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{report.profit}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{report.comment}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    No matching reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Reports;
