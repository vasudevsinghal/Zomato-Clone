import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import BaseLayout from './layouts/BaseLayout';
import Auth from "./componenets/Auth";


function App() {

  let [user, setUser] = useState(null);
  return (
    <Router>
      {user? <BaseLayout user= {user} setUser={setUser}/> : <Auth setUser={setUser}/>}
    </Router>
  );
}

export default App;
