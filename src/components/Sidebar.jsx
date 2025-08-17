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
        <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Dashboard</NavLink>
        <NavLink end to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>All Users</NavLink>
        <NavLink to="/bookmarks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Bookmarks</NavLink>
        <a className="nav-item" href="#">All Websites</a>
        <a className="nav-item" href="#">Trending Topics</a>
        <a className="nav-item" href="#">Upcoming Modules</a>
        <a className="nav-item" href="#">All Employees</a>
        <a className="nav-item" href="#">All Departments</a>
        <a className="nav-item" href="#">Attendance</a>
        <a className="nav-item" href="#">Payroll</a>
        <a className="nav-item" href="#">Jobs</a>
        <a className="nav-item" href="#">Settings</a>
      </nav>

      <div className="theme-toggle">
        <button className={`toggle ${theme === 'light' ? 'active' : ''}`} onClick={setLight}>Light</button>
        <button className={`toggle ${theme === 'dark' ? 'active' : ''}`} onClick={setDark}>Dark</button>
      </div>
    </aside>
  );
}

export default Sidebar;


