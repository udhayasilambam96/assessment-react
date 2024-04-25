import React from 'react';
import AppRouter from './router/router';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </div>
  );
}

export default App;
