import React from 'react';

function Topbar() {
  return (
    <div className="topbar">
      <input className="search" placeholder="Search" />
      <div className="right">
        <button className="icon-btn" aria-label="notifications">🔔</button>
        <div className="profile">
          <div className="avatar">RA</div>
          <div className="details">
            <div className="name">Robert Allen</div>
            <div className="role">HR Manager</div>
          </div>
          <button className="icon-btn">▾</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;


