import React from 'react';

const SignUp = () => {
    return (
        <div className="signup-page d-flex align-items-center justify-content-center mt-5"style={{ background: 'linear-gradient(to right, #E3A5C7, #433D8B)', height: '100vh' }}>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4 border-0">
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Sign Up</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-bold ">Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold ">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bold ">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label fw-bold ">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" style={{ background: 'linear-gradient(to right, #6C63FF, #3A3A8C)', border: 'none' }}>
                                    Sign Up
                                </button>
                            </form>
                            <p className="text-center mt-3">Already have an account? <a href="/signin" className="text-decoration-none fw-bold ">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};


export default SignUp;
