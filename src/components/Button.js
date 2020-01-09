import React from 'react';
import classNames from 'classnames';
import './style/Button.scss';

const Button = ({children, onClick, className, disabled, ...attrs}) => {
    const classes = classNames(
        'button',
        className,
    );
    return (
        <button {...attrs} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
};

export default Button;