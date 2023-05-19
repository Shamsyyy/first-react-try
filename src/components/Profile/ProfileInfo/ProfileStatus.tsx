import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType = {
    status: string;
    updateStatus: (newStatus: string) => void;
};

const ProfileStatus: React.FC<PropsType> = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [currentStatus, setCurrentStatus] = useState<string>(status);

    useEffect(() => {
        setCurrentStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(currentStatus);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && (
                <div>
          <span onDoubleClick={activateEditMode}>
            {currentStatus || 'non status'}
          </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={currentStatus}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;