import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
          <li><Link to='/dashboard/myhistroy'>Histroy</Link></li>
          <li>{admin && <Link to='/dashboard/users'>All Users</Link>}</li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;