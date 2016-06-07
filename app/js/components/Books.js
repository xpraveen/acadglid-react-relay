import React from "react";
import Book from "./Book";

export default class Books extends React.Component {

    /**
     * Seprate render method to show list of Books
     */
    renderBooks() {
        const {books} = this.props;

        return (books.map((book) => {
            const {id, title} = book;
            const titleWithPrefix = `Harry Potter and ${title}`;

            return (<Book key={book.id} id={id} title={titleWithPrefix}/>);
        }));
    }
    render() {


        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>BOOK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBooks()}
                    </tbody>
                </table>
            </div>
        );
    }
}
