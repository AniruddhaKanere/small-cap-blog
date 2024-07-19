import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Small Cap Companies Blog</h1>
        </header>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/article/:id" element={Article} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
