import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutContainer, FilmsContainer } from '../containers';
import { Sidebar } from '../components';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sidebar />}>
        <Route index element={<FilmsContainer />} />
        <Route path='about' element={<AboutContainer />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
