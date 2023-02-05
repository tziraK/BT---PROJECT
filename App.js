import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import FormDetails  from './Project/FormDetails';
import Preferences from './Project/Preferences'
import Stam from './Project/Stam'


function App() {
  
  return (
    <>
      <h1>Hi</h1>
      <h1>Welcome</h1>
      {/* <FormDetails></FormDetails> */}
      {/* <Preferences></Preferences> */}
      <Stam></Stam>
    </>
  );
}

export default App;
