import React from "react";

export default class BookDrawer extends React.Component {

    closeBookDrawer = () => {
        this.props.closeBookDrawer();
    }

    addBook = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const {title, isbn} = this;
        this.props.addBook({title: this.title});
        this.props.closeBookDrawer();
    }

    render() {
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <form className="add-book form" onSubmit={this.addBook}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={this.title} onChange={e => this.title = e.target.value}  className="form-control" placeholder="Add a Book Title"/>
                    </div>
                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" value={this.isbn} onChange={e => this.isbn = e.target.value}  className="form-control" placeholder="Add a ISBN"/>
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
