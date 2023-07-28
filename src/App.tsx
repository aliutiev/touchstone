import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from "./components/Quiz"
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div>
      <h1>Quiz App</h1>
      <LandingPage></LandingPage>
      <Quiz />
    </div>
  );
}

export default App;
