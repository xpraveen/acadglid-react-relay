import React from "react";

export default class BookDrawer extends React.Component {

    constructor(){
        super();
        this.state = {"title": "", "isbn": ""};
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
        const {title, isbn} = this.state;
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <form className="add-book form" onSubmit={this.addBook}>
                    <div className="form-group">
                        <input type="text" value={title} onChange={e => this.setState({"title": e.target.value})}  className="form-control" placeholder="Add a Book Title"/>
                    </div>
                    <div className="form-group">
                        <label>ISBN</label>
                        <input type="text" value={isbn} onChange={e => this.setState({"isbn": e.target.value})}  className="form-control" placeholder="Add a ISBN"/>
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
