import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = React.useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <div className={style.status}>
            {
                editMode
                    ? <div>
                        <input className={style.edit_status} onBlur={deactivateEditMode} type='text' value={props.status} autoFocus={true}/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
            }
        </div>
    )
};

export default ProfileStatus;