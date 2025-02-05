'use client'
import React, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header_logo">Nature Beauty</div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={menuOpen ? 'active' : ''}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/gallery">Gallery</a>
                <a href="/feedback">Feedback</a>
            </nav>
        </header>
    );
}
