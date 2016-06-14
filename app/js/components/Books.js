import React from "react";
import Relay from "react-relay";
import Book from "./Book";

class Books extends React.Component {

    moveNext = () => {
        const {endCursor} = this.props.bookStore.books.pageInfo;
        this.props.relay.setVariables({"first": 10, "last": null, "afterCursor": endCursor, "beforeCursor": null});
    }

    movePrev = () => {
        const {startCursor} = this.props.bookStore.books.pageInfo;
        this.props.relay.setVariables({"first": null, "last": 10, "afterCursor": null, "beforeCursor": startCursor});
    }

    componentWillReceiveProps(nextProps) {
        const {filterBy} = nextProps;
        this.props.relay.setVariables({filterBy});
    }
    render() {
        const {bookStore, filterBy} = this.props;
        const {books} = bookStore;

        return (
            <div>

                <button className="btn" onClick={this.movePrev}>Prev</button>
                &nbsp; &nbsp;
                <button className="btn" onClick={this.moveNext}>Next</button>
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
                            return (<Book key={book.id} index={index + 1} bookStore={bookStore} filterBy={filterBy} book={book}/>);
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
        first: 10,
        last: null,
        afterCursor: null,
        beforeCursor: null,
        filterBy: ""
    },

    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            ${Book.getFragment("bookStore")}
            books(first: $first,last: $last, after: $afterCursor, before: $beforeCursor, filterBy: $filterBy){
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
