import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Prolapse } from './components/Prolapse/Prolapse';
import Components from './pages/Components';
import SignInPage from './pages/authorization/SignInPage';
import { ApplicationPage } from './pages/ApplicationPage/ApplicationPage';
import SignUpPage from './pages/registration/SignUpPage';
import DisplayTeams from './pages/ApplicationPage/components/DisplayTeams/DisplayTeams';
import DisplayAddTeam from './pages/ApplicationPage/components/DisplayAddTeam/DisplayAddTeam';
// import Navigation from './ui/Navigation/Navigation';
// import Players from './pages/ApplicationPage/Players/Players';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Prolapse />} />
      <Routes>
        <Route path="dashboard" element={<ApplicationPage />}>
          <Route path="teams" element={<DisplayTeams />}>
            <Route path=":id" />
          </Route>
          <Route path="addTeam" element={<DisplayAddTeam />} />
          <Route path="edit/:id" />
          <Route path="players" element={<DisplayTeams />}>
            <Route path=":id" />
          </Route>
          <Route path="edit/:id" />
          <Route path="addPlayer" />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
        <Route path="*" />
        <Route path="components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
