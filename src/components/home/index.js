import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {

    return (
        <div className='home-container'>
            <div className='banner'>
                <h1>Welcome to Our Product Registration App</h1>
                <p>A simple and effective solution to manage your products.</p>
                <Link to="/products" className="cta-button">Get Started Now</Link>
            </div>

            <div className='highlights'>
                <div className='highlight-item'>
                    <h2>Manage Your Products</h2>
                    <p>Register, update, and delete products easily.</p>
                </div>
                <div className='highlight-item'>
                    <h2>Intuitive Interface</h2>
                    <p>A user-friendly and easy-to-use interface for all users.</p>
                </div>
                <div className='highlight-item'>
                    <h2>Advanced Features</h2>
                    <p>Enjoy advanced features for a better product management experience.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
