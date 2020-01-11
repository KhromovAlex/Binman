import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import './style/Rating.scss';

export default class Rating extends React.Component{
    static defaultProps = {
        readOnly: true,
        start: 0,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.start,
        };
    }

    newRating = (i) => () => {
        this.props.onChangeRating(i);
        this.setState({
            value: i
        });
    }

    renderItems = () => {
        const { readOnly } = this.props;
        const { value } = this.state;
        // let currentValue = readOnly ? valueProp : value;        
        const items = [1,2,3,4,5];
        const fillClass = value ? `fill${Math.floor(value)}` : null;
        const strokeClass = value ? `stroke${Math.floor(value)}` : null;
        
        return items.map( (i, index) => (
            <li key={uniqueId()} onClick={readOnly ? () => {} : this.newRating(i)} className={
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

    render() {
        return (
            <ul className="rating">
                { this.renderItems() }
            </ul>
        );
    }
}