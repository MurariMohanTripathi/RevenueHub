import React from 'react'
import './DashboardUI.css';
import DashboardChart from './DashboardChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
// import PieChart2 from './PieChart2';
// import CustomizableWidget from './CustomizableWidget';
export default function DashboardUI() {
  return (
    <div>
      <div className='dashboard' id='dashboard'>
        <h1 className='dashboard-heading'>Dashboard</h1>
      </div>
      <DashboardChart />
      <BarChart />
      <PieChart />
      {/* <PieChart2 /> */}
      {/* <CustomizableWidget /> */}
    </div>
  )
}
