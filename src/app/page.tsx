 import Service from "./Component/services";

import Link from 'next/link';
import './page.css'; // Import your CSS file here

function Home() {
  return ( 
    <>
      <div className="heros-container">
        <div className="heros-text">
          <span className="titles">Expert Solar</span> <br />
          <span className="subtitle">Services</span> <br />
          <span className="description">for a   <br />
            Sustainable Future</span>
        </div>
        <p className="heros-description">
          We offer reliable solar solutions, from installation to maintenance, helping you save energy and reduce your carbon footprint. Power your future with sustainable, efficient solar energy.
        </p>
        <div className="explore-button-container">
          <Link href="/services" className="explore-button">
            Explore our Services
          </Link>
        </div>
      </div>
      

      <div className="mobile-hero-container">
        <div className="mobile-hero-text">
          <span className="mobile-title">Expert Solar</span>
          <br />
          <span className="mobile-subtitle">Services</span>
          <br />
          <span className="mobile-description">
            for a <br /> Sustainable Future
          </span>
        </div>
        <p className="mobile-description-text">
          We offer reliable solar solutions, from installation to maintenance, helping you save energy and reduce your carbon footprint. Power your future with sustainable, efficient solar energy.
        </p>
        <div className="mobile-explore-button-container">
          <Link href="/services" className="mobile-explore-button">
            Explore our Services
          </Link>
        </div>
      </div>

       <Service /> 
    </>
  );
}

export default Home;
