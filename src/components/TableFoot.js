import React from 'react';
import Button from './Button';

const TableFoot = () => (
    <tfoot>
        <tr className="row">
            <td colSpan="5">
                <Button type="button" className="button_full-size">Показать еще</Button>
            </td>
        </tr>
    </tfoot>
);

export default TableFoot;