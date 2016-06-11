import React from "react";
import Book from "./Book";

export default class Books extends React.Component {

    constructor(){
        super();
        this.state = {};
    }

    showDeleteButton = (event) => {
        this.setState({"activeBookId": event.currentTarget.dataset.bookId});
    }
    render() {
        const {books, deleteBook} = this.props; //Getting data using props.
        const {activeBookId} = this.state;
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>BOOK</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => {
                                const active = (activeBookId === book.id);
                                return (<Book key={book.id} active={active} book={book} deleteBook={deleteBook} onClick={this.showDeleteButton}/>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
