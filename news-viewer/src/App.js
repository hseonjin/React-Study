import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
      ;
    </div>
  );
};

export default App;
