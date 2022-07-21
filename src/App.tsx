import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Components from './pages/Components';
import SignInPage from './pages/authorization/SignInPage';
import { ApplicationPage } from './pages/ApplicationPage/ApplicationPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/components" element={<Components />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/app" element={<ApplicationPage />} />
      </Routes>
    </div>
  );
}

export default App;
