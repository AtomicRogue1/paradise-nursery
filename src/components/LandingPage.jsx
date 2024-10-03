import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // You can style your page in this CSS file

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-background flexContainer">
                <div className='flexItem'>
                    <h1 className="company-name">Welcome to Paradise Nursery!</h1>
                    <p className="company-description">
                    Where Greenery meets Eternity !
                    </p>
                    <Link to="/products">
                        <button className="get-started-button">Get Started</button>
                    </Link>
                </div>
                <div className='flexItem'>
                    <p>
                    At Paradise Nursery, we specialize in bringing the beauty of nature into your home. Our carefully curated selection 
                    of houseplants is perfect for plant lovers of all experience levels. From lush ferns to hardy succulents, each plant
                    is handpicked for its quality and unique ability to thrive indoors. Whether you're looking to brighten up your living 
                    space or add some greenery to your office, Paradise Nursery has the perfect plant for you. Let us help you create your 
                    own slice of paradise, one plant at a time.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;