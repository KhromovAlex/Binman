import React from 'react';
import ClassNames from 'classnames';
import './style/InputFile.scss';

export default class InputFile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputFile: '',
        }
    }

    onChangeFile = (e) => {
        this.setState({
            inputFile: e.target.value,
        });
    }

    render() {
        const labelClass = ClassNames(
            "input-file__label",
            this.props.label
        );
        const buttonClass = ClassNames(
            "input-file__button",
            this.props.button
        );
        const textClass = ClassNames(
            "input-file__text",
            this.props.text
        );
        return (
            <label className={labelClass}>
                <div className={buttonClass}>Выберите файл</div>
                <span className={textClass}>{this.state.inputFile !== "" ? this.state.inputFile : 'Файл не выбран'}</span>
                <input onChange={this.onChangeFile} className="input-file__input" type="file" />
            </label>
            
        );
    }
};

