import React from "react";

export default class BookDrawer extends React.Component {

    constructor(){
        super();
        this.state = {};
    }
    closeBookDrawer = () => {
        this.props.closeBookDrawer();
    }

    addBook = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const {title} = this.state;
        this.props.addBook({title});
        this.props.closeBookDrawer();
    }

    render() {
        const {title} = this.state;
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <form className="add-book form" onSubmit={this.addBook}>
                    <div className="form-group">
                        <input type="text" value={title} onChange={e => this.setState({"title": e.target.value})}  className="form-control" placeholder="Add a Book Title"/>
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
