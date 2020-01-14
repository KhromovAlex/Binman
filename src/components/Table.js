import React from 'react';
import TableHead from './TableHead';
import TableFoot from './TableFoot';
import TableRow from './TableRow';
import './style/Table.scss';

const Table = (props) => (
    <table className="table">
        <TableHead />
        <tbody>
            <TableRow clientList={props.clientList} />
        </tbody>
        <TableFoot />
    </table>
);

export default Table;