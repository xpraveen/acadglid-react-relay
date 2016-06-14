import React from "react";
import Relay from "react-relay";
import Book from "./Book";

class Books extends React.Component {

    componentWillReceiveProps(nextProps) {
        const { titleKey,authorKey} = nextProps;
        this.props.relay.setVariables({ "title": titleKey, "author": authorKey});
    }
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
                            <th>AUTHOR</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books && books.edges.map((edge, index) => {
                            const book = edge.node;
                            return (<Book key={book.id} index={index + 1} bookStore={bookStore} book={book}/>);
                        })
}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Relay.createContainer(Books, {
    initialVariables: {
        first: 99,
        title: null,
        author: null
    },

    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            ${Book.getFragment("bookStore")}
            books(first: $first, title: $title, author: $author){
                edges{
                    node{
                        id,
                        ${Book.getFragment("book")}
                    }
                }
            }
        }
        `
    }
});
