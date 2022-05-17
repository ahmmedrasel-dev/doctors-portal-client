import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sideber" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sideber" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-slate-200 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Appoinments</Link></li>
          <li><Link to='/dashboard/myreview'>My Reviews</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;