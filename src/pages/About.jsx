import React from 'react';
import Footer from '../Component/Footer';
import 'animate.css';


const AboutUs = () => {
    return (
        <div className="about-us-page">
            <section className="hero-section text-white text-center py-5 mt-5" style={{ background: 'linear-gradient(to right, #E3A5C7, #433D8B)', height: 'auto' }}>
                <div className="container">
                    <h1 className="display-4 font-weight-bold fw-bold ">About Us</h1>
                    <p className="lead mt-3 fw-bold ">
                        Discover how we can help your business grow through targeted, effective lead generation.
                    </p>
                </div>
            </section>
        
            <section className="mission-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Mission</h2>
                    <p className="text-center font-weight-bold">
                        At Koinet Media ITEMS PVT LTD, our mission is to connect businesses with high-quality, targeted leads that drive growth and revenue. We are passionate about transforming the way companies attract and engage with potential customers, helping them build long-lasting, profitable relationships.
                    </p>
                </div>
            </section>

            <section className="what-we-do-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">What We Do</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <h4>Lead Generation Strategy</h4>
                            <p>We craft custom lead generation strategies tailored to your business goals, ensuring maximum efficiency and effectiveness.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h4>Advanced Analytics</h4>
                            <p>Our data-driven approach provides in-depth insights, allowing you to track, measure, and optimize lead generation performance.</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h4>Conversion Optimization</h4>
                            <p>We use proven techniques to improve lead conversion rates, helping you turn more leads into loyal customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="vision-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Our Vision for the Future</h2>
                    <p className="text-center">
                        We aim to redefine lead generation by constantly innovating and embracing the latest technologies. Our vision is to help businesses not only reach but exceed their potential by connecting them with high-quality leads that are ready to convert.
                    </p>
                </div>
            </section>

            <section className="join-us-section py-5 text-center" style={{ background: 'linear-gradient(to right, #E3A5C7, #433D8B)', height: 'auto' }}>
                <div className="container fw-bold ">
                    <h2>Join Us on Our Journey</h2>
                    <p className="lead mt-3 fw-bold ">
                        Partner with us and experience a smarter, more efficient way to generate and convert leads.
                    </p>
                    <a href="/contact" className="btn btn-primary mt-4 fw-bold ">
                        Get in Touch
                    </a>
                </div>
            </section>

            <Footer/>
            
        
        </div>
    );
};

export default AboutUs;
