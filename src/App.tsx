import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Clubs from './pages/Clubs';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/team" element={<Team />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
