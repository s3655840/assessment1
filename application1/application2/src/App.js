import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

//havent done routing. having problems with changing pages

function App() {
  return (
    <div className="App">
    <Header/>
    <div className='container'>
    <Navbar/></div>
    <Home/>
    <Footer/>
    

    </div>
  );
}

export default App;
