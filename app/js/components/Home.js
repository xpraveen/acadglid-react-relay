import React from "react";
import Relay from "react-relay";
import Books from "./Books";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterBy: "",
            titleKey: "",
            authorKey: ""
        };
    }
    handleSearch = (event) => {
        const {name, value} = event.target;
        this.setState({
            [`${name}`]: value
        });

    }
    render() {
        /* Data passed by parent component can be received in child using 'props' */
        const {bookStore, deleteBook} = this.props;
        const {titleKey, authorKey} = this.state;

        return (
            <div className="container">
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" name="titleKey" value={titleKey} className="form-control" placeholder="Enter title" onChange={this.handleSearch}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="authorKey" value={authorKey} className="form-control" placeholder="Enter author name" onChange={this.handleSearch}/>
                    </div>
                </form>
                <br/>
                <Books titleKey={titleKey} authorKey={authorKey} bookStore={bookStore} deleteBook={deleteBook}/>
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
