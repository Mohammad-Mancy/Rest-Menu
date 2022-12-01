import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Dashboard from './components/admin/Dashboard';
import Category from './components/admin/Category';
import Items from './components/admin/Items';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='category' element={<Category />} />
          <Route path='items' element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;