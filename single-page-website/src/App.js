// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <AboutUs />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;