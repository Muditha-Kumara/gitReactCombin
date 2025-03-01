// src/components/Header.js
import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#section1">About Us</a></li>
                    <li><a href="#section2">Services</a></li>
                    <li><a href="#section3">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;