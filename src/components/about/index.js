import React from 'react';
import './styles.css';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <h1>About Us</h1>
                <p>Welcome to our Product Management Application!</p>
                <p>We are a dedicated team passionate about creating innovative solutions for product management. Our mission is to provide users with intuitive tools and advanced features to streamline the process of registering, updating, and managing their products.</p>
                <p>At our core, we believe in simplicity, effectiveness, and continuous improvement. Our vision is to empower businesses and individuals with the tools they need to succeed in today's competitive market.</p>
                <h2>Technologies Used</h2>
                <p>Our application is built using the latest technologies and frameworks to ensure reliability, scalability, and performance. Some of the key technologies we use include React.js for the frontend, Spring Boot for the backend, and PostgreSQL for the database.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions, feedback, or inquiries, please feel free to reach out to us at <a href="mailto:contact@example.com">contact@example.com</a>. We'd love to hear from you!</p>
            </div>
        </div>
    );
}

export default About;
