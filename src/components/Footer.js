import React from "react";
import { footerLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {footerLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href='#home' className='footer-link'>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-icon' target='_blank' rel='noreferrer'>
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy;Naija Tour {new Date().getFullYear()}. We help you see Nigeria Beauty in 3D.
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
