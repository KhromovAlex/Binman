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

    newRating = (typeRating) => (value) => {
        const resume = typeRating === "Resume" ? value : this.state.ratingResume;
        const test = typeRating === "Test" ? value : this.state.ratingTest;
        const interview = typeRating === "Interview" ? value : this.state.ratingInterview;
        this.setState({
            [`rating${typeRating}`]: value,
            newClient: {
                ...this.state.newClient,
                rating: (resume + test + interview) / 3
            },
        })
    }

    addInput = ({target}) => {
        this.setState({
            [`buttonAdd${target.name}`]: false,
            [`isNew${target.name}`]:true,
        });
    }

    changeInput = ({target}) => {
        this.setState({
            newClient: {
                ...this.state.newClient,
                [target.name]: target.value,
            }
        });
    }

    submitFormClient = (e) => {
        e.preventDefault();
        this.props.addNewClient(this.state.newClient);
        this.props.hiddenForm();
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
                            <input name='name' onChange={this.changeInput} value={this.state.newClient.name} className="form__input" type="text" placeholder="Введите ФИО" />
                        </label>
                        <label>
                            <div className="form__label">вакансия</div>
                            <select name='vacancy' onChange={this.changeInput} className="form__input" value={this.state.newClient.vacancy}>
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
                            <input name='phone' onChange={this.changeInput} value={this.state.newClient.phone} placeholder="Введите номер телефона" className="form__input form__input-tel" type="tel" />
                            {this.state.isNewTel && <input name='phone2' onChange={this.changeInput} value={this.state.newClient.phone2} className="form__input form__input-tel" type="tel" />}
                        </label>
                        {this.state.buttonAddTel ? <Button name="Tel" onClick={this.addInput} type="button" className="form__button-add">Добавить еще один номер телефона</Button> : null}
                        <label>
                            <div className="form__label">e-mail</div>
                            <input name='email' onChange={this.changeInput} value={this.state.newClient.email} placeholder="Введите e-mail" className="form__input form__input-email" type="email" />
                            {this.state.isNewEmail && <input name='email2' onChange={this.changeInput} value={this.state.newClient.email2} className="form__input form__input-email" type="email" />}
                        </label>
                        {this.state.buttonAddEmail ? <Button name="Email" onClick={this.addInput} type="button" className="form__button-add">Добавить еще один e-mail</Button> : null}
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
                                <Rating onChangeRating={this.newRating('Resume')} readOnly={false} value={this.state.ratingResume} />
                            </li>
                            <li>
                                <span className="form__label">оценка тестового задания</span>
                                <Rating onChangeRating={this.newRating('Test')} readOnly={false} value={this.state.ratingTest} />
                            </li>
                            <li>
                                <span className="form__label">оценка собеседования</span>
                                <Rating onChangeRating={this.newRating('Interview')} readOnly={false} value={this.state.ratingInterview} />
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