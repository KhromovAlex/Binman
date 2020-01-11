import React from 'react';
import Button from './Button';
import Rating from './Rating';
import ToggleContact from './ToggleContact';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import './style/Table.scss';

export default class Table extends React.Component{
    constructor(props) {
        super(props);
        this.thead = ['соискатель', 'телефон', 'e-mail', 'оценка соискателя', ''];
    }

    render() {
        const { thead } = this;
        const { clientList } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr className="row">
                        {                            
                            thead.map((item, index) => (
                                <td className="cell table__title" key={uniqueId()}>{item}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tfoot>
                    <tr className="row">
                        <td colSpan="5">
                            <Button className="button_full-size">Показать еще</Button>
                        </td>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        clientList.map((item, index) => (
                            <tr key={uniqueId()} className="row client-info">
                               <td className="cell client-info__text">
                                   <div className="client-info__avatar">
                                        {item.img ? <img src={item.img} alt="avatar" className="client-info__img" /> : <img src="img/avatars/default.svg" alt="avatar" className="client-info__svg" />}
                                    </div>
                                    <div className="client-info__desc">
                                        <span className="client-info__name table__text">{item.name}</span>
                                        <span className="client-info__vacancy gray-text">Вакансия: {item.vacancy}</span>
                                    </div>
                                   
                                </td>
                               <td className={
                                       classNames({
                                            cell: true,
                                            "client-info__phone": true,
                                            'no-value': item.phone === '',
                                        })
                                    }>
                                    <div className="cell-inner-wrap">
                                        <div className="box-svg-table">
                                            <svg className='icon-svg-table'>
                                                <use xlinkHref='./img/sprite.svg#phone' />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="table__text">{item.phone ? item.phone : "Телефон не указан"}</span>
                                            <ToggleContact item={item.phone2} className="table__text" text="Показать еще 1 номер" />
                                        </div>
                                    </div>
                                </td>
                               <td className={
                                        classNames({
                                            cell: true,
                                            'no-value': item.email === '',
                                        })
                                    }>
                                    <div className="cell-inner-wrap">
                                        <div className="box-svg-table">
                                            <svg className='icon-svg-table'>
                                                <use xlinkHref='./img/sprite.svg#mail' />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="table__text">{item.email ? item.email : 'E-mail не указан'}</span>
                                            <ToggleContact item={item.email2} className="table__text" text="Показать еще 1 e-mail" />
                                        </div>
                                    </div>
                                </td>
                               <td className="cell">
                                    <Rating start={item.rating} />
                                    <span className="gray-text">Средний балл: <span className="cell__rating-point">{item.rating.toFixed(1)}</span></span>
                                </td>
                               <td className="cell">
                                   <Button className="btn-group-table">
                                        <svg className='icon-svg-table'>
                                            <use xlinkHref='./img/sprite.svg#resume' />
                                        </svg>
                                   </Button>
                                   <Button className="btn-group-table">
                                        <svg className='icon-svg-table'>
                                            <use xlinkHref='./img/sprite.svg#archive' />
                                        </svg>
                                   </Button>
                                   <Button className="btn-group-table">
                                        <svg className='icon-svg-table'>
                                            <use xlinkHref='./img/sprite.svg#shape' />
                                        </svg>
                                   </Button>
                               </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
};