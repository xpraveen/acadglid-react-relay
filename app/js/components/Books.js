import React from "react";
import Relay from "react-relay";
import Book from "./Book";

class Books extends React.Component {

    render() {
        const {bookStore} = this.props;
        const {books} = bookStore;

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
                            books.map((book, index) => {
                                return (<Book key={book.id} index={index + 1}  book={book}/>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Relay.createContainer(Books, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            books{
                id,
                ${Book.getFragment("book")}
            }
        }
        `
    }
});
