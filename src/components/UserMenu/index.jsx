import React from 'react';

import s from './UserMenu.module.css';

const UserMenu = ({src, name, width=70, height=70}) => (
    <div className={s.usermenu} >
        <img className={s.avatar} src={src} width={width} height={height} alt="user avatar"/>
        <p className={s.username}>{name}</p>
    </div>
);

export default UserMenu;