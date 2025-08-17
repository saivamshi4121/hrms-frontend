import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllUsersPage from './pages/AllUsersPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import BookmarksPage from './pages/BookmarksPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsersPage />} />
        <Route path="/users/:userId" element={<EmployeeDetailsPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
