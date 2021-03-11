import React from 'react';
import './Header.css';
import Background from '../../Images/StadiumBackground.png'

const Header = () => {
    return (
        <div className="header">
            <img src={Background} alt="" />
            <h1 className="center">Best Of The Best</h1>
        </div>
    );
};

export default Header;