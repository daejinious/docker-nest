import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Component from './pages/Component';
import Contents from './pages/Contents';
import Cs from './pages/Cs';
import Library from './pages/Library';
import Main from './pages/Main';
import Products from './pages/Products';
import Shops from './pages/Shops';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/component" element={<Component />} />
        <Route path="/" element={<Main />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/products" element={<Products />} />
        <Route path="/library" element={<Library />} />
        <Route path="/cs" element={<Cs />} />
      </Routes>
    </Layout>
  );
}

export default App;
