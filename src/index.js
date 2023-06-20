import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import './assets/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);