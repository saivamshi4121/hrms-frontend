import React from 'react';

const mockUsers = [
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

function UsersTable() {
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
          {mockUsers.map((u) => (
            <tr key={u.name}>
              <td>
                <div className="user-cell">
                  <div className="avatar small">{u.name.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>
                  <span>{u.name}</span>
                </div>
              </td>
              <td>{u.id}</td>
              <td>{u.mobile}</td>
              <td>{u.gender}</td>
              <td>{u.country}</td>
              <td><span className="badge">30 Min.</span></td>
              <td>
                <div className="row-actions">
                  <button className="icon-btn" title="view" aria-label="view">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3.5" stroke="#16151C" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button className="icon-btn" title="edit" aria-label="edit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z" stroke="#16151C" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M14.06 4.19l3.75 3.75" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button className="icon-btn" title="delete" aria-label="delete">
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
        <div className="rows">
          <span>Showing</span>
          <select>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span>Showing 1 to 10 out of 60 records</span>
        </div>
        <div className="pagination">
          <button className="icon-btn">‹</button>
          <button className="page current">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="icon-btn">›</button>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;


