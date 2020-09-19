import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatarko.ru/img/kartinka/5/siluet_4108.jpg'/>
            {props.massage}
            <div>
                <span>{props.like} likes</span>
            </div>
        </div>
    )
}

export default Post;