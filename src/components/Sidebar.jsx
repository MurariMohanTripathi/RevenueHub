import React, { useState, useEffect } from 'react';
import {
  BarChart2,
  Users,
  PieChart,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLocation } from 'react-router-dom';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); 

  // Auto-close 2s after each open
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => setIsOpen(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className="relative z-50">
      {/* Toggle Button */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className={`fixed top-4 transition-all duration-300 ease-in-out ${
    isOpen ? 'left-64' : 'left-4'
  } z-50 group`}
  aria-label={isOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
>
  <div className="bg-white dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-500 border border-gray-300 dark:border-gray-600 shadow-lg rounded-full p-2 flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
    {isOpen ? (
      <ChevronLeft className="text-blue-600 dark:text-white group-hover:text-white transition duration-200" size={20} />
    ) : (
      <ChevronRight className="text-blue-600 dark:text-white group-hover:text-white transition duration-200" size={20} />
    )}
  </div>
</button>


      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl flex flex-col transition-all duration-500 ease-in-out ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-5 border-b border-gray-700">
          <h1
            className={`text-xl font-bold tracking-wide text-blue-400 transition-all duration-300 ${
              isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 hidden'
            }`}
          >
            RevenueHub
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-3">
          <SidebarLink href="/dashboard" icon={<BarChart2 />} label="Dashboard" isOpen={isOpen}  currentPath ={location.pathname}/>
          <SidebarLink href="/leads" icon={<Users />} label="Leads" isOpen={isOpen} currentPath ={location.pathname}/>
          <SidebarLink href="/analytics" icon={<PieChart />} label="Analytics" isOpen={isOpen} currentPath ={location.pathname} />
          <SidebarLink href="/reports" icon={<FileText />} label="Reports" isOpen={isOpen}  currentPath ={location.pathname}/>
        </nav>

        {!isOpen && (
  <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-black text-white px-2 py-1 rounded shadow-md whitespace-nowrap">
    Expand Sidebar
  </span>
)}

      </aside>
    </div>
  );
}

// Reusable Sidebar Link
function SidebarLink({ href, icon, label, isOpen, currentPath }) {
  const isActive = currentPath === href;

  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 relative
        ${isActive ? 'bg-blue-600 text-white scale-[1.05] shadow-lg' : 'hover:bg-blue-600 hover:text-white'}
      `}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className={`whitespace-nowrap transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
        {label}
      </span>

      {/* Active Indicator Strip (optional) */}
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r"></span>
      )}
    </a>
  );
}

