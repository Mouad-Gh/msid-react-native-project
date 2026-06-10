import { useContext } from 'react';
import { AppContext } from './appContext'

export const useAppContext = ()=>{
    //this hook return to us the value of this context which is the value we passed into the provider component (the state and the dispatch function)
    const context= useContext(AppContext);

    //if we don't have a value for it
    if(!context){
        throw new Error('useAppContext must be used inside an AppContextProvider');
    }

    return context;
}