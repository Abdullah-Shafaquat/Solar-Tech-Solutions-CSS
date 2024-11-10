"use client";
import "./animation.css"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './header.css'; // Importing your CSS file

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  if (!isMounted) return null;

  return (
    <header className="header">
      <div className="container">
        {/* Logo and Title */}
        <div className="logoContainer">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="titl">Solar Tech Solutions</h1>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="menuToggle" aria-label="Toggle Menu">
          <svg className="menuIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="nav">
          <Link href="/" className="navLink">Home</Link>
          <Link href="/products" className="navLink">Products</Link>
          <Link href="/services" className="navLink">Services</Link>
          <Link href="/about" className="navLink">About</Link>
          <Link href="/contact" className="navLink">Contact</Link>
          
        </nav>
        <a href="tel:+923012229525" className="contactLink">+92 301-2229525</a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobileMenu">
          <Link href="/" className="mobileLink">Home</Link>
          <Link href="/products" className="mobileLink">Products</Link>
          <Link href="/services" className="mobileLink">Services</Link>
          <Link href="/about" className="mobileLink">About</Link>
          <Link href="/contact" className="mobileLink">Contact</Link>
          <a href="tel:+923012229525" className="mobileContactLink">+92 301-2229525</a>
        </div>
      )}
    </header>
  );
}
