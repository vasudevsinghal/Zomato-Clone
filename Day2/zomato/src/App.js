import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import BaseLayout from './layouts/BaseLayout';

function App() {
  return (
    <Router>
      <BaseLayout/>
  </Router>
  );
}

export default App;
