import React from 'react';

function getInitials(fullName) {
  const parts = String(fullName).trim().split(/\s+/);
  const initials = parts.slice(0, 2).map(part => part[0]?.toUpperCase() || '').join('');
  return initials || 'U';
}

export const mockUsers = [
  { name: 'Darlene Robertson', id: '3434', mobile: '345321231', gender: 'Male', country: 'India' },
  { name: 'Floyd Miles', id: '3434', mobile: '987890345', gender: 'Female', country: 'India' },
  { name: 'Cody Fisher', id: '3434', mobile: '453367122', gender: 'Female', country: 'India' },
  { name: 'Dianne Russell', id: '3434', mobile: '345321231', gender: 'Male', country: 'India' },
  { name: 'Savannah Nguyen', id: '3434', mobile: '453677881', gender: 'Female', country: 'India' },
  { name: 'Jacob Jones', id: '3434', mobile: '009918765', gender: 'Male', country: 'India' },
  { name: 'Marvin McKinney', id: '3434', mobile: '238870122', gender: 'Female', country: 'India' },
  { name: 'Brooklyn Simmons', id: '3434', mobile: '124335111', gender: 'Male', country: 'India' },
  { name: 'Kristin Watson', id: '3434', mobile: '435540099', gender: 'Female', country: 'India' },
  { name: 'Devon Lane', id: '3434', mobile: '091233412', gender: 'Male', country: 'India' },
];

function UsersTable({ users, onView }) {
  const data = users && Array.isArray(users) ? users : mockUsers;
  const handleView = typeof onView === 'function' ? onView : () => {};
  return (
    <div className="table-wrapper">
      <div className="table-toolbar">
        <div className="input-with-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#16151C" strokeWidth="1.5" />
            <path d="M20 20l-3.5-3.5" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input placeholder="Search" />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User ID</th>
            <th>Mobile No.</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Activity Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.name}>
              <td>
                <div className="user-cell">
                  <div className="avatar small" aria-hidden="true">{getInitials(user.name)}</div>
                  <span>{user.name}</span>
                </div>
              </td>
              <td>{user.id}</td>
              <td>{user.mobile}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td><span className="badge">30 Min.</span></td>
              <td>
                <div className="row-actions">
                  <button type="button" className="icon-btn" title="View" aria-label="View profile" onClick={() => handleView(user)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3.5" stroke="#16151C" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button type="button" className="icon-btn" title="Edit" aria-label="Edit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z" stroke="#16151C" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M14.06 4.19l3.75 3.75" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button type="button" className="icon-btn" title="Delete" aria-label="Delete">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 6h18" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <div className="footer-left">
          <span className="muted">Showing</span>
          <div className="page-size" role="button" aria-label="Rows per page">
            <span className="page-size-value">10</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 10l5 5 5-5" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="footer-center muted">Showing 1 to 10 out of 60 records</div>
        <div className="footer-right">
          <button type="button" className="pager arrow" aria-label="Previous page">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="page-numbers">
            <button type="button" className="page-btn current">1</button>
            <button type="button" className="page-btn">2</button>
            <button type="button" className="page-btn">3</button>
            <button type="button" className="page-btn">4</button>
          </div>
          <button type="button" className="pager arrow" aria-label="Next page">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;


