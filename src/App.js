// import logo from './logo.svg';
import './App.css';
// import {Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/DashboardUI';
import Leads from './components/Leads';
import Analytics from './components/AnalyticsUI';
import Reports from './components/Reports';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/DashboardUI';
import Logo from './components/logo';


function App() {
  return (
    
    <div className="App">
      <Sidebar />
      <Logo />
      <Dashboard />
      <Analytics />
      {/* <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/leads' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/reports' element={<Dashboard />} />
      </Routes> */}
      <Reports />
      <Leads />
    </div>
    
  );
}

export default App;
