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
        const className = ClassNames(
            "input-file",
            this.props.className
        );

        return (
            <label className={className}>
                <div className="input-file__button">Выберите файл</div>
                <span className="input-file__text">{this.state.inputFile !== "" ? this.state.inputFile : 'Файл не выбран'}</span>
                <input onChange={this.onChangeFile} className="input-file__input" type="file" />
            </label>
        )
    }
};

