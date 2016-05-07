import React from "react";

export default class BookDrawer extends React.Component {

    closeBookDrawer = () => {
        this.props.closeBookDrawer();
    }

    render() {
        return (
            <div className="book-drawer">
                <h1>Book</h1>
                <button type="button" className="btn" onClick={this.closeBookDrawer}>Cancel</button>
            </div>
        );
    }
}
