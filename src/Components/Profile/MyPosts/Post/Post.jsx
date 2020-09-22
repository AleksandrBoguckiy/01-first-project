import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg'/>
            {props.massage}
            <div>
                <span>{props.like} likes</span>
            </div>
        </div>
    )
}

export default Post;