import React from 'react';
import TableHead from './TableHead';
import TableFoot from './TableFoot';
import TableRow from './TableRow';
import './style/Table.scss';

const Table = (props) => (
    <table className="table">
        <TableHead />
        <TableFoot />
        <tbody>
            <TableRow clientList={props.clientList} />
        </tbody>
    </table>
);

export default Table;