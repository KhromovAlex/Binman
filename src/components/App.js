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
            openForm: false,
            newClient: {},
        };
    }

    componentDidMount() {
        this.setState({
            clients: [...clientsList],
        });
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

    addNewClient = (value) => {
        this.setState({
            clients: [
                value,
                ...this.state.clients,
            ]
        });
    }

    render() {
        const { openForm } = this.state;
        const classContent = classNames({
            content: true,
            "content_overflow": openForm,
        });
        return (
            <>
                <Header />
                <div className={classContent}>
                    <Sidebar />
                    <Main showForm={this.showForm} clientList={this.state.clients} />
                    {this.state.openForm ? <Form addNewClient={this.addNewClient} hiddenForm={this.hiddenForm} /> : null}
                </div>                
            </>
        );
    }
}