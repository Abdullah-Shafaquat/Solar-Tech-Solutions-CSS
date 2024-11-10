"use client"
import React, { useState } from 'react';
import './service.css'; // Import your CSS file here

const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    description:
      'Expert installation of high-efficiency solar panels to maximize energy output. We ensure seamless integration with your property.',
    iconUrl: 's1.jpg',
    price: 'PKR 150,000',
  },
  {
    id: 2,
    title: 'Solar System Maintenance',
    description:
      'Regular check-ups and maintenance to keep your solar system running efficiently. Includes cleaning, inspections, and repairs.',
    iconUrl: '/s2.jpg',
    price: 'PKR 20,000',
  },
  {
    id: 3,
    title: 'Energy Consulting',
    description:
      'Personalized energy audits and consulting services to optimize energy usage and reduce costs.',
    iconUrl: '/s3.jpg',
    price: 'PKR 10,000',
  },
  {
    id: 4,
    title: 'Battery Storage Solutions',
    description:
      'Reliable solar battery storage systems to store energy for use during the night or power outages.',
    iconUrl: '/s4.webp',
    price: 'PKR 250,000',
  }
];

const ServiceCard: React.FC<{ service: { id: number; title: string; description: string; iconUrl: string; price: string } }> = ({
  service,
}) => {
  return (
    <div className="service-card">
      <img src={service.iconUrl} alt={service.title} className="service-icon" />
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <p className="service-price">{service.price}</p>
      <button className="service-button">Request a Quote</button>
    </div>
  );
};

const Service: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const initialServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  return (
    <div className="service-container">
      <h2 className="service-heading">Our Solar Services</h2>
      <div className="service-grid">
        {initialServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        {showAll && remainingServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="show-more-button-container">
        <button className="show-more-button">
          <a href="/services">Show More</a>
        </button>
      </div>
    </div>
  );
};

export default Service;
