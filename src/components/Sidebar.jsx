import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconDashboardOutline, IconUsersSolid, IconBookmarkOutline, IconUsersOutline, IconLocationOutline, IconModulesOutline, IconDepartmentsOutline, IconCalendarCheckOutline, IconCoinDollarOutline, IconBriefcaseOutline, IconSettingsOutline } from './icons';

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
          <span className="nav-icon" aria-hidden="true"><IconDashboardOutline /></span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink end to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon" aria-hidden="true"><IconUsersSolid /></span>
          <span>All Users</span>
        </NavLink>
        <NavLink to="/bookmarks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <span className="nav-icon" aria-hidden="true"><IconBookmarkOutline /></span>
          <span>Bookmarks</span>
        </NavLink>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconUsersOutline /></span>
          <span>All Websites</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconLocationOutline /></span>
          <span>Trending Topics</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconModulesOutline /></span>
          <span>Upcoming Modules</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconUsersOutline /></span>
          <span>All Employees</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconDepartmentsOutline /></span>
          <span>All Departments</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconCalendarCheckOutline /></span>
          <span>Attendance</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconCoinDollarOutline /></span>
          <span>Payroll</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconBriefcaseOutline /></span>
          <span>Jobs</span>
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon" aria-hidden="true"><IconSettingsOutline /></span>
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


