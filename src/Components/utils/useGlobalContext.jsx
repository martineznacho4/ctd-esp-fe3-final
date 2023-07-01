import { useContext } from 'react';
import { GlobalContext } from './global.context';

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a ContextProvider');
    }

    return context;
};