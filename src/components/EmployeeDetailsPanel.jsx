import React, { useState } from 'react';

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

const downloadItems = new Array(10).fill(null).map((_, i) => ({
  id: i + 1,
  date: 'July 01, 2023',
  kind: i === 4 ? 'Image' : 'Video',
  name: i === 4 ? 'Image Name' : 'Video Name',
  domain: 'Figma.com',
}));

function EmployeeDetailsPanel({ open, user, onClose }) {
  const [activeTab, setActiveTab] = useState('Download');
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
            <button type="button" className="btn btn-primary edit-profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M14.06 4.19l3.75 3.75" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Edit Profile</span>
            </button>
            <button type="button" className="panel-close" aria-label="Close" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="divider-1040" />
        </div>

        <div className="panel-body">
          <div className="details-grid">
            <aside className="side-card">
              <button type="button" className={`side-item ${activeTab === 'Profile' ? 'active' : ''}`} onClick={() => setActiveTab('Profile')}>
                <span>Profile</span>
              </button>
              <button type="button" className={`side-item ${activeTab === 'Daily' ? 'active' : ''}`} onClick={() => setActiveTab('Daily')}>
                <span>Daily Activity</span>
              </button>
              <button type="button" className={`side-item ${activeTab === 'Download' ? 'active' : ''}`} onClick={() => setActiveTab('Download')}>
                <span>Download</span>
              </button>
              <button type="button" className={`side-item ${activeTab === 'Bookmarks' ? 'active' : ''}`} onClick={() => setActiveTab('Bookmarks')}>
                <span>Bookmarks</span>
              </button>
              <button type="button" className={`side-item ${activeTab === 'Dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('Dashboard')}>
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
                {(activeTab === 'Daily' ? dailyActivity : downloadItems).map((row) => (
                  <div className="activity-row" key={row.id}>
                    <div className="ar-col date">{row.date}</div>
                    <div className="ar-col website">
                      <div className="site-cell">
                        {activeTab === 'Daily' ? (
                          <span className="site-icon" aria-hidden="true" />
                        ) : (
                          <span className="file-icon" aria-hidden="true" />
                        )}
                        {activeTab === 'Daily' ? (
                          <>
                            <span className="site-title">{row.title}</span>
                            <span className="dash">-</span>
                            <span className="site-app">{row.app}</span>
                          </>
                        ) : (
                          <>
                            <span className="site-app">{row.name}</span>
                            <span className="dash">-</span>
                            <span className="site-title">{row.kind} Name</span>
                          </>
                        )}
                        <span className="site-domain">{row.domain}</span>
                      </div>
                    </div>
                    <div className="ar-col status">
                      {activeTab === 'Daily' ? (
                        <span className="status-tag danger">Delete</span>
                      ) : (
                        <div className="status-icons">
                          <button className="mini-icon-btn" title="Open link" aria-label="Open link">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14l6-6m-4-2h4a2 2 0 012 2v4" stroke="#8B8A93" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                          <button className="mini-icon-btn" title="View" aria-label="View">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" stroke="#8B8A93" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3.5" stroke="#8B8A93" strokeWidth="1.6"/></svg>
                          </button>
                          <button className="mini-icon-btn" title="Delete" aria-label="Delete">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="#8B8A93" strokeWidth="1.6" strokeLinecap="round"/><path d="M3 6h18" stroke="#8B8A93" strokeWidth="1.6" strokeLinecap="round"/></svg>
                          </button>
                        </div>
                      )}
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


