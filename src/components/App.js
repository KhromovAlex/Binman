import React from 'react';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import Form from './Form';
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
                ...this.state.clients,
                value
            ]
        });
    }

    render() {
        return (
            <>
                <Header />
                <div className="content">
                    <Sidebar />
                    <Main showForm={this.showForm} clientList={this.state.clients} />
                    {this.state.openForm ? <Form addNewClient={this.addNewClient} hiddenForm={this.hiddenForm} /> : null}
                </div>                
            </>
        );
    }
}