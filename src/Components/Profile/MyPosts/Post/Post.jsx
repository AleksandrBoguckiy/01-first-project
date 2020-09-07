import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;