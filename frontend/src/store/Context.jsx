import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create the context
const DataContext = createContext();

// Create the provider component
const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/data');
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataById = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/data/${id}`);
            setData([response.data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const postData = async (newData) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/data', newData);
            setData((prevData) => [...prevData, response.data]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DataContext.Provider value={{ data, loading, error, fetchData, fetchDataById, postData }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
