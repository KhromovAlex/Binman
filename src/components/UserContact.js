import React from 'react';
import ToggleContact from './ToggleContact';

const UserContact = ({icon, contact, noValue, textButton, user}) => (
    <div className="user-contact-wrap">
        <div className="box-svg-table">
            <svg className='icon-svg-table'>
                <use xlinkHref={`./img/sprite.svg#${icon}`} />
            </svg>
        </div>
        <div>
            <span className="table__text">{user[contact] ? user[contact] : noValue}</span>
            <ToggleContact item={user[`${contact}2`]} className="table__text" text={textButton} />
        </div>
    </div>
);

export default UserContact;