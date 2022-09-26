import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
