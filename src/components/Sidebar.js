import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/project-overview">Project Overview</Link></li>
          <li><Link to="/order-tracking">Order Tracking</Link></li>
          <li><Link to="/supplier-performance">Supplier Performance</Link></li>
          <li><Link to="/inventory-management">Inventory Management</Link></li>
          <li><Link to="/financial-tracking">Financial Tracking</Link></li>
          <li><Link to="/communication-hub">Communication Hub</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
