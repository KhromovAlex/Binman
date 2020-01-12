import React from 'react';
import Table from './Table';
import TopMain from './TopMain';
import './style/Main.scss';

const Main = (props) => (
    <main className="main">
        <TopMain showForm={props.showForm} clientList={props.clientList} />
        <Table clientList={props.clientList} />
    </main>
);

export default Main;