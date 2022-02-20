import React, {createContext, useReducer} from 'react';
import Reducer from './AppReducer';
import { useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';

const initialState = {
    books: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    // const [data, loading] = useFetch('http://localhost:3000/books');
    // const [pages, setPages] = useState(data);
    // const [activePage, setActivePage] = useState(data);

    // useEffect(() => {
    //     if (data) {
    //         setPages(data);
    //         setActivePage(data[0]);
    //     }
    // }, [data]);

    // if (loading || !data) {
    //     return <div>loading...</div>
    // }

    function addBook(book){
        dispatch({
            type: "ADD_BOOK",
            payload: book
        })
    }

    function deleteBook(id){
        dispatch({
            type: "DELETE_BOOK",
            payload: id
        })
    }

    function editBook(book){
        dispatch({
            type: "EDIT_BOOK",
            payload: book
        })
    }

    return (
        <GlobalContext.Provider value={{
            books: state.books,
            addBook,
            deleteBook,
            editBook,
            dispatch,
            // sidebar: [pages, setPages],
            // page: [activePage, setActivePage]
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

