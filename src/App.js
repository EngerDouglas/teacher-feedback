import Home from '../src/views/Home'
import Login from '../src/views/Login'
import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
