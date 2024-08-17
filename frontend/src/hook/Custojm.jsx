import { useContext } from 'react';
import { DataContext } from '../store/Context';

const useData = () => {
    return useContext(DataContext);
};

export default useData;
