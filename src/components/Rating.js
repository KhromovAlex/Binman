import React from 'react';
import classNames from 'classnames';
import './style/Rating.scss';

export default class Rating extends React.Component{
    static defaultProps = {
        start: 0,
        readOnly: true,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.start,
        };
    }

    newRating = (i) => () => {
        this.props.value(i);
        this.setState({
            value: i
        });
    }

    renderItems = () => {
        const items = [1,2,3,4,5];
        const fillClass = this.state.value ? `fill${Math.floor(this.state.value)}` : null;
        const strokeClass = this.state.value ? `stroke${Math.floor(this.state.value)}` : null;
        
        return items.map( (i, index) => (
            <li key={index} onClick={this.props.readOnly ? () => {} : this.newRating(i)} className={
                classNames({
                    "rating__item": true,
                    [fillClass]: Math.floor(this.state.value) >= i,
                    [strokeClass]: true,
                    "rating__read-only": this.props.readOnly,
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