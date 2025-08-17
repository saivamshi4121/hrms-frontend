import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { mockUsers } from '../components/UsersTable';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import EmployeeDetailsPanel from '../components/EmployeeDetailsPanel';
import '../styles/dashboard.css';

function EmployeeDetailsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userId } = useParams();
  const decodedParam = userId ? decodeURIComponent(userId) : '';
  const user = state?.user || mockUsers.find(u => String(u.id) === decodedParam || u.name === decodedParam) || null;

  const handleClose = () => navigate('/');

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Topbar title="User Detail" subtitle="User All Information" />
        <section className="card">
          <EmployeeDetailsPanel open={true} user={user || { id: decodedParam, name: 'Employee', gender: '', country: '' }} onClose={handleClose} />
        </section>
      </main>
    </div>
  );
}

export default EmployeeDetailsPage;


