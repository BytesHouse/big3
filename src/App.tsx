import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Prolapse } from './components/Prolapse/Prolapse';
import Components from './pages/Components';
import SignInPage from './pages/authorization/SignInPage';
import { ApplicationPage } from './pages/ApplicationPage/ApplicationPage';
import SignUpPage from './pages/registration/SignUpPage';
import Players from './pages/ApplicationPage/Players/Players';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Prolapse />} />
      <Routes>
        <Route path="/teams" element={<ApplicationPage />} />
        <Route path="/teams/addTeam" />
        <Route path="/team/:id" />
        <Route path="/team/edit/:id" />
        <Route path="/players" element={<Players />} />
        <Route path="players/addPlayer" />
        <Route path="player/:id" />
        <Route path="player/edit/:id" />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="*" />
        <Route path="components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
