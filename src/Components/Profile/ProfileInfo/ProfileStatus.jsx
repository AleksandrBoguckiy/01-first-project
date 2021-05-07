import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = React.useState(false);
    let [status, setStatus] = React.useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (

        <div className={style.status}>
            {
                editMode
                    ? <div>
                        <input className={style.edit_status} onChange={onStatusChange} onBlur={deactivateEditMode} type='text' value={status} autoFocus={true} />
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
            }
        </div>
    )
};

export default ProfileStatus;