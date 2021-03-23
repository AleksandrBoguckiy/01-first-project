import React from "react";
import style from './Preloader.module.css';

const Preloader = (props) => {
    return <div className = {style.lds_roller} >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader;