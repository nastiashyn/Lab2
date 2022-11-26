import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import { ROUTES } from './routes/routes'
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="top-gradient" />
      <BrowserRouter>
        <Layout>
          <Routes>
            {ROUTES.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
      <div className="midle-gradient" />
      <div className="bottom-gradient" />
    </div>
  );
}

export default App;
