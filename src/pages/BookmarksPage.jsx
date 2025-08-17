import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/dashboard.css';

const mockBookmarks = new Array(10).fill(null).map((_, i) => ({
  id: i + 1,
  date: 'July 01, 2023',
  kind: i % 3 === 0 ? 'Image' : 'Video',
  name: i % 3 === 0 ? 'Image Name' : 'Video Name',
  domain: 'Figma.com',
}));

function BookmarksPage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar title="Bookmarks" subtitle="Your saved items" />
        <section className="card">
          <div className="details-inline">
            <div className="details-panel">
              <div className="panel-body">
                <div className="details-grid">
                  <section className="activity-card" style={{ width: '100%' }}>
                    <div className="activity-header-row">
                      <div className="ah-col muted">Date</div>
                      <div className="ah-col muted">Website</div>
                      <div className="ah-col muted">Status</div>
                    </div>
                    <div className="activity-rows">
                      {mockBookmarks.map((row) => (
                        <div className="activity-row" key={row.id}>
                          <div className="ar-col date">{row.date}</div>
                          <div className="ar-col website">
                            <div className="site-cell">
                              <span className="file-icon" aria-hidden="true" />
                              <span className="site-app">{row.name}</span>
                              <span className="dash">-</span>
                              <span className="site-title">{row.kind} Name</span>
                              <span className="site-domain">{row.domain}</span>
                            </div>
                          </div>
                          <div className="ar-col status">
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
        </section>
      </main>
    </div>
  );
}

export default BookmarksPage;


