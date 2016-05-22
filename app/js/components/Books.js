import React from "react";
import Relay from "react-relay";
import Book from "./Book";

class Books extends React.Component {

    moveNext = () => {
        const {endCursor} = this.props.bookStore.books.pageInfo;
        this.props.relay.setVariables({"first": 3, "last": null, "afterCursor": endCursor, "beforeCursor": null});
    }

    movePrev = () => {
        const {startCursor} = this.props.bookStore.books.pageInfo;
        this.props.relay.setVariables({"first": null, "last": 3, "afterCursor": null, "beforeCursor": startCursor});
    }


    render() {
        const {bookStore} = this.props;
        const {books} = bookStore;

        return (
            <div>

                <button className="btn" onClick={this.movePrev}>Prev</button> &nbsp; &nbsp;
                <button className="btn" onClick={this.moveNext}>Next</button>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>BOOK</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.edges.map((edge, index) => {
                            const book = edge.node;
                            return (<Book key={book.id} index={index + 1} book={book}/>);
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
        first: 3,
        last: null,
        afterCursor: null,
        beforeCursor: null
    },

    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            books(first: $first,last: $last, after: $afterCursor, before: $beforeCursor){
                edges{
                    node{
                        id,
                        ${Book.getFragment("book")}
                    }
                }
                pageInfo {
                    startCursor,
                    endCursor
                }
            }
        }
        `
    }
});
