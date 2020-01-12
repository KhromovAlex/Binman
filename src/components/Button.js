import React from 'react';
import classNames from 'classnames';
import './style/Button.scss';

const Button = ({children, onClick, className, disabled, href, ...attrs}) => {
    const classes = classNames(
        'button',
        className,
    );
    const Tag = href ? 'a' : 'button';
    
    return (
        <Tag {...attrs} onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </Tag>
    );
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
};

export default Button;