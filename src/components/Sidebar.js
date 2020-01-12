import React from 'react';
import Button from './Button';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import './style/Sidebar.scss';

const Sidebar = (props) => {
    const navList = [
        'home',
        'clients',
        'reports',
    ];

    return (
        <aside className="sidebar">
            <nav className="main-nav">
                <ul className="main-nav__list">
                    {navList.map( (item) => (
                        <li key={uniqueId()} className="main-nav__item">
                            <Button type="button" className={
                                classNames({
                                    'main-nav__link': true,
                                    active: props.active === item,
                                })
                            }>
                                <svg className='icon-svg-nav'>
                                    <use xlinkHref={`./img/sprite.svg#${item}`} />
                                </svg>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;