import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import UsersTable from '../components/UsersTable';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <section className="card">
          <div className="card-header">
            <div>
              <h2 className="page-title">All Employees</h2>
              <p className="page-subtitle">All Employee Information</p>
            </div>
            <div className="actions">
              <button className="btn btn-primary">Add New Person</button>
              <button className="btn btn-muted">
                <span className="icon">⚙️</span>
                Filter
              </button>
            </div>
          </div>
          <UsersTable />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;


