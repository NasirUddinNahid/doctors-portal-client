import React from 'react';
import appointment from '../../assets/images/appointment.png'


const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className="hero my-15 ">
            <div className="hero-content flex-col lg:flex-row-reverse mt-15">
                <div className="text-center lg:text-left ">
                    <h4 className="text-primary font-bold">Contact Us</h4>
                    <p className="py-1 text-3xl text-white">Stay connected with us</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;