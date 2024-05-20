import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProjectOverview from './components/ProjectOverview';
import OrderTracking from './components/OrderTracking';
import SupplierPerformance from './components/SupplierPerformance';
import InventoryManagement from './components/InventoryManagement';
import FinancialTracking from './components/FinancialTracking';
import CommunicationHub from './components/CommunicationHub';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project-overview" element={<ProjectOverview />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/supplier-performance" element={<SupplierPerformance />} />
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/financial-tracking" element={<FinancialTracking />} />
            <Route path="/communication-hub" element={<CommunicationHub />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
