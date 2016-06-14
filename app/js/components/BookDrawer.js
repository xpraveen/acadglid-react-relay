import React from "react";
import Relay from "react-relay";
import AddBookMutation from "../mutations/AddBookMutation";

class BookDrawer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const onSuccess = (response) => {
            console.log("Mutation successful!: response: ", response);

            setTimeout(() => {
                this.setState({"progress": false});
                this.closeBookDrawer();
            },4000);

        };
        const onFailure = (transaction) => {
            const error = transaction.getError() || new Error("Mutation failed.");
            this.setState({"progress": false});
            console.error(error);

        };

        const {bookStore} = this.props;
        const mutation = new AddBookMutation({"title": this.title.value, "author": this.author.value, bookStore});
        this.setState({"progress": true});
        Relay.Store.commitUpdate(mutation, {onFailure, onSuccess});
    }

    closeBookDrawer = () => {
        this.props.closeBookDrawer();
    }

    render() {
        const {progress} = this.state;
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <form className="add-book form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref={c => this.title = c} className="form-control" placeholder="Add a Book Title"/>
                    </div>
                    <div className="form-group">
                        <input type="text" ref={c => this.author = c} className="form-control" placeholder="Add a author name"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn" onClick={this.closeBookDrawer}>Cancel</button>
                        <button disabled={progress} type="submit" className="btn btn-primary  float-right">{progress? "Adding..": "Add Book"}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Relay.createContainer(BookDrawer, {
    fragments: {
        bookStore: () => Relay.QL `
            fragment on BookStore{
                id
            }
        `
    }
});
