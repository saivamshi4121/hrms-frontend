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
        <input className="search large" placeholder="Search" />
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
                  <button className="icon-btn" title="view">👁️</button>
                  <button className="icon-btn" title="edit">✏️</button>
                  <button className="icon-btn" title="delete">🗑️</button>
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


