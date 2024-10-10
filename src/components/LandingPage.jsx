import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyItems:'center', paddingTop:'5%' }}>
            <h1>Welcome to Paradise Nursery</h1>
            <p style={{ textAlign: 'center', margin: '0 auto', width: '80%', flex: 1 }}>
                At Paradise Nursery, we specialize in bringing the beauty of nature into your home. Our carefully curated selection
                of houseplants is perfect for plant lovers of all experience levels. From lush ferns to hardy succulents, each plant
                is handpicked for its quality and unique ability to thrive indoors. Whether you're looking to brighten up your living
                space or add some greenery to your office, Paradise Nursery has the perfect plant for you. Let us help you create your
                own slice of paradise, one plant at a time.
            </p>
            <span style={{ textAlign: 'center', margin: '0 auto', width: '80%', flex: 1, paddingTop:'40px' }}>
                <button>
                    <Link style={{textDecoration:'',color:'inherit'}} to="/products">
                        Shop Now
                    </Link>
                </button>
            </span>
        </div >
    );
}

export default LandingPage;
