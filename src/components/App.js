import React from 'react';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import Form from './Form';
import classNames from 'classnames';
import clientsList from './../clients';
import './style/App.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            isOpenForm: false,
        };
    }

    componentDidMount() {
        this.setState({
            clients: [...clientsList],
        });
    }

    toggleForm = () => {
        this.setState(({isOpenForm}) => ({
            isOpenForm: !isOpenForm,
        }));
    }

    addNewClient = (value) => {
        this.setState((oldState) => ({
            clients: [
                value,
                ...oldState.clients,
            ]
        }));
    }

    render() {
        const { isOpenForm } = this.state;
        const classContent = classNames({
            content: true,
            "content_overflow": isOpenForm,
        });
        
        return (
            <>
                <Header />
                <div className={classContent}>
                    <Sidebar active='clients' />
                    <Main showForm={this.toggleForm} clientList={this.state.clients} />
                    {this.state.isOpenForm ? <Form addNewClient={this.addNewClient} hiddenForm={this.toggleForm} /> : null}
                </div>                
            </>
        );
    }
}