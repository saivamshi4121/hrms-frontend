import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setLight = () => setTheme('light');
  const setDark = () => setTheme('dark');

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">◎</div>
        <div>
          <div className="brand-title">HRMS</div>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h8v8H3V3Zm10 0h8v5h-8V3ZM3 13h5v8H3v-8Zm7 5h11v3H10v-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink end to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>All Users</span>
        </NavLink>
        <NavLink to="/bookmarks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4h12v16l-6-3-6 3V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
          </span>
          <span>Bookmarks</span>
        </NavLink>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a9 9 0 1 0 9 9" stroke="currentColor" strokeWidth="1.5"/><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>All Websites</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span>Trending Topics</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="10" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="16" width="12" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>
          </span>
          <span>Upcoming Modules</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm10 8v-3a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>All Employees</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.5"/><path d="M2 20a7 7 0 0 1 14 0M22 20a4 4 0 0 0-4-4h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>All Departments</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 2v4M16 2v4M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>Attendance</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v10M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>Payroll</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M5 7l1.5-3h11L19 7M6 7l-1 13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <span>Jobs</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.08a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.08a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.08a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .67.39 1.28 1 1.51H21a2 2 0 0 1 0 4h-.08a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span>Settings</span>
        </a>
      </nav>

      <div className="theme-toggle">
        <button className={`toggle ${theme === 'light' ? 'active' : ''}`} onClick={setLight}>Light</button>
        <button className={`toggle ${theme === 'dark' ? 'active' : ''}`} onClick={setDark}>Dark</button>
      </div>
    </aside>
  );
}

export default Sidebar;


