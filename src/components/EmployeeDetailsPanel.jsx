import React from 'react';

function getInitials(fullName) {
  const parts = String(fullName).trim().split(/\s+/);
  const initials = parts.slice(0, 2).map(part => part[0]?.toUpperCase() || '').join('');
  return initials || 'U';
}

const dailyActivity = new Array(10).fill(null).map((_, i) => ({
  id: i + 1,
  date: 'July 01, 2023',
  title: 'Untitled',
  app: 'Figma',
  domain: 'Figma.com',
  status: 'Delete',
}));

function EmployeeDetailsPanel({ open, user, onClose }) {
  if (!open || !user) return null;

  return (
    <div className="details-inline">
      <div className="details-panel">
        <div className="panel-header">
          <div className="user-hero">
            <div className="avatar">{getInitials(user.name)}</div>
            <div className="details">
              <div className="name">{user.name}</div>
              <div className="role">{user.gender} • {user.country}</div>
            </div>
          </div>
          <div className="panel-actions">
            <button type="button" className="btn btn-primary">Edit Profile</button>
            <button type="button" className="panel-close" aria-label="Close" onClick={onClose}>×</button>
          </div>
        </div>

        <div className="panel-body">
          <div className="details-grid">
            <aside className="side-card">
              <button type="button" className="side-item">
                <span>Profile</span>
              </button>
              <button type="button" className="side-item active">
                <span>Daily Activity</span>
              </button>
              <button type="button" className="side-item">
                <span>Download</span>
              </button>
              <button type="button" className="side-item">
                <span>Bookmarks</span>
              </button>
              <button type="button" className="side-item">
                <span>Dashboard</span>
              </button>
            </aside>

            <section className="activity-card">
              <div className="activity-header-row">
                <div className="ah-col muted">Date</div>
                <div className="ah-col muted">Website</div>
                <div className="ah-col muted">Status</div>
              </div>
              <div className="activity-rows">
                {dailyActivity.map((row) => (
                  <div className="activity-row" key={row.id}>
                    <div className="ar-col date">{row.date}</div>
                    <div className="ar-col website">
                      <div className="site-cell">
                        <span className="site-icon" aria-hidden="true" />
                        <span className="site-title">{row.title}</span>
                        <span className="dash">-</span>
                        <span className="site-app">{row.app}</span>
                        <span className="site-domain">{row.domain}</span>
                      </div>
                    </div>
                    <div className="ar-col status">
                      <span className="status-tag danger">{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetailsPanel;


