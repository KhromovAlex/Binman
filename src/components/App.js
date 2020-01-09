import React from 'react';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import Form from './Form';
import './style/App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [
                {
                    name: 'Бинман Иван Натанович',
                    img: 'img/avatars/ava1.jpeg',
                    phone: '+7 (900) 800-70-60',
                    phone2: '+7 (900) 800-70-60',
                    email: 'ioan@binman.ru',
                    email2: 'ioan@binman.ru',
                    vacancy: 'Full-stack разрабочик',
                    rating: 4
                },
                {
                    name: 'Дурков Павел Валерьевич',
                    img: 'img/avatars/ava2.jpeg',
                    phone: 'Телефон не указан',
                    email: 'durkov@vkontakte.ru',
                    vacancy: 'Full-stack разрабочик',
                    rating: 1
                },
                {
                    name: 'Лебедин Артеймий Андреевич',
                    img: 'img/avatars/ava3.jpeg',
                    phone: '+7 (800) 555-35-35',
                    email: 'design@lebedin.ru',
                    vacancy: 'Web-дизайнер',
                    rating: 3
                },
                {
                    name: 'Чулков Олег',
                    img: '',
                    phone: 'Телефон не указан',
                    email: 'E-mail не указан',
                    vacancy: 'Web-дизайнер',
                    rating: 2
                },
                {
                    name: 'Федора Линукс Линусович',
                    img: 'img/avatars/ava4.jpeg',
                    phone: '+7 (800) 200-06-60',
                    phone2: '+7 (800) 200-06-60',
                    email: 'ioan@binman.ru',
                    email2: 'ioan@binman.ru',
                    vacancy: 'Front-end разрабочик',
                    rating: 5
                },
            ],
            openForm: false,
        };
    }

    showForm = () => {
        this.setState({
            openForm: true,
        });
    }

    hiddenForm = () => {
        this.setState({
            openForm: false,
        });
    }

    render() {
        return (
            <>
                <Header />
                <div className="content">
                    <Sidebar />
                    <Main showForm={this.showForm} clientList={this.state.clients} />
                    {this.state.openForm ? <Form hiddenForm={this.hiddenForm} /> : null}
                </div>                
            </>
        );
    }
}