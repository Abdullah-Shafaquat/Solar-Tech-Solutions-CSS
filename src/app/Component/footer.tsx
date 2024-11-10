'use client';
import React from 'react';
import './footer.css'; // Make sure to link your custom CSS file

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">About Solar Tech Solutions</h3>
            <p className="footer-text">
              Solar Tech Solutions is committed to providing high-quality solar energy products and solutions that empower individuals and businesses to harness the power of the sun. We offer innovative, eco-friendly, and reliable products to help you reduce energy costs and contribute to a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-item">
              <b>Email: </b>
              <a href="mailto:alishafaqat4473@gmail.com" className="footer-contact-link"> alishafaqat4473@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <b>Phone: </b>
              <a href="tel:+923012229525" className="footer-contact-link"> 03012229525</a>
            </div>
            <div className="footer-contact-item">
              <b>Address: </b>
              P&T Society Industrial Area, Korangi, Karachi
            </div>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" target="_blank" className="footer-social-link">
                <img src="/linkdin.png" alt="LinkedIn" className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/muhammadabdullah6156/" target="_blank" className="footer-social-link">
                <img src="/insta.jpg" alt="Instagram" className="footer-social-icon" />
              </a>
              <a href="https://www.facebook.com/muahammad.abubakar.142" target="_blank" className="footer-social-link">
                <img src="/fb.jpg" alt="Facebook" className="footer-social-icon rounded" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">&copy; {new Date().getFullYear()} Solar Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
