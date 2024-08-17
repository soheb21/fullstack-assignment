import React, { useEffect } from 'react';
import useData from '../../hook/Custojm';

const Cards = () => {
    const { data, loading, error, fetchData } = useData();

    // useEffect(() => {
    //     fetchData();
    // }, [fetchData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            fata
        </ul>
    );
};

export default Cards;
