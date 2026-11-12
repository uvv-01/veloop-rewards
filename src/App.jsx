import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import WatchAds from './pages/WatchAds/WatchAds';

const App = () => {
  return (
    <Routes>
      {/* Primary Target Route for Task 04 */}
      <Route
        path="/watch-Ads"
        element={
          <ProtectedRoute>
            <WatchAds />
          </ProtectedRoute>
        }
      />

      {/* Case-insensitive fallback */}
      <Route path="/watch-ads" element={<Navigate to="/watch-Ads" replace />} />

      {/* Dashboard Route Fallback */}
      <Route
        path="/Home"
        element={
          <ProtectedRoute>
            <WatchAds />
          </ProtectedRoute>
        }
      />

      {/* Root redirect to Watch Ads */}
      <Route path="/" element={<Navigate to="/watch-Ads" replace />} />

      {/* 404 Catch-All */}
      <Route path="*" element={<Navigate to="/watch-Ads" replace />} />
    </Routes>
  );
};

export default App;
