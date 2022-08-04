import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApplicationPage, Registration, Components, Prolapse, Error } from './pages';
import DisplayTeams from './pages/dashboard/components/DisplayTeams/DisplayTeams';
import DisplayAddTeam from './pages/dashboard/components/DisplayAddTeam/DisplayAddTeam';
import { PrivateRouter } from './components/PrivateRouter/PrivateRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeamInfo from './components/TeamInfo/TeamInfo';
import DisplayPlayers from './pages/dashboard/components/DisplayPlayers/DisplayPlayers';

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
          <Route path="teams" element={<DisplayTeams />} />
          <Route path="teams/:id" element={<TeamInfo />} />

          <Route path="addTeam" element={<DisplayAddTeam />} />
          <Route path="edit/:id" />
          <Route path="players" element={<DisplayPlayers />}>
            <Route path=":id" />
          </Route>
          <Route path="edit/:id" />
          <Route path="addPlayer" />
        </Route>
        <Route path="/" element={<Registration />} />
        <Route path="*" element={<Error />} />
        <Route path="components" element={<Components />} />
      </Routes>
      <ToastContainer hideProgressBar={true} icon={false} closeButton={false} />
    </BrowserRouter>
  );
}

export default App;
