import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-left">
                <div className="left-info">
                    <h2>Abstract</h2>
                    <p>Branches</p>
                </div>
                <div className="left-info">
                    <h2>Resources</h2>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
                <div className="left-info">
                    <h2>Community</h2>
                    <p>Twitter</p>
                    <p>Help Center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
                <div className="left-info">
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Carrers</p>
                    <p>Legal</p>
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p>info@abstract.com</p>

                    </div>
                </div>
            </div>
            <div className="footer-right">
                <img src="vite.svg" alt="" />
                <p>@ Copyright 2022</p>
                <p>Abstract Studio Design, Inc, </p>
                <p>All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer