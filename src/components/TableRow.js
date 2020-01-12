import React from 'react';
import Button from './Button';
import Rating from './Rating';
import UserInfo from './UserInfo';
import UserContact from './UserContact';
import classNames from 'classnames';
import { uniqueId } from 'lodash';

const TableRow = (props) => {
    const buttonList = [
        'resume',
        'archive',
        'shape',
    ];

    return (
        props.clientList.map((item) => (
            <tr key={uniqueId()} className="row table-row">
                <td className="cell table-row__text">
                    <UserInfo user={item} />
                </td>
                <td className={
                        classNames({
                            cell: true,
                            "table-row__phone": true,
                            'no-value': item.phone === '',
                        })
                    }>
                    <UserContact
                        contact="phone"
                        icon="phone"
                        noValue="Телефон не указан" 
                        textButton="Показать еще 1 номер" 
                        user={item}
                    />
                </td>
                <td className={
                        classNames({
                            cell: true,
                            'no-value': item.email === '',
                        })
                    }>
                    <UserContact
                        contact="email"
                        icon="mail"
                        noValue="E-mail не указан" 
                        textButton="Показать еще 1 e-mail" 
                        user={item}
                    />
                </td>
                <td className="cell">
                    <Rating start={item.rating} />
                    <span className="gray-text">Средний балл: <span className="cell__rating-point">{item.rating.toFixed(1)}</span></span>
                </td>
                <td className="cell">
                    {buttonList.map((button) => (
                        <Button key={uniqueId()} type="button" className="btn-group-table">
                            <svg className='icon-svg-table'>
                                <use xlinkHref={`./img/sprite.svg#${button}`} />
                            </svg>
                        </Button>
                    ))}
                </td>
            </tr>
        ))
    );
};

export default TableRow;