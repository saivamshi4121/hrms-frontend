import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsersPage from './pages/AllUsersPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsersPage />} />
        <Route path="/users/:userId" element={<EmployeeDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
