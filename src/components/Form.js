import React from 'react';
import Button from './Button';
import InputFile from './InputFile';
import Rating from './Rating';
import './style/Form.scss'

export default class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttonAddTel: true,
            buttonAddEmail: true,
            isNewTel: false,
            isNewEmail: false,
            ratingResume: 0,
            ratingTest: 0,
            ratingInterview: 0,
        };
    }

    newRatingResume = (value) => {
        this.setState({
            ratingResume: value
        })
    }

    newRatingTest = (value) => {
        this.setState({
            ratingTest: value
        })
    }

    newRatingInterview = (value) => {
        this.setState({
            ratingInterview: value
        })
    }

    addTel = () => {
        this.setState({
            buttonAddTel:false,
            isNewTel:true,
        });
    }

    addEmail = () => {
        this.setState({
            buttonAddEmail:false,
            isNewEmail:true,
        });
    }

    render() {
        return (
            <div className="modal">
                <form className="form">
                    <Button onClick={this.props.hiddenForm} type='button' className="modal__close">x</Button>
                    <h2 className="form__title">добавление соискателя</h2>
                    <section className="form__section">
                        <h3 className="form__subtitle">основные данные</h3>
                        <label>
                            <div className="form__label">ФИО</div>
                            <input className="form__input" type="text" placeholder="Введите ФИО" />
                        </label>
                        <label>
                            <div className="form__label">вакансия</div>
                            <select className="form__input" defaultValue={{value: 'default'}}>
                                <option disabled value={{value: 'default'}} >Выберите вакансию</option>
                            </select>
                        </label>
                        <h6 className="form__label">фотография</h6>
                        <div className="gray-text">Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png</div>
                        <InputFile className="form__input-file" />
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">контактные данные</h3>
                        <label>
                            <div className="form__label">номер телефона</div>
                            <input placeholder="Введите номер телефона" className="form__input form__input-tel" type="tel" />
                            {this.state.isNewTel && <input className="form__input form__input-tel" type="tel" />}
                        </label>
                        {this.state.buttonAddTel ? <Button onClick={this.addTel} type="button" className="form__button-add">Добавить еще один номер телефона</Button> : null}
                        <label>
                            <div className="form__label">e-mail</div>
                            <input placeholder="Введите e-mail" className="form__input form__input-email" type="email" />
                            {this.state.isNewEmail && <input className="form__input form__input-email" type="email" />}
                        </label>
                        {this.state.buttonAddEmail ? <Button onClick={this.addEmail} type="button" className="form__button-add">Добавить еще один e-mail</Button> : null}
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">резюме и результаты тестового задания</h3>
                        <h6 className="form__label">резюме</h6>
                        <div className="gray-text">Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc</div>
                        <InputFile className="form__input-file" />
                        <h6 className="form__label">архив с результатами тестового задания</h6>
                        <div className="gray-text">Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar</div>
                        <InputFile className="form__input-file" />
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">оценка соискателя</h3>
                        <ul className="form__group-rating">
                            <li>
                                <span className="form__label">оценка резюме</span>
                                <Rating value={this.newRatingResume} readOnly={false} start={this.state.ratingResume} />
                            </li>
                            <li>
                                <span className="form__label">оценка тестового задания</span>
                                <Rating value={this.newRatingTest} readOnly={false} start={this.state.ratingTest} />
                            </li>
                            <li>
                                <span className="form__label">оценка собеседования</span>
                                <Rating value={this.newRatingInterview} readOnly={false} start={this.state.ratingInterview} />
                            </li>
                        </ul>
                    </section>
                    <div className="form__btn-group">
                        <Button type="button" className="button_width_49" onClick={this.props.hiddenForm}>Отменить</Button>
                        <Button type="submit" className="button_blue button_width_49">Добавить соискателя</Button>
                    </div>
                </form>
            </div>
        );
    }
}