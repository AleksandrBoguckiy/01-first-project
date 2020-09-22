import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
        <img src={require('./nextpng.png')} />
    </header>;
}

export default Header;