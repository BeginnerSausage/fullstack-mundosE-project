import React from 'react';

const Navbar = (props) => {
    return (
      <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span> 
      </div>
    )
}

export default Navbar;