import React from 'react';
import classNames from 'classnames';
import './style/Rating.scss';

export default class Rating extends React.Component{
    static defaultProps = {
        readOnly: true,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    newRating = (i) => (e) => {
        this.props.onChangeRating(i, e);
        this.setState({
            value: i
        });
    }

    renderItems = () => {
        const { readOnly, value: valueProp } = this.props;
        const { value: valueState } = this.state;
        let currentValue = readOnly ? valueProp : valueState;        
        const items = [1,2,3,4,5];
        const fillClass = currentValue ? `fill${Math.floor(currentValue)}` : null;
        const strokeClass = currentValue ? `stroke${Math.floor(currentValue)}` : null;
        
        return items.map( (i, index) => (
            <li key={index} onClick={readOnly ? () => {} : this.newRating(i)} className={
                classNames({
                    "rating__item": true,
                    [fillClass]: Math.floor(currentValue) >= i,
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