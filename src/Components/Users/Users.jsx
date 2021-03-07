import React from "react";
import style from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: '1',
                    photoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyLafErhDnRwFt72Ldab6gx7kiCe_U5qfOg&usqp=CAU',
                    followed: true,
                    fullName: 'Mariya N.',
                    status: 'I am the boss in this world!',
                    location: {country: 'Italy', city: 'Amalfi'}
                },
                {
                    id: '2',
                    photoPath: 'https://i.pinimg.com/236x/c8/12/7e/c8127e8add8d8d8ea067d7c7e3da177f.jpg',
                    followed: true,
                    fullName: 'Vasiliy S.',
                    status: 'The best things happen unexpectedly',
                    location: {country: 'Russia', city: 'Novosibirsk'}
                },
                {
                    id: '3',
                    photoPath: 'https://pbs.twimg.com/media/DMGGo4wVAAEIray.jpg',
                    followed: true,
                    fullName: 'Sergey M.',
                    status: 'With you, I am home',
                    location: {country: 'Russia', city: 'Moscow'}
                },
                {
                    id: '4',
                    photoPath: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg',
                    followed: false,
                    fullName: 'Dmitriy K.',
                    status: 'If you started, win!',
                    location: {country: 'Belarus', city: 'Minsk'}
                }
            ]
        )
    }

    return <div className={style.users}>
        <h2>Users</h2>
        {
            props.users.map(u => <div className={style.wrapper} key={u.id}>
                <span>
                    <div className={style.avatar}>
                        <img src={u.photoPath} alt='Avatar'/>
                    </div>
                    <div className={style.divbtn}>
                        {u.followed
                            ? <button className={style.btn + " " + style.btn1} onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button className={style.btn + " " + style.btn1} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span className={style.data}>
                    <span className={style.data1}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;