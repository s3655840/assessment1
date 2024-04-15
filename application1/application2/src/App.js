import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//havent done routing. having problems with changing pages
import Specials from './pages/Specials';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/specials" element={<Specials/>}>
            </Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>


  );
}

export default App;
