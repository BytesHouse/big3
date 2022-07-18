import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Components from './pages/Components';
import SignInPage from './pages/authorization/SignInPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/components" element={<Components />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
