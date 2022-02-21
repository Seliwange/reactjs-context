import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    Table,
    Button
} from 'reactstrap';
import { Heading } from '../Heading/Heading';
import {RiDeleteBin6Line, RiEdit2Line} from 'react-icons/ri';

export const Dashboard = () => {
    const {books, editBook, deleteBook} = useContext(GlobalContext);
    const [book, setBook] = useState(books);

    useEffect(() => {
        (async () => {
            let url = "http://localhost:3333/books";

            const res = await fetch(url);
            const books = await res.json();
            setBook(books);
        })();
    }, [setBook]);

       const deleteBooks =  async (id) => {
        await fetch(("http://localhost:3333/books/" + id), {
            method: "DELETE"
        });
        deleteBook(books.filter(book => book.id !== id));
    };

    return (
        <div>
            <Heading 
                pageTitle="Book List" 
                link="/reactjs-context/addbook"
                linkName="Add a Book" 
            />
            <Table responsive striped size="sm">
                <thead>
                    <tr>
                        <th>Book title</th>
                        <th>Author Name</th>
                        <th>Category</th>
                        <th>ISBN</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {(book.length > 0) ? (
                            book.map(book => (
                                <tr key={book.id}>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.author}</td>
                                    <td>{book.category}</td>
                                    <td>{book.number}</td>
                                    <td>
                                        <Link 
                                            className="btn btn-warning me-1 mb-1"
                                            to={`/reactjs-context/edit/${book.id}`}
                                            title="Edit"
                                            onClick={() => editBook(book.id)}
                                        >
                                            <RiEdit2Line />
                                        </Link>
                                        <Button 
                                            className="mb-1"
                                            color="danger"
                                            title="Delete"
                                            onClick={() => deleteBooks(book.id)}
                                        >
                                            <RiDeleteBin6Line/>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-center fs-3" colSpan="5">No data</td>
                            </tr>
                        )
                        }
                </tbody>
            </Table>
        </div>
    );
}
