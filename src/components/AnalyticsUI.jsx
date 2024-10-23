import React from 'react';
import './analytics.css';
// import Sidebar from './Sidebar';
import PieChart2 from './PieChart2';
import CustomizableWidget from './CustomizableWidget';
export default function AnalyticsUI() {
  return (
    <>
    {/* <Sidebar /> */}
    
    <div className='analytics' id='AnalyticsUI'>

      <h1 className ='heading-analytics'>Analytics</h1>
      <PieChart2 />
      <CustomizableWidget />
        </div>
    </>
  )
}
