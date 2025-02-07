'use client'
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a href="#" className="logo">UF</a>

        {/* Menu Icon for Mobile */}
        <i 
          className={`fa-solid fa-bars ${menuOpen ? "open" : ""}`} 
          id="menu-icon" 
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>

        {/* Navigation Links */}
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}
