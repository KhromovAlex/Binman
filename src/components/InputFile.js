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
        const { className, text, label, id } = this.props;
        const classInput = ClassNames(
            "input-file",
            className
        );

        return (
            <>
                <label htmlFor={id} className="form__label">{label}</label>
                <div className="gray-text form__notice">{text}</div>
                <label className={classInput}>
                    <span className="input-file__button">Выберите файл</span>
                    <span className="input-file__text">{this.state.inputFile !== "" ? this.state.inputFile : 'Файл не выбран'}</span>
                    <input id={id} onChange={this.onChangeFile} className="input-file__input" type="file" />
                </label>
            </>
        )
    }
};