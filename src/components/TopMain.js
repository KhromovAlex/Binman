import React from 'react';
import Button from './Button';
import './style/TopMain.scss';

const TopMain = (props) => (
    <div className="top-main">
        <div>
            <h2 className="top-main__title-page">Ваши соискатели</h2>
            <span className="gray-text">Всего соискателей: {props.clientList.length}</span>
        </div>
        <div>
            <Button type="button" className="top-main__button">
                <svg className='icon-svg-favorit'>
                    <use xlinkHref='./img/sprite.svg#shape' />
                </svg>
                Избранные
            </Button>
            <Button type="button" className="top-main__button button_blue" onClick={props.showForm}>
                <svg className='icon-svg-add-user'>
                    <use xlinkHref='./img/sprite.svg#plus' />
                </svg>
                Добавить соискателя
            </Button>
        </div>
    </div>
);

export default TopMain;