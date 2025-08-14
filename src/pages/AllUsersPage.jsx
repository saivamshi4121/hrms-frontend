import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import UsersTable, { mockUsers } from '../components/UsersTable';
import { useNavigate } from 'react-router-dom';
import EmployeeDetailsPanel from '../components/EmployeeDetailsPanel';
import '../styles/dashboard.css';

function AllUsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const navigate = useNavigate();

  const handleView = (user) => {
    // keep old inline behavior as fallback, but navigate to full page as requested
    setSelectedUser(user);
    setPanelOpen(true);
    navigate(`/users/${encodeURIComponent(user.id)}`, { state: { user } });
  };

  const handleClose = () => {
    setPanelOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <section className="card">
          <div className="card-header">
            <div className="actions actions-right">
              <button type="button" className="btn btn-primary add-person">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M12 8v8M8 12h8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Add New Person</span>
              </button>
              <button type="button" className="btn filter-btn" aria-label="Open filters">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5h18M6 12h12M10 19h4" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Filter</span>
              </button>
            </div>
          </div>
          <UsersTable users={mockUsers} onView={handleView} />
        </section>
        {/* The details now open in a new route; leaving this mount for graceful fallback */}
        {false && panelOpen && (
          <section className="card" style={{ background: 'transparent', border: 'none', padding: 0 }}>
            <EmployeeDetailsPanel open={panelOpen} user={selectedUser} onClose={handleClose} />
          </section>
        )}
      </main>
    </div>
  );
}

export default AllUsersPage;


