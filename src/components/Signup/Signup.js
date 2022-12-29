import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(Authcontext)
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }
    return (
        <div className='container d-flex flex-column flex-md-row justify-content-between mt-5 shadow p-4'>
            <div>
                <img className='mb-3' src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png" alt="" />
            </div>
            <div className="Auth-form-container mx-auto">
                <form onSubmit={handleSignup} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="form-group mt-3">
                            <label>Name</label>
                            <input
                                type="text"
                                name='name'
                                className="form-control mt-1"
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                name='email'
                                className="form-control mt-1"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                className="form-control mt-1"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Signup
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Not SignUp yet? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;