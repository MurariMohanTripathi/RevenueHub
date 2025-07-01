import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Logo from './components/logo';
import Dashboard from './components/DashboardUI';
import Leads from './components/Leads';
import Analytics from './components/AnalyticsUI';
import Reports from './components/Reports';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Sidebar is fixed */}
        <Sidebar />

        {/* Main content with left padding */}
        <div className="flex-1 pl-64 p-6">
          <Logo />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
