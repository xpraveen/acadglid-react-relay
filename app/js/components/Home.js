import React from "react";
import Relay from "react-relay";
import Books from "./Books";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {filterBy: ""};
    }
    handleSearch = (event) => {
        const filterBy = event.target.value;
        this.setState({filterBy});
    }
    render() {
        /* Data passed by parent component can be received in child using 'props' */
        const {bookStore, deleteBook} = this.props;
        const {filterBy} = this.state;

        return (
            <div className="container">
                <input type="text" className="form-control" placeholder="Search" onChange={this.handleSearch}/>
                <br/>
                <Books filterBy={filterBy} bookStore={bookStore} deleteBook={deleteBook}/>
            </div>
        );
    }
}

export default Relay.createContainer(Home, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            ${Books.getFragment("bookStore")}
        }
        `
    }
});
