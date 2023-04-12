import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Error from './pages/Error';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
