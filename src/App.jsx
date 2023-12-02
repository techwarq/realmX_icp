import React from 'react';
import Dashboard from './realmx4_frontend/src/components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeaderBoard from './realmx4_frontend/src/components/LeaderBoard/LeaderBoard';


const App = () => {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
};
