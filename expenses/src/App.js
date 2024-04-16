import './App.css';
import React from 'react';
import Login from './components/Login';
import ViewExpenses from './components/ViewExpenses';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CreateExpenses from './components/CreateExpenses';
import EditExpense from './components/EditExpense';


function App() {
  return (
    <div className="App">
      <header />
      <Router>
       <Routes>
       <Route path="/login" exact element={<Login />} />
       <Route path="/" exact element={< ViewExpenses/>}/>
       <Route path="/createExpenses" exact element={<CreateExpenses/>}/>
       <Route path="/editExpenses" exact element={<EditExpense/>}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
