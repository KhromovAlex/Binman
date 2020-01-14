import React from 'react';
import Button from './Button';
import InputFile from './InputFile';
import Rating from './Rating';
import { uniqueId } from 'lodash';
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
            newClient: {
                name: '',
                vacancy: 'Не выбрано',
                img: '',
                phone: '',
                phone2: '',
                email: '',
                email2: '',
                rezume: '',
                arhive: '',
                rating: 0,
            },
        };
    }

    newRating = (typeRating) => (value) => {
        const resume = typeRating === "Resume" ? value : this.state.ratingResume;
        const test = typeRating === "Test" ? value : this.state.ratingTest;
        const interview = typeRating === "Interview" ? value : this.state.ratingInterview;
        this.setState((oldState) => ({
            [`rating${typeRating}`]: value,
            newClient: {
                ...oldState.newClient,
                rating: (resume + test + interview) / 3
            },
        }));
    }

    addInput = ({target}) => {
        this.setState({
            [`buttonAdd${target.name}`]: false,
            [`isNew${target.name}`]: true,
        });
    }

    changeInput = ({target}) => {
        this.setState((oldState) => ({
            newClient: {
                ...oldState.newClient,
                [target.name]: target.value,
            }
        }));
    }

    submitFormClient = (e) => {
        e.preventDefault();
        this.props.addNewClient(this.state.newClient);
        this.props.hiddenForm();
    }
    
    render() {
        const ratingList = {
            Resume: 'оценка резюме',
            Test: 'оценка тестового задания',
            Interview: 'оценка собеседования',
        };
        const { hiddenForm } = this.props;
        const { newClient, isNewTel, buttonAddTel, isNewEmail, buttonAddEmail } = this.state;
        return (
            <div className="modal">
                <form className="form" onSubmit={this.submitFormClient}>
                    <Button onClick={hiddenForm} type='button' className="modal__close">x</Button>
                    <section className="form__section">
                        <h2 className="form__title">добавление соискателя</h2>
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">основные данные</h3>
                        <label htmlFor="input-name" className="form__label">ФИО</label>
                        <input id="input-name" required name='name' onChange={this.changeInput} value={this.state.newClient.name} className="form__input" type="text" placeholder="Введите ФИО" />
                        <label htmlFor="input-vacancy" className="form__label">вакансия</label>
                        <select id="input-vacancy" name='vacancy' onChange={this.changeInput} className="form__input" value={newClient.vacancy}>
                            <option disabled value={'Не выбрано'} >Выберите вакансию</option>
                            <option value={'Frontend'}>Frontend</option>
                            <option value={'Backend'}>Backend</option>
                        </select>
                        <InputFile 
                            label="фотография" 
                            text="Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png" 
                            className="form__input-file"
                            id="input-avatar"
                        />
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">контактные данные</h3>
                        <label htmlFor="input-phone" className="form__label">номер телефона</label>
                        <input id="input-phone" name='phone' onChange={this.changeInput} value={newClient.phone} placeholder="Введите номер телефона" className="form__input form__input-tel" type="tel" />
                        {isNewTel && 
                            <input name='phone2' onChange={this.changeInput} value={newClient.phone2} placeholder="Введите номер телефона" className="form__input form__input-tel" type="tel" />}
                        {buttonAddTel ? <Button name="Tel" onClick={this.addInput} type="button" className="form__button-add">Добавить еще один номер телефона</Button> : null}
                        <label htmlFor="input-email" className="form__label">e-mail</label>
                        <input id="input-email" name='email' onChange={this.changeInput} value={newClient.email} placeholder="Введите e-mail" className="form__input form__input-email" type="email" />
                        {isNewEmail &&
                            <input name='email2' onChange={this.changeInput} value={newClient.email2} placeholder="Введите e-mail" className="form__input form__input-email" type="email" />}
                        {buttonAddEmail ? <Button name="Email" onClick={this.addInput} type="button" className="form__button-add">Добавить еще один e-mail</Button> : null}
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">резюме и результаты тестового задания</h3>
                        <InputFile
                            label="резюме" 
                            text="Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc" 
                            className="form__input-file"
                            id="input-resume"
                        />
                        <InputFile 
                            label="архив с результатами тестового задания" 
                            text="Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar" 
                            className="form__input-file"
                            id="input-arhive"
                        />
                    </section>
                    <section className="form__section">
                        <h3 className="form__subtitle">оценка соискателя</h3>
                        <ul className="form__group-rating">
                            {
                                Object.keys(ratingList).map((name) => (
                                    <li key={uniqueId()}>
                                        <span className="form__label">{ratingList[name]}</span>
                                        <Rating value={this.state[`rating${name}`]} onChangeRating={this.newRating(name)} readOnly={false} />
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <div className="form__section form__btn-group">
                        <Button type="button" className="button_width_49" onClick={hiddenForm}>Отменить</Button>
                        <Button type="submit" className="button_blue button_width_49">Добавить соискателя</Button>
                    </div>
                </form>
            </div>
        );
    }
};