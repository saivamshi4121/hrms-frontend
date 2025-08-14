import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import EmployeeDetailsPanel from '../components/EmployeeDetailsPanel';
import '../styles/dashboard.css';

function EmployeeDetailsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userId } = useParams();
  const user = state?.user || null;

  const handleClose = () => navigate('/');

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <section className="card">
          <EmployeeDetailsPanel open={true} user={user || { id: userId, name: 'Employee', gender: '', country: '' }} onClose={handleClose} />
        </section>
      </main>
    </div>
  );
}

export default EmployeeDetailsPage;


