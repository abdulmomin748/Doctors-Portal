import React from 'react';
import { Link } from 'react-router-dom';
import ftrBg from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer className="p-10 gap-px background bg-no-repeat" style={{backgroundImage: `url(${ftrBg})`, backgroundPosition: 'left -223px'}}>
            <div className="footer justify-between">
                <div>
                    <span className="footer-title">Services</span> 
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="footer-title">ORAL HEALTH</span> 
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="footer-title">OUR ADDRESS</span> 
                    <Link className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='pt-28'>
                <p className='text-center'>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;