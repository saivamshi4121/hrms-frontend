import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/dashboard.css';

const metrics = [
  { id: 1, title: 'Total Bookmarks', value: 56, delta: '+12%' },
  { id: 2, title: 'Total Visited Site', value: 1050, delta: '+5%' },
  { id: 3, title: 'Today Active Time', value: '470 Hours', delta: '-8%' },
  { id: 4, title: 'Total Download', value: 250, delta: '+12%' },
];

function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar title="Dashboard" subtitle="Overview" />
        <section className="card">
          <div className="kpi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
            {metrics.map((m) => (
              <div key={m.id} className="kpi-card" style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
                <div className="kpi-title" style={{ color: '#8B8A93', fontSize: 14 }}>{m.title}</div>
                <div className="kpi-value" style={{ fontSize: 28, fontWeight: 700, marginTop: 6 }}>{m.value}</div>
                <div className="kpi-meta" style={{ marginTop: 8, fontSize: 12, color: '#8B8A93' }}>Update: July 16, 2025</div>
                <div className="kpi-delta" style={{ position: 'absolute', right: 24, top: 24, color: '#22C55E', fontWeight: 600 }}>{m.delta}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;


