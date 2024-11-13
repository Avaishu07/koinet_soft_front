import React from 'react';
import { Navbar } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact-page py-5" style={{ background: 'linear-gradient(to right, #E3A5C7, #433D8B)', height: '100%' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-6">
                        <h2 className="text-white fw-bold mb-3 mt-5">Get in Touch</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card p-4 border-0 shadow">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" style={{ background: 'linear-gradient(to right, #6C63FF, #3A3A8C)', border: 'none' }}>
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 text-center text-light">
                    <div className="col-md-4 mb-4">
                        <i className="bi bi-geo-alt fs-3 mb-2"></i>
                        <h5 className="fw-bold">Our Location</h5>
                        <p>City Vista,6th Floor ,Office No.05, Kharadi(411014) Pune, India</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="bi bi-envelope fs-3 mb-2"></i>
                        <h5 className="fw-bold">Email Us</h5>
                        <p>info@koinetmedia.com</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="bi bi-telephone fs-3 mb-2"></i>
                        <h5 className="fw-bold">Call Us</h5>
                        <p>+91 90215 68448</p>
                    </div>
                </div>
                <Navbar/>
                
        
            </div>
            
        </div>
       
    );
};

export default Contact;
