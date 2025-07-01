import React from 'react';
import DashboardChart from './DashboardChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

export default function DashboardUI() {
  return (
    <section
      id="DashboardUI"
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen pt-8 sm:pt-10 px-4 sm:px-6 lg:px-16 transition-colors duration-300"
    >
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400">
          📊 RevenueHub Dashboard
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Your financial insights at a glance
        </p>
      </header>

      {/* Row 1: Dashboard + Bar Chart */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-600 dark:text-blue-300">
            📈 Monthly Sales Overview
          </h2>
          <DashboardChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-purple-600 dark:text-purple-300">
            📊 Category-wise Sales Breakdown
          </h2>
          <BarChart />
        </div>
      </div>

      {/* Row 2: Pie Chart */}
      <div className="mt-10 md:mt-14 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 text-green-600 dark:text-green-300 text-center">
            🥧 Revenue Distribution
          </h2>
          <PieChart />
        </div>
      </div>
    </section>
  );
}
