import React, {useState, useEffect} from 'react';
import Logo from "../../assets/img/top-logo.svg";

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 117) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header id="home">
      <div class="container" className={navbar ? 'container-active' : 'container'}>
        <a className="logo" href="#home"
          ><img src={Logo} alt="logo 25Watts"
        /></a>
        <nav> 
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;