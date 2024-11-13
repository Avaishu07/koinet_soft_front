import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import Footer from './Component/Footer';


const Signin = () => {
    return (
        <div className="signin-page d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to right, #E3A5C7, #433D8B)', height: '100vh' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4 border-0">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Sign In</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold ">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bold ">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" style={{ background: 'linear-gradient(to right, #6C63FF, #3A3A8C)', border: 'none' }}>
                                    Sign In
                                </button>
                            </form>
                            <p className="text-center mt-3">Don't have an account? <a href="/signup" className="text-decoration-none fw-bold ">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
<Footer/>
export default Signin;
