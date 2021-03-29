import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';
import HeaderPicture from '../../assets/images/HeaderPicture.png'

const Header = (props) => {
    return <header className={style.header}>
        <img src={HeaderPicture} alt={'HeaderPicture'} />
        <div className={style.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>;
}

export default Header;