import React from 'react';
import Button from './Button';

export default class ToggleContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showContact: false,
        };
    }

    handlerClick = () => {
        this.setState({
            showContact: true,
        });
    }

    render() {
        const { item, text, className } = this.props;
        const { showContact } = this.state;
        const toggle = 
            !showContact ?
            <Button onClick={this.handlerClick} type="button" className="button_gray-a">{text}</Button>
            : <span className={className}>{item}</span>;
        return (
            item ? <><br />{toggle}</> : null
        );
    }
}