import React from "react";
import { pageLinks, socialLinks } from "../data";
import { useGlobalContext } from "./context";

const MobileMenu = () => {
  const { showMenu, closeMenu } = useGlobalContext();

  return (
    <div className='menu-container'>
      <ul id='nav-links' className='links-container'>
        {pageLinks.map((link) => {
          return (
            <li key={link.id} className='link-list' onClick={() => closeMenu(!showMenu)}>
              <a href={link.href} className='link-item'>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='close-btn'>
        <button onClick={() => closeMenu(!showMenu)}>Close</button>
      </div>
    </div>
  );
};

export default MobileMenu;
