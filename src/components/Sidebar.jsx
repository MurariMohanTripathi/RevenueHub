import React from 'react';
import './Sidebar.css';
// import { Link } from 'react-router-dom'; 
// import Logo from './logo';

export default function Sidebar() {
  return (
    <div className='SidePanel'>
      {/* <div className='refs'>
        <Link to='/dashboard' className='Dashboard'>Dashboard</Link>
        <Link to='/leads' className='Leads'>Leads</Link>
        <Link to='/analytics' className='Analytics'>Analytics</Link>
        <Link to='/reports' className='Reports'>Reports</Link>
      </div> */}
      <div className='refs'>
        <a href='./DashboardUI' className='Dashboard'>Dashboard</a>
        <a href='#Leads-section' className='Leads'>Leads</a>
        <a href='#AnalyticsUI' className='Analytics'>Analytics</a>
        <a href='#Reports-section' className='Reports'>Reports</a>
      </div>
    </div>
  );
}


//
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// export default function Sidebar() {
//   return (
//     <nav className='SidePanel'>
//       <div className='refs'>
//         <Link to='/dashboard' className='Dashboard'>Dashboard</Link>
//         <Link to='/leads' className='Leads'>Leads</Link>
//         <Link to='/analytics' className='Analytics'>Analytics</Link>
//         <Link to='/reports' className='Reports'>Reports</Link>
//       </div>
//     </nav>
//   );
// }
