// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer text-white py-3 mt-5" style={{ backgroundColor: '#17153B' }}>
            <div className="container text-center">
                <div className="mb-3">
                    <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
                </div>
                <p className="mb-0">&copy; 2024 Your Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
