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
        <div className="details-inner">
        <div className="profile-details">
        <div className="panel-header">
          <div className="user-hero">
            <div
              className="profile-photo"
              aria-hidden="true"
              style={user.photoUrl ? { backgroundImage: `url(${user.photoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent' } : undefined}
            >
              {getInitials(user.name)}
            </div>
            <div className="details">
              <div className="profile-name">{user.name}</div>
              <div className="profile-meta">
                <div className="profile-meta-row">
                  <svg className="icon-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="#16151C" strokeWidth="1.5"/>
                    <path d="M8 7v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="meta-text">{user.gender || '—'}</span>
                </div>
                <div className="profile-meta-row">
                  <svg className="icon-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#16151C" strokeWidth="1.5"/>
                    <path d="M4 7l8 6 8-6" stroke="#16151C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="meta-text">{user.email || 'brooklyn.s@example.com'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-actions">
            <button type="button" className="btn btn-primary edit-profile">Edit Profile</button>
            <button type="button" className="panel-close" aria-label="Close" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="divider-1040" />
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
              <div className="activity-footer">
                <div className="af-left">
                  <span className="muted">Showing</span>
                  <div className="af-page-size"><span>10</span></div>
                </div>
                <div className="af-center muted">Showing 1 to 10 out of 60 records</div>
                <div className="af-right">
                  <button className="pager arrow" aria-label="Previous page">‹</button>
                  <div className="page-numbers">
                    <button className="page-btn current">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                  </div>
                  <button className="pager arrow" aria-label="Next page">›</button>
                </div>
              </div>
            </section>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetailsPanel;


