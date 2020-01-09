import React from 'react';
import './style/Header.scss';

const Header = () => (
    <header className="header">
        <a className="header__logo logo-link" href="/">
            <img src="./img/logo.svg" className="logo-img" alt="logo" />
        </a>
    </header>
);

export default Header;