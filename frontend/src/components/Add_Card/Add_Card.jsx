import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import "./Add_Card.css"
import { useDispatch } from 'react-redux';
import { addNewCardAsync } from '../../store/card/cardAPI';

const Add_Card = () => {
    const [newData, setNewData] = useState({ title: '', description: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewCardAsync(newData))
        setNewData({ title: '', description: '' });
    };

    return (
        <Layout>
            <div className="add-container">
                <p>Add-Card</p>
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
            </div>
        </Layout>

    );
};

export default Add_Card;
