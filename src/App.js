import React from 'react';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {  Link, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <div className="main">
    
      <h2 className="main-header">Curd Tests</h2>
     
      
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
        
        
        
      
    </div>



  );
}

export default App;
