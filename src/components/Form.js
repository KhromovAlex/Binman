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
            newClient: {
                name: '',
                vacancy: 'default',
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

    newRatingResume = (value) => {
        this.setState({
            ratingResume: value,
            newClient: {
                ...this.state.newClient,
                rating: (this.state.ratingInterview + this.state.ratingTest + value) / 3
            },
        })
    }

    newRatingTest = (value) => {
        this.setState({
            ratingTest: value,
            newClient: {
                ...this.state.newClient,
                rating: (this.state.ratingInterview + this.state.ratingResume + value) / 3
            },
        })
    }

    newRatingInterview = (value) => {
        this.setState({
            ratingInterview: value,
            newClient: {
                ...this.state.newClient,
                rating: (this.state.ratingTest + this.state.ratingResume + value) / 3
            },
        })
    }

    addTelInput = (e) => {
        this.setState({
            buttonAddTel:false,
            isNewTel:true,
        });
    }

    addEmailInput = (e) => {
        this.setState({
            buttonAddEmail:false,
            isNewEmail:true,
        });
    }

    changeFullName = ({target}) => {
        console.log(target.value)
        this.setState({
            newClient: {
                ...this.state.newClient,
                name: target.value,
            }
        });
    }

    changeVacancy = ({target}) => {
        this.setState({
            newClient: {
                ...this.state.newClient,
                vacancy: target.value,
            },
        });
    }

    changePhone = ({target}) => {
        this.setState({
            newClient: {
                ...this.state.newClient,
                phone: target.value,
            },
        });
    }

    changePhone2 = ({target}) => {
        this.setState({
            newClient: {
                ...this.state.newClient,
                phone2: target.value,
            },
        });
    }

    changeEmail = ({target}) => {
        this.setState({
            newClient: {
                ...this.state.newClient,
                email: target.value,
            },
        });
    }

    changeEmail2 = ({target}) => {
        this.setState({
            newClient: {
                ...this.state.newClient,
                email2: target.value,
            },
        });
    }

    submitFormClient = (e) => {
        e.preventDefault();
        this.props.addNewClient(this.state.newClient)
    }
    
    render() {
        return (
            <div className="modal">
                <form className="form" onSubmit={this.submitFormClient}>
                    <Button onClick={this.props.hiddenForm} type='button' className="modal__close">x</Button>
                    <h2 className="form__title">добавление соискателя</h2>
                    <section className="form__section">
                        <h3 className="form__subtitle">основные данные</h3>
                        <label>
                            <div className="form__label">ФИО</div>
                            <input onChange={this.changeFullName} value={this.state.newClient.name} className="form__input" type="text" placeholder="Введите ФИО" />
                        </label>
                        <label>
                            <div className="form__label">вакансия</div>
                            <select onChange={this.changeVacancy} className="form__input" value={this.state.newClient.vacancy}>
                                <option disabled value={'default'} >Выберите вакансию</option>
                                <option value={'Frontend'} >Frontend</option>
                                <option value={'Backend'} >Backend</option>
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
                            <input onChange={this.changePhone} value={this.state.newClient.phone} placeholder="Введите номер телефона" className="form__input form__input-tel" type="tel" />
                            {this.state.isNewTel && <input onChange={this.changePhone2} value={this.state.newClient.phone2} className="form__input form__input-tel" type="tel" />}
                        </label>
                        {this.state.buttonAddTel ? <Button onClick={this.addTelInput} type="button" className="form__button-add">Добавить еще один номер телефона</Button> : null}
                        <label>
                            <div className="form__label">e-mail</div>
                            <input onChange={this.changeEmail} value={this.state.newClient.email} placeholder="Введите e-mail" className="form__input form__input-email" type="email" />
                            {this.state.isNewEmail && <input onChange={this.changeEmail2} value={this.state.newClient.email2} className="form__input form__input-email" type="email" />}
                        </label>
                        {this.state.buttonAddEmail ? <Button onClick={this.addEmailInput} type="button" className="form__button-add">Добавить еще один e-mail</Button> : null}
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