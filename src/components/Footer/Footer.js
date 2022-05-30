import React from 'react';
import Footer_logo from '../../assets/img/footer-logo.svg';
const Footer = () => {
  return (
    <footer>
      <div className="container"> 
        <p>2020 © All rights reserved.</p>
        <img src={Footer_logo} alt="logo 25Watts" />
      </div>
    </footer>
  );
}

export default Footer;