import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import './style/Rating.scss';

const Rating = (props) => {
    const newRating = (i) => () => {
        props.onChangeRating(i);
    }

    const renderItems = () => {
        const { readOnly, value } = props;
        const items = [1,2,3,4,5];
        const fillClass = value ? `fill${Math.floor(value)}` : null;
        const strokeClass = value ? `stroke${Math.floor(value)}` : null;
        
        return items.map( (i) => (
            <li key={uniqueId()} onClick={readOnly ? () => {} : newRating(i)} className={
                classNames({
                    "rating__item": true,
                    [fillClass]: Math.floor(value) >= i,
                    [strokeClass]: true,
                    "rating__read-only": readOnly,
                })
            }>
                <svg className='icon-svg-rating'>
                    <use xlinkHref='./img/sprite.svg#star' />
                </svg>
            </li>
        ));
    }
    
    return (
        <ul className="rating">
            { renderItems() }
        </ul>
    );
};

Rating.defaultProps = {
    readOnly: true
};

export default Rating;