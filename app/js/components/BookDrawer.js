import React from "react";

export default class BookDrawer extends React.Component {

    constructor() {
        super();
        this.state = {
            "title": "",
            "isbn": "",
            "titleValid": true
        };
    }
    closeBookDrawer = () => {
        this.props.closeBookDrawer();
    }

    addBook = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const {title, isbn} = this.state;
        this.props.addBook({title, isbn});
        this.props.closeBookDrawer();
    }

    render() {
        const {title, isbn, titleValid} = this.state;
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <form className="add-book form" onSubmit={this.addBook}>
                    <div className="form-group">
                        <input type="text" value={title} className={titleValid
                            ? "form-control"
                            : "form-control invalid"} onBlur={e => this.setState({"titleValid": e.target.validity.valid})} onChange={e => this.setState({"title": e.target.value})} placeholder="Add a Book Title" required={true} pattern="[A-Za-z-0-9\s]+"/>
                    </div>
                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" value={isbn} className={titleValid
                            ? "form-control"
                            : "form-control invalid"} onBlur={e => this.setState({"titleValid": e.target.validity.valid})} onChange={e => this.setState({"isbn": e.target.value})} placeholder="Add a ISBN" required={true} pattern="[0-9]+"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn" onClick={this.closeBookDrawer}>Cancel</button>
                        <button type="submit" className="btn btn-primary float-right">Add Book</button>
                    </div>
                </form>
            </div>
        );
    }
}
