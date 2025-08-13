import React from 'react';

function Topbar() {
  return (
    <div className="topbar">
      <div className="header-meta">
        <div className="page-title">All Employees</div>
        <div className="page-subtitle">All Employee Information</div>
      </div>
      <div className="header-controls">
        <div className="search-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#16151C" strokeWidth="1.5" />
            <path d="M20 20l-3.5-3.5" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input placeholder="Search" />
        </div>
        <button className="notif-btn" aria-label="notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8a6 6 0 1 1 12 0v5l2 3H4l2-3V8Z" stroke="#16151C" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 18a3 3 0 0 0 6 0" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="profile-card">
          <div className="profile-avatar">RA</div>
          <div className="profile-text">
            <div className="name">Robert Allen</div>
            <div className="role">HR Manager</div>
          </div>
          <svg className="caret" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Topbar;


