import React from "react";

export default class BookDrawer extends React.Component {

    constructor() {
        super();
        this.state = {
            "title": "",
            "isbn": "",
            "titleValid": true,
            "isbnValid": true,
            "formValid": false
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

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [`${name}`]: value
        });
    }

    handleValidity = (event) =>{
        const {name, validity} = event.target;
        this.setState({
            [`${name}Valid`]: validity.valid,
            "formValid": validity.valid
        });
    }

    render() {
        const {title, isbn, titleValid, isbnValid, formValid} = this.state;
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <form className="add-book form" onSubmit={this.addBook}>
                    <div className="form-group">
                        <input type="text" name="title" value={title} className={titleValid
                            ? "form-control"
                            : "form-control invalid"} onBlur={this.handleValidity} onChange={this.handleChange} placeholder="Add a Book Title" required={true} pattern="[A-Za-z-0-9\s]+"/>
                    </div>
                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" name="isbn" value={isbn} className={isbnValid
                            ? "form-control"
                            : "form-control invalid"} onBlur={this.handleValidity} onChange={this.handleChange} placeholder="Add a ISBN" required={true} pattern="[0-9]+"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn" onClick={this.closeBookDrawer}>Cancel</button>
                        <button type="submit" disabled={!formValid} className="btn btn-primary float-right">Add Book</button>
                    </div>
                </form>
            </div>
        );
    }
}
