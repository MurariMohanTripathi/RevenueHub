import React from 'react';
import PieChart2 from './PieChart2';
import CustomizableWidget from './CustomizableWidget';

export default function AnalyticsUI() {
  return (
    <section
      id="AnalyticsUI"
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen w-full pt-10 px-4 md:px-6 lg:px-10 transition-colors duration-300"
    >
      {/* ===== Header ===== */}
      <header className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-green-600 dark:text-green-400">
          📈 Analytics Overview
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg lg:text-xl">
          Deep dive into performance metrics
        </p>
      </header>

      {/* ===== KPIs Summary Cards ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {[
          { title: 'Total Revenue', value: '₹1.2M', color: 'text-blue-600' },
          { title: 'New Customers', value: '1,540', color: 'text-green-600' },
          { title: 'Retention Rate', value: '84%', color: 'text-purple-600' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center hover:scale-105 transition-transform"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.title}</p>
            <h3 className={`text-2xl font-bold ${item.color}`}>{item.value}</h3>
          </div>
        ))}
      </section>

      {/* ===== Date Range Filter & Export ===== */}
      <section className="max-w-6xl mx-auto mb-10 px-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Date Picker */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <label className="font-medium text-gray-700 dark:text-gray-300">Select Date Range:</label>
            <input
              type="date"
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white"
            />
            <input
              type="date"
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white"
            />
          </div>

          {/* Export Button */}
          <div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition">
              ⬇️ Export Report
            </button>
          </div>
        </div>
      </section>

      {/* ===== Pie Chart ===== */}
      <section className="mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-5xl mx-auto w-full">
          <h2 className="text-xl font-semibold mb-4 text-center text-green-600 dark:text-green-300">
            Data Breakdown
          </h2>
          <PieChart2 />
        </div>
      </section>

      {/* ===== Customizable Widget ===== */}
      <section className="mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-6xl mx-auto w-full">
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-300">
            Customizable Metrics
          </h2>
          <CustomizableWidget />
        </div>
      </section>
    </section>
  );
}
