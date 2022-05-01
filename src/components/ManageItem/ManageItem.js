import React from 'react';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const {_id} = useParams();
    return (
        <div>
            <h1>Manage Item: {_id}</h1>
        </div>
    );
};

export default ManageItem;