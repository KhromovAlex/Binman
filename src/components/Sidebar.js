import React from 'react';
import './style/Sidebar.scss';

const Sidebar = () => (
    <aside className="sidebar">
        <nav className="main-nav">
            <ul>
                <li><a href="/" className="main-nav__link">
                    <svg className='icon-svg-nav'>
                        <use xlinkHref='./img/sprite.svg#home' />
                    </svg>
                </a></li>
                <li><a href="/" className="main-nav__link active">
                    <svg className='icon-svg-nav'>
                        <use xlinkHref='./img/sprite.svg#clients' />
                    </svg>
                </a></li>
                <li><a href="/" className="main-nav__link">
                    <svg className='icon-svg-nav'>
                        <use xlinkHref='./img/sprite.svg#reports' />
                    </svg>
                </a></li>
            </ul>
        </nav>
    </aside>
);

export default Sidebar;