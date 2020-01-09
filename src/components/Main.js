import React from 'react';
import Table from './Table';
import Button from './Button';
import './style/Main.scss';

const Top = (props) => (
    <div className="main__wrapper-top">
        <div className="wrap-title">
            <h2 className="title-page">Ваши соискатели</h2>
            <span className="count-clients gray-text">Всего соискателей: {props.clientList.length}</span>
        </div>
        <div className="btn-group"> 
            <Button>
                <svg className='icon-svg-favorit'>
                    <use xlinkHref='./img/sprite.svg#shape' />
                </svg>
                Избранные
            </Button>
            <Button className="button_blue button_margin-left" onClick={props.showForm}>
                <svg className='icon-svg-add-user'>
                    <use xlinkHref='./img/sprite.svg#plus' />
                </svg>
                Добавить соискателя
            </Button>
        </div>
    </div>
);

export default class Main extends React.Component{
    render() {
        return (
            <main className="main">
                <Top showForm={this.props.showForm} clientList={this.props.clientList} />
                <Table clientList={this.props.clientList} />
            </main>
        )
    }
}