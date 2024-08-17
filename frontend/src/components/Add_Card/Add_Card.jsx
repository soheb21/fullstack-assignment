import React, { useState } from 'react';
import useData from '../../hook/Custojm';

const Add_Card = () => {
    const [newData, setNewData] = useState({ title: '', description: '' });
    const { postData } = useData();

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(newData);
        setNewData({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={newData.title}
                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newData.description}
                onChange={(e) => setNewData({ ...newData, description: e.target.value })}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Add_Card;
