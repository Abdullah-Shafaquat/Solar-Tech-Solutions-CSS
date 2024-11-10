import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-inner-container">
        <h2 className="about-title">About Solar Tech Solutions</h2>
        
        <div className="about-content">
          {/* Left Side - About Info */}
          <div className="about-info">
            <p className="about-text">
              Welcome to <span className="highlight">Solar Tech Solutions</span>, your trusted partner in providing sustainable solar energy solutions. We specialize in high-quality solar panels, batteries, inverters, and related products that help you reduce your energy costs while contributing to a greener planet.
            </p>
            <p className="about-text">
              Our mission is to make renewable energy accessible and affordable for everyone. Whether you’re a homeowner, a business owner, or an industrial client, we offer tailored solutions to meet your unique energy needs.
            </p>
            <p className="about-text">
              With years of experience and a team of experts, we ensure top-notch service, from consultation to installation and maintenance. Join us in making the switch to clean, reliable energy today!
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="about-image">
            <img 
              src="/aboutimg.png" 
              alt="Solar Tech Solutions" 
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="team-title">Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src="/em1.jpg" alt="Team Member 1" />
            </div>
            <div className="team-member">
              <img src="/ep2.jpg" alt="Team Member 2" />
            </div>
            <div className="team-member">
              <img src="/em3.jpg" alt="Team Member 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
