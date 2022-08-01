import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApplicationPage, Registration, Components, Prolapse } from './pages';
import DisplayTeams from './pages/ApplicationPage/components/DisplayTeams/DisplayTeams';
import DisplayAddTeam from './pages/ApplicationPage/components/DisplayAddTeam/DisplayAddTeam';
import { PrivateRouter } from './components/PrivateRouter/PrivateRouter';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Prolapse />} />
      <Routes>
        <Route
          path="dashboard"
          element={
            <PrivateRouter>
              <ApplicationPage />
            </PrivateRouter>
          }
        >
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
        <Route path="/" element={<Registration />} />
        <Route path="*" />
        <Route path="components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
