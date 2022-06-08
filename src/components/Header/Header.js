import React, {useState, useEffect} from 'react';
import Logo from "../../assets/img/top-logo.svg";
import Navbar from '../../components/Navbar-mobile/navbar';

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

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa.
    setClicked(!clicked)
  }

  return (
    <header id="home">
      <div className={navbar ? 'container container-active' : 'container'}>
        <a className="logo" href="#home"
          ><img src={Logo} alt="logo 25Watts"
        /></a>
        <nav className={`links ${clicked ? 'active' : ''}`}> 
          <a onClick={handleClick} href="#hero">Home</a>
          <a onClick={handleClick} href="#about">About</a>
          <a onClick={handleClick} href="#products">Products</a>
          <a onClick={handleClick} href="#services">Services</a>
          <a onClick={handleClick} href="#contact">Contact</a>
        </nav>
        <Navbar clicked={clicked} handleClick={handleClick}/>
      </div>
      <div className={`initial ${clicked ? 'active' : ''}`}>

      </div>
    </header>
  );
}

export default Header;