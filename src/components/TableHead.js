import React from 'react';
import { uniqueId } from 'lodash';

const TableHead = () => {
    const headingList = ['соискатель', 'телефон', 'e-mail', 'оценка соискателя', ''];

    return (
        <thead>
            <tr className="row">
                {                            
                    headingList.map((item) => (
                        <td className="cell table__title" key={uniqueId()}>{item}</td>
                    ))
                }
            </tr>
        </thead>
    );
};

export default TableHead;