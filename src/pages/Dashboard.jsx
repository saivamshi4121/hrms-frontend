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
            <div className="actions actions-right">
              <button className="btn btn-primary add-person">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Add New Person</span>
              </button>
              <button className="btn filter-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5h18M6 12h12M10 19h4" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Filter</span>
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


