import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import StudioList from '../studio/StudioList';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Studio Header" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/studios" element={<StudioList />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
      </div>  
    </BrowserRouter>

  );
}

export default App;
