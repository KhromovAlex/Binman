import React from 'react';

const UserInfo = (props) => (
    <>
        <div className="table-row__avatar">
            {props.user.img ? <img src={props.user.img} alt="avatar" className="table-row__img" /> : <img src="img/avatars/default.svg" alt="avatar" className="table-row__svg" />}
        </div>
        <div className="table-row__desc">
            <span className="table-row__name table__text">{props.user.name}</span>
            <span className="table-row__vacancy gray-text">Вакансия: {props.user.vacancy}</span>
        </div>
    </>
);

export default UserInfo;