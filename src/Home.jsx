import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; 
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';


const HeroSection = () => {
    return (
        <section className="hero-section d-flex align-items-center 100vh" style={{ background: 'linear-gradient(to right, #E3A5C7, #433D8B)', height: '100vh' }}>
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                 
                    <div className="col-md-6 col-12 mt-5">
                    <h3 className="display-4 text-white fw-bold text-uppercase animate__animated animate__fadeIn animate__delay-1s">
                      Boost Your Business with High-Quality Leads
                      </h3>

                        <p className="lead text-white mt-4 animate__animated animate__fadeIn animate__delay-1s">
                            Unlock your business potential with our top-notch lead generation platform.
                        </p>
                        <div className="mt-4 animate__animated animate__fadeIn animate__delay-1s">
                            <button className="btn btn-light btn-lg px-4 py-2" style={{ borderRadius: '25px' }}>
                                Get Started
                            </button>
                        </div>
                    </div>

                  
                    <div className="col-md-6 col-12 mt-5 mt-md-0">
                        <div className="hero-image">
                            <img
                                src="https://groarz.com/file/2021/03/Group-365.png" 
                                alt="Lead Generation"
                                className="img-fluid rounded shadow-lg animate__animated animate__fadeIn animate__delay-1s"
                                style={{ maxWidth: '80%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    return (
        <section id="features" className="features-section section-padding text-center mt-5 100vh">
            <div className="container">
                <h2 className="mb-5 animate__animated animate__fadeIn">Our Features</h2>
                <div className="row">

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="hero-image animate__animated animate__fadeInLeft animate__delay-0.5s">
                            <img
                                src="https://img.freepik.com/free-vector/vision-scope-document-abstract-concept-illustration-vision-statement-scope-document-main-plan-project-management-software-business-analysis-idea-goal_335657-510.jpg" 
                                alt="Feature Image"
                                className="img-fluid rounded feature-img"
                                style={{ maxWidth: '80%', height: 'auto' }}
                            />
                        </div>
                    </div>


                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="col-md-12 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                            <div className="card shadow-lg border-light h-100 feature-card">
                                <div className="card-body text-left">
                                    <i className="bi bi-speedometer2 feature-icon mb-0.5" style={{ fontSize: '2rem' }}></i>
                                    <h4 className="font-weight-bold">Fast & Efficient</h4>
                                    <p>Generate leads quickly with our optimized process.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4 animate__animated animate__fadeInUp animate__delay-1.5s">
                            <div className="card shadow-lg border-light h-100 feature-card">
                                <div className="card-body text-left">
                                    <i className="bi bi-bar-chart feature-icon mb-0.5" style={{ fontSize: '2rem' }}></i>
                                    <h4 className="font-weight-bold">Advanced Analytics</h4>
                                    <p>Track and analyze performance with real-time analytics.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="card shadow-lg border-light h-100 feature-card">
                                <div className="card-body text-left">
                                    <i className="bi bi-person-check feature-icon mb-0.5" style={{ fontSize: '2rem' }}></i>
                                    <h4 className="font-weight-bold">Quality Leads</h4>
                                    <p>Get high-quality, targeted leads to grow your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};



const BenefitsSection = () => {
    return (
        <section id="benefits" className="benefits-section section-padding mt-5 100vh">
            <div className="container text-center">
                <h2 className="mb-5 animate__animated animate__fadeIn">Why Choose Us?</h2>
                <div className="row">

                    {/* Content on the left side */}
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-0.5s">
                            <div className="card shadow-lg border-light h-100">
                                <h5 className="font-weight-bold">Expertise and Experience</h5>
                                <p>With years of experience in digital marketing and lead generation, we have the knowledge and skills needed to drive results.</p>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                            <div className="card shadow-lg border-light h-100">
                                <h5 className="font-weight-bold">Customer-Centric Approach</h5>
                                <p>Our clients’ success is our top priority. We work closely with each client to understand their specific needs and create customized solutions.</p>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-1.5s">
                            <div className="card shadow-lg border-light h-100">
                                <h5 className="font-weight-bold">Transparency and Trust</h5>
                                <p>We value open communication, clear reporting, and ethical practices to ensure long-term partnerships built on trust.</p>
                            </div>
                        </div>

                        <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-2s">
                            <div className="card shadow-lg border-light h-100">
                                <h5 className="font-weight-bold">Proven Results</h5>
                                <p>Our strategies have helped numerous clients achieve measurable growth in leads and conversions, proving our methods' effectiveness.</p>
                            </div>
                        </div>
                    </div>

                    {/* Image on the right side */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="hero-image">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/011/344/360/small_2x/teenagers-are-standing-thinking-with-a-big-question-mark-3d-character-illustration-png.png" 
                                alt="Why Choose Us"
                                className="img-fluid rounded animate__animated animate__fadeIn animate__delay-1s"
                                style={{ maxWidth: '100%', height: '450px' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};



const ServicesSection = () => {
    return (
        <section id="services" className="services-section section-padding bg-light text-center mt-5 100vh">
            <div className="container">
                <h2 className="mb-5 animate__animated animate__fadeIn">Our Services</h2>
                <div className="row">

                    <div className="col-md-6 d-flex justify-content-center align-items-center animate__animated animate__fadeIn animate__delay-0.5s">
                        <div className="services-image">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/045/686/526/non_2x/customer-service-people-3d-render-free-png.png" 
                                alt="Services Image"
                                className="img-fluid rounded"
                                style={{ maxWidth: '80%', height: 'auto' }}
                            />
                        </div>
                    </div>

                  
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                                <div className="card shadow-lg border-light h-100">
                                    <div className="card-body text-left">
                                        <i className="bi bi-megaphone feature-icon mb-0.5" style={{ fontSize: '2rem' }}></i>
                                        <h4 className="font-weight-bold">Targeted Campaigns</h4>
                                        <p>We design personalized campaigns to reach your ideal audience.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-1.5s">
                                <div className="card shadow-lg border-light h-100">
                                    <div className="card-body text-left">
                                        <i className="bi bi-envelope-open feature-icon mb-0.5" style={{ fontSize: '2rem' }}></i>
                                        <h4 className="font-weight-bold">Email Marketing</h4>
                                        <p>Engage prospects with customized email sequences.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mb-4 animate__animated animate__fadeIn animate__delay-2s">
                                <div className="card shadow-lg border-light h-100">
                                    <div className="card-body text-left">
                                        <i className="bi bi-phone feature-icon mb-0.5" style={{ fontSize: '2rem' }}></i>
                                        <h4 className="font-weight-bold">Lead Scoring</h4>
                                        <p>Prioritize your leads by their level of engagement and interest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


const CTASection = () => {
    return (
        <section className="cta-section section-padding text-center mt-7 100vh" 
            style={{ background: 'linear-gradient(to right, #333333, #6A4C93)' }}>
            <div className="container">
                <h2 className="animate__animated animate__fadeIn text-white">Ready to Grow Your Business?</h2>
                <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s text-white">
                    Join us today and unlock your potential with our expert lead generation services.
                </p>
                <button className="btn btn-light btn-lg px-4 py-2 animate__animated animate__fadeIn animate__delay-2s mb-3" 
                    style={{ borderRadius: '25px' }}>                
                    Contact Us Now 
                </button>
            
            </div>
        </section>
    );
};


const FAQSection = () => {
    return (
        <section id="faq" className="faq-section section-padding mt-5 100vh">
            <div className="container">
                <h2 className="mb-5 animate__animated animate__fadeIn text-center">Frequently Asked Questions</h2>
                
                <div className="row">
                 
                    <div className="col-md-6 mb-4 animate__animated animate__fadeIn animate__delay-0.5s">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-4">
                                <h5 className="faq-question font-weight-bold text-dark mb-3">What is lead generation, and how does it work?</h5>
                                <p className="faq-answer text-muted">Lead generation is the process of attracting and converting potential customers. Our platform automates this process by identifying and nurturing leads to increase conversions.</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="col-md-6 mb-4 animate__animated animate__fadeIn animate__delay-0.7s">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-4">
                                <h5 className="faq-question font-weight-bold text-dark mb-3">How do you ensure lead quality?</h5>
                                <p className="faq-answer text-muted">We use targeted strategies and scoring systems to qualify leads, ensuring they meet specific criteria before they reach your sales team.</p>
                            </div>
                        </div>
                    </div>

                  
                    <div className="col-md-6 mb-4 animate__animated animate__fadeIn animate__delay-0.9s">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-4">
                                <h5 className="faq-question font-weight-bold text-dark mb-3">Can I track the performance of my campaigns?</h5>
                                <p className="faq-answer text-muted">Yes, our platform includes advanced analytics that allow you to monitor and optimize the performance of your campaigns in real time.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-6 mb-4 animate__animated animate__fadeIn animate__delay-1.1s">
                        <div className="card shadow-lg border-0">
                            <div className="card-body p-4">
                                <h5 className="faq-question font-weight-bold text-dark mb-3">What industries can benefit from lead generation?</h5>
                                <p className="faq-answer text-muted">Almost any industry can benefit, especially those in B2B services, e-commerce, real estate, finance, and healthcare, where connecting with qualified leads is essential.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <BenefitsSection />
            <ServicesSection/>
           
            <FAQSection />
            <CTASection />
            <Footer/>
            <Navbar/>
        
        </div>
      
    );
};

export default Home;

